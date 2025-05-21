import { NextResponse } from 'next/server';

// Redirect legacy /api/blogs requests to /api/sanity-blogs
export async function GET(request) {
  try {
    const url = new URL(request.url);
    
    // Get all query parameters
    const params = url.searchParams.toString();
    
    // Create the new URL with the same parameters
    const newUrl = new URL(`${url.origin}/api/sanity-blogs${params ? '?' + params : ''}`);
    
    // Return a redirect to the new endpoint
    return NextResponse.redirect(newUrl, 308); // 308 is Permanent Redirect
  } catch (error) {
    console.error('Error redirecting blog API request:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to redirect request: ${error.message}`
    }, { status: 500 });
  }
} 