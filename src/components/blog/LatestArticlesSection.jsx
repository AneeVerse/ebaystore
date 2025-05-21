"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import Layout from "../common/Layout";
import BlogCard from "./BlogCard";

const LatestArticlesSection = ({ blogData }) => {
  // Extract blogs from the provided blog data
  const { blogs = [], isLoading = false } = blogData || {};
  
  // Take only the first 6 blogs to display
  const latestBlogs = blogs.slice(0, 6);
  
  return (
    <section className="py-16 bg-[#EBFAFE]">
      <Layout>
        {/* Header with See All Link */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <Link href="/blog/all" className="group">
            <h2 className="text-2xl md:text-[40px] text-[#0A2E3D] hover:text-blue-600 transition-colors font-normal font-['Inter',sans-serif] flex items-center">
            <span>Latest</span>
            <span className="inline ml-1 md:ml-2">articles</span>
              <FaChevronRight className="ml-2 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </h2>
          </Link>
          <Link 
            href="/blog/all" 
            className="text-[#0A2E3D] hover:text-blue-600 flex items-center gap-1 md:gap-2 font-medium text-base md:text-lg font-['Inter',sans-serif]"
          >
            <span>See all</span>
            <FaChevronRight className="text-base md:text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : latestBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {latestBlogs.map((blog, index) => (
              <div key={blog.id || index} className="h-full flex flex-col">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        )}
      </Layout>
    </section>
  );
};

export default LatestArticlesSection; 