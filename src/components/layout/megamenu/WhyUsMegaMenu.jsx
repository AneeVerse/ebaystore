"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { FaChevronDown } from "react-icons/fa6";

const WhyUsMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const whyUs = [
    {
      title: "About Us",
      link: "/about-us",
      des: "Our upcoming events and recordings",
      image: "/images/blog1.avif",
    },
    {
      title: "Our Team",
      link: "/our-team",
      des: "Creative Leadership Decoded: Lessons from Two Industry Experts",
      image: "/images/blog2.avif",
    },
  ];

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`text-[${color.text}] p-2 cursor-pointer flex items-center group`}
      >
        <span
          className={`${
            isOpen ? "mr-[6px] scale-100 " : " "
          } h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full bg-[${
            color.text
          }]`}
        ></span>{" "}
        <span className="flex items-center gap-2">
          {" "}
          Why Us{" "}
          <FaChevronDown
            className={`${
              isOpen ? " -rotate-180 " : " "
            } group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`}
          />{" "}
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="fixed h-screen  inset-0 w-full top-[60px] pt-5 z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div
          className=" h-full backdrop-blur-[2px] w-full">
            <motion.div
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              className="bg-[#EBFAFE] shadow-lg  border border-gray-200 "
            >
              <Layout>
                <div className="grid grid-cols-2  max-w-3xl mx-auto gap-8  py-12">
                  {whyUs.map((card, idx) => (
                    <Link
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      href={card.link}
                      key={idx}
                      className="flex group cursor-pointer flex-col gap-0"
                    >
                      <div className="overflow-hidden  rounded-md">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full transition-all duration-300 group-hover:scale-110 h-[160px] object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mt-3">
                          <h4 className="text-md font-medium text-gray-700">
                            {card.title}
                          </h4>
                          <FiArrowUpRight className="text-lg self-center opacity-0 translate-x-[-50%] translate-y-[50%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-gray-700" />
                        </div>
                      </div>
                      <p className="text-sm line-clamp-1 font-medium text-gray-500">
                        {card.des}
                      </p>
                    </Link>
                  ))}
                </div>
              </Layout>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WhyUsMegaMenu;
