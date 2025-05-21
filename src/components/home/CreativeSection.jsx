"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

const data = [
  {
    firstTitle: "Website", secondTitle: "Design",
    tags: ["E-commerce", "UI/UX", "Custom Design", "Responsive Design", "CMS Integration"],
    url: "/services/website-design",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Landing", secondTitle: "Pages",
    tags: ["High Conversion", "Lead Generation", "A/B Testing", "Minimal UI", "Fast Loading"],
    url: "/services/landing-pages",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "SEO", secondTitle: "Optimization",
    tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Backlink Building", "Content Optimization"],
    url: "/services/seo-optimization",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "GMB", secondTitle: "Optimization",
    tags: ["Google My Business", "Local Ranking", "Map SEO", "Business Profile", "Review Management"],
    url: "/services/gmb-optimization",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Local", secondTitle: "SEO",
    tags: ["Geo-Targeting", "NAP Consistency", "Local Listings", "Customer Reviews", "Local Backlinks"],
    url: "/services/local-seo",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Email", secondTitle: "Design",
    tags: ["Responsive Emails", "Newsletter Templates", "HTML Emails", "Transactional Emails", "Marketing Campaigns"],
    url: "/services/email-design",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Marketing", secondTitle: "Strategy",
    tags: ["Brand Awareness", "Customer Retention", "Market Research", "Competitor Analysis", "Growth Hacking"],
    url: "/services/marketing-strategy",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Email", secondTitle: "Campaign",
    tags: ["Personalized Emails", "Automated Sequences", "Lead Nurturing", "Email Analytics", "A/B Testing"],
    url: "/services/email-campaign",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Google", secondTitle: "Ads",
    tags: ["PPC", "Keyword Targeting", "Ad Copywriting", "Performance Tracking", "Conversion Optimization"],
    url: "/services/google-ads",
    image: "/images/home/creative/creative1.png"
  },
  {
    firstTitle: "Meta", secondTitle: "Ads",
    tags: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Video Ads", "Retargeting Campaigns"],
    url: "/services/meta-ads",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Influencer", secondTitle: "Marketing",
    tags: ["Brand Collaborations", "Social Proof", "Sponsored Posts", "Influencer Outreach", "Engagement Growth"],
    url: "/services/influencer-marketing",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Blog", secondTitle: "Writing",
    tags: ["SEO Blogs", "Long-Form Content", "Industry Research", "Engaging Storytelling", "Content Strategy"],
    url: "/services/blog-writing",
    image: "/images/home/creative/creative4.png"
  },
  {
    firstTitle: "Ghost", secondTitle: "Writing",
    tags: ["Personal Branding", "Book Writing", "Thought Leadership", "SEO Optimization", "Confidential Content"],
    url: "/services/ghost-writing",
    image: "/images/home/creative/creative2.png"
  },
  {
    firstTitle: "Social Media", secondTitle: "Creatives",
    tags: ["Social Posts", "Ad Creatives", "Engaging Graphics", "Brand Consistency", "Platform-Specific Design"],
    url: "/services/social-media-creatives",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Presentation", secondTitle: "Design",
    tags: ["Business Pitches", "Infographics", "Slide Decks", "Storytelling", "Professional Templates"],
    url: "/services/presentation-design",
    image: "/images/home/creative/creative3.png"
  },
  {
    firstTitle: "Brochure", secondTitle: "Design",
    tags: ["Company Profiles", "Marketing Brochures", "Product Catalogs", "Print & Digital", "Attractive Layouts"],
    url: "/services/brochure-design",
    image: "/images/home/creative/creative3.png"
  }
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