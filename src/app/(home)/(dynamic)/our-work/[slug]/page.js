'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { client } from '@/sanity/lib/client';
import { getPortfolioWorkBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import ProjectSummary from '@/components/portfolio/ProjectSummary';
import PortfolioMetrics from '@/components/portfolio/PortfolioMetrics';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import { motion } from 'framer-motion';

// Portable Text components
const myPortableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{children}</h2>,
    normal: ({children}) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
  },
  types: {
    image: ({value}) => {
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Project image'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-gray-500 text-sm mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
  },
};

export default function PortfolioItemDetail({ params }) {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Update document title when project loads
    if (project) {
      document.title = `${project.title} | Our Work | Aneeverse`;
    }
  }, [project]);
  
  useEffect(() => {
    async function fetchPortfolioItem() {
      try {
        const data = await client.fetch(getPortfolioWorkBySlugQuery, {
          slug: params.slug,
        });
        
        setProject(data);
      } catch (error) {
        console.error('Error fetching portfolio item:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (params.slug) {
      fetchPortfolioItem();
    }
  }, [params.slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for could not be found.</p>
          <Link 
            href="/our-work" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <FaArrowLeft className="mr-2" /> Back to Our Work
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 mt-[40px]">
      {/* Back Link */}
      <div className="container mx-auto px-4 mb-4">
        <Link 
          href="/our-work" 
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Our Work
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
          
          {project.shortDescription && (
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">{project.shortDescription}</p>
          )}
        </motion.div>
        
        {/* Main Image */}
        {project.mainImage && (
          <motion.div 
            className="relative w-full overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={urlForImage(project.mainImage).url()}
              alt={project.mainImage.alt || project.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </motion.div>
        )}
      </div>
      
      {/* Project Summary Section */}
      <ProjectSummary project={project} />
      
      {/* Results Metrics Section */}
      {project.results && project.results.length > 0 && (
        <PortfolioMetrics results={project.results} />
      )}
      
      {/* Project Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <ProjectGallery images={project.galleryImages} />
      )}
      
      {/* Detailed Description */}
      {project.body && (
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose max-w-none">
              <PortableText value={project.body} components={myPortableTextComponents} />
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to create your success story?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your business achieve similar results.</p>
          <Link
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 