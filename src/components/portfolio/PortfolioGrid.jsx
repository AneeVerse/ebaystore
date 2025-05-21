"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioGrid({ portfolioItems = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Extract unique categories from portfolio items
  useEffect(() => {
    if (portfolioItems.length > 0) {
      const allCategories = new Set();
      allCategories.add('all');
      
      portfolioItems.forEach(item => {
        if (item.categories && item.categories.length > 0) {
          item.categories.forEach(category => {
            if (category.title) {
              allCategories.add(category.title);
            }
          });
        }
      });
      
      setCategories(Array.from(allCategories));
      setFilteredItems(portfolioItems);
    }
  }, [portfolioItems]);
  
  // Filter items when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => 
        item.categories && 
        item.categories.some(category => category.title === selectedCategory)
      );
      setFilteredItems(filtered);
    }
  }, [selectedCategory, portfolioItems]);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-500 text-white font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'All Work' : category}
          </button>
        ))}
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/our-work/${item.slug.current}`} className="block">
                <div className="relative h-64 w-full overflow-hidden">
                  {(item.thumbnailImage || item.mainImage) && (
                    <Image
                      src={urlForImage(item.thumbnailImage || item.mainImage).url()}
                      alt={item.mainImage?.alt || item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  {/* Client Logo (if available) */}
                  {item.clientLogo && (
                    <div className="h-12 mb-4 relative flex items-center">
                      <Image
                        src={urlForImage(item.clientLogo).url()}
                        alt={`${item.title} logo`}
                        width={120}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Display Services */}
                  {item.services && item.services.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.services.map((service, index) => (
                        <span 
                          key={index} 
                          className="text-sm text-gray-500"
                        >
                          {service}
                          {index < item.services.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {item.shortDescription && (
                    <p className="text-gray-600 text-sm mt-2">
                      {item.shortDescription}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No portfolio items found in this category.</p>
        </div>
      )}
    </div>
  );
} 