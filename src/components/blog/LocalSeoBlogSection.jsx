import React from 'react';
import BlogCard from './BlogCard';
import Layout from '../common/Layout';
import { FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';

const LocalSeoBlogSection = ({ blogData }) => {
  // Extract blogs from the provided blog data
  const { blogs = [] } = blogData || {};
  
  // Filter blogs for the Local SEO category
  const localSeoBlogs = blogs.filter(blog => 
    blog?.category?.toLowerCase() === 'local seo' || 
    blog?.category?.toLowerCase() === 'localseo'
  );
  const hasBlogs = localSeoBlogs?.length > 0;
  
  // If no blogs exist in this category, don't render the section
  if (!hasBlogs) {
    return null;
  }
  
  return (
    <div className='bg-white py-10'>
      <Layout>
        <div className='flex group mb-6 justify-between items-center'>
          <h1 className='text-3xl sm:text-4xl text-secondary-500 font-semibold uppercase'>Local SEO</h1>
          <Link href={`/blog/category/local-seo`} className='text-secondary-500 hover:underline flex items-center gap-1 font-semibold text-lg'>
            <span>See all</span>
            <FaChevronRight className='text-lg group-hover:translate-x-1 duration-300 transition-all' />
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {localSeoBlogs.slice(0, 4).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default LocalSeoBlogSection; 