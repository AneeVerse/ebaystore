"use client";
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import Link from "next/link";

const OurWorkSection = () => {
  const projects = [
    {
 
      image: "/images/home/works-ban-1.avif",
      title: "Webflow",
      url: "/works/webflow",
      description: "Illustration Design, Ad Creative",
      colSpan: 2,
    },
    {
      image: "/images/home/works2.avif",
      title: "Pernod Ricard",
      url: "/works/pernod-ricard",
      description: "eBook & Digital Reports, Video Production",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "PPC Advertising",
      url: "/works/ppc-advertising",
      description: "Google Ads Management, Facebook Ads, Remarketing Campaigns",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "Salesforce",
      url: "/works/salesforce",
      description: "Motion Design, Ad Creative",
      colSpan: 1,
    },
    {
      image: "/images/home/works5.avif",
      title: "Content Marketing",
      url: "/works/content-marketing",
      description: "Blog Writing, Video Production, Infographic Design",
      colSpan: 2,
    },
    {
      image: "/images/home/works4.avif",
      title: "Shopify",
      url: "/works/shopify",
      description: "Ad Creative",
      colSpan: 1,
    },
    // Duplicated entries for infinite scroll effect
    {
      image: "/images/home/works-ban-1.avif",
      title: "Webflow",
      url: "/works/webflow",
      description: "Illustration Design, Ad Creative",
      colSpan: 2,
    },
    {
      image: "/images/home/works6.avif",
      title: "Reddit",
      url: "/works/reddit",
      description: "Motion Design, Social Media Creative",
      colSpan: 1,
    },
    {
   
      image: "/images/home/works2.avif",
      title: "Pernod Ricard",
      url: "/works/pernod-ricard",
      description: "eBook & Digital Reports, Video Production",
        colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "Salesforce",
      url: "/works/salesforce",
      description: "Motion Design, Ad Creative",
      colSpan: 1,
    },
    {
      image: "/images/home/works5.avif",
      title: "Content Marketing",
      url: "/works/content-marketing",
      description: "Blog Writing, Video Production, Infographic Design",
      colSpan: 2,
    },
    {
      image: "/images/home/works6.avif",
      title: "Reddit",
      url: "/works/reddit",
      description: "Motion Design, Social Media Creative",
      colSpan: 1,
    },
  ];
  const [smallScreen, setSmallScreen] = useState(false);
  // if width is less than 768px, set colSpan to 1

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        {/* Section Header */}
        <div className="flex justify-between items-center ">
          <div className="max-w-3xl  ">
            <UiSubheading className="text-secondary-500 mb-2">
              Our Works
            </UiSubheading>
            <Heading
              level="h2"
              color="dark"
              spacing="lg"
              className="text-left font-semibold"
            >
              See Our{" "}
              <AccentText
                size="lg"
                className={"text-orange-500 whitespace-nowrap  "}
              >
                works
              </AccentText>
            </Heading>
         
           
          </div>
        </div>

        {/* Project Grid */}
        <div className=" grid grid-cols-1  md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              // col span
              style={{
                gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}`,
              }}
              className={`group rounded-lg cursor-pointer  overflow-hidden ${
                project.colSpan ? ` md:col-span-${project.colSpan}` : ""
              }`}
            >
              {/* Image */}
              <div className=" rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[200px] sm:h-[280px] xl:h-[340px]  2xl:h-[380px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="py-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  {/* arrow */}
                  <MdOutlineArrowOutward className="opacity-0 self-center translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default OurWorkSection;
