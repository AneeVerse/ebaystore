import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioMetrics({ results = [] }) {
  if (!results || results.length === 0) return null;
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <h3 className="text-6xl md:text-7xl font-extrabold text-secondary-500 mb-4">
                {result.value}
              </h3>
              <p className="text-gray-900 text-xl font-semibold">{result.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 