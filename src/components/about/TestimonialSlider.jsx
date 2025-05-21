"use client"
import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../common/Layout";

// Custom VMC Logo component with mobile-specific sizing
const VMCLogo = ({ isMobile }) => {
  const style = {
    width: 'auto',
    height: 'auto',
    maxWidth: isMobile ? '100px' : '120px',
    maxHeight: isMobile ? '35px' : '60px',
    objectFit: 'contain',
    objectPosition: isMobile ? 'center' : 'left',
    display: 'block',
    margin: isMobile ? '0 auto' : '0'
  };

  // Container style for positioning
  const containerStyle = {
    display: 'flex',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    width: '100%',
    marginTop: isMobile ? '40px' : '40px',
    marginBottom: isMobile ? '16px' : '4px'
  };

  return (
    <div style={containerStyle}>
      <img 
        src={`/images/testimonals/vmc-logo.webp?v=${Date.now()}`}
        alt="VMC Logo"
        style={style}
      />
    </div>
  );
};

// Custom JM Visa Logo component with mobile-specific sizing
const JMVisaLogo = ({ isMobile }) => {
  const style = {
    width: 'auto',
    height: 'auto',
    filter: 'brightness(0) invert(1)',
    objectPosition: isMobile ? 'center' : 'left',
    maxHeight: isMobile ? '120px' : '260px', 
    display: 'block',
    margin: isMobile ? '0 auto' : '0'
  };

  // Container style for positioning
  const containerStyle = {
    display: 'flex',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    width: '100%',
    marginLeft: isMobile ? '0' : '-80px',
    marginTop: isMobile ? '20px' : '0',
    marginBottom: isMobile ? '-10px' : '0'
  };

  return (
    <div style={containerStyle}>
      <img 
        src={`/images/testimonals/jm-visa-logo.png?v=${Date.now()}`}
        alt="JM Visa Services Logo"
        style={style}
      />
    </div>
  );
};

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Vikram Manghnani",
      role: "Founder, VMC",
      company: "VMC",
      feedback: <><span className="font-bold">AneeVerse brought fresh, fun ideas that made our creative work simple and engaging</span>. They felt like a team of friends who truly cared about our vision, making them key to our expansion.</>,
      imageUrl: "/images/testimonals/Vmc.png",
      companyLogo: "/images/testimonals/vmc-logo.webp"
    },
    {
      name: "Navin Agarwal",
      role: "Founder",
      company: "Novino Inks Pvt Ltd",
      feedback: <>The biggest win? The time we saved. AneeVerse built a stunning eCommerce site that truly reflects our brand. <span className="font-bold">Abhijeet understood my paintings on a personal level</span>—he knew exactly what I wanted to express and brought it to life with unmatched customization and efficiency.</>,
      imageUrl: "/images/testimonals/navino.png"
    },
    {
      name: "Amrita Thakar",
      role: "Founder, JM Visa Services",
      company: "JM Visa Services",
      feedback: <>AneeVerse redesigned our website, and the leads started flowing. Their smart <span className="font-bold">blog and GMB strategies got us to #1 in Mumbai while cutting marketing costs</span>. Best move we made.</>,
      imageUrl: "/images/testimonals/jm-visa.png",
      companyLogo: "/images/testimonals/jm-visa-logo.png"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    setDragStart({ x: clientX, y: clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
    
    if (isMobile) {
      const offsetX = (clientX - dragStart.x);
      // Constrain the drag offset to a maximum value
      const constrainedOffsetX = Math.max(Math.min(offsetX, 100), -100);
      setDragOffset({ x: constrainedOffsetX, y: 0 });
    } else {
      const offsetY = (clientY - dragStart.y);
      // Constrain the drag offset to a maximum value
      const constrainedOffsetY = Math.max(Math.min(offsetY, 100), -100);
      setDragOffset({ x: 0, y: constrainedOffsetY });
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const offset = isMobile ? dragOffset.x : dragOffset.y;
    
    // Change slide based on drag distance with reduced threshold
    if (Math.abs(offset) > 20) {
      if (offset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    // Reset the offset immediately
    setDragOffset({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  return (
    <div className="relative py-6 sm:py-10 bg-secondary-500 text-primary-500">
      <Layout>
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 px-4 sm:px-0">
          {/* Image Section */}
          <div 
            ref={containerRef}
            className="flex min-w-fit flex-row lg:flex-col justify-center items-center gap-2 sm:gap-4 select-none cursor-grab active:cursor-grabbing overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
            style={{
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              transform: isMobile ? `translateX(${dragOffset.x}px)` : `translateY(${dragOffset.y}px)`
            }}
          >
            <AnimatePresence mode="wait">
              {/* Previous Testimonial Image */}
              <motion.div
                key={`prev-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] relative"
                initial={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.5,
                  scale: 0.8
                }}
                exit={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].imageUrl}
                  alt="Previous Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-50"
                  draggable={false}
                />
              </motion.div>

              {/* Current Testimonial Image */}
              <motion.div
                key={`current-${currentIndex}`}
                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] relative z-10"
                initial={{ scale: 0.8 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.8 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.8 : 0) : 0,
                  scale: 1
                }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt="Current Testimonial"
                  className="w-full h-full rounded-full object-cover border-4 border-gray-300 shadow-md"
                  draggable={false}
                />
              </motion.div>

              {/* Next Testimonial Image */}
              <motion.div
                key={`next-${currentIndex}`}
                className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] relative"
                initial={isMobile ? { x: 50, opacity: 0 } : { y: 50, opacity: 0 }}
                animate={{ 
                  x: isMobile ? (isDragging ? dragOffset.x * 0.5 : 0) : 0,
                  y: !isMobile ? (isDragging ? dragOffset.y * 0.5 : 0) : 0,
                  opacity: 0.5,
                  scale: 0.8
                }}
                exit={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].imageUrl}
                  alt="Next Testimonial"
                  className="w-full h-full rounded-full object-cover opacity-50"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <motion.div
            key={currentIndex}
            className={`flex flex-col w-full lg:w-auto px-2 sm:px-0 ${
              testimonials[currentIndex].company === "JM Visa Services" && !isMobile ? "-mt-20" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-start lg:items-start gap-2 w-full">
              {testimonials[currentIndex].companyLogo ? (
                <div className={`flex flex-col ${isMobile ? 'items-center' : 'items-start'} w-full max-w-[600px]`}>
                  {testimonials[currentIndex].company === "VMC" ? (
                    <VMCLogo isMobile={isMobile} />
                  ) : testimonials[currentIndex].company === "JM Visa Services" ? (
                    <JMVisaLogo isMobile={isMobile} />
                  ) : (
                    <img
                      src={testimonials[currentIndex].companyLogo}
                      alt={`${testimonials[currentIndex].company} Logo`}
                      className="w-full h-auto object-contain"
                      style={{
                        objectPosition: "center",
                        maxHeight: "60px"
                      }}
                    />
                  )}
                </div>
              ) : (
                <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-center lg:text-left w-full">
                  {testimonials[currentIndex].company}
                </h2>
              )}
            </div>
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center lg:text-left ${
              testimonials[currentIndex].company === "JM Visa Services" 
                ? isMobile ? "mt-0" : "-mt-4" 
                : isMobile ? "mt-0" : "my-4 sm:my-6"
            }`}>
              "{testimonials[currentIndex].feedback}"
            </p>
            <p className={`font-medium italic text-gray-300 text-center lg:text-left ${
              testimonials[currentIndex].company === "JM Visa Services" ? "mt-4" : "mt-4"
            }`}>
              {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-row lg:flex-col items-center gap-6">
            <button
              onClick={handlePrev}
              className="p-2 border -rotate-90 lg:rotate-0 rounded-full shadow hover:bg-gray-300"
            >
              <FaArrowUp />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border -rotate-90 lg:rotate-0 rounded-full shadow hover:bg-gray-300"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
