"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Layout from "../common/Layout";
import Link from "next/link";
import { blogs } from "@/data/blogData";


const BlogHeroSection = () => {
  return (
    <section className=" pb-16 pt-[120px] mt-[-80px]">
      <Layout >
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-wide text-secondary-500">BLOG</h4>
          <h2 className="text-4xl md:text-6xl mt-3 font-semibold text-secondary-500">
            Creative Performance
          </h2>
          <p className="text-lg text-secondary-500 mt-8">
            Creative ideas, practical tips and insider info—the Superside blog
            helps your team get great design done at scale.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Blog */}
          <Link href={`blog/${blogs[0].id}`} className="md:col-span-2 bg-[#031B34] text-white rounded-xl overflow-hidden">
            <div className="relative z-10 h-full w-full p-6">
            <img
              src={blogs[0].thumbnail}
              alt="Featured Blog"
              className="w-full h-full absolute top-0 left-0 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-secondary-500 opacity-50"></div>
            <div className="relative flex flex-col justify-around z-10 w-full h-full ">
              <p className="text-sm sm:text-md font-semibold uppercase tracking-wide text-gray-400">
                ANEEVERSE NEWS • 5 min read
              </p>
              <h3 className="text-3xl sm:text-4xl max-w-full sm:max-w-sm font-semibold mt-3">
               {blogs[0].title}
              </h3>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={blogs[0].author.image}
                  alt={blogs[0].author.name}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex items-center text-sm gap-2">
                    <div className="pr-4 border-r border-gray-400">
                  <p className=" font-medium">{blogs[0].author.name}</p>
                  <p className=" text-gray-400">
                    {blogs[0].author.role}
                  </p>
                  </div>
                  <div className="pl-4">
                  Published <br /> {blogs[0].date}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Link>

          {/* Subscription Box */}
          <div className="bg-[#EAF2E3] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                CREATIVE GOLD
              </p>
              <h3 className="text-3xl font-semibold text-gray-900 mt-2">
                For Your Inbox
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                The best events, articles and insights to spark your next big idea.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center bg-white px-4 py-3 rounded-full border border-gray-300">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  placeholder="buzz@nasa.gov"
                  className="flex-1 bg-transparent outline-none pl-3 text-gray-900"
                />
              </div>
              <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-full font-semibold">
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
