import React from "react";
import Layout from "../../common/Layout";
import Link from "next/link";

export default function EmailDesignAiDesignSection() {
  return (
    <section className="bg-secondary-500 py-12 px-2">
      <Layout className="relative  flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden">
         {/* Right Side (Image) */}
         <div className="absolute z-0 inset-0">
          <img
            src="/images/pricing/ai-banner.avif" // Replace with actual image path
            alt="AI Design Services"
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>
        {/* overlap */}
        <div className="bg-gradient-to-r from-black/50 to-transparent absolute z-0 top-0 left-0 h-full w-full"></div>

        {/* Left Side (Text Content) */}
        <div className=" w-full  md:w-[40%] relative z-20 text-white px-2 py-4 md:p-10 rounded-lg">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2 md:mb-4">
          ELEVATE CREATIVITY AND PERFORMANCE
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            <span className=" italic">Ai-Enhanced</span> Email Design
          </h2>
          <p className="mt-4 text-sm md:text-md text-gray-300">
          Learn more about Superside's AI Services and how we can help you get tomorrow’s possibilities on today’s deadline.
          </p>
          <Link href={"/contact"} className="mt-6 border border-white text-center inline-block text-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition">
            Book a demo
          </Link>
        </div>

       
      </Layout>
    </section>
  );
}
