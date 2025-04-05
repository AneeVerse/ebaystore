"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import ServicesMegaMenu from "./megamenu/ServicesMegaMenu";
import Link from "next/link";
import ResourcesMegaMenu from "./megamenu/ResourcesMegaMenu";
import { usePathname } from "next/navigation";
import WhyUsMegaMenu from "./megamenu/WhyUsMegaMenu";
import Layout from "../common/Layout";
import Button from "../common/Button";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // State for colors
  const [color, setColor] = useState({
    text: ((pathName === "/") || (pathName.includes("/services/"))) ? "#EBFAFE" : "#073742",
    bg: "#ebfafe00",
  });

  // Update color dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        setColor({
          text: "#073742",
          bg: "#EBFAFE",
        });
      } else {
        setScrolled(false);
        setColor({
          text: ((pathName === "/") || (pathName.includes("/services/")))  ? "#EBFAFE" : "#073742",
          bg: "#ebfafe00",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathName]);

  // Ensure color is updated correctly on route change
  useEffect(() => {
    setColor({
      text: ((pathName === "/") || (pathName.includes("/services/"))) ? "#EBFAFE" : "#073742",
    bg: "#ebfafe00",
    });
  }, [pathName]);

  return (
    <nav
      className={`fixed top-0 w-full h-[70px] sm:h-[80px] flex items-center z-40 transition-all duration-300 bg-[${color.bg}]`}
    >
      <Layout className="flex w-full justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-3xl ml-2 sm:ml-0 tracking-wide font-bold flex items-center">
          <span className={`text-[${color.text}]`}>aneeverse</span>
        </Link>

        {/* Large Screen Menu */}
        <div className="hidden lg:flex lg:gap-3 xl:gap-6 gap-6 items-center">
          <ServicesMegaMenu color={color} />
          <Link
            href="/works"
            className={` text-[${color.text}] flex items-center group`}
          >
           <span className={`h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${color.text}]`}></span>  <span>Our Works</span> 
          </Link>
          <WhyUsMegaMenu color={color} />
          <ResourcesMegaMenu color={color} />
          <Link
            href="/pricing"
            className={`group flex items-center  text-[${color.text}]`}
          >
           <span className={`h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${color.text}]`}></span>   <span>Pricing</span> 
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href={"/contact"} className={`text-[${pathName != "/" ?  pathName.includes("/services/") ?(color.bg !=  "#EBFAFE") ?  "#073742":  "#EBFAFE" : "#EBFAFE" : (color.bg !=  "#EBFAFE") ?  "#073742":  "#EBFAFE" }] bg-[${color.text}] text-sm border border-[${color.bg}]  px-6 py-[10px] rounded-full`}>
            Book a Call
          </Link>
          <Link href={"/login"} className={`text-[${color.text}] text-sm bg-[${color.bg}] border border-[${color.text}] px-6 py-[10px] rounded-full`}>
            Login
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className={`lg:hidden mr-2 sm:mr-0 text-2xl ${
            scrolled ? "text-[#073742]" : `text-[${color.text}]`
          }`}
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </Layout>

      {/* Sidebar for small screens */}
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)}/>}
    </nav>
  );
};

export default Navbar;
