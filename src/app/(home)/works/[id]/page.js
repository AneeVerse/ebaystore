import Layout from '@/components/common/Layout';
import { Heading } from '@/components/common/typography/Heading';
import { projects } from '@/data/projects';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import AIDesignSection from '@/components/pricing/AIDesignSection';

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Find the current project index
  const currentIndex = projects.findIndex(p => p.slug === params.id);

  // Get previous and next project
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

 // Get related projects (excluding the current project)
 const relatedProjects = projects
 .filter(p => p.slug !== project.slug) // Exclude current project
 .slice(0, 3); // Show only 2 related projects

  return (
    <div>
      <Layout className="space-y-8 py-16 text-secondary-500">
        {/* Breadcrumb */}
        <div className='flex font-semibold justify-between'>
          <div className='text-secondary-500 tracking-widest uppercase'>Our Work / {project.title}</div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full rounded-lg h-auto object-cover object-top"
          />
        </div>

        {/* Project Summary Section */}
        <section className="max-w-[1280px] mx-auto py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-md uppercase tracking-wider font-bold">Project Summary</h2>
              <div className="space-y-6">
                <div>
                  <Heading level="h3" color="dark" spacing="lg" className="font-medium">
                    {project.about.title}
                  </Heading>
                </div>
                <div>
                  <p className="text-lg leading-relaxed">{project.about.description}</p>
                </div>
                <div className='flex gap-16 items-center'>
                  <div>
                    <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Year</h4>
                    <div className='text-3xl font-medium'>{project.about.year}</div>
                  </div>
                  <div>
                    <h4 className="text-sm tracking-wider font-semibold uppercase mb-2">Industry</h4>
                    <div className='text-3xl font-medium'>{project.about.industry}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Image Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={project.about.image}
                  alt="Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="max-w-[1280px] mx-auto space-y-24 px-4">
          {project.sections.map((section, index) => (
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

        
        {/* Discover More Section */}
        <div className="max-w-[1280px] mx-auto pt-16">
          <h2 className="text-md font-semibold text-secondary-500 mb-4 uppercase tracking-wider ">
            Discover more stellar projects:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/works/${relatedProject.slug}`}
                className="group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={relatedProject.thumbnail}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-secondary-500  ">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-600">{relatedProject.meta.services.join(", ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='max-w-[1280px] mx-auto'>

        <AIDesignSection />
        </div>
        {/* Next and Previous Buttons */}
        <div className="max-w-[1280px]  mx-auto border-t-[1px] border-gray-300 pt-12">
          <div className="flex justify-between">
            {/* Previous Button */}
            {previousProject ? (
              <Link
                href={`/works/${previousProject.slug}`}
                className="flex items-center text-secondary-500 font-semibold text-lg  transition-colors"
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
                href={`/works/${nextProject.slug}`}
                className="flex items-center text-secondary-500 font-semibold text-lg transition-colors"
              >
                Next Project  <FaChevronRight className='ml-1  text-3xl'/>
              </Link>
            ) : (
              <span className="flex items-center text-gray-400 font-semibold text-lg cursor-not-allowed">
                Next Project  <FaChevronRight className='ml-1 text-3xl'/>
              </span>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}