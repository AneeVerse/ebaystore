import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { blockContentToHtml } from '@/lib/sanity-utils';

// Helper function to transform Sanity data to match our app's existing blog structure
function transformSanityBlog(sanityBlog) {
  return {
    id: sanityBlog._id,
    title: sanityBlog.title,
    slug: sanityBlog.slug?.current || '',
    content: typeof sanityBlog.content === 'string' 
      ? sanityBlog.content 
      : Array.isArray(sanityBlog.content) 
        ? blockContentToHtml(sanityBlog.content)
        : '',
    shortDescription: sanityBlog.excerpt || sanityBlog.shortDescription || '',
    thumbnail: sanityBlog.mainImage,
    category: sanityBlog.categories?.[0] || 'Uncategorized',
    date: sanityBlog.publishedAt,
    timeToRead: sanityBlog.timeToRead || 5,
    author: {
      name: sanityBlog.author?.name || 'Anonymous',
      role: sanityBlog.author?.role || 'Author',
      image: sanityBlog.author?.image || '/images/blog/author/abhi.png',
    },
    isFeatured: sanityBlog.featured || false,
    tags: sanityBlog.tags || [],
  };
}

// GET all blogs with optional filtering
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    
    // Handle query parameters for filtering
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    
    console.log('API Request - Category:', category);
    
    // Build GROQ query - simplified to reduce chance of syntax errors
    let query = `*[_type == "post"`;
    
    // Add filters
    if (category) {
      // A simpler approach - lowercase comparison using built-in GROQ functions
      query += ` && count(categories[]->title) > 0`;
    }
    
    if (featured === 'true') {
      query += ` && featured == true`;
    }
    
    // Close the query and add ordering
    query += `] | order(publishedAt desc)`;
    
    // Add pagination
    const skip = (page - 1) * limit;
    query += `[${skip}...${skip + limit}]`;
    
    // Add projections to get all needed fields
    query += `{
      _id,
      title,
      slug,
      excerpt,
      shortDescription,
      "content": body,
      "mainImage": mainImage.asset->url,
      publishedAt,
      timeToRead,
      "categories": categories[]->title,
      featured,
      "tags": tags[]->title,
      "author": author->{
        name,
        role,
        "image": image.asset->url
      }
    }`;
    
    console.log('GROQ Query:', query);
    
    // Get the total count for pagination (separate query)
    let countQuery = `count(*[_type == "post"`;
    if (category) {
      countQuery += ` && count(categories[]->title) > 0`;
    }
    if (featured === 'true') {
      countQuery += ` && featured == true`;
    }
    countQuery += `])`;
    
    console.log('Count Query:', countQuery);
    
    // Execute queries
    const [blogs, totalCount] = await Promise.all([
      client.fetch(query),
      client.fetch(countQuery)
    ]);
    
    console.log('Blogs fetched:', blogs.length);
    
    // Additional filtering on the server side for category
    let filteredBlogs = blogs;
    if (category) {
      const categoryLower = category.toLowerCase();
      filteredBlogs = blogs.filter(blog => {
        if (!blog.categories || !Array.isArray(blog.categories)) return false;
        return blog.categories.some(cat => 
          cat && typeof cat === 'string' && cat.toLowerCase().includes(categoryLower)
        );
      });
      console.log('After filtering for category:', filteredBlogs.length);
    }
    
    // Transform Sanity blogs to match our existing structure
    const transformedBlogs = filteredBlogs.map(transformSanityBlog);
    
    return NextResponse.json({ 
      success: true, 
      blogs: transformedBlogs,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blogs from Sanity:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to fetch blogs from Sanity: ${error.message}`,
      stack: error.stack,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 