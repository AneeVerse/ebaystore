"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineClipboardList,
  HiOutlinePencilAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";
import Link from "next/link";

// Initialize data fetching early - this will be shared across instances
let blogsCache = [];
let isBlogsFetched = false;
let isFetchingBlogs = false;

// Add similar caching mechanism for customer stories
let storiesCache = [];
let isStoriesFetched = false;
let isFetchingStories = false;

// Prefetch blogs outside component to share across renders
const prefetchBlogs = async () => {
  if (isFetchingBlogs || isBlogsFetched) return;
  
  try {
    isFetchingBlogs = true;
    const response = await fetch('/api/sanity-blogs?limit=2', { 
      cache: 'no-store',
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        blogsCache = data.blogs;
        isBlogsFetched = true;
      }
    }
  } catch (error) {
    console.error('Error prefetching blogs:', error);
  } finally {
    isFetchingBlogs = false;
  }
};

// Add prefetch function for customer stories
const prefetchCustomerStories = async () => {
  if (isFetchingStories || isStoriesFetched) return;
  
  try {
    isFetchingStories = true;
    const response = await fetch('/api/sanity-customer-stories?limit=2', { 
      cache: 'no-store',
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        storiesCache = data.stories;
        isStoriesFetched = true;
      }
    }
  } catch (error) {
    console.error('Error prefetching customer stories:', error);
  } finally {
    isFetchingStories = false;
  }
};

// Start prefetching both resources as soon as this module is loaded
if (typeof window !== 'undefined') {
  prefetchBlogs();
  prefetchCustomerStories();
}

const ResourcesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState(blogsCache);
  const [customerStories, setCustomerStories] = useState(storiesCache);
  const [isLoading, setIsLoading] = useState(!isBlogsFetched);
  const [isLoadingStories, setIsLoadingStories] = useState(!isStoriesFetched);

  // Fetch blogs as soon as the component mounts, not waiting for menu open
  useEffect(() => {
    const fetchBlogs = async () => {
      // If we already have blogs cached, use them
      if (isBlogsFetched) {
        setBlogs(blogsCache);
        setIsLoading(false);
        return;
      }
      
      // If already fetching, just wait
      if (isFetchingBlogs) {
        const checkCache = setInterval(() => {
          if (isBlogsFetched) {
            setBlogs(blogsCache);
            setIsLoading(false);
            clearInterval(checkCache);
          }
        }, 100);
        return () => clearInterval(checkCache);
      }
      
      // Otherwise fetch them now
      try {
        setIsLoading(true);
        isFetchingBlogs = true;
        const response = await fetch('/api/sanity-blogs?limit=2', { 
          cache: 'no-store',
          next: { revalidate: 300 } // Revalidate every 5 minutes
        });
        const data = await response.json();
        if (data.success) {
          blogsCache = data.blogs;
          isBlogsFetched = true;
          setBlogs(data.blogs);
        } else {
          console.error('Failed to fetch blogs:', data.error);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
        isFetchingBlogs = false;
      }
    };

    // Fetch immediately when component mounts, don't wait for menu to open
    fetchBlogs();
  }, []);

  // Add useEffect for fetching customer stories
  useEffect(() => {
    const fetchCustomerStories = async () => {
      // If we already have stories cached, use them
      if (isStoriesFetched) {
        setCustomerStories(storiesCache);
        setIsLoadingStories(false);
        return;
      }
      
      // If already fetching, just wait
      if (isFetchingStories) {
        const checkCache = setInterval(() => {
          if (isStoriesFetched) {
            setCustomerStories(storiesCache);
            setIsLoadingStories(false);
            clearInterval(checkCache);
          }
        }, 100);
        return () => clearInterval(checkCache);
      }
      
      // Otherwise fetch them now
      try {
        setIsLoadingStories(true);
        isFetchingStories = true;
        const response = await fetch('/api/sanity-customer-stories?limit=2', { 
          cache: 'no-store',
          next: { revalidate: 300 } // Revalidate every 5 minutes
        });
        const data = await response.json();
        if (data.success) {
          storiesCache = data.stories;
          isStoriesFetched = true;
          setCustomerStories(data.stories);
        } else {
          console.error('Failed to fetch customer stories:', data.error);
        }
      } catch (error) {
        console.error('Error fetching customer stories:', error);
      } finally {
        setIsLoadingStories(false);
        isFetchingStories = false;
      }
    };

    // Fetch immediately when component mounts
    fetchCustomerStories();
  }, []);

  // Prefetch when user moves mouse near the menu to speed up hover
  const handleMouseNear = () => {
    if (!isBlogsFetched && !isFetchingBlogs) {
      prefetchBlogs().then(() => {
        setBlogs(blogsCache);
        setIsLoading(false);
      });
    }
    if (!isStoriesFetched && !isFetchingStories) {
      prefetchCustomerStories().then(() => {
        setCustomerStories(storiesCache);
        setIsLoadingStories(false);
      });
    }
  };

  const resources = [
    {
      title: "",
      link: "#",
      items: [
        {
          name: "Blog",
          link: "/blog",
          description: "Latest articles and insights",
          icon: <HiOutlinePencilAlt />,
        },
        {
          name: "Customer Stories",
          link: "/customer-stories",
          description: "Success stories from our clients",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Guides & Quizzes",
          link: "/blog",
          description: "Insights from marketing leaders",
          icon: <HiOutlineBookOpen />,
        },
        {
          name: "Video Library",
          link: "/video-library",
          description: "Aneeverse's latest videos",
          icon: <HiOutlinePlay />,
        }
      ],
    },
    {
      title: "Blog",
      link: "/blog",
      cards: blogs,
    },
    {
      title: "Customer Stories",
      link: "/customer-stories",
      cards: customerStories,
    },
  ];

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onMouseOver={handleMouseNear}
    >
      <button
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        <span
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
        ></span>{" "}
        <span className="flex items-center gap-2">
          Resources{" "}
          <FaChevronDown
            className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`}
          />
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="fixed h-screen inset-0 w-full top-[60px] pt-5 z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="backdrop-blur-[2px] h-full w-full">
          <motion.div
              onMouseLeave={() => {
                setIsOpen(false);
              }}
          
          className="bg-[#EBFAFE] shadow-lg border border-gray-200">
            <Layout>
              <div className="grid grid-cols-3 gap-6 py-8">
                {/* Learning Center */}
                <div className="border-r border-gray-200 pr-6">
                 
                  <ul className="mt-12 space-y-4">
                    {resources[0].items.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.link} onClick={()=>{setIsOpen(false)}} 
                       className="flex cursor-pointer border-b pb-3 items-start group justify-between gap-3">
                        <div>
                          <h4 className="text-md flex items-center font-medium text-gray-700">
                           <span className="h-[5px] bg-secondary-500 w-[5px] inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full"></span> <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-gray-700 text-xl">{item.icon}</div>
                      </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog */}
                <div className="border-r border-gray-200 pr-6">
                  <Link onClick={()=>{setIsOpen(false)}} href={resources[1].link} className="text-lg group font-semibold cursor-pointer hover:underline flex items-center text-secondary-500 gap-2">
                    Blog <div className="relative"> <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {isLoading ? (
                      // Loading placeholders with reduced height for faster rendering
                      Array(2).fill(0).map((_, idx) => (
                        <div key={idx} className="animate-pulse">
                          <div className="bg-gray-200 h-[120px] rounded-md"></div>
                          <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
                        </div>
                      ))
                    ) : blogs && blogs.length > 0 ? (
                      // Render actual blogs
                      blogs.map((blog, idx) => (
                        <Link onClick={()=>{setIsOpen(false)}} href={`/blog/${blog.slug}`} key={idx} className="flex flex-col cursor-pointer gap-3">
                          <div className="overflow-hidden rounded-md">
                            <img
                              src={blog.thumbnail}
                              alt={blog.title}
                              className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                            />
                          </div>
                          <p className="text-sm line-clamp-1 font-medium text-gray-700">
                            {blog.title}
                          </p>
                        </Link>
                      ))
                    ) : (
                      // No blogs found
                      <div className="text-center py-4 text-gray-500">
                        Check out our blog for latest updates
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer Stories */}
                <div>
                  <Link onClick={()=>{setIsOpen(false)}} href={resources[2].link} className="text-lg group font-semibold cursor-pointer hover:underline flex items-center text-secondary-500 gap-2">
                    Customer Stories <div className="relative"> <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
                  </Link>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {isLoadingStories ? (
                      // Loading placeholders
                      Array(2).fill(0).map((_, idx) => (
                        <div key={idx} className="animate-pulse">
                          <div className="bg-gray-200 h-[120px] rounded-md"></div>
                          <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
                        </div>
                      ))
                    ) : customerStories && customerStories.length > 0 ? (
                      // Render actual customer stories
                      customerStories.map((story, idx) => (
                        <Link onClick={()=>{setIsOpen(false)}} href={`/customer-stories/${story.slug}`} key={idx} className="flex flex-col cursor-pointer gap-3">
                          <div className="overflow-hidden rounded-md">
                            <img
                              src={story.thumbnail}
                              alt={story.title}
                              className="w-full h-[160px] hover:scale-110 transition-all duration-300 object-cover rounded-md"
                            />
                          </div>
                          <p className="text-sm line-clamp-1 font-medium text-gray-700">
                            {story.title}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 italic">No customer stories available</p>
                    )}
                  </div>
                </div>
              </div>
            </Layout>
          </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesMegaMenu;
