"use client"
import React, { useEffect, useState } from "react";
import { FaArrowUp , FaArrowDown} from "react-icons/fa6";
import { motion } from "framer-motion";
import Layout from "../common/Layout";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Amrita Thakar",
      role: "Founder",
      company: "JM Visa Services",
      feedback: "Working with AneeVerse got us to the #1 spot in Mumbai through smart blog strategies and GMB optimization. Our leads have grown, and we've even saved on marketing costs. Really glad we made this move!",
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
      name: "Navin Agarwal",
      role: "Founder",
      company: "Novino Inks Pvt Ltd",
      feedback: "The biggest benefit has been the time saved. AneeVerse built a high-converting eCommerce website that truly reflects our brand. The level of customization and efficiency they brought in is unmatched.",
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
      name: "Vikram Manghnani",
      role: "VMC",
      company: "VMC",
      feedback: "AneeVerse helped us with our creative work. They brought lots of fun ideas that made everything simple and bright. It felt like having a whole team of friends.",
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
    <div className="relative py-10 bg-secondary-500 text-primary-500">
      <Layout>
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Image Section */}
          <div className="flex min-w-fit flex-row lg:flex-col justify-center items-center gap-4">
            {/* Previous Testimonial Image */}
            <motion.img
              src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].imageUrl}
              alt="Previous Testimonial"
              className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover opacity-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Current Testimonial Image */}
            <motion.img
              key={currentIndex}
              src={testimonials[currentIndex].imageUrl}
              alt="Current Testimonial"
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-gray-300 shadow-md"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Next Testimonial Image */}
            <motion.img
              src={testimonials[(currentIndex + 1) % testimonials.length].imageUrl}
              alt="Next Testimonial"
              className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover opacity-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content Section */}
          <motion.div
            key={currentIndex}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold">
              {testimonials[currentIndex].company}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-left my-8">
              "{testimonials[currentIndex].feedback}"
            </p>
            <p className="font-medium italic text-gray-300">
              {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
            </p>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-between gap-4 mb-8 mt-10">
              {Object.entries(testimonials[currentIndex].stats).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/10 flex-1 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <p className="text-2xl font-bold mb-1">{value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                </div>
              ))}
            </div>

            {/* Case Study Link */}
            {/* <a
              href={testimonials[currentIndex].caseStudyUrl}
              className="inline-flex items-center gap-2 group font-medium text-white/90 transition-colors"
            >
              {testimonials[currentIndex].caseStudy}
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </a> */}
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
