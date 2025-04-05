"use client";
import React, { useRef, useState } from "react";
import Layout from "../common/Layout";
import LongStoryCard from "./common/LongStoryCard";

const team = [
  {
    title: "Email Campaign Strategy",
    link: "/customer-stories/boosting-sales-with-optimized-landing-pages",
    image: "/images/customer-stories/story1/portrait-image.avif",
    logo: "/images/customer-stories/story1/shopify-logo.avif",
  },
  {
    title: "Automated Email Sequences",
    link: "/customer-stories/boosting-sales-with-optimized-landing-pages",
    image: "/images/customer-stories/story2/portrait-image.avif",
    logo: "/images/customer-stories/story2/amazon-logo.avif",
  },
  {
    title: "Targeted Email Segmentation",
    link: "/customer-stories/boosting-sales-with-optimized-landing-pages",
    image: "/images/customer-stories/story3/portrait-image.avif",
    logo: "/images/customer-stories/story3/boomi-logo.avif",
  },
  {
    title: "Email Campaign Strategy",
    link: "/customer-stories/boosting-sales-with-optimized-landing-pages",
    image: "/images/customer-stories/story1/portrait-image.avif",
    logo: "/images/customer-stories/story1/shopify-logo.avif",
  },
];

const CustomerStoryHero = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Scroll while dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pb-16 pt-[120px] mt-[-80px]">
      <Layout>
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-wide text-secondary-500">Learning Center</h4>
          <h2 className="text-4xl md:text-6xl mt-3 font-semibold text-secondary-500">
            Customer Stories
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-500 mt-8">
            Hear from Superside customers about the design challenges they’ve faced. From better branding to battling burnout, find out how we helped them implement solutions, fast.
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto py-4 scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {team.map((item, index) => (
            <LongStoryCard item={item} key={index} />
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default CustomerStoryHero;