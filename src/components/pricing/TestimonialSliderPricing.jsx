"use client"
import React, { useEffect, useState } from "react";
import { FaArrowUp , FaArrowDown} from "react-icons/fa6";
import { motion } from "framer-motion";
import Layout from "../common/Layout";

export default function TestimonialSliderPricing() {
  const testimonials = [
    {
      name: "Justin Rands",
      role: "Director of Brand at Oyster",
      company: "Oyster",
      feedback: "I am beyond happy with the work. Your designers routinely save the day!",
      stats: {
        productionTimeSaved: "57%",
        costSavings: "$10,775",
        videosDelivered: "20",
      },
      imageUrl: "/images/about/team1.avif",
      cardImage: "/images/about/team1.avif",
      caseStudy: "How Oyster Automates Global Social Media Campaigns",
      caseStudyUrl: "/case-studies/oyster",
    },
    {
      name: "John Doe",
      role: "CEO at Example Corp",
      company: "Example Corp",
      feedback: "The team is fantastic! They helped us scale our content creation effortlessly.",
      stats: {
        productionTimeSaved: "40%",
        costSavings: "$8,000",
        videosDelivered: "15",
      },
      imageUrl: "/images/about/team2.avif",
      cardImage: "/images/about/team2.avif",
      caseStudy: "Scaling Content Creation with Example Corp",
      caseStudyUrl: "/case-studies/example-corp",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager at Acme Inc.",
      company: "Acme Inc.",
      feedback: "Their expertise is unmatched. We've seen incredible ROI since partnering with them.",
      stats: {
        productionTimeSaved: "65%",
        costSavings: "$15,000",
        videosDelivered: "25",
      },
      imageUrl: "/images/about/team3.avif",
      cardImage: "/images/about/team3.avif",
      caseStudy: "Driving ROI with Acme Inc.",
      caseStudyUrl: "/case-studies/acme-inc",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
  
//   automatically change the testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    
        <div className="relative py-10 bg-primary-500 text-secondary-500">
          <Layout>
            {/* Vertical Navigation */}
            <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
              <div className="flex flex-row md:flex-col justify-center items-center gap-4">
                {/* Previous Testimonial */}
                <motion.img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].imageUrl}
                  alt="Previous Testimonial"
                  className="w-20 h-20 rounded-full object-cover opacity-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Current Testimonial */}
                <motion.img
                  key={currentIndex}
                  src={testimonials[currentIndex].imageUrl}
                  alt="Current Testimonial"
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Next Testimonial */}
                <motion.img
                  src={testimonials[(currentIndex + 1) % testimonials.length].imageUrl}
                  alt="Next Testimonial"
                  className="w-20 h-20 rounded-full object-cover opacity-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
    
              {/* Current Testimonial Content */}
              <motion.div
                key={currentIndex}
                className="relative flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-semibold mt-4">
                  {testimonials[currentIndex].company}
                </h2>
                <p className="text-lg italic text-left my-4">
                  "{testimonials[currentIndex].feedback}"
                </p>
                <p className="font-medium text-gray-600">
                  {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
                </p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-lg font-bold">
                      {testimonials[currentIndex].stats.productionTimeSaved}
                    </p>
                    <p className="text-sm text-gray-500">Time Saved</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">
                      {testimonials[currentIndex].stats.costSavings}
                    </p>
                    <p className="text-sm text-gray-500">Cost Savings</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">
                      {testimonials[currentIndex].stats.videosDelivered}
                    </p>
                    <p className="text-sm text-gray-500">Videos Delivered</p>
                  </div>
                </div>
                {/* Case Study */}
                <a
                  href={testimonials[currentIndex].caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-4"
                >
                  {testimonials[currentIndex].caseStudy}
                </a>
              </motion.div>
    
              {/* Buttons */}
              <div className="flex flex-row md:flex-col items-center gap-6">
                <button
                  onClick={handlePrev}
                  className="p-2 border -rotate-90 md:rotate-0 rounded-full shadow hover:bg-gray-300"
                >
                  <FaArrowUp />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border -rotate-90 md:rotate-0 rounded-full shadow hover:bg-gray-300"
                >
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </Layout>
        </div>
      );
}
