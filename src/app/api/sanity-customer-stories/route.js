import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

// Helper function to transform Sanity data for customer stories
function transformSanityCustomerStory(story) {
  return {
    id: story._id,
    title: story.title,
    slug: story.slug?.current || '',
    shortDescription: story.shortDescription || '',
    thumbnail: story.mainImage ? urlForImage(story.mainImage).url() : '',
    category: story.categories?.[0]?.title || 'Uncategorized',
    date: story.publishedAt,
    readTime: story.readTime || 5,
  };
}

// GET customer stories with optional filtering
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    
    // Handle query parameters for filtering
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    
    // Build GROQ query
    let query = `*[_type == "customerStory"`;
    
    // Add filters
    if (category) {
      query += ` && count(categories[]->{title} match "${category}") > 0`;
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
      shortDescription,
      mainImage,
      publishedAt,
      readTime,
      "categories": categories[]->{title}
    }`;
    
    // Get the total count for pagination (separate query)
    let countQuery = `count(*[_type == "customerStory"`;
    if (category) {
      countQuery += ` && count(categories[]->{title} match "${category}") > 0`;
    }
    countQuery += `])`;
    
    // Execute queries
    const [stories, totalCount] = await Promise.all([
      client.fetch(query),
      client.fetch(countQuery)
    ]);
    
    // Transform Sanity customer stories
    const transformedStories = stories.map(transformSanityCustomerStory);
    
    return NextResponse.json({ 
      success: true, 
      stories: transformedStories,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching customer stories from Sanity:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to fetch customer stories: ${error.message}`,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
} 