'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { FaRegClock, FaLinkedin, FaFacebookF, FaLink, FaEnvelope } from 'react-icons/fa';
import BlogFAQ from './BlogFAQ';

const BlogDetail = ({ blog = {} }) => {
  const [activeSection, setActiveSection] = useState('');
  const contentRef = useRef(null);
  const [headings, setHeadings] = useState([]);
  const [copied, setCopied] = useState(false);

  // Default values if blog data is missing
  const {
    title = 'Blog Post Title',
    date = new Date().toISOString(),
    content = '',
    category = 'Uncategorized',
    timeToRead = '5 min read',
    author = {
      name: 'Anonymous',
      role: 'Author',
      image: '/images/blog/author/default.png'
    },
    tldr = '',
    includeFaq = false,
    faqSection = null
  } = blog;

  // Format date - similar to Superside's date format (Month Day, Year)
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';

  // Extract headings from content for table of contents
  useEffect(() => {
    if (contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll('h2, h3');
      const headingsData = Array.from(headingElements).map(heading => ({
        id: heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
        text: heading.textContent,
        level: heading.tagName === 'H2' ? 2 : 3
      }));

      // Add ids to headings if they don't have them
      headingElements.forEach(heading => {
        if (!heading.id) {
          heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        }
      });

      setHeadings(headingsData);
    }
  }, [content]);

  // Intersection Observer for active section
  useEffect(() => {
    if (contentRef.current && headings.length > 0) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-100px 0px -80% 0px' }
      );

      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });

      return () => {
        headings.forEach(heading => {
          const element = document.getElementById(heading.id);
          if (element) observer.unobserve(element);
        });
      };
    }
  }, [headings]);

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Prepare FAQ data for the component
  const faqItems = includeFaq && faqSection?.questions ? 
    faqSection.questions.map(item => ({
      question: item.question,
      answer: item.answer
    })) : [];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Post Header */}
      <header className="mb-12">
        <div className="text-center mb-8">
          <p className="text-gray-500 uppercase tracking-wide">{formattedDate}</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-[#0A2E3D] leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center justify-center text-sm text-gray-600 gap-2">
            <span className="capitalize">{category}</span>
            <span>•</span>
            <div className="flex items-center">
              <FaRegClock className="mr-1" />
              <span>{timeToRead}</span>
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <Image 
              src={author.image} 
              alt={author.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="font-medium text-[#0A2E3D]">By {author.name}</p>
            <p className="text-sm text-gray-600">{author.role}</p>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="flex justify-center gap-3 mb-8">
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <FaLinkedin className="text-gray-600" />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <FaFacebookF className="text-gray-600" />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={copyToClipboard}
          >
            <FaLink className="text-gray-600" />
            {copied && (
              <span className="absolute mt-16 px-2 py-1 bg-gray-800 text-white text-xs rounded">
                Link copied!
              </span>
            )}
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <FaEnvelope className="text-gray-600" />
          </button>
        </div>

        {/* TL;DR Section - Superside Style */}
        {tldr && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="font-bold text-lg mb-2">TL;DR</h2>
            <p className="text-gray-700">{tldr}</p>
          </div>
        )}
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Desktop */}
        {headings.length > 0 && (
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Table of contents</h3>
              <nav>
                <ul className="space-y-3">
                  {headings.map(heading => (
                    <li 
                      key={heading.id} 
                      className={`${heading.level === 3 ? 'pl-4' : ''}`}
                    >
                      <a
                        href={`#${heading.id}`}
                        className={`text-sm hover:text-primary-500 transition-colors ${
                          activeSection === heading.id
                            ? 'text-primary-600 font-medium'
                            : 'text-gray-600'
                        }`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div 
            ref={contentRef}
            className="prose prose-lg max-w-none prose-headings:text-[#0A2E3D] prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary-500"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          {/* FAQ Section */}
          {includeFaq && faqItems.length > 0 && (
            <BlogFAQ 
              title={faqSection?.title || 'Frequently Asked Questions'} 
              questions={faqItems} 
            />
          )}
          
          {/* Author Bio - Bottom */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-start">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={author.image} 
                  alt={author.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="font-medium text-lg text-[#0A2E3D]">{author.name}</p>
                <p className="text-gray-600 mb-2">{author.role}</p>
                <p className="text-gray-700">
                  {author.bio || `${author.name} is a contributor to the blog.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail; 