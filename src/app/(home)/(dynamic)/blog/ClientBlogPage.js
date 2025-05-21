'use client';

import { useState, useEffect } from 'react';
import BlogHeroSection from '@/components/blog/BlogHeroSection';
import LatestArticlesSection from '@/components/blog/LatestArticlesSection';
import Newsletter from '@/components/blog/NewsLetter';
import Layout from '@/components/common/Layout';
import { blogs as staticBlogs } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';

export default function ClientBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchTries, setFetchTries] = useState(0);

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
        const allBlogs = [...staticBlogs, ...apiBlogs];
        const uniqueBlogs = allBlogs.reduce((acc, current) => {
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
        setBlogs(uniqueBlogs);
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
      setBlogs(staticBlogs);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Create a blog data context to pass to all sections
  const blogData = { blogs, isLoading, error };

  const handleRetry = () => {
    setFetchTries(prev => prev + 1);
    fetchBlogs();
  };

  if (isLoading) {
    return (
      <div className='bg-[#EBFAFE] min-h-screen flex items-center justify-center'>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
          {fetchTries > 0 && <p className="text-gray-500 mt-2">Attempt {fetchTries + 1}...</p>}
        </div>
      </div>
    );
  }

  if (error && blogs.length === 0) {
    return (
      <div className='bg-[#EBFAFE] min-h-screen flex items-center justify-center'>
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
      </div>
    );
  }

  // Display warning if API failed but we have static blogs
  const apiWarning = error && blogs.length > 0;

  // If we got blogs but the array is empty, display a message instead of empty sections
  if (blogs.length === 0) {
    return (
      <div className='bg-[#EBFAFE] min-h-screen py-16'>
        <Layout>
          <div className="text-center p-10 bg-blue-50 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Blogs Temporarily Unavailable</h2>
            <p className="text-blue-600 mb-6">Our blog section is currently undergoing maintenance. Please check back later.</p>
          </div>
          <Newsletter />
        </Layout>
      </div>
    );
  }

  // Get unique categories from blogs
  const categories = [...new Set(blogs.map(blog => blog.category))].filter(Boolean);

  return (
    <div className='bg-[#EBFAFE] pb-16'>
      {apiWarning && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
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
      
      <BlogHeroSection blogData={blogData} />
      
      {/* Latest Articles Section (new) */}
      <LatestArticlesSection blogData={blogData} />

      {/* Dynamically render all categories (including SEO) with Newsletter after every 2 categories */}
      {(() => {
        // Create a helper function to render a category section
        const renderCategorySection = (category, categoryBlogs, isSEO = false) => {
          // Convert category to URL-friendly format
          const categorySlug = category.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
          const categoryUrl = `/blog/category/${categorySlug}`;
          
          return (
            <section key={`category-${category}`} className='bg-[#EBFAFE] pb-16'>
              <Layout>
                <div className='flex justify-between items-center mb-6 md:mb-8'>
                  <Link href={categoryUrl} className="group">
                    <h2 className='text-2xl md:text-[40px] text-[#0A2E3D] hover:text-blue-600 transition-colors font-normal font-["Inter",sans-serif] flex items-center'>
                      {category}
                      <FaChevronRight className="ml-2 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    </h2>
                  </Link>
                  <Link 
                    href={categoryUrl} 
                    className='text-[#0A2E3D] hover:text-blue-600 flex items-center gap-1 md:gap-2 font-medium text-base md:text-lg font-["Inter",sans-serif]'
                  >
                    <span>See all</span>
                    <FaChevronRight className='text-base md:text-lg transition-transform duration-300 group-hover:translate-x-1' />
                  </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14'>
                  {categoryBlogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="h-full flex flex-col">
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>
              </Layout>
            </section>
          );
        };
        
        const renderNewsletter = (key) => (
          <div key={`newsletter-${key}`} className="bg-[#EBFAFE] pb-16">
            <Layout>
              <Newsletter />
            </Layout>
          </div>
        );
        
        // Get all valid categories
        const allCategories = categories.filter(Boolean);
        
        // Array to hold all rendered elements (categories + newsletters)
        const renderedElements = [];
        
        // Process SEO category first if it exists
        const seoBlogs = blogs.filter(blog => 
          blog?.category?.toLowerCase() === 'seo' || 
          blog?.category?.toLowerCase() === 'search engine optimization'
        );
        
        let categoryCount = 0;
        
        // Add SEO category if it exists
        if (seoBlogs.length > 0) {
          renderedElements.push(renderCategorySection('SEO', seoBlogs, true));
          categoryCount++;
        }
        
        // Process all other categories
        allCategories.forEach(category => {
          // Skip SEO category as we've already processed it
          if (category.toLowerCase() === 'seo' || category.toLowerCase() === 'search engine optimization') {
            return;
          }
          
          const categoryBlogs = blogs.filter(blog => blog.category === category);
          if (categoryBlogs.length === 0) return;
          
          // Add the category section
          renderedElements.push(renderCategorySection(category, categoryBlogs));
          categoryCount++;
          
          // Add Newsletter after every second category (2nd, 4th, 6th, etc.)
          if (categoryCount % 2 === 0) {
            renderedElements.push(renderNewsletter(categoryCount));
          }
        });
        
        return renderedElements;
      })()}
    </div>
  );
} 