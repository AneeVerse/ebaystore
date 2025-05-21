'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa6";
import BlogCard from './BlogCard';

const LatestBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Add a timestamp to prevent caching, limit to 2 posts
        const response = await fetch(`/api/blogs?limit=2&t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch blogs');
        }
        
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white py-10">
        <Layout>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl sm:text-4xl text-secondary-500 font-semibold">Latest Blog Posts</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-10">
        <Layout>
          <div className="text-center p-10 bg-red-50 rounded-lg">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Error Loading Blogs</h2>
            <p className="text-red-600">{error}</p>
          </div>
        </Layout>
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="bg-white py-10">
        <Layout>
          <div className="text-center p-10 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">No Blogs Available</h2>
            <p className="text-blue-600">Check back later for new blog posts.</p>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className="bg-white py-10">
      <Layout>
        <div className="flex group mb-6 justify-between items-center">
          <h1 className="text-3xl sm:text-4xl text-secondary-500 font-semibold">Latest Blog Posts</h1>
          <Link href="/blog" className="text-secondary-500 hover:underline flex items-center gap-1 font-semibold text-lg">
            <span>See all</span>
            <FaChevronRight className="text-lg group-hover:translate-x-1 duration-300 transition-all" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default LatestBlogSection; 