"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../common/Layout";
import { UiSubheading } from "../common/typography/UiSubheading";
import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";

const faqs = [
  {
    question: "What makes aneeverse's design services different?",
    answer:
      "We deliver speedy, high-quality graphic design services through a transparent subscription model.",
  },
  {
    question: "How does a design subscription work?",
    answer:
      "A subscription provides you access to dedicated design resources on a recurring basis.",
  },
  {
    question: "What is graphic design?",
    answer:
      "Graphic design is the art of creating visual content to communicate messages.",
  },
  {
    question: "What do graphic designers do?",
    answer:
      "Graphic designers create visuals that inspire, inform, and captivate audiences.",
  },
  {
    question: "Who needs graphic design services?",
    answer:
      "Anyone looking to enhance their brand's visual identity needs graphic design services.",
  },
  {
    question: "Do you do custom plans?",
    answer: "Yes, we offer tailored solutions to meet unique design needs.",
  },
  {
    question: "What billing options do you offer?",
    answer:
      "We offer flexible billing options, including monthly and annual subscriptions.",
  },
];

export default function FAQSectionPricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-primary-500 text-secondary-500 py-16">
      <Layout>
        <UiSubheading className="text-secondary-500 mb-2">
        FAQs
        </UiSubheading>
        <Heading
          level="h2"
          color="dark"
          spacing="lg"
          className="text-left font-semibold mb-2"
        >
          Frequently{" "}
          <AccentText size="lg" className={" text-secondary-500  "}>
          asked questions
          </AccentText>
        </Heading>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate:
                        activeIndex === index + Math.ceil(faqs.length / 2)
                          ? 180
                          : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index + Math.ceil(faqs.length / 2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
