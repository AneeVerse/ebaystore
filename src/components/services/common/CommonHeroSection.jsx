"use client";

import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import { Heading } from "@/components/common/typography/Heading";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ✅ Infinite Scroll Animation
const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 225,
      ease: "linear",
    },
  },
};

// ✅ Services Data (for scrolling cards)
const services = [
  { title: "Webflow Development", image: "/images/services/website/card/webflow-development.avif" },
  { title: "Website Illustrations", image: "/images/services/website/card/website-illustration.avif" },
  { title: "UX UI Audit", image: "/images/services/website/card/ui-ux-audit.avif" },
  { title: "Design Systems", image: "/images/services/website/card/design-system.avif" },
  { title: "Content Development", image: "/images/services/website/card/content-development.avif" },
  { title: "Website Strategy", image: "/images/services/website/card/website-strategy.avif" },
  { title: "Website Design", image: "/images/services/website/card/website-design.avif" },
  { title: "Landing Page Design", image: "/images/services/website/card/landing-page-design.avif" },
];


export default function CommonServicesHeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}) {
  return (
    <div className="relative -mt-[80px] text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[90vh] min-h-[600px] sm:min-h-[600px] sm:h-[75vh] flex items-center">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-100"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <Layout>
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative  z-10">
                 <UiSubheading className="text-primary-500 mb-2">
                 {subtitle}
                        </UiSubheading>
                        <Heading
                          level="h1"
                          color="light"
                          spacing="lg"
                          className="text-left font-semibold"
                        >
                         {title}
                        </Heading>
            
              <p className="  sm:-mt-2 text-lg text-gray-200">{description}</p>
         
              <Button
                href={ctaLink}
                textColor="text-primary-500"
                bgColor="bg-transparent"
                borderColor="border-primary-500"
                hoverBgColor="bg-primary-500"
                hoverTextColor="#073742"
                className="mt-6 min-w-fit whitespace-nowrap"
              >
                {ctaText}
              </Button>
            </div>
            <div className=""></div>
          </div>
        </Layout>
        {/* ✅ Scrolling Services */}
        <div className="absolute bottom-8 overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            variants={scrollVariants}
            animate="animate"
          >
            {[...services, ...services, ...services, ...services].map(
              (service, index) => (
                <div
                  key={index}
                  className="flex items-center w-fit px-3 py-2 bg-primary-500  rounded-lg shadow-lg overflow-hidden"
                >
                  <div className=" h-[54px] w-[75px] relative  rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="ml-3 text-md text-secondary-500 font-medium">
                    {service.title}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
