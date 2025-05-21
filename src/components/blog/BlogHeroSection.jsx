"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Layout from "../common/Layout";
import Link from "next/link";
import Image from "next/image";

const BlogHeroSection = ({ blogData }) => {
  // Extract blogs from the provided blog data
  const { blogs = [], isLoading = false } = blogData || {};
  
  // If no blogs exist or still loading, render a simplified version
  if (isLoading || blogs.length === 0) {
    return (
      <section className="pb-16 pt-[100px] mt-[-20px] bg-[#EBFAFE]">
        <Layout>
          {/* Heading */}
          <div className="mb-12">
            <div className="flex flex-col items-center md:items-center text-center">
              <p className="text-base uppercase tracking-wider text-secondary-500 mb-2 font-['Inter',sans-serif]">BLOG</p>
              <h1 className="text-4xl md:text-6xl font-normal tracking-[-2px] text-[#0A2E3D] leading-[1.1] font-['Inter',sans-serif]">
                Creative Performance
              </h1>
              <p className="text-lg text-secondary-500 mt-4 text-center max-w-3xl font-['Inter',sans-serif] px-4">
                Creative ideas, practical tips and insider info the Aneeverse blog helps your team get great design done at scale.
              </p>
            </div>
          </div>
          
          {/* Loading state or empty blogs */}
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="md:col-span-2 bg-gray-100 rounded-xl p-12 flex items-center justify-center min-h-[400px]">
              {isLoading ? (
                <div className="animate-pulse text-secondary-500">Loading featured content...</div>
              ) : (
                <p className="text-secondary-500">No featured blog posts available yet.</p>
              )}
            </div>
            
            {/* Subscription Box */}
            <div className="bg-[#073742] rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-wide text-[#EBFAFE]/70 font-['Inter',sans-serif]">
                  CREATIVE GOLD
                </p>
                <h3 className="text-3xl font-semibold text-[#ebfafe] mt-2 font-['Inter',sans-serif]">
                  For Your Inbox
                </h3>
                <p className="text-lg text-[#ebfafe]/80 mt-3 font-['Inter',sans-serif]">
                  The best events, articles and insights to spark your next big idea.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center bg-transparent px-4 py-3 rounded-full border-2 border-[#ebfafe]/40">
                  <FaEnvelope className="text-[#ebfafe]/60" />
                  <input
                    type="email"
                    placeholder="buzz@nasa.gov"
                    className="flex-1 bg-transparent outline-none pl-3 text-[#ebfafe] placeholder-[#ebfafe]/60 font-['Inter',sans-serif]"
                  />
                </div>
                <button className="mt-4 w-full bg-[#ebfafe] text-[#073742] py-3 rounded-full font-semibold border-2 border-[#ebfafe]/100 hover:bg-transparent hover:text-[#ebfafe] hover:border-2 hover:border-[#ebfafe]/40 transition-colors font-['Inter',sans-serif]">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    );
  }
  
  // Get the first blog as featured
  const featuredBlog = blogs[0];
  
  return (
    <section className="pb-16 pt-[100px] mt-[-20px] bg-[#EBFAFE]">
      <Layout>
        {/* Heading */}
        <div className="mb-12">
          <div className="flex flex-col items-center md:items-center text-center">
            <p className="text-base uppercase tracking-wider text-secondary-500 mb-2 font-['Inter',sans-serif]">BLOG</p>
            <h1 className="text-4xl md:text-6xl font-normal tracking-[-2px] text-[#0A2E3D] leading-[1.1] font-['Inter',sans-serif]">
              Creative Performance
            </h1>
            <p className="text-lg text-secondary-500 mt-4 text-center max-w-3xl font-['Inter',sans-serif] px-4">
              Creative ideas, practical tips and insider info the Aneeverse blog helps your team get great design done at scale.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* Featured Blog */}
          <Link href={`blog/${featuredBlog.slug?.current || featuredBlog.slug || featuredBlog.id}`} className="md:col-span-2 bg-[#031B34] text-white rounded-xl overflow-hidden group">
            <div className="relative z-10 h-[350px] sm:h-[400px] w-full p-4 sm:p-8">
              <div className="absolute inset-0">
                <Image
                  src={featuredBlog.thumbnail}
                  alt="Featured Blog"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#031B34]/100 via-[#031B34]/90 to-transparent"></div>
              <div className="relative flex flex-col justify-between z-10 w-full h-full">
                <div className="flex flex-col pt-4">
                  <p className="text-md uppercase tracking-wide text-white font-['Inter',sans-serif] mb-[10px]">
                    {featuredBlog.category || "BLOG"} • <span className="normal-case">{featuredBlog.timeToRead ? `${featuredBlog.timeToRead} min read` : '5 min read'}</span>
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl max-w-md sm:max-w-xl overflow-hidden font-normal leading-[1.2] line-clamp-3 h-[calc(3*1.2*1em)] font-['Inter',sans-serif]" style={{ '--underline-height': '3px', '--underline-speed': '500ms' }}>
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat transition-[background] duration-[var(--underline-speed)] bg-[length:0%_var(--underline-height)] hover:bg-[length:100%_var(--underline-height)] group-hover:bg-[length:100%_var(--underline-height)]">
                      {featuredBlog.title}
                    </span>
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 mt-6">
                  <div className="font-['Inter',sans-serif]">
                    <p className="text-base text-white font-bold">Published</p>
                    <p className="text-lg font-medium">
                      {new Date(featuredBlog.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Subscription Box */}
          <div className="bg-[#073742] rounded-xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-wide text-[#EBFAFE]/70 font-['Inter',sans-serif]">
                CREATIVE GOLD
              </p>
              <h3 className="text-3xl font-semibold text-[#ebfafe] mt-2 font-['Inter',sans-serif]">
                For Your Inbox
              </h3>
              <p className="text-lg text-[#ebfafe]/80 mt-3 font-['Inter',sans-serif]">
                The best events, articles and insights to spark your next big idea.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center bg-transparent px-4 py-3 rounded-full border-2 border-[#ebfafe]/40">
                <FaEnvelope className="text-[#ebfafe]/60" />
                <input
                  type="email"
                  placeholder="buzz@nasa.gov"
                  className="flex-1 bg-transparent outline-none pl-3 text-[#ebfafe] placeholder-[#ebfafe]/60 font-['Inter',sans-serif]"
                />
              </div>
              <button className="mt-4 w-full bg-[#ebfafe] text-[#073742] py-3 rounded-full font-semibold border-2 border-[#ebfafe]/100 hover:bg-transparent hover:text-[#ebfafe] hover:border-2 hover:border-[#ebfafe]/40 transition-colors font-['Inter',sans-serif]">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default BlogHeroSection;
