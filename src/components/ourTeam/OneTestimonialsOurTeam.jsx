"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";


const testimonials = [
  {
    name: "J. Henrickson",
    role: "Creative Operations Manager at Roland",
    company: "Roland",
    feedback:
      "At Amazon, it's pretty common to have a big design project and not be able to get the heads in fast enough to get the work done. **aneeverse was the solution that got us moving faster without adding internal headcount.**",
    stats: {
      assetsDelivered: "1,092",
      weeklyHoursSaved: "40",
    },
    imageUrl: "/images/our-team/team1.avif",
    caseStudyUrl: "#",
  },
];

export default function OneTestimonialsOurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className=" bg-primary-500 py-10 ">
    <Layout className="flex flex-col md:flex-row items-center justify-between ">
      {/* Image Section */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0"
      >
        <img
          src={currentTestimonial.imageUrl}
          alt={currentTestimonial.name}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-300 shadow-lg"
        />
      </motion.div>
      
      {/* Text Section */}
      <motion.div
        key={`text-${currentIndex}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:ml-10 mt-6 flex-1 md:mt-0 text-center md:text-left"
      >
        <h2 className="text-2xl font-semibold text-secondary-500 mb-6">{currentTestimonial.company}</h2>
        <p className="text-secondary-500 italic text-xl ">
          {currentTestimonial.feedback.split("**").map((part, i) =>
            i % 2 === 0 ? part : <strong key={i}>{part}</strong>
          )}
        </p>
        <p className="mt-8 text-gray-600 font-medium">
          {currentTestimonial.name}, {currentTestimonial.role}
        </p>
        
        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-between gap-6 mt-8">
          <div>
            <p className="text-xl font-bold text-secondary-500">{currentTestimonial.stats.assetsDelivered}</p>
            <p className="text-gray-500 text-sm">Assets Delivered</p>
          </div>
          <div className="">
            <p className="text-xl font-bold text-secondary-500">{currentTestimonial.stats.weeklyHoursSaved}</p>
            <p className="text-gray-500 text-sm">Weekly hours saved</p>
          </div>
          {/*  */}
          <Link href={currentTestimonial.caseStudyUrl}
           className="flex  sm:w-[350px] gap-3 items-center text-secondary-500 border rounded-xl p-3 ">
          <img src={"/images/our-team/team1.avif"}
            alt="Amazon"
            className="w-16 rounded-xl object-cover h-full" />
          <div>
            <div className=" flex justify-between text-gray-500">
                <span>Amazon</span>
                <MdOutlineArrowOutward className="inline" />
            </div>
            <div className="line-clamp-2 text-left">At Amazon, it's pretty common to have a big design project and not be able to get the heads
                in fast enough to get the work..</div>

          </div>
            </Link>
        </div>
      </motion.div>
    </Layout>
    </div>
  );
}
