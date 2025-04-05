"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Layout from "../common/Layout";

const ParnterSection = () => {
  const logos = [
    "/images/about/figma.png",
    "/images/about/google.png",
    "/images/about/figma.png",
    "/images/about/epic.png",
    "/images/about/webflow.png",
    "/images/about/zapier.png",
    "/images/about/kellogs.png",
    "/images/about/novarits.png",
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
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-6 object-contain   px-6 w-auto  transition-all"
            />
          ))}
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
