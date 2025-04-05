"use client";
import { use, useEffect, useRef, useState } from "react";
import Layout from "@/components/common/Layout";
import { customerStories } from "@/data/customerStoriesData";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaRegClock, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import Newsletter from "@/components/blog/NewsLetter";
import SidebarCallToAction from "@/components/customer-stories/common/SidebarCallToAction";

const getStory = (id) => customerStories.find((story) => story.id === id);

export default function CustomerStoryDetail({ params }) {
    const resolvedParams = use(params); // ✅ Unwrapping params
  const post = getStory(resolvedParams.id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);
  const observer = useRef(null);

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Check if window is defined
    setIsBrowser(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (observer.current) {
      sectionRefs.current.forEach((section) => section && observer.current.unobserve(section));
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref && ref.id === entry.target.id);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.2 }
    );

    sectionRefs.current.filter(Boolean).forEach((section) => observer.current.observe(section));

    return () => {
      sectionRefs.current.filter(Boolean).forEach((section) => observer.current.unobserve(section));
    };
  }, [post]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, post?.content.length);
  }, [post]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    // Smooth Scroll Optimization with Throttle Effect
    let throttleTimeout = null;
    const throttledScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  if (!post) return <div className="text-center py-20">Story not found</div>;

  return (
    <div className="bg-white py-16">
      <Layout>
        {/* ✅ Breadcrumbs */}
        <header className="mb-16">
          <div className="flex items-center text-md text-secondary-500/80 font-semibold gap-2 mb-3">
            <Link href="/customer-stories" className="uppercase hover:underline">
              Customer Stories
            </Link>
            <IoIosArrowForward />
            <span  className="uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl text-secondary-500 sm:text-3xl md:max-w-3xl md:text-4xl font-semibold mb-6 md:mb-8">{post.title}</h1>

          {/* ✅ Story Hero Section */}
          <div className="relative h-[230px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src={post.thumbnail} alt={post.title} fill className=" rounded-lg object-cover" placeholder="blur" blurDataURL="/images/placeholder.jpg" />
            <div className="absolute inset-0 bg-gradient-to-b rounded-lg from-transparent to-black opacity-70" />
            <div className="absolute w-full md:w-[80%] lg:w-[60%] inset-0 px-4 md:px-8 flex flex-col text-white py-4 md:py-6 justify-between">
              <div>
                
                {/* <div>
                    Published {post.date}
                    </div> */}
              </div>

              {/* ✅ Author & Client Info */}
              <div className="flex items-center gap-4">
               
                <img src={post.client.logo} alt={post.client.name} className="rounded-md h-[40px] w-auto p-1 shadow-md" />
              </div>
            </div>
          </div>
        </header>

        {/* ✅ Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
          {/* Sidebar (TOC & Author Info) */}
          <aside className="sticky top-24 self-start hidden lg:block">
            <div className="space-y-8 bg-white">
              <div className="bg-white font-medium  py-3 text-lg">
                <div className="text-gray-900 flex items-center gap-3">
                  <FaRegClock />
                  <div>{post.timeToRead}</div>
                </div>
                               {/* ✅ Smooth Scroll Progress Bar */}
                <div className="h-1 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-secondary-500 transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                  ></div>
                </div>

              </div>

              {/* ✅ Table of Contents */}
              <div className="pb-1">
                <h4 className=" text-sm font-semibold mb-4 uppercase">In this story</h4>
                <ul className="space-y-3">
                  {post.content.map((section, index) => (
                    <li key={index}>
                      <a href={`#section-${index}`} className={`flex items-center group text-sm ${activeSection === index ? "font-semibold" : ""}`}>
                        <span className={`w-[5px] h-[5px] rounded-full ${activeSection === index ? "bg-secondary-500 scale-100 opacity-100" : "bg-secondary-500 group-hover:scale-100 group-hover:opacity-100 scale-0 opacity-0"} inline-block transition-all duration-300`}></span>
                        <span className={`ml-[-5px] text-gray-600 transition-all duration-300 ${activeSection === index ? "ml-[5px] text-secondary-500" : "group-hover:ml-[5px] group-hover:text-secondary-500"}`}>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

               {/* ✅ Social Media Share */}
               {isBrowser && (    <div className="flex flex-col pb-3  gap-4">
          <p className="text-sm font-semibold uppercase">Share this Article:</p>
          <div className="flex items-center gap-4">
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" className="text-secondary-500 hover:text-blue-800">
            <FaFacebook size={24} />
          </Link>
          <Link href={`https://wa.me/?text=${encodeURIComponent(post.title + " - " + window.location.href)}`} target="_blank" className="text-secondary-500  hover:text-green-800">
            <FaWhatsapp size={24} />
          </Link>
          <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" className="text-secondary-500 hover:text-blue-600">
            <FaTwitter size={24} />
          </Link>
          <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`} target="_blank" className="text-secondary-500  hover:text-blue-900">
            <FaLinkedin size={24} />
          </Link>
        </div>
        </div>
               )}
        <SidebarCallToAction />
            </div>
          </aside>

          {/* ✅ Main Story Content */}
          <div>
            <div className="text-lg text-gray-600 leading-relaxed description mb-12">{post.description}</div>
            <article className="space-y-20">
              {post.content.map((section, index) => (
                <section key={index} id={`section-${index}`} ref={(el) => (sectionRefs.current[index] = el)} className="scroll-mt-24 mb-16">
                  <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
                  {section.type !== "text" && (
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      {section.type === "image" ? (
                        <Image src={section.srcUrl} alt={section.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                      ) : (
                        <iframe src={section.srcUrl} title="Video" frameBorder="0" allow="autoplay; encrypted-media; fullscreen" className="w-full h-full object-cover" />
                      )}
                    </div>
                  )}
                  <div className="text-lg text-gray-600 leading-relaxed">{section.description}</div>
                </section>
              ))}
            </article>

            {/* ✅ Newsletter CTA */}
            <div className="mt-12">
              <Newsletter />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
