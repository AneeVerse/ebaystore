"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Layout from "../common/Layout";

const ParnterSection = () => {
  const logos = [
    "/images/about/figma.png",
    "/images/about/google.png",
    "/images/about/figma.png",
    "/images/logos/ishanyafoundation.png",
    "/images/about/webflow.png",
    "/images/logos/ishanyafoundation.png",
    "/images/logos/bharathaksha2.png",
    "/images/logos/deepakfertilizer.png",
  ];

  const controls = useAnimation();
  const [currentX, setCurrentX] = useState(0); // Track the current position

  const startAnimation = (fromX = 0) => {
    controls.start({
      x: [fromX, -1000], // Resume from the current position
      transition: {
        repeat: Infinity,
        duration: 20, // Adjust for speed
        ease: "linear",
      },
    });
  };

  // const stopAnimation = () => {
  //   controls.stop();
  // };

  useEffect(() => {
    startAnimation();
  }, []);

  // Debug which logos are actually loading
  useEffect(() => {
    logos.forEach((logo, index) => {
      const img = new Image();
      img.onload = () => console.log(`Partner Logo ${index} loaded successfully: ${logo}`);
      img.onerror = () => console.error(`Partner Logo ${index} failed to load: ${logo}`);
      img.src = logo;
    });
  }, []);

  return (
    <Layout>
    <div className="overflow-hidden   mx-auto max-w-7xl text-white relative">
      <div className="text-center text-md font-light tracking-widest text-secondary mb-12">
      {"Trusted by 500+ of the world's biggest brands".toUpperCase()}
      </div>

      <div className="relative  py-6">
        <motion.div
          animate={controls}
          className="flex whitespace-nowrap"
          onUpdate={(latest) => {
            // Track the current animation progress
            setCurrentX(latest.x || 0);
          }}
          // onHoverStart={stopAnimation} // Stop animation on hover
          // onHoverEnd={() => startAnimation(currentX)} // Resume from the same point
        >
          {/* Original Logos */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => {
            // Check specific logos to resize
            const isIshanya = logo.includes('ishanyafoundation');
            const isBharathaksha = logo.includes('bharathaksha');
            const isDeepak = logo.includes('deepakfertilizer');
            
            return (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}: ${logo}`}
                className={`${isIshanya || isBharathaksha ? 'h-32' : isDeepak ? 'h-24' : 'h-6'} object-contain px-6 w-auto transition-all`}
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.alt = `Error loading: ${logo}`;
                  e.target.src = "/images/logos/placeholder-logo.png"; // Try to show a placeholder
                }}
              />
            );
          })}
        </motion.div>

        {/* Optional gradient fade on edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-secondary-500 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-secondary-500 to-transparent"></div>
      </div>
    
      
    </div>
    </Layout>
  );
};

export default ParnterSection;
