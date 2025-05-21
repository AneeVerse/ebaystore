"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { urlForImage } from "@/sanity/lib/image";
import { useState, useEffect } from "react";

export default function CustomerStoryCard({ story }) {
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [logoError, setLogoError] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');

  // Process image URL on component mount
  useEffect(() => {
    if (story?.mainImage?.asset?._ref) {
      try {
        const imgUrl = urlForImage(story.mainImage).url();
        setImageUrl(imgUrl);
      } catch (error) {
        console.error("Error processing image in CustomerStoryCard:", error);
        setImageError(true);
      }
    } else {
      setImageError(true);
    }

    // Process customer logo if available
    if (story?.customerLogo?.asset?._ref) {
      try {
        const logo = urlForImage(story.customerLogo).url();
        setLogoUrl(logo);
      } catch (error) {
        console.error("Error processing logo in CustomerStoryCard:", error);
        setLogoError(true);
      }
    } else {
      setLogoError(true);
    }
  }, [story]);

  // Get the category name (using first category if multiple exist)
  const categoryName = story.categories && story.categories.length > 0
    ? story.categories[0].title.toUpperCase()
    : 'UNCATEGORIZED';

  return (
    <div className="h-full flex flex-col">
      {/* Main Card */}
      <Link
        href={`/customer-stories/${story.slug.current}`}
        className="block bg-transparent transition-all duration-300 h-full flex flex-col overflow-hidden group w-full"
      >
        {/* Image Section with increased height and rounded corners */}
        <div className="relative w-full pb-[70%] overflow-hidden rounded-lg">
          {!imageError && imageUrl ? (
            <Image
              src={imageUrl}
              alt={story.mainImage?.alt || story.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="py-5 px-0 flex flex-col flex-grow">
          {/* Category - AFTER the image with bold text */}
          <div className="mb-3">
            <span className="text-sm font-bold uppercase tracking-wider text-black" style={{ fontFamily: '"Inter", sans-serif' }}>
              {categoryName}
            </span>
          </div>
          
          {/* Title with underline animation on hover */}
          <h3 className="text-xl md:text-2xl font-normal text-black mb-4 line-clamp-2 group-hover:text-[#0A2E3D] transition-colors duration-200" style={{ fontFamily: '"Inter", sans-serif' }}>
            <span className="bg-gradient-to-r from-[#0A2E3D] to-[#0A2E3D] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1px]">
              {story.title}
            </span>
          </h3>
          
          <div className="text-base text-gray-600 mb-5 line-clamp-3 flex-grow" style={{ fontFamily: '"Inter", sans-serif' }}>
            {story.shortDescription}
          </div>
          
          {/* See Customer Story link */}
          <div className="flex items-center mt-auto">
            <span className="text-sm font-semibold text-black flex items-center hover:underline" style={{ fontFamily: '"Inter", sans-serif' }}>
              See Customer Story
              <FaChevronRight className="ml-1 text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
