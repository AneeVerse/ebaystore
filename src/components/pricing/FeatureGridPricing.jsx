import React from "react";
import { FaPen, FaCloud, FaBox, FaStar } from "react-icons/fa";
import Layout from "../common/Layout";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const featureData = [
  {
    icon: <FaPen className="text-2xl" />,
    title: "From brief to review and sign off.",
    description:
      "Welcome to Superspace. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
    bgColor: "bg-lime-200",
    // image: "/images/pricing/social-media-creative.png", // Replace with actual image
  },
  {
    icon: <FaCloud className="text-2xl" />,
    title: "Integrate with your favorite platforms.",
    description:
      "Already using platforms like Asana/Jira/Slack? They integrate too.",
    bgColor: "bg-blue-100",
    image: "/images/pricing/presentation-design.png", // Replace with actual image
  },
  {
    icon: <FaBox className="text-2xl" />,
    title: "Organize and share all your brand assets",
    description:
      "Stop searching—store and organize everything on our platform.",
    bgColor: "bg-gray-900 text-white",
    image: "/images/pricing/vertical-mobile.png", // Replace with actual image
  },
  {
    icon: <FaStar className="text-2xl" />,
    title: "Learn from our customers’ successful projects",
    description: "Reference work from the world’s best brands on our platform.",
    bgColor: "bg-yellow-700 text-white",
    image: "/images/pricing/horizontal-mobile.png", // Replace with actual image
  },
];

export default function FeatureGridPricing() {
  return (
    <div className="bg-primary-500 py-12">
      <Layout>
        {/* Title Section */}
        <div className="flex pb-8 flex-col gap-4 md:flex-row  justify-between">
          <div>
            <UiSubheading className="text-secondary-500 mb-2">
              Easy & Hassle-Free
            </UiSubheading>
            <Heading
              level="h2"
              color="dark"
              spacing="lg"
              className="text-left font-semibold"
            >
              One subscription for access to{" "}
              <AccentText size="lg" className={" text-secondary-500  "}>
                all our creative services
              </AccentText>
            </Heading>
          </div>

          <p className="text-md self-end max-w-md mt-6">
            No matter your creative need, submitting and managing a project is
            effortless.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  ">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${
                index == 2
                  ? ` md:row-span-2 `
                  : ` ${index == 3 ? " md:col-span-2 " : " "} `
              }  rounded-lg relative flex min-h-[350px] flex-col justify-between shadow-lg`}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className=" w-full h-full object-cover rounded-lg shadow"
                  />
                )}
              </div>
              <div className="absolute w-full h-full p-5 sm:p-6 left-0 top-0">
                <div className="flex flex-col items-start gap-4 mb-4">
                  {feature.icon}
                  <h4 className="text-2xl font-light">{feature.title}</h4>
                </div>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
