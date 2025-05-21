import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { getFeaturedPortfolioWorksQuery } from '@/sanity/lib/queries';
import { motion } from 'framer-motion';

export default function FeaturedWorks() {
  const [featuredWorks, setFeaturedWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchFeaturedWorks() {
      try {
        const data = await client.fetch(getFeaturedPortfolioWorksQuery);
        setFeaturedWorks(data);
      } catch (error) {
        console.error('Error fetching featured works:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchFeaturedWorks();
  }, []);
  
  if (isLoading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    );
  }
  
  if (featuredWorks.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured <span className="text-primary-500">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering outstanding results for brands across industries. Explore our portfolio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/our-work/${work.slug.current}`} className="block">
                <div className="relative h-56 w-full overflow-hidden">
                  {(work.thumbnailImage || work.mainImage) && (
                    <Image
                      src={urlForImage(work.thumbnailImage || work.mainImage).url()}
                      alt={work.mainImage?.alt || work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  {/* Client Logo (if available) */}
                  {work.clientLogo && (
                    <div className="h-10 mb-4 relative flex items-center">
                      <Image
                        src={urlForImage(work.clientLogo).url()}
                        alt={`${work.title} logo`}
                        width={100}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {work.title}
                  </h3>
                  
                  {/* Display Services */}
                  {work.services && work.services.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {work.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="text-sm text-gray-500"
                        >
                          {service}
                          {idx < work.services.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
} 