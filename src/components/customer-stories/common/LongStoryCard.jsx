"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function LongStoryCard({ item }) {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);

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

  return (
    <div
      className="block min-w-[300px] sm:min-w-[350px] md:min-w-[420px] relative rounded-xl overflow-hidden shadow-lg bg-white select-none"
      onMouseDown={handlePointerStart}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerEnd}
      onTouchStart={handlePointerStart}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerEnd}
    >
      {/* Conditionally render Link or div based on dragging state */}
      {!isDragging ? (
        <Link href={item.link} draggable={false} className="select-none block">
          <CardContent item={item} />
        </Link>
      ) : (
        <div className="select-none">
          <CardContent item={item} />
        </div>
      )}
    </div>
  );
}

// Card Content Component (to avoid duplication)
const CardContent = ({ item }) => {
  return (
    <>
      {/* Background Images */}
      <div className="relative group w-full h-[500px] sm:h-[600px] select-none">
        {/* Background Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          draggable={false}
          className="object-cover group-hover:scale-105 duration-300 w-full h-full select-none pointer-events-none"
          priority
        />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 select-none pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-5 left-5 right-5 text-white select-none pointer-events-none">
        <h3 className="text-lg font-semibold">{item.title}</h3>

        {/* Branding & CTA */}
        <div className="flex items-center h-[30px] mt-3 gap-2 select-none pointer-events-none">
          <img
            src={item.logo}
            alt={`${item.title} Logo`}
            className="object-cover h-full self-center  w-auto select-none pointer-events-none"
            draggable={false}
          />
          <span className="block self-center text-sm font-medium group-hover:underline select-none pointer-events-none">
            Read the story →
          </span>
        </div>
      </div>
    </>
  );
};