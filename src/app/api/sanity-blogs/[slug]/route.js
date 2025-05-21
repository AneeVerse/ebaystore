import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { blockContentToHtml, imageBlockToHtml } from '@/lib/sanity-utils';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json({ 
        success: false, 
        error: 'Slug parameter is required' 
      }, { status: 400 });
    }
    
    // Query for the blog post using the slug
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      body,
      "content": body,
      "date": publishedAt,
      "category": categories[0]->title,
      "timeToRead": timeToRead,
      "shortDescription": shortDescription,
      "description": shortDescription || excerpt,
      "author": {
        "name": author->name,
        "role": author->role,
        "image": author->image.asset->url
      },
      "includeFaq": defined(faqSection),
      "faqSection": faqSection {
        "title": title,
        "questions": questions[] {
          "question": question,
          "answer": answer
        }
      }
    }`;
    
    const blog = await client.fetch(query, { slug });
    
    if (!blog) {
      return NextResponse.json({ 
        success: false, 
        error: 'Blog not found' 
      }, { status: 404 });
    }
    
    // Process content to ensure proper HTML format
    if (blog.content) {
      // Check if main image exists and ensure it's added to the body content
      let contentWithMainImage = '';
      
      // Convert main image to HTML if it exists
      if (blog.mainImage && blog.mainImage.asset) {
        const mainImageHtml = `
          <figure class="main-image">
            <img src="${blog.mainImage.asset.url}" alt="${blog.mainImage.alt || 'Blog image'}" class="rounded-lg w-full" />
          </figure>
        `;
        contentWithMainImage += mainImageHtml;
      }
      
      // Handle Portable Text conversion using the imported function
      if (typeof blog.content !== 'string' && Array.isArray(blog.content)) {
        console.log('Converting Portable Text to HTML');
        blog.content = blockContentToHtml(blog.content);
      }
      
      // Additional cleanup for any text-based bullets
      if (typeof blog.content === 'string') {
        blog.content = fixBulletPoints(blog.content);
      }
      
      // Add the body content after the main image
      blog.content = contentWithMainImage + blog.content;
    }
    
    return NextResponse.json({ 
      success: true, 
      blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch blog', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

// Keep only the fixBulletPoints function as it might be useful for text-based bullets
function fixBulletPoints(html) {
  // Fix text bullets that should be proper list items
  if (typeof html === 'string') {
    // Find Key Takeaways section and convert bullet points to proper lists
    const keyTakeawaysRegex = /<h[23][^>]*>Key Takeaways<\/h[23]>([\s\S]*?)(<h[23]|$)/i;
    const match = html.match(keyTakeawaysRegex);
    
    if (match && match[1]) {
      const takeawaysContent = match[1];
      const bulletRegex = /<p>\s*[•·-]\s*(.*?)<\/p>/g;
      
      if (bulletRegex.test(takeawaysContent)) {
        // Convert bullet paragraphs to a proper list
        const listItems = takeawaysContent.replace(bulletRegex, '<li>$1</li>');
        const properList = `<ul class="list-disc pl-6">${listItems}</ul>`;
        
        // Replace the original content with the proper list
        html = html.replace(match[1], properList);
      }
    }
    
    // Look for any other bullet-like paragraphs and convert them
    html = html.replace(/<p>\s*[•·-]\s*(.*?)<\/p>/g, '<li>$1</li>');
    
    // Wrap consecutive li elements in ul tags if they're not already
    html = html.replace(/(<li>.*?<\/li>)(?:\s*<li>)/g, '$1</ul><ul class="list-disc pl-6"><li>');
    html = html.replace(/(<\/h[23]>)(\s*<li>)/g, '$1<ul class="list-disc pl-6">$2');
    html = html.replace(/(<\/li>)(\s*<h[23])/g, '$1</ul>$2');
    
    // Ensure all li elements are wrapped in ul tags
    if (html.includes('<li>') && !html.includes('<ul')) {
      html = html.replace(/(<li>.*?<\/li>)/g, '<ul class="list-disc pl-6">$1</ul>');
    }
  }
  
  return html;
} 