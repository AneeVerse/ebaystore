"use client";
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import Link from "next/link";
import Button from "../common/Button";
import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";
import { UiSubheading } from "../common/typography/UiSubheading";
import { client } from "@/sanity/lib/client";
import { getPortfolioWorksQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const DynamicOurWorks = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const data = await client.fetch(getPortfolioWorksQuery);
        // Map to grid pattern: 0, 4, 8... colSpan 2, rest colSpan 1
        const mapped = data.map((item, index) => ({
          image: item.thumbnailImage || item.mainImage ? urlForImage(item.thumbnailImage || item.mainImage).url() : "/images/home/works-ban-1.avif",
          title: item.title,
          url: `/works/${item.slug.current}`,
          description: item.services?.join(", ") || item.shortDescription || "",
          colSpan: (index % 6 === 0 || index % 6 === 4) ? 2 : 1,
        }));
        setProjects(mapped);
      } catch (error) {
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
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
        <div className="flex justify-between items-center mb-2">
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
                className={"text-orange-500 whitespace-nowrap "}
              >
                Top Works
              </AccentText>
            </Heading>
          </div>
          <Button
            href="/works"
            textColor="text-secondary-500"
            bgColor="bg-primary-500"
            borderColor="border-secondary-500"
            hoverBgColor="bg-secondary-500"
            hoverTextColor="#EBFAFE"
            className="mt-4 min-w-fit whitespace-nowrap"
          >
            Explore all{" "}
            <span className="hidden sm:inline-block"> our works</span>
          </Button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : (
          <div className=" grid grid-cols-1  md:grid-cols-4 gap-4">
            {projects.slice(0, 6).map((project, index) => (
              <Link
                href={project.url}
                key={index}
                style={{ gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}` }}
                className={`group rounded-lg cursor-pointer  overflow-hidden${project.colSpan ? ` md:col-span-${project.colSpan}` : ""}`}
              >
                {/* Image */}
                <div className=" rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="py-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <MdOutlineArrowOutward className="opacity-0 self-center translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default DynamicOurWorks;
