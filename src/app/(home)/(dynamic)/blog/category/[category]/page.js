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
};

export default function BlogCategoryPage() {
  const { category } = useParams(); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (category) {
      const formattedCategory = category.replace(/-/g, " ");
      const filtered = blogs.filter((blog) => blog.category.toLowerCase() === formattedCategory);
      setFilteredBlogs(filtered);
    }
  }, [category]);

  if (!category) return <div className="text-center py-20">Category not found</div>;

  return (
    <div className="bg-white py-16">
      <Layout>
      <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-1">
            <Link href="/blog" className="uppercase hover:underline">
              Blog
            </Link>
            <IoIosArrowForward className="" />
            <div className="uppercase ">
              {category.toLowerCase().replace(/-/g, " ")}
            </div>
          </div>
        {/* ✅ Category Header */}
        <header className="mb-12 flex flex-col md:flex-row items-center gap-6">
          {/* Left - Category Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold capitalize">{category.replace(/-/g, " ")}</h1>
            <p className="text-gray-500 max-w-full md:max-w-[40%] mt-2 text-lg">
              {categoryImages[category.toLowerCase().replace(" ","-")]?.description}
            </p>
          </div>

          {/* Right - Category Image */}
          {/* {categoryImages[category.toLowerCase().replace(" ","-")] && (
            <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-md">
              <Image
                src={categoryImages[category.toLowerCase().replace(" ","-")]}
                alt={category}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          )} */}
        </header>

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">No blogs found in this category.</p>
          )}
        </div>
      </Layout>
    </div>
  );
}
