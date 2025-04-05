"use client";
import { use, useEffect, useRef, useState } from 'react';
import Layout from '@/components/common/Layout';
import { blogs } from '@/data/blogData';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Newsletter from '@/components/blog/NewsLetter';
import BlogCard from '@/components/blog/BlogCard';

const getBlogPost = (id) => {
  return blogs.find((blog) => blog.id === id);
};

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const post = getBlogPost(resolvedParams.id);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);
  const observer = useRef(null);

  // Extract h2 headings from content
  const h2Headings = post?.content.props.children
    .filter(child => child.type === 'h2')
    .map((h2, index) => ({
      id: `section-${index}`,
      title: h2.props.children
    })) || [];

  useEffect(() => {
    if (!post) return;

    // Initialize section refs
    const elements = post.content.props.children
      .filter(child => child.type === 'h2')
      .map((_, index) => document.getElementById(`section-${index}`));

    sectionRefs.current = elements.filter(Boolean);

    // Cleanup previous observer
    if (observer.current) {
      sectionRefs.current.forEach(section => {
        if (section) observer.current.unobserve(section);
      });
    }

    // Initialize new observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              ref => ref === entry.target
            );
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.2
      }
    );

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) observer.current.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.current.unobserve(section);
      });
    };
  }, [post]);

  if (!post) return <div className="text-center py-20">Blog not found</div>;

  // Function to render content with proper image handling
  const renderContent = (content) => {
    return content.props.children.map((element, index) => {
      if (element.type === 'h2') {
        const sectionIndex = h2Headings.findIndex(
          h => h.title === element.props.children
        );
        return (
          <h2
            key={index}
            id={`section-${sectionIndex}`}
            ref={(el) => (sectionRefs.current[sectionIndex] = el)}
            className="scroll-mt-24 text-3xl font-semibold text-gray-900 mb-6 pt-8 border-t border-gray-200"
          >
            {element.props.children}
          </h2>
        );
      } else if (element.type === 'img') {
        return (
          <div key={index} className="my-6">
            <Image
              src={element.props.src}
              alt={element.props.alt || "Blog Image"}
              width={800}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
        );
      } else if (element.type === 'iframe') {
        return (
          <div key={index} className="my-6 aspect-video w-full">
            {element}
          </div>
        );
      } else {
        return (
          <div key={index} className="mb-6 text-gray-600 leading-relaxed">
            {element}
          </div>
        );
      }
    });
  };

  return (
    <div className='bg-white py-16'>
      <Layout>
        {/* Blog Header */}
        <header className="mb-16">
          <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-3">
            <Link href="/blog" className="uppercase hover:underline">
              Blog
            </Link>
            <IoIosArrowForward className="" />
            <Link 
              href={`/blog/category/${post.category.toLowerCase().replace(" ","-")}`} 
              className="uppercase hover:underline"
            >
              {post.category}
            </Link>
          </div>
          <div className="relative h-96 md:h-[483px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute w-full md:w-[80%] lg:w-[60%] inset-0 px-6 md:px-12 flex flex-col text-white py-6 md:py-12 justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 md:mb-6 drop-shadow-lg">
                  {post.title}
                </h1>
                <div className="text-gray-200">Published {post.date}</div>
              </div>
              <div className=" p-4 rounded-lg">
                <div className='text-sm mb-2 tracking-wider text-gray-200'>AUTHOR</div>
                <div className="flex items-center gap-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={56}
                    height={56}
                    className="rounded-lg border-2 border-white"
                  />
                  <div>
                    <p className="font-semibold text-lg">{post.author.name}</p>
                    <p className="text-sm text-gray-200">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
          {/* Sticky Sidebar */}
          <aside className="sticky top-24 self-start hidden lg:block">
            <div className="space-y-8 bg-white">
              {/* Time to Read */}
              <div className="bg-white font-medium border-b py-3 text-lg">
                <div className="text-gray-900 flex items-center gap-3">
                  <FaRegClock className='text-secondary-500' />
                  <div>{post.timeToRead}</div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="py-3">
                <h4 className="text-sm font-semibold mb-4 uppercase">In this article</h4>
                <ul className="space-y-3">
                  {h2Headings.map((section, index) => (
                    <li key={index}>
                      <a
                        href={`#section-${index}`}
                        className={`flex items-center group text-sm ${
                          activeSection === index ? 'font-semibold' : ''
                        }`}
                      >
                        <span className={`w-[5px] h-[5px] rounded-full ${
                          activeSection === index 
                            ? 'bg-secondary-500 scale-100 opacity-100' 
                            : 'bg-secondary-500 group-hover:scale-100 group-hover:opacity-100 scale-0 opacity-0'
                        } inline-block transition-all duration-300`}></span>
                        <span className={`ml-[-5px] text-gray-600 inline-block transition-all duration-300 ${
                          activeSection === index 
                            ? 'ml-[5px] text-secondary-500' 
                            : 'group-hover:ml-[5px] group-hover:text-secondary-500'
                        }`}>
                          {section.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Info */}
              <div className="bg-secondary-500 p-5 rounded-lg shadow-sm border text-primary-500">
                <div className='flex gap-4 items-center'>
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-white shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{post.author.name}</h3>
                    <p className="text-sm  *:">{post.author.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm  leading-relaxed">
                  {post.author.name} has over a decade of experience in digital marketing
                  and creative leadership.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div >
            <div className=" description text-gray-600 leading-relaxed mb-12">
              <p className='highlight'>{post.description}</p> 
            </div>
            
            <article className="prose description lg:prose-xl">
              {renderContent(post.content)}
            </article>

            <div className='mt-16'>
              <Newsletter />
            </div>

            {/* Related Blogs */}
            <section className="mt-20">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {blogs
                  .filter(b => b.id !== post.id)
                  .slice(0, 3)
                  .map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}