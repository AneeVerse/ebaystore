import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'ID parameter is required' 
      }, { status: 400 });
    }
    
    // Query for the blog post using the ID
    const query = `*[_type == "post" && _id == $id][0]{
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
    
    const blog = await client.fetch(query, { id });
    
    if (!blog) {
      // If not found by _id, try to find by custom id field if it exists
      const alternativeQuery = `*[_type == "post" && id == $id][0]{
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
      
      const alternativeBlog = await client.fetch(alternativeQuery, { id });
      
      if (!alternativeBlog) {
        return NextResponse.json({ 
          success: false, 
          error: 'Blog not found' 
        }, { status: 404 });
      }
      
      return processAndReturnBlog(alternativeBlog);
    }
    
    return processAndReturnBlog(blog);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch blog', 
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

// Helper function to process the blog content and return the response
function processAndReturnBlog(blog) {
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
    
    // Handle Portable Text conversion
    if (typeof blog.content !== 'string' && Array.isArray(blog.content)) {
      console.log('Converting Portable Text to HTML');
      blog.content = blockContentToHtml(blog.content);
    }
    
    // Add the body content after the main image
    blog.content = contentWithMainImage + blog.content;
  }
  
  return NextResponse.json({ 
    success: true, 
    blog
  });
} 