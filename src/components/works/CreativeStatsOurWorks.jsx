import React from "react";
import Layout from "../common/Layout";

import { MdOutlineArrowOutward } from "react-icons/md";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const stats = [
  {
    percentage: "240%",
    description: "Increase in CTR for PointCard",
    caseStudy: "PointCard case study",
  },
  {
    percentage: "50%",
    description: "Reduction in cost per asset for Amazon",
    caseStudy: "Amazon case study",
  },
  {
    percentage: "70%",
    description: "Reduction in turnaround time for Salesforce",
    caseStudy: "Salesforce case study",
  },
];

const CreativeStatsOurWorks = () => {
  return (
    <div className="bg-primary-500 text-secondary-500 py-16 text-center">
      <Layout>
        <Heading
          level="h1"
          color="dark"
          spacing="lg"
          className="text-center font-medium"
        >
          Creative that{" "}
          <AccentText size="xl" className={""}>
          works
          </AccentText>
        </Heading>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We help the world's leading brands create standout ads and campaigns
          at speed—from concept to execution to results.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-8 pt-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex text-center md:text-left flex-col-reverse md:flex-row flex-wrap items-center text-secondary-500"
            >
              <div className="flex-1 md:self-end">
                <p className="text-gray-600 mt-2">{item.description}</p>
                <a
                  href="#"
                  className=" font-medium mt-2 inline-block hover:underline"
                >
                  {item.caseStudy}{" "}
                  <MdOutlineArrowOutward className="inline-block" />
                </a>
              </div>
              <p className="text-6xl font-bold ">{item.percentage}</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default CreativeStatsOurWorks;
