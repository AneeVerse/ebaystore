"use client";

import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import Layout from "../common/Layout";

const TestimonialsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const testimonials = [
    {
      name: "Peyton Walbeck",
      position: "Head of Marketing",
      text: "Content beta has been amazing at creating creatives exactly how we’ve envisioned them even though they weren’t fully thought out.",
      videoThumbnail: "/images/home/testi-1.webp",
      videoUrl: "https://player.vimeo.com/video/456789123?autoPlay=1", // Replace with actual Vimeo link
    },
    {
      name: "Arianna Gonzalez",
      position: "Growth Strategist",
      text: "We have less people asking us questions and we see 33% higher free-to-paid conversions.",
      videoThumbnail: "/images/home/testi-2.webp",
      videoUrl: "https://player.vimeo.com/video/456789123?autoPlay=1", // Replace with actual Vimeo link
    },
    {
      name: "Chad Burmeister",
      position: "Founder",
      text: "When we played product explainer video, the first prospect who saw it, bought our platform.",
      videoThumbnail: "/images/home/testi-1.webp",
      videoUrl: "https://player.vimeo.com/video/456789123?autoPlay=1", // Replace with actual Vimeo link
    },
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  return (
    <section className="py-12 bg-primary-500">
      <Layout>
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">
          {"Highly Recommended By Companies ".toUpperCase()}
          <span className="block font-Rock_Salt mt-2 text-orange-500">
            {"Like Yours"}
          </span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col cursor-pointer" onClick={() => openModal(testimonial.videoUrl)}>
              {/* Video Thumbnail */}
              <div className="relative mb-4">
                <img src={testimonial.videoThumbnail} alt={`${testimonial.name} testimonial`} className="rounded-lg w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-600 italic mb-3">“{testimonial.text}”</p>

              {/* Client Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl z-50 bg-black bg-opacity-50 p-2 rounded-full"
            >
              <FaTimes />
            </button>

            {/* Vimeo Embed */}
            <iframe
              src={videoUrl}
              className="w-[90%] h-[90%] md:w-[70%] md:h-[70%] rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Testimonial Video"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
