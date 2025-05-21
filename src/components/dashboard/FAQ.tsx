'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex w-full justify-between items-center py-4 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <IoChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 prose max-w-none">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  title: string;
  description?: string;
  items: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const FAQ: React.FC<FAQProps> = ({ title, description, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 