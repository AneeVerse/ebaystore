"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/common/Layout";
import { blogs } from "@/data/blogData";
import Image from "next/image";
import BlogCard from "@/components/blog/BlogCard";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

// ✅ Category Images Map
const categoryImages = {
  "creative-design": {
    src: "/images/categories/creative-design.jpg",
    alt: "Creative Design",
    description: "Explore the latest trends in creative design and branding. Learn how to create stunning visuals. stay updated with the latest design trends. ",
  },
  "marketing-strategies": {
    src: "/images/categories/marketing-strategies.jpg",
    alt: "Marketing Strategies",
    description: "Learn about the latest marketing strategies and growth hacks. Stay updated with the latest trends in marketing. ",
  },
  "digital-advertising": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Digital Advertising",
    description: "Stay updated with the latest trends in digital advertising. Learn how to create effective ad campaigns. ",
  },
  "ebay": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "eBay",
    description: "Learn about eBay marketing strategies, seller tips, and how to maximize your success on the platform.",
  },
  "design": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Design",
    description: "Explore the latest trends in design and learn how to create stunning visuals for your brand.",
  },
  "e-commerce": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "E-commerce",
    description: "Learn strategies to grow your online store and increase conversions.",
  },
  "technology": {
    src: "/images/categories/digital-advertising.jpg",
    alt: "Technology",
    description: "Stay updated with the latest technology trends and learn how to leverage them for your business.",
  },
};

// More efficient function to fetch blogs by category
const fetchBlogsByCategory = async (category) => {
  try {
    // Get normalized category
    const normalizedCategory = category.toLowerCase().replace(/-/g, " ");
    console.log('Normalized Category:', normalizedCategory);
    
    // Get static data first
    const staticBlogs = blogs.filter(blog => {
      if (!blog || !blog.category) return false;
      return blog.category.toLowerCase() === normalizedCategory;
    });
    console.log('Static Blogs:', staticBlogs.length);
    
    // Then fetch from API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    try {
      const apiUrl = `/api/sanity-blogs?category=${encodeURIComponent(normalizedCategory)}`;
      console.log('Fetching from API:', apiUrl);
      
      const response = await fetch(apiUrl, { 
        signal: controller.signal,
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
      });
      
      clearTimeout(timeoutId);
      
      // Check if response is ok first
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', response.status, errorText);
        throw new Error(`API returned ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', {
        success: data.success,
        blogCount: data.blogs?.length,
        pagination: data.pagination
      });
      
      let apiBlogs = [];
      if (data.success && data.blogs) {
        apiBlogs = data.blogs;
        console.log('API Blogs:', apiBlogs.length);
      }
      
      // Combine both sources and remove duplicates by ID
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
      
      console.log('Total unique blogs:', uniqueBlogs.length);
      return { blogs: uniqueBlogs, categoryInfo: null, error: null };
      
    } catch (err) {
      console.error("API fetch error:", err);
      clearTimeout(timeoutId);
      return { blogs: staticBlogs, categoryInfo: null, error: "API request failed" };
    }
    
  } catch (err) {
    console.error("Error in fetchBlogsByCategory:", err);
    return { blogs: [], categoryInfo: null, error: "Failed to fetch blogs" };
  }
};

export default function BlogCategoryPage() {
  const { category } = useParams(); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      if (!category) return;
      setIsLoading(true);
      
      try {
        // Get category info
        const normalizedCategory = category.toLowerCase();
        setCategoryInfo({
          title: normalizedCategory.replace(/-/g, " "),
          description: categoryImages[normalizedCategory]?.description || 
            `Discover our latest articles about ${normalizedCategory.replace(/-/g, " ")}.`,
        });
        
        // Fetch blogs with the more efficient function
        const result = await fetchBlogsByCategory(category);
        
        if (result.error) {
          console.warn(result.error);
        }
        
        setFilteredBlogs(result.blogs);
      } catch (err) {
        console.error("Error loading blogs:", err);
        setError("Failed to load blogs");
        setFilteredBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, [category]);

  if (!category) return <div className="text-center py-20">Category not found</div>;
  
  if (isLoading) {
    return (
      <div className="bg-[#EBFAFE] py-16">
        <Layout>
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading blog posts...</p>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div className="bg-[#EBFAFE] py-16">
      <Layout>
        <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-1">
          <Link href="/blog" className="uppercase hover:underline">
            Blog
          </Link>
          <IoIosArrowForward className="" />
          <div className="uppercase">
            {categoryInfo?.title || category.replace(/-/g, " ")}
          </div>
        </div>
        
        {/* ✅ Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Category Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold uppercase">
              {categoryInfo?.title || category.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-500 max-w-full md:max-w-[40%] mt-2 text-lg">
              {categoryInfo?.description}
            </p>
          </div>
        </header>

        {/* Show error if any */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="h-full flex flex-col">
                <BlogCard blog={blog} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 py-10">
              No blogs found in this category. <Link href="/admin/blogs/new" className="text-blue-600 hover:underline">Create one</Link>
            </p>
          )}
        </div>
      </Layout>
    </div>
  );
}
