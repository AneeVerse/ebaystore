"use client";
import React from "react";
import Layout from "../common/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function AIDesignSection() {
  return (
    <section className="bg-primary-500 py-12 px-2">
      <Layout className="relative  flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden">
        {/* Right Side (Image) */}
        <div className="absolute z-0 inset-0">
          <img
            src="/images/pricing/ai-banner.avif" // Replace with actual image path
            alt="AI Design Services"
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>
        {/* overlap */}
        <div className="bg-gradient-to-r from-black/50 to-transparent absolute z-0 top-0 left-0 h-full w-full"></div>

        {/* Left Side (Text Content) */}
        <div className=" w-full  md:w-[40%] relative z-20 text-white px-2 py-4 md:p-10 rounded-lg">
          <UiSubheading className="text-primary-500 mb-2">
            AI DESIGN SERVICES
          </UiSubheading>
          <Heading
            level="h2"
            color="light"
            spacing="lg"
            className="text-left font-semibold"
          >
            Save <AccentText size="lg">up to 70% </AccentText>
            on production costs
          </Heading>

          <p className="mt-4 text-sm md:text-md text-gray-300">
            Through AI, customers like Amazon, Reddit, and Salesforce managed to
            spend less than half of what they normally would on similar
            projects.
          </p>

          <Button
            href="/contact"
            textColor="text-white"
            bgColor="bg-transparent"
            borderColor="border-white"
            hoverBgColor="bg-white"
            hoverTextColor="#000000"
            className="mt-8 w-full md:w-fit max-w-[400px] flex justify-center  mx-auto sm:mx-0 text-center"
          >
            BOOK A CALL
          </Button>
        </div>
      </Layout>
    </section>
  );
}
