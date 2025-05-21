'use client';

import { use, useEffect, useRef, useState, useMemo } from 'react';
import Layout from '@/components/common/Layout';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from '@/components/blog/NewsLetter';
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import ReadTimeProgress from '@/components/blog/ReadTimeProgress';
import { client } from '@/sanity/lib/client';
import { getCustomerStoryBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

// More efficient approach to fetch customer story
const getCustomerStory = async (slug) => {
  try {
    console.log('Attempting to fetch customer story with slug:', slug);
    
    // Try to fetch from Sanity API
    try {
      const storyData = await client.fetch(
        getCustomerStoryBySlugQuery,
        { slug: slug }
      );
      
      if (storyData) {
        console.log('Successfully fetched from Sanity');
        return storyData;
      }
    } catch (sanityErr) {
      console.error("Error fetching from Sanity:", sanityErr);
    }
    
    return null;
  } catch (err) {
    console.error("Error in customer story fetching process:", err);
    return null;
  }
};

export default function CustomerStoryDetail({ params }) {
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
    const loadStory = async () => {
      try {
        setIsLoading(true);
        console.log('Loading customer story with slug:', resolvedParams.id);
        const storyData = await getCustomerStory(resolvedParams.id);
        
        if (!storyData) {
          setError('Customer story not found');
          console.error('Customer story not found with slug:', resolvedParams.id);
        } else {
          setPost(storyData);
          console.log('Customer story loaded successfully:', storyData.title);
          
          // Debug customer logo
          if (storyData.customerLogo?.asset?._ref) {
            try {
              const logoUrl = urlForImage(storyData.customerLogo).url();
              console.log('Customer logo URL:', logoUrl);
            } catch (logoErr) {
              console.error('Error generating logo URL:', logoErr);
            }
          } else {
            console.log('No customer logo found in story data');
          }
        }
      } catch (err) {
        console.error('Error loading customer story:', err);
        setError('Failed to load customer story');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadStory();
  }, [resolvedParams.id]);

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
      
      return tempDiv.innerHTML;
    } catch (err) {
      console.error('Error processing HTML content:', err);
      return htmlContent;
    }
  };

  // Extract headings for table of contents
  const h2Headings = React.useMemo(() => {
    if (!post) return [];
    
    try {
      // For PortableText content from Sanity
      if (post.body) {
        // Extract h2 blocks from the portable text
        return post.body
          .filter(block => block.style === 'h2')
          .map((block, index) => {
            const title = block.children.map(child => child.text).join('');
            const id = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            
            return { id, title };
          });
      }
      
      return [];
    } catch (err) {
      console.error('Error extracting h2 headings:', err);
      return [];
    }
  }, [post]);

  // Custom PortableText components
  const myPortableTextComponents = {
    block: {
      h2: ({children, value}) => {
        // Create URL-friendly ID from heading text
        const text = value.children.map(child => child.text).join('');
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
          
        return (
          <h2
            id={id}
            className="scroll-mt-24 text-3xl font-semibold text-gray-900 mb-6 pt-8 border-t border-gray-200"
          >
            {children}
          </h2>
        );
      },
      normal: ({children}) => <p className="mb-6 text-gray-600 leading-relaxed">{children}</p>
    },
    types: {
      image: ({value}) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="my-6">
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || "Customer Story Image"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg shadow-lg"
            />
          </div>
        );
      }
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading customer story content...</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Customer story not found'}</h2>
            <p className="text-gray-600 mb-8">The customer story you're looking for could not be found.</p>
            <Link href="/customer-stories" className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Return to Customer Stories
            </Link>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className='bg-[#EBFAFE] py-16'>
      <Layout>
        {/* Customer Story Header - Superside Style */}
        <div className="mb-16">
          {/* Title - improved to handle long titles while maintaining original size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-normal text-[#101828] leading-tight mb-8 sm:mb-12 text-center mx-auto max-w-[1000px] tracking-tight break-words hyphens-auto px-4 mt-24">
            {post.title}
          </h1>
          
          {/* Social sharing icons */}
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
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this customer story: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`} 
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
            <ReadTimeProgress timeToRead={post.readTime || "5 min read"} />
            
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
                          <span className={`truncate transition-all duration-300 ${activeId === section.id ? 'toc-smooth-in' : 'toc-smooth-out'}`}>{section.title}</span>
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
                        <span className={`truncate transition-all duration-300 ${activeId === section.id ? 'toc-smooth-in' : 'toc-smooth-out'}`}>{section.title}</span>
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
              {/* Main image - Before the content */}
              {post.mainImage && (
                <div className="mb-8">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    onError={() => setThumbnailError(true)}
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="blog-content description">
                <PortableText 
                  value={post.body} 
                  components={myPortableTextComponents} 
                />
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
                  }
                `}</style>
              </div>
              
              {/* Newsletter Section */}
              <div className="mt-16 border-t border-gray-200 pt-16">
                <Newsletter />
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </div>
  );
}
