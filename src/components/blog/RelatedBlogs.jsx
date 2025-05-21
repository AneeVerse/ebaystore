"use client";
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

/**
 * RelatedBlogs component that fetches and displays related blog posts
 * @param {Object} currentPost - The current blog post
 * @param {string} defaultThumbnail - Default thumbnail image path
 * @param {string} defaultAuthorImage - Default author avatar image path
 */
const RelatedBlogs = ({ currentPost, defaultThumbnail, defaultAuthorImage }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch from API with timestamp to prevent caching
        const response = await fetch(`/api/sanity-blogs?limit=100&t=${Date.now()}`);
        
        if (!response.ok) {
          console.error('Related blogs API returned status:', response.status);
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        
        if (data && data.blogs && Array.isArray(data.blogs)) {
          console.log(`API fetched ${data.blogs.length} blogs`);
          
          // First attempt to get blogs from the same category
          let filteredBlogs = data.blogs.filter(blog => 
            blog.id !== currentPost.id && 
            blog.category && 
            currentPost.category && 
            blog.category.toLowerCase() === currentPost.category.toLowerCase()
          );
          
          console.log(`Found ${filteredBlogs.length} blogs in the same category: ${currentPost.category}`);
          
          // If no same-category blogs, show other blogs as alternatives
          if (filteredBlogs.length === 0) {
            filteredBlogs = data.blogs.filter(blog => blog.id !== currentPost.id);
            console.log(`No same-category blogs found, showing ${filteredBlogs.length} alternative blogs`);
          }
          
          // Sort by date (newest first) and limit to 3 results
          const sortedBlogs = filteredBlogs
            .sort((a, b) => {
              if (a.date && b.date) {
                return new Date(b.date) - new Date(a.date);
              }
              return 0;
            })
            .slice(0, 3);
          
          setRelatedBlogs(sortedBlogs);
          console.log(`Displaying ${sortedBlogs.length} related blogs`);
        } else {
          console.warn('No blogs data received from API or data format incorrect');
          setRelatedBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
        setError('Failed to load related articles');
        // Don't set relatedBlogs to empty here to preserve any previous data
      } finally {
        setIsLoading(false);
      }
    };
    
    if (currentPost) {
      fetchRelatedBlogs();
    }
  }, [currentPost]);

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-2 text-gray-500">Loading related articles...</p>
      </div>
    );
  }
  
  if (error && relatedBlogs.length === 0) {
    // Create placeholder data if we have an error and no content
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 w-full">
        <div className="h-full flex flex-col">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative h-48 bg-gray-200"></div>
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">Example Article</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Check out our other content</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">While we couldn't load related articles, you might find other interesting content in our blog section.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (relatedBlogs.length === 0) {
    // Create a placeholder if no related blogs found
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 w-full">
        <div className="h-full flex flex-col">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative h-48 bg-gray-200"></div>
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">Coming Soon</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">More Content Coming Soon</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">We're working on adding more articles in this category. Check back soon!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 w-full">
      {relatedBlogs.map((blog, index) => (
        <div key={blog.id || index} className="h-full flex flex-col">
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default RelatedBlogs; 