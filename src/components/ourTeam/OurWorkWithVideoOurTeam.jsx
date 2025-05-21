"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "../common/Layout";

const OurWorkWithVideoOurTeam = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section className=" bg-secondary-500 py-3 md:py-10">
      <Layout className="flex flex-col items-center justify-center min-h-screen">
        
      <h2 className="text-primary-500 text-center text-4xl md:text-6xl font-semibold mb-6">See how <span className="font-Rock_Salt">top brands</span> use aneeverse.</h2>
      <p className="text-gray-300 text-center max-w-xl mb-6">
        Take a glimpse of what’s possible—check out some of our most creative collaborations to date.
      </p>
      <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#0e2f50] transition-all">
        Explore our work
      </button>
      <motion.div
        ref={ref}
        style={{ scale }}
        className="mt-6 w-full max-w-5xl overflow-hidden rounded-lg shadow-lg"
      >
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </motion.div>
      
      </Layout>
    </section>
  );
};

export default OurWorkWithVideoOurTeam;
