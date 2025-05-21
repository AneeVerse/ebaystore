"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

const data = [
  {
    firstTitle: "Store Setup",
    secondTitle: "& Design",
    tags: ["eBay Store Setup", "Custom Store Design"],
    url: "/services/ebay-store-setup",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Listings &",
    secondTitle: "Product Management",
    tags: ["Product Listing Optimization", "Product Photography", "Inventory Management"],
    url: "/services/product-listing-optimization",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Sales",
    secondTitle: "& Promotion",
    tags: ["Promotions & Offers Management", "Seasonal Campaign Planning", "Email Marketing for eBay Customers"],
    url: "/services/promotions-offers-management",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Analytics",
    secondTitle: "& Performance",
    tags: ["Performance Analytics & Reporting", "Competitor Analysis"],
    url: "/services/performance-analytics-reporting",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Policy, Compliance",
    secondTitle: "& International",
    tags: ["eBay Policy Compliance Assistance", "Cross-Border Selling Support", "Account Suspension Recovery"],
    url: "/services/ebay-policy-compliance-assistance",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Order & Customer",
    secondTitle: "Operations",
    tags: ["Order Management & Fulfillment", "Customer Support Management", "Return & Refund Management", "Feedback Management"],
    url: "/services/order-management-fulfillment",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Advertising",
    secondTitle: "& Marketing",
    tags: ["eBay Ads Campaign Management", "eBay Dropshipping Assistance"],
    url: "/services/ebay-ads-campaign-management",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Website & Branding",
    secondTitle: "(Add-on Services)",
    tags: ["eCommerce Website Design", "Creative Assets for eBay"],
    url: "/services/ecommerce-website-design",
    image: "/images/home/creative/creative4.png"
  },
];

const duplicatedData = [...data, ...data];

export default function CreativeSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5; // Adjust speed as needed

  // ✅ Calculate Total Width of Scrollable Content
  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.children[0];
      if (firstChild) {
        totalWidth.current = firstChild.offsetWidth * data.length;
      }
    }
  }, []);

  // ✅ Animation Loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;

      if (Math.abs(translateX.current) >= totalWidth.current) {
        translateX.current = 0; // Reset position to ensure smooth loop
      }

      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  // ✅ Handle Pointer Events (Mouse & Touch)
  const handlePointerDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.clientX || e.touches[0].clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    const walk = (x - startX.current) * 2; // Adjust sensitivity
    translateX.current = scrollLeft.current + walk;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  // ✅ Start Animation & Recalculate on Resize
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, calculateWidth]);

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        <div className="max-w-4xl">
           <UiSubheading className="text-secondary-500 mb-2">
           Easy & Hassle-Free
          </UiSubheading>
            <Heading
                    level="h2"
                    color="dark"
                    spacing="lg"
                    className="text-left font-semibold"
                  >
                    Every Type of Creative Work You'll Ever Need,{' '}
                    <AccentText 
                      size="lg" 
                      className={" text-blue-600 whitespace-nowrap"}
                    >
                      and more
                    </AccentText>
                  </Heading>
         
        </div>
      </Layout>

      {/* ✅ Scrolling Content */}
      <div
        className="mt-12 overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      >
        <div
          ref={containerRef}
          className="flex w-max will-change-transform cursor-grab active:cursor-grabbing"
        >
          {duplicatedData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              draggable={false}
              className="relative min-w-[250px] h-[400px] sm:min-w-[300px] sm:h-[500px] group xl:h-[600px] lg:min-w-[330px] flex-shrink-0 mx-2 overflow-hidden hover:translate-y-[-10px] mt-[10px] duration-300 transition-all rounded-xl shadow-lg"
            >
              <img
                src={item.image}
                alt={`${item.firstTitle} ${item.secondTitle}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-start justify-center pt-4">
                <h3 className="text-white text-xl font-semibold text-center">
                  <span className="block">{item.firstTitle}</span>
                  <span className="font-Rock_Salt block">{item.secondTitle}</span>
                </h3>
              </div>

                <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <ul className="flex gap-2  flex-wrap">
                    {item.tags.map((tag, index) => (
                      <li key={index} className="text-white min-w-fit px-[10px] rounded-full py-[3px] border text-xs font-medium">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}