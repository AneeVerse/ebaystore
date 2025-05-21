'use client';

import { use, useEffect, useRef, useState } from 'react';
import Layout from '@/components/common/Layout';
import { blogs } from '@/data/blogData';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from '@/components/blog/NewsLetter';
import BlogCard from '@/components/blog/BlogCard';
import React from 'react';

// Add the import for our CSS file:
import '../blogStyles.css';

// More efficient approach to fetch blog post
const getBlogPost = async (category, slug) => {
  try {
    // First try to fetch from API
    const response = await fetch(`/api/blogs/${slug}`, {
      cache: 'no-store',
      next: { revalidate: 60 }
    });
    
    const data = await response.json();
    
    if (response.ok && data.success && data.blog) {
      // Verify the category matches
      const blogCategory = data.blog.category.toLowerCase().replace(/\s+/g, '-');
      if (blogCategory === category.toLowerCase()) {
        return data.blog;
      }
    }
    
    // Fall back to static data if API fails or category doesn't match
    const staticBlog = blogs.find(blog => {
      const blogCategory = blog.category.toLowerCase().replace(/\s+/g, '-');
      return blog.slug === slug && blogCategory === category.toLowerCase();
    });
    
    return staticBlog;
  } catch (err) {
    console.error("Error fetching blog:", err);
    // Fall back to static data
    const staticBlog = blogs.find(blog => {
      const blogCategory = blog.category.toLowerCase().replace(/\s+/g, '-');
      return blog.slug === slug && blogCategory === category.toLowerCase();
    });
    return staticBlog;
  }
};

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  const sectionRefs = useRef([]);
  const observer = useRef(null);

  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  useEffect(() => {
    const loadBlog = async () => {
      try {
        setIsLoading(true);
        
        // params.slug will be an array like ['category', 'blog-slug']
        if (!resolvedParams.slug || resolvedParams.slug.length !== 2) {
          setError('Invalid blog URL');
          return;
        }

        const [category, blogSlug] = resolvedParams.slug;
        const blogPost = await getBlogPost(category, blogSlug);
        
        if (!blogPost) {
          setError('Blog not found');
          console.error('Blog not found with slug:', blogSlug);
        } else {
          setPost(blogPost);
        }
      } catch (err) {
        console.error('Error loading blog:', err);
        setError('Failed to load blog');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlog();
  }, [resolvedParams.slug]);

  // Rest of your existing component code...
  // (Keep all the existing functions and JSX, just update the breadcrumb navigation)

  return (
    <div className='bg-white py-16'>
      <Layout>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! {error}</h2>
            <p className="text-gray-600 mb-8">We couldn't find the blog post you're looking for.</p>
            <Link href="/blog" className="text-primary-500 hover:underline">
              Return to Blog List
            </Link>
          </div>
        ) : post ? (
          <>
            {/* Blog Header - Superside Style */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
              {/* Breadcrumb navigation */}
              <div className="flex items-center text-sm gap-2 mb-8 justify-center">
                <Link href="/blog" className="uppercase hover:underline text-gray-500">
                  Blog
                </Link>
                <IoIosArrowForward className="text-gray-400" />
                <Link 
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} 
                  className="text-gray-500 uppercase hover:underline"
                >
                  {post.category}
                </Link>
              </div>
            
              {/* Combined date and title for tight spacing */}
              <div className="text-center mt-24 space-y-0">
                <div className="uppercase text-[#475467] tracking-wide text-base font-medium mb-0">
                  {/* Format date to match Superside (MONTH DD, YYYY) */}
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  }).toUpperCase()}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-[#101828] leading-[1.1] mb-4 sm:mb-8 text-center mx-auto max-w-[900px] tracking-tight mt-1">
                  {post.title}
                </h1>
              </div>
              
              {/* Author section - exactly like Superside */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                    <Image
                      src={authorImageError ? defaultAuthorImage : post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="object-cover"
                      onError={() => setAuthorImageError(true)}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#475467] mr-2">By</div>
                    <Link 
                      href="#" 
                      className="font-semibold text-[#101828] hover:underline mr-2"
                    >
                      {post.author.name}
                    </Link>
                    <div className="text-[#475467]">{post.author.role}</div>
                  </div>
                </div>
              </div>
              
              {/* Social sharing icons - Superside style */}
              <div className="flex items-center justify-center gap-3 mb-20">
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                  className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A2E3D]">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
                  className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A2E3D]">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </Link>
                <button 
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                      alert('Link copied to clipboard!');
                    }
                  }} 
                  className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
                  aria-label="Copy link to clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A2E3D]">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
                <Link 
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`} 
                  className="w-12 h-12 rounded-full border border-[#1A5170] bg-transparent flex items-center justify-center hover:bg-[#0A2E3D]/10 transition-colors"
                  aria-label="Share via email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A2E3D]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Main Grid Container with TOC Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
              {/* Left Sidebar - Only shown on desktop */}
              <aside className="lg:sticky top-24 self-start hidden lg:block space-y-8 shrink-0">
                {/* Read Time Animation - Added without changing structure */}
                <ReadTimeProgress timeToRead={post.timeToRead || "5 min read"} />
                
                {/* Table of Contents - More compact with smaller text */}
                <div className="bg-[#0A2E3D] p-4 rounded-lg mt-6">
                  <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-3">TABLE OF CONTENTS</h4>
                  {h2Headings.length > 0 && (
                    <div className="max-h-[120px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      <ul className="space-y-1.5">
                        {h2Headings.map((section, index) => (
                          <li key={index} className="relative">
                            <a
                              href={`#${section.id}`}
                              className={`block text-sm leading-tight pl-4 truncate ${
                                activeId === section.id
                                ? 'text-white font-medium' 
                                : 'text-gray-300 hover:text-white'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(section.id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              title={section.title}
                            >
                              {activeId === section.id && (
                                <div className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                              )}
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Promotional Poster */}
                <div className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] mt-8">
                  <div className="h-[170px] overflow-hidden bg-[#0A2E3D]">
                    <Image 
                      src="/blog-poster.avif" 
                      alt="Get hassle-free service" 
                      width={500} 
                      height={300} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="bg-[#0A2E3D] p-4 text-white" style={{marginTop: "-1px"}}>
                    <h3 className="text-white text-lg font-bold leading-tight">Get hassle-free video at scale</h3>
                    <p className="text-gray-300 text-xs my-1.5">See how we can help.</p>
                    <Link 
                      href="/contact" 
                      className="block bg-white hover:bg-gray-100 text-[#0A2E3D] text-center py-2.5 w-full rounded-md font-medium transition-colors mt-2.5"
                    >
                      Book a call
                    </Link>
                  </div>
                </div>
              </aside>
              
              {/* Main Content */}
              <div>
                <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={thumbnailError ? defaultThumbnail : post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    onError={() => setThumbnailError(true)}
                  />
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
              <Newsletter />
            </div>

            <div className="mt-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" style={{ width: 'calc(100% - 3rem)' }}>
              <h4 className="text-sm font-semibold mb-4 uppercase">Related Articles</h4>
              <div className="space-y-4">
                {blogs
                  .filter(b => b.id !== post.id && b.category === post.category)
                  .slice(0, 3)
                  .map(blog => {
                    const categorySlug = blog.category.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <div key={blog.id} className="border-b pb-4">
                        <Link href={`/blog/${categorySlug}/${blog.slug}`} className="block group">
                          <div className="relative h-36 mb-2 overflow-hidden rounded-md">
                            <Image
                              src={blog.thumbnail}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = defaultThumbnail;
                              }}
                            />
                          </div>
                          <h5 className="font-medium text-gray-900 group-hover:text-secondary-500 transition-colors line-clamp-2">
                            {blog.title}
                          </h5>
                        </Link>
                      </div>
                    );
                  })}
              </div>
              <Link 
                href="/blog" 
                className="inline-block mt-4 text-sm font-medium text-secondary-500 hover:underline"
              >
                View all articles
              </Link>
            </div>

            {/* Mobile TOC - Only visible on mobile */}
            {h2Headings.length > 0 && (
              <div className="lg:hidden mb-6 bg-[#073742] p-4 rounded-lg mt-4">
                <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-2">TABLE OF CONTENTS</h4>
                <div className="overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <ul className="space-y-1.5">
                    {h2Headings.map((section, index) => (
                      <li key={index} className="relative">
                        <a
                          href={`#${section.id}`}
                          className={`block text-sm leading-tight pl-4 truncate ${
                            activeId === section.id
                            ? 'text-white font-medium' 
                            : 'text-gray-300 hover:text-white'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(section.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          title={section.title}
                        >
                          {activeId === section.id && (
                            <div className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                          )}
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Mobile Promotional CTA - Only shown on mobile */}
            <div className="lg:hidden relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] mt-10 mb-6">
              <div className="h-[140px] overflow-hidden bg-[#0A2E3D]">
                <Image 
                  src="/blog-poster.avif" 
                  alt="Get hassle-free service" 
                  width={400} 
                  height={200} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-[#0A2E3D] p-4 text-white" style={{marginTop: "-1px"}}>
                <h3 className="text-white text-base font-bold leading-tight">Get hassle-free video at scale</h3>
                <p className="text-gray-300 text-xs my-1.5">See how we can help.</p>
                <Link 
                  href="/contact" 
                  className="block bg-white hover:bg-gray-100 text-[#0A2E3D] text-center py-2 w-full rounded-md font-medium transition-colors mt-2"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </Layout>
    </div>
  );
}