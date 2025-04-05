"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../common/Layout";
import Button from "../common/Button";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function NewFooter() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const footerData = {
    services: {
      heading: "Services",
      items: [
        {
          title: "Website Services",
          links: [
            { title: "Website Design", link: "/services/website-design" },
            { title: "Landing Pages", link: "/services/landing-pages" },
            { title: "SEO Optimization", link: "/services/seo-optimization" },
            { title: "GMB Optimization", link: "/services/gmb-optimization" },
            { title: "Local SEO", link: "/services/local-seo" },
            { title: "Email Design", link: "/services/email-design" },
          ],
        },
        {
          title: "Marketing Services",
          links: [
            {
              title: "Marketing Strategy",
              link: "/services/marketing-strategy",
            },
            { title: "Email Campaigns", link: "/services/email-campaign" },
            { title: "Google Ads", link: "/services/google-ads" },
            { title: "Meta Ads", link: "/services/meta-ads" },
            {
              title: "Influencer Marketing",
              link: "/services/influencer-marketing",
            },
          ],
        },
        {
          title: "Content Writing",
          links: [
            { title: "Blog Writing", link: "/services/blog-writing" },
            { title: "Ghost Writing", link: "/services/ghost-writing" },
          ],
        },
        {
          title: "Creative Design Services",
          links: [
            {
              title: "Social Media Creatives",
              link: "/services/social-media-creatives",
            },
            {
              title: "Presentation Design",
              link: "/services/presentation-design",
            },
            { title: "Brochure Design", link: "/services/brochure-design" },
          ],
        },
      ],
    },
    navigation: {
      heading: "Navigation",
      sections: {
        items: [
          {
            title: "main",
            links: [
              { title: "Our Work", link: "/works" },
              { title: "Our people", link: "/our-team" },
              { title: "About Us", link: "/about-us" },
              { title: "Pricing", link: "/pricing" },
            ],
          },
          {
            title: "learn",
            links: [
              { title: "Blog", link: "/blog" },
              { title: "Guides & Reports", link: "/blog" },
              { title: "Customer Stories", link: "/customer-stories" },
              { title: "Video Library", link: "/video-library" },
            ],
          },
        ],
      },
    },
    legal: [
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Terms of Use", link: "/terms-of-use" },
      { title: "Status page", link: "/status" },
      { title: "DMCA", link: "/dmca" },
    ],
  };

  return (
    <footer className="bg-secondary-500 relative text-white pt-16 pb-6">
      {/* overlap image bg */}
      <img src="/images/fbg.jpg" className="absolute inset-0 -z-0 w-full h-[400px] md:h-full object-cover" />
      <div className="absolute inset-0 bg-secondary-500 opacity-50 z-0"></div>
      <Layout className="relative z-10">
        {/* Top Sections */}
        <div className=" text-center">
        <Heading
          level="h2"
          color="gredient"
          spacing="lg"
          className="text-center font-semibold"
        >
          DESIGN, OPTIMIZE, ADVERTISE{" "}
          <AccentText size="lg" className={" block text-orange-400 mt-2 "}>
            we got you covered.
          </AccentText>
        </Heading>
          
          <Button
            href="/contact"
            textColor="text-secondary-500"
            bgColor="bg-primary-500"
            borderColor="border-primary-500"
            hoverBgColor="bg-secondary-500"
            hoverTextColor="#EBFAFE"
            className="mt-2"
          >
            GET STARTED
          </Button>
        </div>
        <div className="mt-16 border-b border-gray-600 pb-1">
          {/* Mobile Accordions */}
          <div className="md:hidden space-y-5">
            {/* Services Accordion */}
            <div className=" border-b pb-3 border-gray-600">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full "
              >
                <h3 className="text-lg font-semibold">Services</h3>
                {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {
                <motion.div
                  initial={{ height: servicesOpen ? "auto" : 0 }}
                  animate={{ height: servicesOpen ? "auto" : 0 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-6 overflow-y-hidden"
                >
                  {footerData.services.items.map((item, index) => (
                    <div key={index} className="pl-2">
                      <Link
                        href={item.links}
                        className="font-medium mb-2 flex items-center"
                      >
                        {item.title} <FiArrowUpRight className="ml-1" />
                      </Link>
                      <ul className="space-y-2">
                        {item.links.map((val, i) => (
                          <li key={i} className="text-sm text-[#c9c9c9]">
                            <Link
                              href={val.link}
                              className="hover:underline w-full block text-left"
                            >
                              {val.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              }
            </div>

            {/* Navigation Accordion */}
            <div className="pb-3">
              <button
                onClick={() => setNavigationOpen(!navigationOpen)}
                className={`flex items-center justify-between w-full`}
              >
                <h3 className="text-lg font-semibold">Navigation</h3>
                {navigationOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {
                <motion.div
                  initial={{ height: navigationOpen ? "auto" : 0 }}
                  animate={{ height: navigationOpen ? "auto" : 0 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-y-hidden grid grid-cols-1 gap-6 pl-2"
                >
                  {footerData.navigation.sections.items.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.links}
                        className="font-medium block mb-2"
                      >
                        {item.title}
                      </Link>
                      <ul className="space-y-2">
                        {item.links.map((val, i) => (
                          <li key={i} className="text-sm text-[#c9c9c9]">
                            <Link
                              href={val.link}
                              className="hover:underline w-full block text-left"
                            >
                              {val.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              }
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services Section */}
            <div className="">
              <h3 className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4">
                {footerData.services.heading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {footerData.services.items.map((item, index) => (
                  <div key={index}>
                    <Link href={item.links} className="font-medium mb-2 block">
                      {item.title}{" "}
                      <FiArrowUpRight className="text-md inline-block" />
                    </Link>
                    <ul>
                      {item.links.map((val, i) => (
                        <Link
                          href={val.link}
                          key={i}
                          className="text-sm text-[#c9c9c9] mb-2 block cursor-pointer hover:underline"
                        >
                          {val.title}
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Section */}
            <div className="">
              <h3 className="text-lg  border-b border-gray-200 pb-1 font-semibold mb-4">
                {footerData.navigation.heading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {footerData.navigation.sections.items.map((item, index) => (
                  <div key={index}>
                    <Link href={item.links} className="font-medium mb-2 block">
                      {item.title}
                    </Link>
                    <ul>
                      {item.links.map((val, i) => (
                        <Link
                          href={val.link}
                          key={i}
                          className="text-sm text-[#c9c9c9] block mb-2 cursor-pointer hover:underline"
                        >
                          {val.title}
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

          <div className="text-center md:text-left  tracking-wide text-4xl mt-6 mb-2 font-bold block">
              aneeverse
           </div>

        {/* Bottom Section */}
        <div className=" flex flex-col lg:flex-row justify-between items-center">
          {/* Legal Links */}
          <div className="text-center flex flex-col items-center md:flex-row justify-between w-full ">
            <div>
             

            <p className="text-sm">
              &copy; 2025 Aneeverse. All rights reserved.
            </p>
            </div>
            <ul className="flex flex-col sm:flex-row justify-center mt-3 md:mt-0 gap-4 text-sm ">
              {footerData.legal.map((legalItem, index) => (
                <li key={index}>
                  <Link href={legalItem.link} className="hover:underline block">
                    {legalItem.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className=" gap-4 flex justify-center mt-4 md:mt-0">
              <Link
                href="https://www.instagram.com/aneeverse/"
                target="_blank"
                className="border border-gray-200 rounded-full p-2"
              >
                <FaInstagram className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/aneeverse"
                target="_blank"
                className="border border-gray-200 rounded-full p-2"
              >
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
              </Link>
              <Link
                href="https://www.youtube.com/@AneeVerse"
                target="_blank"
                className="border border-gray-200 rounded-full p-2"
              >
                <FaYoutube className="text-xl cursor-pointer hover:text-[#c9c9c9]" />
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
