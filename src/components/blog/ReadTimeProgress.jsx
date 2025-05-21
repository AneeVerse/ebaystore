import React, { useEffect, useState } from 'react';
import { FaRegClock } from "react-icons/fa6";

/**
 * A simple component that displays read time with an animated progress bar
 * This matches the clean style shown in the customer stories page
 */
const ReadTimeProgress = ({ timeToRead = "5" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Extract just the number if timeToRead includes "min read"
  const readTimeNumber = typeof timeToRead === 'string' && timeToRead.includes('min')
    ? timeToRead.split(' ')[0]
    : timeToRead;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    // Smooth Scroll Optimization with Throttle Effect
    let throttleTimeout = null;
    const throttledScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div className="mb-6">
      {/* Read Time Indicator with Progress Bar */}
      <div className="flex items-start mb-2">
        <div className="text-[#101828] flex items-center gap-2 font-medium">
          <FaRegClock className="mt-0.5" />
          <div className="text-lg">{readTimeNumber}</div>
        </div>
        <div className="text-[#101828] ml-1 text-sm mt-0.5">
          min read
        </div>
      </div>
      <div className="h-1 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#0A2E3D] transition-all duration-300 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ReadTimeProgress; 