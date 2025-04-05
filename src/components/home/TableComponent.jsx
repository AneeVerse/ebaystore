"use client";
import React from "react";
import { FaCheck, FaTimes, FaUsers, FaPaintBrush, FaUserTie, FaToolbox } from "react-icons/fa";
import Layout from "../common/Layout";
import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";
import { GoPersonAdd } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { PiPaintBrushDuotone,PiToolbox } from "react-icons/pi";
const data = [
  {
    title: "Aneeverse",
    description:
      "Work with the top 1% of global creative talent, recruited from the best brands and agencies.",
    features: [true, true, true, true, true],
    icon: <div className="p-2 sm:p-3 md:p-4 "><FaUsers className="text-xl sm:text-3xl min-w-fit text-secondary-500" /></div>,
    highlight: true,
  },
  {
    title: "In-house team",
    description:
      "In-house teams don’t always have the skill mix or bandwidth to handle every request that the business needs.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <AiOutlineTeam className="text-xl  sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Creative agencies",
    description:
      "Working with full-scale creative agencies can be slow, costly, and inflexible.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"><PiPaintBrushDuotone className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Freelancers",
    description:
      "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
    features: [false, false, true, true, true],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <GoPersonAdd className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Self-service tools",
    description:
      "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <PiToolbox className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
];

const headers = ["Speed", "Flexibility", "Quality", "Scalability", "Cost-effectiveness"];

const TableComponent = () => {
  return (
    <div className="bg-secondary-500 text-white py-16">
      <Layout>
        {/* ✅ Title Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 max-w-md  md:max-w-lg mx-auto">
            <Heading
                    level="h2"
                    color="light"
                    spacing="lg"
                    className="text-center font-semibold"
                  >
                     Hiring or traditional outsourcing?{' '}
                    <AccentText 
                      size="lg" 
                      className={"text-[#FC83E1] "}
                    >
                      neither
                    </AccentText>
                  </Heading>
         
        </div>

        {/* ✅ Table Section - First Column Fixed */}
        <div className="overflow-x-auto scrollbar-hide rounded-lg">
          <div className="min-w-[650px]">
            {/* ✅ Headers */}
            <div className="grid grid-cols-7 sm:grid-cols-8 items-center text-sm font-semibold">
              <div className="p-3 sm:p-4 col-span-2 sm:col-span-3 sticky left-0 z-30 bg-secondary-500"></div>
              {headers.map((header, index) => (
                <div key={index} className="p-3 sm:p-4 text-center">
                  {header}
                </div>
              ))}
            </div>

            {/* ✅ Data Rows */}
            {data.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-7 sm:grid-cols-8 my-2 items-center ${
                  item.highlight ? "bg-[#88D7F0]  rounded-full text-secondary-500" : ""
                } ${index !== data.length - 1 ? "border-b border-gray-700" : ""}`}
              >
                {/* ✅ Fixed First Column */}
                <div className={`${index === 0 ? " bg-[#88D7F0] rounded-l-full " : " bg-secondary-500 " } p-3 sm:p-10 col-span-2 sm:col-span-3 flex gap-4 items-center sticky left-0 z-10 `}>
                  {item.icon}
                  <div>
                    <h3 className="font-semibold sm:font-bold text-md sm:text-lg md:text-xl lg:text-2xl ">{item.title}</h3>
                    <p className="text-sm hidden md:block mt-1">{item.description}</p>
                  </div>
                </div>

                {/* ✅ Features - Scrollable */}
                {item.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`p-3 sm:p-4 text-center flex justify-center items-center ${
                      index === 0 ? "text-secondary-500" : "text-primary-500"
                    }`}
                  >
                    {feature ? <FaCheck className="text-lg sm:text-2xl" /> : <FaTimes className="text-lg sm:text-2xl" />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TableComponent;
