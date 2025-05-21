import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    // Simple GROQ query to test the connection
    const query = `*[_type == "post"][0...5]{
      _id,
      title,
      "slug": slug.current
    }`;
    
    const posts = await client.fetch(query);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully connected to Sanity',
      posts
    });
  } catch (error) {
    console.error('Error connecting to Sanity:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to connect to Sanity: ${error.message}`,
      details: error.stack
    }, { status: 500 });
  }
} 