"use client"
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Layout from "../common/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const pricingData = {
  title: "A subscription built to",
  subtitle: "fuel your growth",
  leftBox: {
    badge: "FLEXIBLE MONTHLY PLANS AVAILABLE.",
    heading: "Flexible plans for every business",
    description:
      "From basic asset production and motion graphics to video ads and brand strategy, a aneeverse subscription lets you choose how you want to use your budget every month based on your business needs.",
    note: "Subscriptions are offered in a variety of plans to suit your needs.",
    buttonText: "Book a call",
  },
  rightBox: {
    title: "Included in",
    italicText: "all plans",
    description: "Access to all creative services.",
    subNote: "(Subscription options are available in various tiers, based on your needs.)",
    features: [
      "Dedicated creative project manager and customer success",
      "Turnaround times starting at 12 hours",
      "24/7 timezone coverage",
      "AI-enhanced services",
      "Unlimited API calls to integrations",
      "Unlimited users and asset storage",
      "Support for multiple brands",
      "Access to Superspace platform",
    ],
  },
};

export default function PricingComponent() {
  return (
    <div className="bg-primary-500 py-12">
      <Layout>
      {/* Title Section */}
      <div className="text-center mb-12">
         <UiSubheading className="text-secondary-500 text-center mb-6">
         PRICING MODEL
                    </UiSubheading>
                    <Heading
                      level="h1"
                      color="dark"
                      spacing="lg"
                      className="text-center max-w-2xl mx-auto font-medium"
                    >
                      {pricingData.title}{" "}
                      <AccentText
                        size="xl"
                        className={" sm:whitespace-nowrap  "}
                      >
                        {pricingData.subtitle}
                      </AccentText>
                    </Heading>
                 
        
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box */}
        <div className="bg-[#2A4E45] text-white p-8 rounded-lg flex flex-col justify-between">
          <span className=" text-[11px] sm:text-sm bg-white text-[#2A4E45] px-3 py-1 rounded-full uppercase tracking-wide font-semibold max-w-fit ">
            {pricingData.leftBox.badge}
          </span>
          <h4 className="text-3xl font-semibold mt-4">
            {pricingData.leftBox.heading}
          </h4>
          <p className="mt-4 text-lg">{pricingData.leftBox.description}</p>
          <p className="text-sm opacity-80 mt-4">{pricingData.leftBox.note}</p>
      

    <Button
          href="/contact"
          textColor="text-[#0A211F]"
          bgColor="bg-[#D8FF85]"
          borderColor="border-[#D8FF85]"
          hoverBgColor="bg-[#2A4E45]"
          hoverTextColor="#D8FF85"
          className="mt-6 w-full  flex justify-center  mx-auto sm:mx-0 text-center"
        >
          {pricingData.leftBox.buttonText}
        </Button>
        </div>

        {/* Right Box */}
        <div className="bg-[#E6ECD6] p-8 rounded-lg">
          <h4 className="text-lg font-serif">
            {pricingData.rightBox.title} <span className="font-Rock_Salt">{pricingData.rightBox.italicText}</span>:
          </h4>
          <p className="mt-2 font-semibold">{pricingData.rightBox.description}</p>
          <p className="text-sm opacity-70">{pricingData.rightBox.subNote}</p>

          <ul className="mt-6 ">
            {pricingData.rightBox.features.map((feature, index) => (
              <li key={index} className="flex border-b py-3 border-b-[#0f213314] items-center gap-3 text-gray-700">
                <FaCheck className="text-[#0A211F]" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Layout>
    </div>
  );
}
