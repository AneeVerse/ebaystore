"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";

export default function LongStoryCard({ story }) {
  const [isDragging, setIsDragging] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [logoError, setLogoError] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');
  const startX = useRef(0);
  const startY = useRef(0);

  // Process image URL on component mount
  useEffect(() => {
    if (story?.mainImage?.asset?._ref) {
      try {
        const imgUrl = urlForImage(story.mainImage).url();
        setImageUrl(imgUrl);
      } catch (error) {
        console.error("Error processing image in LongStoryCard:", error);
        setImageError(true);
      }
    } else {
      setImageError(true);
    }
    
    // Process customer logo if available
    if (story?.customerLogo?.asset?._ref) {
      try {
        const logo = urlForImage(story.customerLogo).url();
        console.log("Customer logo URL generated:", logo); // Debug log
        setLogoUrl(logo);
        setLogoError(false); // Reset error state when logo is found
      } catch (error) {
        console.error("Error processing logo in LongStoryCard:", error);
        setLogoError(true);
      }
    } else {
      console.log("No customer logo found for story:", story.title);
      setLogoError(true);
    }
  }, [story]);

  // Handle mouse/touch start
  const handlePointerStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
    startY.current = e.clientY || e.touches[0].clientY;
    setIsDragging(false); // Reset dragging state
  };

  // Handle mouse/touch move
  const handlePointerMove = (e) => {
    if (!isDragging) {
      const currentX = e.clientX || e.touches[0].clientX;
      const currentY = e.clientY || e.touches[0].clientY;

      // Check if the pointer has moved significantly
      if (
        Math.abs(currentX - startX.current) > 5 ||
        Math.abs(currentY - startY.current) > 5
      ) {
        setIsDragging(true); // Disable click if dragged
      }
    }
  };

  // Handle mouse/touch end
  const handlePointerEnd = (e) => {
    if (isDragging) {
      e.preventDefault(); // Prevent link click if dragged
    }
    setIsDragging(false); // Reset dragging state
  };

  // Get the primary category
  const categoryName = story.categories && story.categories.length > 0
    ? story.categories[0].title
    : 'General';

  // Generate the story link
  const storyLink = `/customer-stories/${story.slug.current}`;

  return (
    <div
      className="block min-w-[300px] sm:min-w-[300px] md:min-w-[418px] relative rounded-xl overflow-hidden shadow-lg bg-white select-none ml-2"
      onMouseDown={handlePointerStart}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerEnd}
      onTouchStart={handlePointerStart}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerEnd}
    >
      {/* Conditionally render Link or div based on dragging state */}
      {!isDragging ? (
        <Link href={storyLink} draggable={false} className="select-none block">
          <CardContent 
            story={story} 
            categoryName={categoryName} 
            imageUrl={imageUrl}
            imageError={imageError}
            setImageError={setImageError}
            logoUrl={logoUrl}
            logoError={logoError}
            setLogoError={setLogoError}
          />
        </Link>
      ) : (
        <div className="select-none">
          <CardContent 
            story={story} 
            categoryName={categoryName} 
            imageUrl={imageUrl}
            imageError={imageError}
            setImageError={setImageError}
            logoUrl={logoUrl}
            logoError={logoError}
            setLogoError={setLogoError}
          />
        </div>
      )}
    </div>
  );
}

// Card Content Component (to avoid duplication)
const CardContent = ({ story, categoryName, imageUrl, imageError, setImageError, logoUrl, logoError, setLogoError }) => {
  // Debug log
  if (logoUrl) {
    console.log("Rendering logo:", logoUrl);
  }
  
  return (
    <>
      {/* Background Images */}
      <div className="relative group w-full h-[500px] sm:h-[600px] select-none bg-gray-200">
        {/* Background Image */}
        {!imageError && imageUrl ? (
          <Image
            src={imageUrl}
            alt={story.mainImage?.alt || story.title}
            fill
            draggable={false}
            className="object-cover duration-500 w-full h-full select-none pointer-events-none group-hover:scale-110 transition-transform"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
            <span>No image available</span>
          </div>
        )}

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 select-none pointer-events-none"></div>
      </div>

      {/* Content - Superside Style */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white select-none pointer-events-none">
        {/* Title - Large, Bold, Positioned at Bottom */}
        <h3 className="text-xl md:text-2xl font-normal mb-5 leading-tight max-w-[90%]">{story.title}</h3>
        
        {/* Logo and CTA Row */}
        <div className="flex items-center justify-between w-full">
          {/* Customer Logo - Enhanced for visibility */}
          {!logoError && logoUrl ? (
            <div className="relative h-12 w-36 overflow-hidden">
              <Image
                src={logoUrl}
                alt={story.customerLogo?.alt || `${story.title} logo`}
                fill
                className="object-contain"
                onError={(e) => {
                  console.error("Logo failed to load:", logoUrl);
                  setLogoError(true);
                }}
              />
            </div>
          ) : (
            <div className="w-36"></div> // Empty placeholder to maintain layout
          )}
          
          {/* Read the story link */}
          <div className="flex items-center pointer-events-auto mr-16">
            <span className="text-sm font-semibold whitespace-nowrap hover:underline transition-all duration-300">
              Read the story
              <span className="inline-block ml-1 transform translate-y-px">›</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};