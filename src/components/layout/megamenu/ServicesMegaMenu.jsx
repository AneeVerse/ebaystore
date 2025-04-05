"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";


const ServicesMegaMenu = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Website Services",
      url: "/services#website-services",
      color: "bg-indigo-100 hover:bg-indigo-200 text-indigo-900", 
      items: [
        { name: "Website Design", description: "Stunning websites built to engage.", icon: <FaDesktop />
         },
        { name: "Landing Pages", description: "High-converting pages for your campaigns.", icon: <FaPager /> },
        { name: "SEO Optimization", description: "Boost your search rankings with expert SEO.", icon: <FaSearch /> },
        { name: "GMB Optimization", description: "Dominate local searches with GMB excellence.", icon: <FaMapMarkerAlt /> },
        { name: "Local SEO", description: "Reach your audience with targeted local SEO strategies.", icon: <FaLocationArrow /> },
        { name: "Email Design", description: "Engaging email templates that convert.", icon: <FaEnvelopeOpenText /> },
      ],
    },
    {
      title: "Marketing Services",
      url: "/services#marketing-services",
      color: "bg-amber-100 hover:bg-amber-200 text-amber-900", // Updated to warm amber
      items: [
        { name: "Marketing Strategy", description: "Grow your brand with expert consultants.", icon: <FaChartPie /> },
        { name: "Email Campaign", description: "Personalized email campaigns that convert.", icon: <FaEnvelope /> },
        { name: "Google Ads", description: "Targeted ads to maximize ROI.", icon: <FaGoogle /> },
        { name: "Meta Ads", description: "Creative campaigns that get noticed.", icon: <FaFacebook /> },
        { name: "Influencer Marketing", description: "Boost brand visibility with trusted influencers.", icon: <FaUserFriends /> },
      ],
    },
    {
      title: "Content Writing",
      url: "/services#content-writing",
      color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900", // Updated to deep emerald
      items: [
        { name: "Blog Writing", description: "SEO-friendly blogs tailored to your niche.", icon: <FaPenFancy /> },
        { name: "Ghost Writing", description: "Captivating content under your brand's name.", icon: <FaGhost /> },
      ],
    },
 
    {
      title: "Creative Design Services",
      url: "/services#creative-design-services",
      color: "bg-violet-100 hover:bg-violet-200 text-violet-900", // Updated to sophisticated violet
      items: [
        { name: "Social Media Creatives", description: "Engaging assets for all platforms.", icon: <FaFacebook /> },
        { name: "Presentation Design", description: "Pitch-perfect presentations for your business needs.", icon: <FaSlideshare /> },
        { name: "Brochure Design", description: "Informative and visually stunning brochures.", icon: <FaFilePdf /> },
      ],
    },
  ];
  
  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={"/services"} className={`text-[${color.text}] p-2 cursor-pointer flex items-center group`}>
      <span className={`${isOpen ? "mr-[6px] scale-100 ": " "} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${color.text}]`}></span>  <span className="flex items-center gap-2">Services <FaChevronDown className={`${isOpen ? " -rotate-180 ": " " } group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`} /> </span>  </Link>
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border py-3 overflow-y-auto h-[calc(100vh-80px)] border-gray-200 ">
<Layout>
<div className="grid grid-cols-3 gap-6">
  {menuCategories.slice(0, 2).map((category, index) => (
    <div key={index}>
      <Link onClick={()=>{setIsOpen(false)}} href={category.url} className={`text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}>
        {category.title} <div className="relative"> <FiArrowUpRight className="  z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className=" absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
      </Link>
      <ul className="mt-4 space-y-2">
        {category.items.map((item, idx) => (
          <Link onClick={()=>{setIsOpen(false)}} href={`/services/${item.name.toLowerCase().replace(" ", "-")}`} key={idx} className="flex group px-3 py-2 border-b items-center justify-between gap-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-md font-medium text-gray-700 flex items-center">
                  <span className="h-[5px] w-[5px] bg-secondary-500 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full"></span>  
                  <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                </h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
            <div className="text-gray-700 text-lg self-center">{item.icon}</div>
          </Link>
        ))}
      </ul>
    </div>
  ))}

  {/* Content Writing & Creative Design ek hi column me */}
  <div className="flex gap-12 flex-col">
    {menuCategories.slice(2, 4).map((category, index) => (
      <div key={index}>
       <Link onClick={()=>{setIsOpen(false)}} href={category.url} className={`text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}>
        {category.title} <div className="relative"> <FiArrowUpRight className="  z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className=" absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
      </Link>
        <ul className="mt-4 space-y-2">
          {category.items.map((item, idx) => (
            <Link onClick={()=>{setIsOpen(false)}} href={`/services/${item.name.toLowerCase().replaceAll(" ", "-")}`} key={idx} className="flex group px-3 py-2 border-b items-center justify-between gap-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-md font-medium text-gray-700 flex items-center">
                    <span className="h-[5px] w-[5px] bg-secondary-500 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full"></span>  
                    <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                  </h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <div className="text-gray-700 text-lg self-center">{item.icon}</div>
            </Link>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
</Layout>
</div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
