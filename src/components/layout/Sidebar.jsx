"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlinePlay, HiOutlineClipboardList, HiOutlinePencilAlt, HiOutlineUserGroup } from "react-icons/hi";
import { FaDesktop, FaPager, FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FaPenFancy, FaGhost, FaFileAlt, FaTags } from "react-icons/fa";
import { FaChartPie, FaEnvelope, FaGoogle, FaFacebook, FaUserFriends } from "react-icons/fa";
import { FaEnvelopeOpenText, FaSlideshare, FaPaintBrush, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { blogs } from "@/data/blogData";
import { customerStories } from "@/data/customerStoriesData";
import { FaStore, FaBoxOpen, FaCamera, FaClipboardList, FaGift, FaChartLine, FaChartBar, FaBalanceScale, FaGlobe, FaGavel, FaUndo, FaCommentDots, FaBullhorn, FaShippingFast, FaGlobeAmericas, FaHeadset } from "react-icons/fa";

// Menu Categories Data
const menuCategories = [
  {
    title: "Store Setup & Design",
    link: "/services#store-setup-design",
    color: "bg-indigo-100 text-indigo-900",
    items: [
      { name: "eBay Store Setup", description: "Complete setup for your eBay store.", icon: <FaStore />, link: "/services/ebay-store-setup" },
      { name: "Custom Store Design", description: "Unique, branded store design.", icon: <FaPaintBrush />, link: "/services/custom-store-design" },
    ],
  },
  {
    title: "Listings & Product Management",
    link: "/services#listings-product-management",
    color: "bg-amber-100 text-amber-900",
    items: [
      { name: "Product Listing Optimization", description: "Optimized listings for better sales.", icon: <FaBoxOpen />, link: "/services/product-listing-optimization" },
      { name: "Product Photography", description: "Professional product images.", icon: <FaCamera />, link: "/services/product-photography" },
      { name: "Inventory Management", description: "Efficient stock and order tracking.", icon: <FaClipboardList />, link: "/services/inventory-management" },
    ],
  },
  {
    title: "Sales & Promotion",
    link: "/services#sales-promotion",
    color: "bg-green-100 text-green-900",
    items: [
      { name: "Promotions & Offers Management", description: "Run and manage eBay promotions.", icon: <FaTags />, link: "/services/promotions-offers-management" },
      { name: "Seasonal Campaign Planning", description: "Plan and execute seasonal sales.", icon: <FaGift />, link: "/services/seasonal-campaign-planning" },
      { name: "Email Marketing for eBay Customers", description: "Targeted email campaigns.", icon: <FaEnvelope />, link: "/services/email-marketing-ebay-customers" },
    ],
  },
  {
    title: "Analytics & Performance",
    link: "/services#analytics-performance",
    color: "bg-blue-100 text-blue-900",
    items: [
      { name: "Performance Analytics & Reporting", description: "Track and analyze store performance.", icon: <FaChartLine />, link: "/services/performance-analytics-reporting" },
      { name: "Competitor Analysis", description: "Stay ahead with competitor insights.", icon: <FaChartBar />, link: "/services/competitor-analysis" },
    ],
  },
  {
    title: "Policy, Compliance & International",
    link: "/services#policy-compliance-international",
    color: "bg-yellow-100 text-yellow-900",
    items: [
      { name: "eBay Policy Compliance Assistance", description: "Stay compliant with eBay rules.", icon: <FaBalanceScale />, link: "/services/ebay-policy-compliance-assistance" },
      { name: "Cross-Border Selling Support", description: "Expand internationally with ease.", icon: <FaGlobe />, link: "/services/cross-border-selling-support" },
      { name: "Account Suspension Recovery", description: "Help with account reinstatement.", icon: <FaGavel />, link: "/services/account-suspension-recovery" },
    ],
  },
  {
    title: "Order & Customer Operations",
    link: "/services#order-customer-operations",
    color: "bg-emerald-100 text-emerald-900",
    items: [
      { name: "Order Management & Fulfillment", description: "Seamless order processing.", icon: <FaBoxOpen />, link: "/services/order-management-fulfillment" },
      { name: "Customer Support Management", description: "Excellent customer service.", icon: <FaHeadset />, link: "/services/customer-support-management" },
      { name: "Return & Refund Management", description: "Handle returns and refunds smoothly.", icon: <FaUndo />, link: "/services/return-refund-management" },
      { name: "Feedback Management", description: "Manage and improve feedback.", icon: <FaCommentDots />, link: "/services/feedback-management" },
    ],
  },
  {
    title: "Advertising & Marketing",
    link: "/services#advertising-marketing",
    color: "bg-violet-100 text-violet-900",
    items: [
      { name: "eBay Ads Campaign Management", description: "Maximize reach with eBay ads.", icon: <FaBullhorn />, link: "/services/ebay-ads-campaign-management" },
      { name: "eBay Dropshipping Assistance", description: "Support for dropshipping business.", icon: <FaShippingFast />, link: "/services/ebay-dropshipping-assistance" },
    ],
  },
  {
    title: "Website & Branding (Add-on Services)",
    link: "/services#website-branding",
    color: "bg-pink-100 text-pink-900",
    items: [
      { name: "eCommerce Website Design", description: "Custom eCommerce websites.", icon: <FaGlobeAmericas />, link: "/services/ecommerce-website-design" },
      { name: "Creative Assets for eBay", description: "Banners, graphics, and more.", icon: <FaPaintBrush />, link: "/services/creative-assets-ebay" },
    ],
  },
];

// Resources Data
const resources = [
  {
    title: "",
    link: "#",
    items: [
      {
               name: "Blog",
               link: "/blog",
               description: "Latest articles and insights",
               icon: <HiOutlinePencilAlt />,
             },
             {
               name: "Customer Stories",
               link: "/customer-stories",
               description: "Success stories from our clients",
               icon: <HiOutlineUserGroup />,
             },
             {
               name: "Guides & Quizzes",
               link: "/blog",
               description: "Insights from marketing leaders",
               icon: <HiOutlineBookOpen />,
             },
             {
               name: "Video Library",
               link: "/video-library",
               description: "Aneeverse's latest videos",
               icon: <HiOutlinePlay />,
             }
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    cards: [
      ...blogs.slice(0, 2)
    ],
  },
  {
    title: "Customer Stories",
    link: "/customer-stories",
    cards: [
   
      ...customerStories.slice(0, 2)
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ maxHeight: "0px" }}
      animate={{ maxHeight: "100vh" }}
      transition={{ duration: 0.3 }}
      exit={{ maxHeight: "0px" }}
      className="fixed h-[100vh] overflow-y-auto inset-0 pb-24 bg-primary-500 w-full z-50 shadow-lg"
    >
      {/* Header Section */}
      <motion.div
        initial={{ padding: "0px 0px" }}
        animate={{ padding: "0px 20px" }}
        transition={{ duration: 0.3 }}
        exit={{ padding: "0px 0px" }}
        className="flex justify-between items-center h-[70px] sm:h-[80px] px-sm md:px-md"
      >
        <Link href="/" onClick={toggleSidebar} className="text-secondary-500 text-3xl tracking-wide font-bold">
          aneeverse
        </Link>
        <button onClick={toggleSidebar} className="text-xl text-secondary-500">
          <FaTimes />
        </button>
      </motion.div>

      {/* Menu Sections */}
      <div className="px-5">
        {/* Services Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("services")}>
          <Link href="/services" onClick={toggleSidebar}>
            Services
          </Link>
          {openSection === "services" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "services" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-6xl mx-auto py-2 grid grid-cols-1 gap-6">
                {menuCategories.map((category, index) => (
                  <div key={index}>
                   
                      <Link href={`${category.link}`} className={`text-lg font-bold py-2 px-4 min-w-fit rounded-md inline-flex items-center gap-2 ${category.color}`} onClick={toggleSidebar}>
                       <span>{category.title} </span> <FiArrowUpRight />
                      </Link>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, idx) => (
                        <Link
                          href={item.link}
                          key={idx}
                          className="flex group px-2 py-2 border-b items-center justify-between gap-3"
                          onClick={toggleSidebar}
                        >
                          <div className="flex items-center gap-3">
                            <div>
                              <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Our Work Section */}
        <Link href="/works" onClick={toggleSidebar} className="py-3 block cursor-pointer">
          Our Work
        </Link>

        {/* Why Us Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("whyUs")}>
          <span>Why Us</span>
          {openSection === "whyUs" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "whyUs" && (
            <motion.div
              className="space-y-3 px-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/about-us" onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog1.avif"
                  alt="About"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">About Us</p>
                  <p className="text-sm">Our mission, goals & values</p>
                </div>
              </Link>
              <Link href="/our-team" onClick={toggleSidebar} className="flex items-center gap-3">
                <img
                  src="/images/blog2.avif"
                  alt="Our People"
                  className="w-[60px] h-[60px] object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">Our Team</p>
                  <p className="text-sm">Meet your dedicated team</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resources Section */}
        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("resources")}>
          <span>Resources</span>
          {openSection === "resources" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        <AnimatePresence>
          {openSection === "resources" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 gap-6 px-2 max-w-6xl mx-auto py-2">
                {resources.map((resource, index) => (
                  <div key={index}>
                    <Link href={resource.link}  onClick={toggleSidebar}  className={`${index == 0 ? "hidden " : "inline-flex "} text-lg hover:underline font-bold flex-row min-w-fit items-center gap-2`}>
                      <span>{resource.title}</span> <FiArrowUpRight />
                    </Link>
                    <div className={`${index == 0 ? " mt-0 " : " mt-4 "} space-y-4`}>
                      {resource.items &&
                        resource.items.map((item, idx) => (
                          <Link href={item.link} key={idx}  onClick={toggleSidebar}  className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="text-md font-medium text-gray-700">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <div className="text-gray-700 text-xl">{item.icon}</div>
                          </Link>
                        ))}
                      {resource.cards &&
                        resource.cards.map((card, idx) => (
                          <Link href={`/${resource.title == "Blog" ? "blog":"customer-stories"}/${card.id}`}  onClick={toggleSidebar}  key={idx} className="flex flex-row gap-3">
                            <img
                              src={card.thumbnail}
                              alt={card.title}
                              className="w-[60px] h-[60px] object-cover rounded-md"
                            />
                            <p className="text-sm font-medium text-gray-700">{card.title}</p>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Links */}
        <Link href="/pricing" onClick={toggleSidebar} className="py-3 block cursor-pointer">
          Pricing
        </Link>

        {/* Action Buttons */}
        <div className="mt-6">
          <Link
            href="/contact"
            onClick={toggleSidebar}
            className="w-full block text-center py-3 rounded-full bg-secondary-500 text-primary-500 font-semibold"
          >
            Book a Call
          </Link>
          <Link
            href="/register"
            onClick={toggleSidebar}
            className="w-full block text-center mt-3 py-3 rounded-full border border-secondary-500 text-secondary-500 font-semibold"
          >
            Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;