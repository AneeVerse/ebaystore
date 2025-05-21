'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import SanityPortableText from './SanityPortableText';

const BlogFAQItem = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <motion.div 
      className="border-b border-gray-700 last:border-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        className="flex w-full justify-between items-center py-5 text-left focus:outline-none group"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
          {question}
        </h3>
        <IoChevronDown 
          className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-white' : ''} group-hover:text-white`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 prose prose-lg max-w-none prose-p:text-gray-300 prose-a:text-white prose-a:underline prose-strong:text-white">
              {typeof answer === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              ) : (
                <SanityPortableText value={answer} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BlogFAQ = ({ title = 'Frequently Asked Questions', questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no questions, don't render anything
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <motion.section 
      className="mt-16 pt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#101828]">
          <div className="text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider">FAQ</div>
          {title}
        </h2>
      </motion.div>
      
      <motion.div 
        className="bg-[#073742] rounded-xl p-6 md:p-8 divide-y divide-gray-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {questions.map((item, index) => (
          <BlogFAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleItem(index)}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogFAQ; 