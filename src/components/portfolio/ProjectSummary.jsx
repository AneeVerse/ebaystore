import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

export default function ProjectSummary({ project }) {
  if (!project) return null;
  
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Project Information */}
          <div className="lg:col-span-8 lg:pl-0">
            <h2 className="text-3xl font-bold text-secondary-500 mb-6">Project Summary</h2>
            {project.projectSummary && (
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{project.projectSummary}</p>
              </div>
            )}
            
            {/* Services List */}
            {project.services && project.services.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary-500 mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-secondary-500 rounded-full px-4 py-2 text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Project Meta Information */}
          <div className="lg:col-span-4 lg:pr-0">
            <div className="bg-secondary-50 p-8 rounded-xl shadow-sm h-full">
              {/* Client Logo Section */}
              <div className="flex flex-col space-y-8">
                {/* Client Logo */}
                {project.clientLogo && (
                  <div className="mb-2">
                    <h3 className="text-sm uppercase text-secondary-500 font-semibold mb-3">CLIENT</h3>
                    <div className="h-20 relative w-full flex items-center">
                      <Image
                        src={urlForImage(project.clientLogo).url()}
                        alt={`${project.title} logo`}
                        width={200}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                
                {/* Year */}
                {project.year && (
                  <div className="mb-2">
                    <h3 className="text-sm uppercase text-secondary-500 font-semibold mb-3">YEAR</h3>
                    <p className="text-secondary-700 text-lg font-medium">{project.year}</p>
                  </div>
                )}
                
                {/* Industry */}
                {project.industry && (
                  <div className="mb-2">
                    <h3 className="text-sm uppercase text-secondary-500 font-semibold mb-3">INDUSTRY</h3>
                    <p className="text-secondary-700 text-lg font-medium">{project.industry}</p>
                  </div>
                )}
                
                {/* Categories */}
                {project.categories && project.categories.length > 0 && (
                  <div>
                    <h3 className="text-sm uppercase text-secondary-500 font-semibold mb-3">CATEGORIES</h3>
                    <div>
                      {project.categories.map((category, index) => (
                        <span key={index} className="text-secondary-700 text-lg font-medium">
                          {category.title}
                          {index < project.categories.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 