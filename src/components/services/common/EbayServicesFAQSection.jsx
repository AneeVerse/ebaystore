"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const defaultFaqs = [
  { question: "What eBay services do you offer?", answer: "We offer a comprehensive range of eBay services including account suspension recovery, listing optimization, performance analytics, promotions management, returns handling, seasonal campaign planning, and more." },
  { question: "How can you help with my suspended eBay account?", answer: "Our team specializes in analyzing suspension causes, developing effective appeals, and guiding you through the reinstatement process with a high success rate of account recovery." },
  { question: "What is included in your performance analytics service?", answer: "Our performance analytics service includes sales analysis, conversion rate optimization, traffic analysis, competitive benchmarking, and custom performance dashboards with actionable insights." },
  { question: "How do you handle eBay returns and refunds?", answer: "We provide complete return management including policy development, request processing, reason analysis, refund management, and strategies to reduce return rates." },
  { question: "Can you help with seasonal promotions on eBay?", answer: "Yes, we create comprehensive seasonal campaign strategies including inventory planning, listing optimization, promotional offers, and performance tracking to maximize revenue during peak seasons." },
  { question: "Do you offer customized eBay management plans?", answer: "Absolutely! We create tailored eBay management solutions based on your specific business needs, goals, and budget." },
  { question: "What pricing options do you have for eBay services?", answer: "We offer flexible pricing options including project-based rates, monthly management packages, and ongoing support plans to fit businesses of all sizes." },
];

export default function EbayServicesFAQSection({ customFaqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Use custom FAQs if provided, otherwise use default ones
  const faqs = customFaqs.length > 0 ? customFaqs : defaultFaqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
        <div className="text-md font-light tracking-[2px] mb-3">FAQs</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Frequently <span className="font-Rock_Salt">asked questions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-700 pb-4"
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
                className="border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate: activeIndex === index + Math.ceil(faqs.length / 2) ? 180 : 0,
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
                    className="mt-2 "
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