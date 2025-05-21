"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow, FaStore, FaPaintBrush, FaBoxOpen, FaCamera, FaClipboardList, FaTags, FaGift, FaEnvelope, FaChartLine, FaChartBar, FaBalanceScale, FaGlobe, FaGavel, FaUndo, FaCommentDots, FaBullhorn, FaShippingFast, FaUserShield, FaHandshake, FaFileInvoiceDollar, FaChartPie, FaUsers, FaCogs, FaFileAlt, FaGlobeAmericas, FaSyncAlt, FaHeadset, FaTruck, FaFileSignature, FaAd, FaGlobeEurope, FaRegSmile, FaRegChartBar, FaRegEnvelope, FaRegFileAlt, FaRegListAlt, FaRegCheckCircle, FaRegTimesCircle, FaRegStar, FaRegThumbsUp, FaRegThumbsDown, FaRegEdit, FaRegImage, FaRegChartPie, FaRegChartLine, FaRegMoneyBillAlt, FaRegCreditCard, FaRegCalendarAlt, FaRegBell, FaRegClock, FaRegQuestionCircle, FaRegLightbulb, FaRegHeart, FaRegBookmark, FaRegPaperPlane, FaRegAddressBook, FaRegBuilding, FaRegUser, FaRegEnvelopeOpen, FaRegFilePdf, FaRegFileWord, FaRegFileExcel, FaRegFilePowerpoint, FaRegFileImage, FaRegFileVideo, FaRegFileAudio, FaRegFileArchive, FaRegFileCode, FaRegFileAlt as FaRegFileAlt2 } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";


const ServicesMegaMenu = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Store Setup & Design",
      url: "/services#store-setup-design",
      color: "bg-indigo-100 hover:bg-indigo-200 text-indigo-900",
      items: [
        { name: "eBay Store Setup", description: "Complete setup for your eBay store.", icon: <FaStore /> },
        { name: "Custom Store Design", description: "Unique, branded store design.", icon: <FaPaintBrush /> },
      ],
    },
    {
      title: "Listings & Product Management",
      url: "/services#listings-product-management",
      color: "bg-amber-100 hover:bg-amber-200 text-amber-900",
      items: [
        { name: "Product Listing Optimization", description: "Optimized listings for better sales.", icon: <FaBoxOpen /> },
        { name: "Product Photography", description: "Professional product images.", icon: <FaCamera /> },
        { name: "Inventory Management", description: "Efficient stock and order tracking.", icon: <FaClipboardList /> },
      ],
    },
    {
      title: "Sales & Promotion",
      url: "/services#sales-promotion",
      color: "bg-green-100 hover:bg-green-200 text-green-900",
      items: [
        { name: "Promotions & Offers Management", description: "Run and manage eBay promotions.", icon: <FaTags /> },
        { name: "Seasonal Campaign Planning", description: "Plan and execute seasonal sales.", icon: <FaGift /> },
        { name: "Email Marketing for eBay Customers", description: "Targeted email campaigns.", icon: <FaEnvelope /> },
      ],
    },
    {
      title: "Analytics & Performance",
      url: "/services#analytics-performance",
      color: "bg-blue-100 hover:bg-blue-200 text-blue-900",
      items: [
        { name: "Performance Analytics & Reporting", description: "Track and analyze store performance.", icon: <FaChartLine /> },
        { name: "Competitor Analysis", description: "Stay ahead with competitor insights.", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Policy, Compliance & International",
      url: "/services#policy-compliance-international",
      color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-900",
      items: [
        { name: "eBay Policy Compliance Assistance", description: "Stay compliant with eBay rules.", icon: <FaBalanceScale /> },
        { name: "Cross-Border Selling Support", description: "Expand internationally with ease.", icon: <FaGlobe /> },
        { name: "Account Suspension Recovery", description: "Help with account reinstatement.", icon: <FaGavel /> },
      ],
    },
    {
      title: "Order & Customer Operations",
      url: "/services#order-customer-operations",
      color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
      items: [
        { name: "Order Management & Fulfillment", description: "Seamless order processing.", icon: <FaBoxOpen /> },
        { name: "Customer Support Management", description: "Excellent customer service.", icon: <FaHeadset /> },
        { name: "Return & Refund Management", description: "Handle returns and refunds smoothly.", icon: <FaUndo /> },
        { name: "Feedback Management", description: "Manage and improve feedback.", icon: <FaCommentDots /> },
      ],
    },
    {
      title: "Advertising & Marketing",
      url: "/services#advertising-marketing",
      color: "bg-violet-100 hover:bg-violet-200 text-violet-900",
      items: [
        { name: "eBay Ads Campaign Management", description: "Maximize reach with eBay ads.", icon: <FaBullhorn /> },
        { name: "eBay Dropshipping Assistance", description: "Support for dropshipping business.", icon: <FaShippingFast /> },
      ],
    },
    {
      title: "Website & Branding (Add-on Services)",
      url: "/services#website-branding",
      color: "bg-pink-100 hover:bg-pink-200 text-pink-900",
      items: [
        { name: "eCommerce Website Design", description: "Custom eCommerce websites.", icon: <FaGlobeAmericas /> },
        { name: "Creative Assets for eBay", description: "Banners, graphics, and more.", icon: <FaPaintBrush /> },
      ],
    },
  ];
  
  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href={"/services"} 
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        <span 
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
        ></span>  
        <span className="flex items-center gap-2">
          Services 
          <FaChevronDown className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`} />
        </span>
      </Link>
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border py-3 overflow-y-auto h-[calc(100vh-80px)] border-gray-200 ">
<Layout>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {menuCategories.map((category, index) => (
      <div key={index}>
        <Link onClick={()=>{setIsOpen(false)}} href={category.url} className={`text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}>
          {category.title} <div className="relative"> <FiArrowUpRight className="  z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" /> <FiArrowUpRight className=" absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" /></div>
        </Link>
        <ul className="mt-4 space-y-2">
          {category.items.map((item, idx) => (
            <Link onClick={()=>{setIsOpen(false)}} href={`/services/${item.name.toLowerCase().replace(/\s+/g, "-")}`} key={idx} className="flex group px-3 py-2 border-b items-center justify-between gap-3">
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
</Layout>
</div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
