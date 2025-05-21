"use client";
import { use, useEffect, useRef, useState, useMemo } from 'react';
import Layout from '@/components/common/Layout';
import { blogs } from '@/data/blogData';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from '@/components/blog/NewsLetter';
import BlogCard from '@/components/blog/BlogCard';
import React from 'react';
import RelatedBlogs from '@/components/blog/RelatedBlogs';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion } from 'framer-motion';
import BlogFAQ from '@/components/blog/BlogFAQ';
import '../blogStyles.css';
import TableOfContents from '@/components/blog/TableOfContents';
import ReadTimeProgress from '@/components/blog/ReadTimeProgress';

// More efficient approach to fetch blog post
const getBlogPost = async (slug) => {
  try {
    console.log('Attempting to fetch blog post with slug:', slug);
    
    // Check if the slug looks like a UUID (contains dashes and is roughly the right length)
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug);
    
    // First try to fetch from Sanity API
    try {
      // Construct the appropriate API URL
      const apiUrl = isUuid 
        ? `/api/blogs/id/${slug}` // If it's a UUID, use the ID endpoint if you have one
        : `/api/sanity-blogs/${slug}`;
      
      const sanityResponse = await fetch(apiUrl, {
        cache: 'no-store',
        next: { revalidate: 60 }
      });
      
      if (sanityResponse.ok) {
        const sanityData = await sanityResponse.json();
        console.log('Sanity API Response:', sanityData);
        
        if (sanityData.success && sanityData.blog) {
          console.log('Successfully fetched from Sanity');
          // Make sure we have FAQ data if available
          const blogData = sanityData.blog;
          console.log('Checking for FAQ data:', blogData.includeFaq, blogData.faqSection);
          return blogData;
        }
      }
      console.log('Sanity fetch failed or returned no data, trying regular API');
    } catch (sanityErr) {
      console.error("Error fetching from Sanity:", sanityErr);
    }
    
    // If Sanity fails, try the regular API
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        cache: 'no-store',
        next: { revalidate: 60 }
      });
      
      const data = await response.json();
      console.log('Regular API Response:', data);
      
      if (response.ok && data.success && data.blog) {
        console.log('Successfully fetched from regular API');
        return data.blog;
      }
    } catch (apiErr) {
      console.error("Error fetching from regular API:", apiErr);
    }
    
    // Fall back to static data if both APIs fail
    const staticBlog = blogs.find((blog) => blog.slug === slug || blog.id === slug);
    console.log('Using static blog data:', staticBlog);
    return staticBlog;
  } catch (err) {
    console.error("Error in blog fetching process:", err);
    // Final fallback to static data
    return blogs.find((blog) => blog.slug === slug || blog.id === slug);
  }
};

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  
  // Use only one mechanism for scroll spy
  const activeId = useScrollSpy('h2'); 

  // Default images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  // Update URL when active section changes
  useEffect(() => {
    if (activeId && typeof window !== 'undefined') {
      // Update URL hash without scrolling
      const newHash = `#${activeId}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    }
  }, [activeId]);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setIsLoading(true);
        console.log('Loading blog with slug:', resolvedParams.slug);
        const blogPost = await getBlogPost(resolvedParams.slug);
        
        if (!blogPost) {
          setError('Blog not found');
          console.error('Blog not found with slug:', resolvedParams.slug);
        } else {
          setPost(blogPost);
          console.log('Blog loaded successfully:', blogPost.title);
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

  // Function to add IDs to HTML headings for linking and fix table styling
  const processHtmlContent = (htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') return htmlContent;
    if (typeof window === 'undefined') return htmlContent; // Skip on server
    
    try {
      // Create a temporary div to parse and modify HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      
      // Find Key Takeaways sections and convert text bullets to proper lists
      const paragraphs = tempDiv.querySelectorAll('p');
      paragraphs.forEach(p => {
        // Check if paragraph text starts with a bullet-like character
        if (p.textContent.trim().startsWith('•') || p.textContent.trim().startsWith('·') || p.textContent.trim().startsWith('-')) {
          // Option 1: Convert to list items
          // Find all bullet paragraphs that should be in a list
          const bulletItems = [];
          let currentP = p;
          
          // Collect consecutive bullet paragraphs
          while (currentP && 
                (currentP.textContent.trim().startsWith('•') || 
                 currentP.textContent.trim().startsWith('·') || 
                 currentP.textContent.trim().startsWith('-'))) {
            bulletItems.push(currentP);
            currentP = currentP.nextElementSibling;
          }
          
          if (bulletItems.length > 0) {
            // Create a new list
            const ul = document.createElement('ul');
            ul.className = 'list-disc pl-6 my-4';
            ul.style.listStyleType = 'disc';
            ul.style.paddingLeft = '1.5rem';
            
            // Add each bullet paragraph as a list item
            bulletItems.forEach(item => {
              const li = document.createElement('li');
              // Remove the bullet character from the beginning
              li.innerHTML = item.textContent.replace(/^[•·-]\s*/, '');
              li.style.display = 'list-item';
              li.style.listStyleType = 'disc';
              ul.appendChild(li);
              
              // Remove the original paragraph
              if (item.parentNode) {
                item.parentNode.removeChild(item);
              }
            });
            
            // Insert the list before the next element after the bullet list
            if (p.parentNode) {
              if (currentP) {
                p.parentNode.insertBefore(ul, currentP);
              } else {
                p.parentNode.appendChild(ul);
              }
            }
          }
        }
        
        // Option 2: For any remaining bullet paragraphs, apply special styling
        if (p.textContent.trim().startsWith('•') || p.textContent.trim().startsWith('·') || p.textContent.trim().startsWith('-')) {
          p.classList.add('bullet-point');
          // Apply inline styling for maximum compatibility
          p.style.position = 'relative';
          p.style.paddingLeft = '1.5rem';
          p.style.display = 'block';
          
          // Add a ::before pseudo-element for the bullet
          const style = document.createElement('style');
          style.textContent = `
            .bullet-point::before {
              content: "•" !important;
              position: absolute !important;
              left: 0 !important;
              top: 0.25em !important;
              font-size: 1.2em !important;
            }
          `;
          document.head.appendChild(style);
        }
      });
      
      // Add IDs to h2 elements
      const headings = tempDiv.querySelectorAll('h2');
      const usedIds = new Set(); // Track used IDs to prevent duplicates
      
      headings.forEach((heading, index) => {
        // Create URL-friendly ID from heading text
        let id = heading.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        // If this ID is already used, append an index to make it unique
        if (usedIds.has(id)) {
          id = `${id}-${index}`;
        }
        
        usedIds.add(id);
        heading.id = id;
      });
      
      // Ensure all list items have proper styling
      const listItems = tempDiv.querySelectorAll('ul li');
      listItems.forEach(li => {
        // Add a class for styling if needed
        li.classList.add('list-disc');
        li.style.display = 'list-item';
        li.style.listStyleType = 'disc';
        li.style.marginLeft = '1.5rem';
        
        // For Key Takeaways section, add extra emphasis
        const parentHeading = li.parentElement.previousElementSibling;
        if (parentHeading && parentHeading.textContent.includes('Key Takeaways')) {
          li.style.fontWeight = '500';
        }
      });
      
      // Apply direct styling to tables
      const tables = tempDiv.querySelectorAll('table');
      tables.forEach(table => {
        // Style the table element
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.margin = '2rem 0';
        table.style.fontFamily = 'inherit';
        table.style.borderRadius = '8px';
        table.style.overflow = 'hidden';
        table.style.border = '1px solid #E2E8F0';
        
        // Check if table has header cells
        const hasTh = table.querySelector('th') !== null;
        
        // If there are no <th> elements, treat the first row as a header
        if (!hasTh && table.rows.length > 0) {
          const firstRow = table.rows[0];
          Array.from(firstRow.cells).forEach(cell => {
            cell.style.backgroundColor = '#0A2E3D';
            cell.style.color = 'white';
            cell.style.fontWeight = '600';
            cell.style.padding = '12px 16px';
          });
        }
        
        // Style all th elements
        const thElements = table.querySelectorAll('th');
        thElements.forEach(th => {
          th.style.backgroundColor = '#0A2E3D';
          th.style.color = 'white';
          th.style.fontWeight = '600';
          th.style.padding = '12px 16px';
          th.style.textAlign = 'left';
          th.style.border = '1px solid #E2E8F0';
        });
        
        // Style all td elements
        const tdElements = table.querySelectorAll('td');
        tdElements.forEach((td, index) => {
          td.style.padding = '12px 16px';
          td.style.color = '#475467';
          td.style.border = '1px solid #E2E8F0';
          
          // Apply zebra striping for better readability
          const row = td.parentElement;
          if (row && row.rowIndex > 0 && row.rowIndex % 2 === 0) {
            td.style.backgroundColor = '#F8FAFC';
          } else {
            td.style.backgroundColor = 'white';
          }
          
          // Fix any links inside table cells
          const links = td.querySelectorAll('a');
          links.forEach(link => {
            link.style.color = '#475467';
            link.style.textDecoration = 'none';
          });
        });
      });
      
      return tempDiv.innerHTML;
    } catch (err) {
      console.error('Error processing HTML content:', err);
      return htmlContent;
    }
  };

  // Update the h2Headings extraction logic to prevent duplicates
  const h2Headings = React.useMemo(() => {
    if (!post) return [];
    
    try {
      // For HTML string content
      if (typeof post.content === 'string') {
        if (typeof window === 'undefined') return []; // Skip on server
        
        // Create a temporary div to parse HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const headingElements = tempDiv.querySelectorAll('h2');
        
        // Use a Set to track unique IDs
        const uniqueIds = new Set();
        const uniqueHeadings = [];
        
        // Convert to array and extract info
        Array.from(headingElements).forEach((h2) => {
          const title = h2.textContent;
          // Create URL-friendly ID from heading text
          const id = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
            
          // Only add if this ID hasn't been seen before
          if (!uniqueIds.has(id)) {
            uniqueIds.add(id);
            uniqueHeadings.push({ id, title });
          }
        });
        
        return uniqueHeadings;
      }
      
      // For React element content
      if (post.content.props?.children) {
        // Use a Set to track unique IDs
        const uniqueIds = new Set();
        const uniqueHeadings = [];
        
        post.content.props.children
          .filter(child => child && child.type === 'h2')
          .forEach((h2) => {
            const title = h2.props.children;
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            
            // Only add if this ID hasn't been seen before
            if (!uniqueIds.has(id)) {
              uniqueIds.add(id);
              uniqueHeadings.push({ id, title });
            }
          });
        
        return uniqueHeadings;
      }
      
      return [];
    } catch (err) {
      console.error('Error extracting h2 headings:', err);
      return [];
    }
  }, [post]);

  // Prepare FAQ data for the component
  const faqItems = React.useMemo(() => {
    if (!post || !post.includeFaq || !post.faqSection?.questions) return [];
    
    return post.faqSection.questions.map(item => ({
      question: item.question,
      answer: item.answer
    }));
  }, [post]);

  // Function to render content with proper image handling
  const renderContent = (content) => {
    try {
      // Handle string content (HTML)
      if (typeof content === 'string') {
        // Add image debugging - log image URLs in the content
        const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
        let match;
        console.log('Checking images in content:');
        while ((match = imgRegex.exec(content)) !== null) {
          console.log('Found image URL:', match[1]);
        }
        
        // Process HTML to add IDs to headings
        const processedContent = processHtmlContent(content);
        
        return (
          <div 
            className="prose max-w-none prose-img:rounded-lg prose-img:shadow-lg prose-headings:scroll-mt-24 prose-headings:pt-6 prose-headings:mt-6 prose-headings:border-t prose-headings:border-gray-100 prose-table:border-collapse prose-td:p-3 prose-th:p-3 prose-th:text-left prose-td:text-gray-700 prose-th:text-gray-800 prose-td:border prose-th:border prose-table:my-8 prose-table:w-full prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-li:my-1 prose-li:marker:text-gray-500" 
            dangerouslySetInnerHTML={{ __html: processedContent }} 
          />
        );
      }

      // Handle null or undefined content
      if (!content) {
        console.error('Content is null or undefined');
        return <div className="prose max-w-none">No content available</div>;
      }

      // Handle React elements or components
      if (React.isValidElement(content)) {
        return content;
      }

      // Handle content with props and children
      if (content.props?.children) {
        return content.props.children.map((element, index) => {
          if (!element) return null;

          if (typeof element === 'string') {
            return <p key={index} className="mb-6 text-gray-600 leading-relaxed">{element}</p>;
          }

          if (element.type === 'h2') {
            const title = element.props.children;
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            return (
              <h2
                key={index}
                id={id}
                className="scroll-mt-24 text-3xl font-semibold text-gray-900 mb-6 pt-8 border-t border-gray-200"
              >
                {element.props.children}
              </h2>
            );
          }

          if (element.type === 'img') {
            return (
              <div key={index} className="my-6">
                <img
                  src={element.props.src}
                  alt={element.props.alt || "Blog Image"}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            );
          }

          if (element.type === 'iframe') {
            return (
              <div key={index} className="my-6 aspect-video w-full">
                {element}
              </div>
            );
          }

          return (
            <div key={index} className="mb-6 text-gray-600 leading-relaxed">
              {element}
            </div>
          );
        });
      }

      // Fallback for other content types
      return <div className="prose max-w-none">Content could not be displayed properly.</div>;
    } catch (err) {
      console.error('Error rendering content:', err);
      return <div className="prose max-w-none">Error displaying content. Please try again later.</div>;
    }
  };

  const memoizedContent = useMemo(() => renderContent(post?.content), [post?.content]);

  if (isLoading) {
    return (
      <div className="bg-white py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading blog content...</p>
          </div>
        </Layout>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white py-16">
        <Layout>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Blog not found'}</h2>
            <p className="text-gray-600 mb-8">The blog post you're looking for could not be found.</p>
            <Link href="/blog" className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Return to Blog
            </Link>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className='bg-[#EBFAFE] py-16'>
      <Layout>
        {/* Blog Header - Superside Style */}
        <div className="mb-16">
          {/* Date display - exact Superside format */}
          <div className="text-center mt-24 mb-4">
            <div className="uppercase text-[#475467] tracking-wide text-sm sm:text-base font-medium">
              {/* Format date to match Superside (MONTH DD, YYYY) */}
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }).toUpperCase()}
            </div>
          </div>
          
          {/* Title - improved to handle long titles while maintaining original size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-[#101828] leading-tight mb-4 sm:mb-8 text-center mx-auto max-w-[1000px] tracking-tight break-words hyphens-auto px-4">
            {post.title}
          </h1>
          
          {/* Author section - exactly like Superside */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3">
                <Image
                  src={authorImageError ? defaultAuthorImage : post.author?.image}
                  alt={post.author?.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  onError={() => setAuthorImageError(true)}
                />
              </div>
              <div className="flex items-center flex-wrap">
                <div className="text-[#475467] mr-2">By</div>
                <Link 
                  href="#" 
                  className="font-semibold text-[#101828] underline hover:text-secondary-500 mr-2"
                >
                  {post.author?.name}
                </Link>
                <div className="text-[#475467]">{post.author?.role || ''}</div>
              </div>
            </div>
          </div>
          
          {/* Social sharing icons - Superside style */}
          <div className="flex items-center justify-center gap-3 mb-10 sm:mb-20">
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

        {/* Main Grid Container - Improved responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-8 lg:gap-16">
          {/* Left Sidebar - Only shown on desktop */}
          <aside className="lg:sticky top-24 self-start hidden lg:block space-y-8 shrink-0">
            {/* Read Time Animation - Added without changing structure */}
            <ReadTimeProgress timeToRead={post.timeToRead || "5 min read"} />
            
            {/* Table of Contents */}
            <div className="bg-[#0A2E3D] p-4 rounded-lg">
              <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-3">TABLE OF CONTENTS</h4>
              {h2Headings.length > 0 && (
                <div className="max-h-[120px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <ul className="space-y-4">
                    {h2Headings.map((section, index) => (
                      <li key={index} className="relative">
                        <a
                          href={`#${section.id}`}
                          className={`flex items-center gap-2 text-xs leading-tight pl-4 ${
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
                            <span className="text-white leading-none animate-toc-pulse" style={{ fontSize: '10px' }}>●</span>
                          )}
                          <span className={`truncate transition-all duration-300 ${activeId === section.id ? 'toc-smooth-in' : 'toc-smooth-out'} font-bold`}>{section.title}</span>
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

          {/* Mobile TOC - Only visible on mobile - updated to match compact style */}
          {h2Headings.length > 0 && (
            <div className="lg:hidden mb-6 bg-[#0A2E3D] p-4 rounded-lg mt-4">
              <h4 className="uppercase text-white text-xs font-semibold tracking-wide mb-2">TABLE OF CONTENTS</h4>
              <div className="overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <ul className="space-y-4">
                  {h2Headings.map((section, index) => (
                    <li key={index} className="relative">
                      <a
                        href={`#${section.id}`}
                        className={`flex items-center gap-2 text-xs leading-tight pl-4 ${
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
                          <span className="text-white leading-none animate-toc-pulse" style={{ fontSize: '10px' }}>●</span>
                        )}
                        <span className={`truncate transition-all duration-300 ${activeId === section.id ? 'toc-smooth-in' : 'toc-smooth-out'} font-bold`}>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Main Content Section - Improved for mobile */}
          <div className="w-full min-w-0">
            <article className="w-full">
              <div className="blog-content description">
                {memoizedContent}
                {/* Add direct CSS for bullet points */}
                <style jsx global>{`
                  .blog-content ul {
                    list-style-type: disc !important;
                    padding-left: 1.5rem !important;
                    margin: 1rem 0 !important;
                  }
                  
                  .blog-content ul li {
                    display: list-item !important;
                    list-style-type: disc !important;
                    margin-bottom: 0.5rem !important;
                    position: relative !important;
                  }
                  
                  /* Direct styling for Key Takeaways */
                  .blog-content h2 + ul li,
                  .blog-content h3 + ul li {
                    font-weight: 500 !important;
                    color: #333 !important;
                  }
                  
                  /* Style text bullets as a fallback */
                  .blog-content p.bullet-point {
                    position: relative;
                    padding-left: 1.5rem !important;
                  }
                  
                  .blog-content p.bullet-point::before {
                    content: "•" !important;
                    position: absolute !important;
                    left: 0.5rem !important;
                    top: 0 !important;
                    font-size: 1.2em !important;
                  }
                `}</style>
              </div>
              
              {/* FAQ Section */}
              {post.includeFaq && faqItems.length > 0 && (
                <BlogFAQ 
                  title={post.faqSection?.title || 'Frequently Asked Questions'} 
                  questions={faqItems} 
                />
              )}
            </article>
            
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
          </div>
        </div>
      </Layout>

      {/* Related Blogs - "You may also like these" section */}
      <section className="mt-12 sm:mt-20 pb-12 w-full">
        <Layout>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-12 text-center text-gray-900">
            <div className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider">RELATED ARTICLES</div>
            You may also like these
          </h2>
          
          <RelatedBlogs currentPost={post} defaultThumbnail={defaultThumbnail} defaultAuthorImage={defaultAuthorImage} />
        </Layout>
      </section>
    </div>
  );
}
  