'use client';

import React from 'react';
import Layout from '@/components/common/Layout';
import LatestBlogSection from '@/components/blog/LatestBlogSection';
import { HiOutlinePencilAlt, HiOutlineUserGroup, HiOutlineBookOpen, HiOutlinePlay } from "react-icons/hi";
import Link from 'next/link';

const ResourcesPage = () => {
  const resources = [
    {
      name: "Blog",
      link: "/blog",
      description: "Latest articles and insights",
      icon: <HiOutlinePencilAlt className="w-8 h-8" />,
    },
    {
      name: "Customer Stories",
      link: "/customer-stories",
      description: "Success stories from our clients",
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
    },
    {
      name: "Guides & Quizzes",
      link: "/guides-quizzes",
      description: "Insights from marketing leaders",
      icon: <HiOutlineBookOpen className="w-8 h-8" />,
    },
    {
      name: "Video Library",
      link: "/video-library",
      description: "Aneeverse's latest videos",
      icon: <HiOutlinePlay className="w-8 h-8" />,
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[100px]">
      {/* Hero Section */}
      <div className="bg-secondary-500 py-16">
        <Layout>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Explore our collection of resources designed to help you grow your business and stay ahead in the digital world.
            </p>
          </div>
        </Layout>
      </div>

      {/* Resources Grid */}
      <div className="py-16">
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, idx) => (
              <Link 
                key={idx} 
                href={resource.link}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-secondary-500 transition-all duration-300"
              >
                <div className="text-secondary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </Layout>
      </div>

      {/* Latest Blog Posts Section */}
      <LatestBlogSection />
    </div>
  );
};

export default ResourcesPage; 