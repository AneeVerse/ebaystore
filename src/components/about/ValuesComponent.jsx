import React from "react";
import Layout from "../common/Layout";

const valuesData = [
  {
    id: 1,
    title: "BE KIND",
    heading: "We work to create a supportive environment where ambitious talent can thrive.",
    description:
      "We celebrate differences in thoughts and experiences. We give constructive and respectful feedback to each other. We take care of each other personally and professionally.",
    image: "/images/about/be-kind.png", // Replace with your image paths
    bgColor: "#2A4E45",
  },
  {
    id: 2,
    title: "SEEK THE TRUTH",
    heading: "We are transparent, direct, and obliged to share the truth.",
    description:
      "We care about making the right decision based on facts over emotions. Our beliefs are hypotheses and we take pride in admitting when we’re wrong and changing course.",
    image: "/images/about/seek-the-truth.png",
    bgColor: "#E6ECD6",
  },
  {
    id: 3,
    title: "SPEED IS SAFETY",
    heading: "It is safer to move fast than to move slow, so we operate with urgency.",
    description:
      "We seek the shortest effective path and actively choose what not to do. We ask 'why' to prioritize the most important outcomes. We look for simple and pragmatic solutions and iterate from there.",
    image: "/images/about/speed-is-safety.png",
    bgColor: "#EEE2CA",
  },
  {
    id: 4,
    title: "ROLL UP YOUR SLEEVES",
    heading: "We pull our weight and we are happy to take one for the team.",
    description:
      "We execute with rigor, focus, and persistence. If it needs to get done, we do it. We believe in humility and the act of doing work that goes unrecognized.",
    image: "/images/about/roll-up.png",
    bgColor: "#19546D",
  },
];

export default function ValuesComponent() {
  return (
    <div className="bg-primary-500 py-10">
      <Layout>
      <div className="text-center mb-10">
        <div className=" font-light tracking-widest mb-3 text-sm text-gray-600">
            DRIVEN BY PRINCIPLE 
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
         <span className="font-Rock_Salt"> Our values </span>lead the way
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          This is what makes us who we are: embracing diversity, practicing
          empathy, and empowering our people to be autonomous and agile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {valuesData.map((value, index) => (
          <div
          style={{backgroundColor: value.bgColor}}
            key={value.id}
            className={`rounded-lg p-6 flex flex-col md:flex-row items-start gap-4 bg-[${value.bgColor}] text-[${((index === 1) || (index === 2)) ? "gray" : "white"}]`}
          >
            <div className="">
              <h3 className="text-md font-light tracking-widest">{value.title}</h3>
              <h4 className="text-xl font-medium mt-2">{value.heading}</h4>
              <p className="text-sm mt-4">{value.description}</p>
            </div>
            <img
              src={value.image}
              alt={value.title}
              className="w-1/3 h-full object-contain"
            />
          </div>
        ))}
      </div>
      </Layout>
    </div>
  );
}
