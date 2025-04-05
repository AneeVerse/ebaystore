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

// Menu Categories Data
const menuCategories = [
  {
    title: "Website Services",
    link: "/services#website-services",
    color: "bg-blue-200 text-blue-900",
    items: [
      { name: "Website Design", description: "Stunning websites built to engage.", icon: <FaDesktop />, link: "/services/website-design" },
      { name: "Landing Pages", description: "High-converting pages for your campaigns.", icon: <FaPager />, link: "/services/landing-pages" },
      { name: "SEO Optimization", description: "Boost your search rankings with expert SEO.", icon: <FaSearch />, link: "/services/seo-optimization" },
      { name: "GMB Optimization", description: "Dominate local searches with GMB excellence.", icon: <FaMapMarkerAlt />, link: "/services/gmb-optimization" },
      { name: "Local SEO", description: "Reach your audience with targeted local SEO strategies.", icon: <FaLocationArrow />, link: "/services/local-seo" },
      { name: "Email Design", description: "Engaging email templates that convert.", icon: <FaEnvelopeOpenText />, link: "/services/email-design" },
    ],
  },
  {
    title: "Marketing Services",
    link: "/services#marketing-services",
    color: "bg-yellow-200 text-blue-900",
    items: [
      { name: "Marketing Strategy", description: "Grow your brand with expert consultants.", icon: <FaChartPie />, link: "/services/marketing-strategy" },
      { name: "Email Campaign", description: "Personalized email campaigns that convert.", icon: <FaEnvelope />, link: "/services/email-campaign" },
      { name: "Google Ads", description: "Targeted ads to maximize ROI.", icon: <FaGoogle />, link: "/services/google-ads" },
      { name: "Meta Ads", description: "Creative campaigns that get noticed.", icon: <FaFacebook />, link: "/services/meta-ads" },
      { name: "Influencer Marketing", description: "Boost brand visibility with trusted influencers.", icon: <FaUserFriends />, link: "/services/influencer-marketing" },
    ],
  },
  {
    title: "Content Writing",
    link: "/services#content-writing",
    color: "bg-green-200 text-green-900",
    items: [
      { name: "Blog Writing", description: "SEO-friendly blogs tailored to your niche.", icon: <FaPenFancy />, link: "/services/blog-writing" },
      { name: "Ghost Writing", description: "Captivating content under your brand's name.", icon: <FaGhost />, link: "/services/ghost-writing" },
    ],
  },
  {
    title: "Creative Design Services",
    link: "/services#creative-design-services",
    color: "bg-lime-200 text-lime-900",
    items: [
      { name: "Social Media Creatives", description: "Engaging assets for all platforms.", icon: <FaFacebook />, link: "/services/social-media-creatives" },
      { name: "Presentation Design", description: "Pitch-perfect presentations for your business needs.", icon: <FaSlideshare />, link: "/services/presentation-design" },
      { name: "Brochure Design", description: "Informative and visually stunning brochures.", icon: <FaFilePdf />, link: "/services/brochure-design" },
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
            href="/login"
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