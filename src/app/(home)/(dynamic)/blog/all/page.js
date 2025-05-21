'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { blogs as staticBlogs } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';

export default function AllBlogsPage() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchTries, setFetchTries] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [categories, setCategories] = useState([]);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Static blogs count:', staticBlogs.length);
      
      // Create a timeout using a simple Promise race
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
      
      try {
        const apiUrl = `/api/sanity-blogs?limit=100&t=${Date.now()}`;
        
        const response = await fetch(apiUrl, {
          signal: controller.signal,
          cache: 'no-store',
          headers: { 'Content-Type': 'application/json' }
        });
        
        // Clear the timeout since we got a response
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText} - ${errorText}`);
        }
        
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch blogs - API reported failure');
        }
        
        // Get API blogs
        const apiBlogs = data.blogs || [];
        console.log('API blogs count:', apiBlogs.length);
        
        // Combine static and API blogs, with API taking precedence for duplicates
        const allBlogsData = [...staticBlogs, ...apiBlogs];
        const uniqueBlogs = allBlogsData.reduce((acc, current) => {
          const x = acc.find(item => item.id === current.id);
          if (!x) {
            return acc.concat([current]);
          } else {
            // If duplicate found, prefer API version
            const apiVersion = apiBlogs.find(blog => blog.id === current.id);
            if (apiVersion) {
              // Replace with API version
              return acc.map(item => item.id === current.id ? apiVersion : item);
            }
            return acc;
          }
        }, []);
        
        console.log('Total unique blogs count:', uniqueBlogs.length);
        
        // Extract unique categories
        const uniqueCategories = ['All Categories', ...new Set(uniqueBlogs.map(blog => blog.category))].filter(Boolean);
        
        setAllBlogs(uniqueBlogs);
        setFilteredBlogs(uniqueBlogs);
        setCategories(uniqueCategories);
        
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out. The server took too long to respond.');
        }
        
        throw fetchError;
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.message || 'Unknown error occurred while fetching blogs');
      
      // Still use static blogs as fallback if API fails
      console.log('Falling back to static blogs only');
      const uniqueCategories = ['All Categories', ...new Set(staticBlogs.map(blog => blog.category))].filter(Boolean);
      
      setAllBlogs(staticBlogs);
      setFilteredBlogs(staticBlogs);
      setCategories(uniqueCategories);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    if (category === 'All Categories') {
      setFilteredBlogs(allBlogs);
    } else {
      const filtered = allBlogs.filter(blog => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  const handleRetry = () => {
    setFetchTries(prev => prev + 1);
    fetchBlogs();
  };

  // Show error message if there was an error and no blogs are available
  if (error && allBlogs.length === 0) {
    return (
      <div className='bg-[#EBFAFE] min-h-screen flex items-center justify-center py-16'>
        <Layout>
          <div className="text-center max-w-lg mx-auto p-6 bg-red-50 rounded-lg">
            <h2 className="text-2xl font-bold text-red-700 mb-2">Error Loading Blogs</h2>
            <p className="text-red-600 mb-4">{error}</p>
            
            <div className="mt-2 p-4 bg-gray-50 rounded text-left text-sm text-gray-800">
              <p className="font-semibold mb-2">Troubleshooting Tips:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check your internet connection</li>
                <li>Verify your Sanity project settings</li>
                <li>Check that the Sanity API is accessible</li>
              </ul>
            </div>
            
            <button 
              onClick={handleRetry} 
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className="bg-[#EBFAFE] py-16">
      <Layout>
        {/* Display warning if API failed but we have static blogs */}
        {error && allBlogs.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  {error} — Using backup data.
                </p>
              </div>
            </div>
          </div>
        )}
      
        {/* Breadcrumb */}
        <div className="mb-6 mt-8">
          <Link href="/blog" className="text-secondary-500 hover:underline">
            BLOG
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-700">ALL ARTICLES</span>
        </div>
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-normal text-[#0A2E3D] mb-3 md:mb-6 font-['Inter',sans-serif]">All articles</h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 font-['Inter',sans-serif]">
          Stay up to date with the latest articles from our stellar crew.
        </p>
        
        {/* Category Filters */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-medium text-[#0A2E3D] mb-4 md:mb-6 font-['Inter',sans-serif]">Main Categories</h2>
          
          {/* Desktop Category Buttons */}
          <div className="hidden md:flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#0A2E3D] text-white'
                    : 'bg-white text-[#0A2E3D] border border-[#0A2E3D] hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mobile Category Dropdown */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="appearance-none w-full p-4 pr-10 bg-[#0A2E3D] text-white rounded-xl cursor-pointer focus:outline-none"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredBlogs.map((blog, index) => (
              <div key={blog.id || index} className="h-full flex flex-col">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
} 