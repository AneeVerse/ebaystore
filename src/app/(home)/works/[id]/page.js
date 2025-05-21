'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/common/Layout';
import { Heading } from '@/components/common/typography/Heading';
import { projects } from '@/data/projects';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import AIDesignSection from '@/components/pricing/AIDesignSection';
import { client } from '@/sanity/lib/client';
import { getPortfolioWorkBySlugQuery, getPortfolioWorksQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import ProjectSummary from '@/components/portfolio/ProjectSummary';
import PortfolioMetrics from '@/components/portfolio/PortfolioMetrics';
import ProjectGallery from '@/components/portfolio/ProjectGallery';

// PortableText components
const portableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="text-2xl font-semibold text-secondary-500 mb-4 mt-8">{children}</h2>,
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

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [previousProject, setPreviousProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  // Load project data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        
        // Fetch the current project
        const projectData = await client.fetch(getPortfolioWorkBySlugQuery, {
          slug: params.id,
        });
        
        if (projectData) {
          setProject(projectData);
          document.title = `${projectData.title} | Our Works | Aneeverse`;
          
          // Fetch all projects to determine related, previous, and next projects
          const allProjects = await client.fetch(getPortfolioWorksQuery);
          
          if (allProjects && allProjects.length > 0) {
            // Find the current project index
            const currentIndex = allProjects.findIndex(p => p.slug.current === params.id);
            
            // Set previous and next project
            if (currentIndex > 0) {
              setPreviousProject(allProjects[currentIndex - 1]);
            }
            
            if (currentIndex < allProjects.length - 1) {
              setNextProject(allProjects[currentIndex + 1]);
            }
            
            // Get related projects (excluding the current one)
            const related = allProjects
              .filter(p => p.slug.current !== params.id)
              .slice(0, 3);
            
            setRelatedProjects(related);
          }
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  // Fallback to static data if Sanity data is not available
  const staticProject = projects.find(p => p.slug === params.id);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    );
  }

  // If no data from Sanity or static data, show not found
  if (!project && !staticProject) {
    return <div>Project not found</div>;
  }

  // Use Sanity project data if available, otherwise fall back to static data
  const displayProject = project || staticProject;
  const displayRelated = relatedProjects.length > 0 
    ? relatedProjects 
    : projects.filter(p => p.slug !== params.id).slice(0, 3);

  return (
    <div>
      <Layout className="space-y-8 py-16 text-secondary-500">
        {/* Breadcrumb */}
        <div className='flex font-semibold justify-between'>
          <div className='text-secondary-500 tracking-widest uppercase'>
            Our Work / {displayProject.title}
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          {project?.mainImage ? (
            <div className="w-full h-[50vh] relative rounded-lg overflow-hidden">
              <Image
                src={urlForImage(project.mainImage).url()}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>
          ) : (
            <img
              src={staticProject?.thumbnail}
              alt={staticProject?.title}
              className="w-full rounded-lg h-auto object-cover object-top"
            />
          )}
        </div>

        {/* Project Summary Section */}
        {project ? (
          <ProjectSummary project={project} />
        ) : (
          <section className="max-w-[1280px] mx-auto py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-md uppercase tracking-wider font-bold">Project Summary</h2>
                <div className="space-y-6">
                  <div>
                    <Heading level="h3" color="dark" spacing="lg" className="font-medium">
                      {staticProject.about.title}
                    </Heading>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed">{staticProject.about.description}</p>
                  </div>
                  <div className='flex gap-16 items-center'>
                    <div>
                      <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Year</h4>
                      <div className='text-3xl font-medium'>{staticProject.about.year}</div>
                    </div>
                    <div>
                      <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Industry</h4>
                      <div className='text-3xl font-medium'>{staticProject.about.industry}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 h-96 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={staticProject.about.image}
                    alt="Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Metrics Section */}
        {project?.results && project.results.length > 0 && (
          <PortfolioMetrics results={project.results} />
        )}
        
        {/* Project Gallery */}
        {project?.galleryImages && project.galleryImages.length > 0 && (
          <ProjectGallery images={project.galleryImages} />
        )}

        {/* Main Content Sections - Static Project */}
        {!project && staticProject?.sections && (
          <div className="max-w-[1280px] mx-auto space-y-24 px-4">
            {staticProject.sections.map((section, index) => (
              <section key={index} className="space-y-12">
                {section.type === 'text' && (
                  <p className="text-2xl leading-relaxed text-gray-700 max-w-5xl mx-auto text-center">
                    {section.content}
                  </p>
                )}

                {section.type === 'image-grid' && (
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {section.images.map((img, i) => (
                      <div key={i} className="relative p-5 overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'gallery-with-text' && (
                  <div>
                    <p className="text-2xl leading-relaxed text-gray-700 max-w-5xl mx-auto text-center">
                      {section.description}
                    </p>
                    <div className="grid grid-cols-1 mt-12 gap-6">
                      {section.images.map((img, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Sanity Rich Content */}
        {project?.body && (
          <div className="max-w-[1280px] mx-auto py-12 px-4">
            <div className="prose max-w-none">
              <PortableText value={project.body} components={portableTextComponents} />
            </div>
          </div>
        )}
        
       

        <div className='max-w-[1280px] mx-auto'>
          <AIDesignSection />
        </div>
        
        {/* Next and Previous Buttons */}
        <div className="max-w-[1280px] mx-auto border-t-[1px] border-gray-300 pt-12">
          <div className="flex justify-between">
            {/* Previous Button */}
            {previousProject ? (
              <Link
                href={`/works/${previousProject.slug.current}`}
                className="flex items-center text-secondary-500 font-semibold text-lg transition-colors"
              >
                <FaChevronLeft className='mr-1 text-3xl'/> Previous Project
              </Link>
            ) : (
              <span className="flex items-center text-gray-400 font-semibold text-lg cursor-not-allowed">
                <FaChevronLeft className='mr-1 text-3xl'/> Previous Project
              </span>
            )}

            {/* Next Button */}
            {nextProject ? (
              <Link
                href={`/works/${nextProject.slug.current}`}
                className="flex items-center text-secondary-500 font-semibold text-lg transition-colors"
              >
                Next Project <FaChevronRight className='ml-1 text-3xl'/>
              </Link>
            ) : (
              <span className="flex items-center text-gray-400 font-semibold text-lg cursor-not-allowed">
                Next Project <FaChevronRight className='ml-1 text-3xl'/>
              </span>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}