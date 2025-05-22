"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "../common/Layout";
import Link from "next/link";
import Button from "../common/Button";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

const images1 = [
  {
    src: "/hero-logos/shopify.png",
    logo: "/hero-logos/shopify.png",
  },
  {
    src: "/hero-logos/reddit.png",
    logo: "/hero-logos/reddit.png",
  },
  {
    src: "/hero-logos/salesforce.png",
    logo: "/hero-logos/salesforce.png",
  },
  {
    src: "/hero-logos/pharmacy.png",
    logo: "/hero-logos/pharmacy.png",
  },
  {
    src: "/hero-logos/shopify.png",
    logo: "/hero-logos/shopify.png",
  },
  {
    src: "/hero-logos/reddit.png",
    logo: "/hero-logos/reddit.png",
  },
  {
    src: "/hero-logos/salesforce.png",
    logo: "/hero-logos/salesforce.png",
  },
  {
    src: "/hero-logos/pharmacy.png",
    logo: "/hero-logos/pharmacy.png",
  },
];

const images2 = [
  {
    src: "/hero-logos/opa.png",
    logo: "/hero-logos/opa.png",
  },
  {
    src: "/hero-logos/oyster.png",
    logo: "/hero-logos/oyster.png",
  },
  {
    src: "/hero-logos/pernod ricard.png",
    logo: "/hero-logos/pernod ricard.png",
  },
  {
    src: "/hero-logos/_zaphier.png",
    logo: "/hero-logos/_zaphier.png",
  },
  {
    src: "/hero-logos/opa.png",
    logo: "/hero-logos/opa.png",
  },
  {
    src: "/hero-logos/oyster.png",
    logo: "/hero-logos/oyster.png",
  },
  {
    src: "/hero-logos/pernod ricard.png",
    logo: "/hero-logos/pernod ricard.png",
  },
  {
    src: "/hero-logos/_zaphier.png",
    logo: "/hero-logos/_zaphier.png",
  },
];

const images3 = [
  {
    src: "/hero-logos/vimeo.png",
    logo: "/hero-logos/vimeo.png",
  },
  {
    src: "/hero-logos/gohenry.png",
    logo: "/hero-logos/gohenry.png",
  },
  {
    src: "/hero-logos/roland.png",
    logo: "/hero-logos/roland.png",
  },
  {
    src: "/hero-logos/kins.png",
    logo: "/hero-logos/kins.png",
  },
  {
    src: "/hero-logos/vimeo.png",
    logo: "/hero-logos/vimeo.png",
  },
  {
    src: "/hero-logos/gohenry.png",
    logo: "/hero-logos/gohenry.png",
  },
  {
    src: "/hero-logos/roland.png",
    logo: "/hero-logos/roland.png",
  },
  {
    src: "/hero-logos/kins.png",
    logo: "/hero-logos/kins.png",
  },
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const scrollRefRight = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // ✅ Start Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  // ✅ Scroll with Drag
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const startXRight = useRef(0);
  const scrollLeftRight = useRef(0);

  // ✅ Start Dragging
  const handleMouseDownRight = (e) => {
    setIsDragging(true);
    startXRight.current = e.pageX || e.touches[0].pageX;
    scrollLeftRight.current = scrollRefRight.current.scrollLeftRight;
  };

  // ✅ Scroll Right with Drag
  const handleMouseMoveRight = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5; // Adjust speed
    scrollRefRight.current.scrollLeftRight = scrollLeftRight.current - walk;
  };

  // ✅ Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-[#073742]  relative text-[#EBFAFE] overflow-x-hidden">
      {/* Overlap */}
      <div className="absolute top-[-40px] left-0 w-full h-[110px] bg-gradient-to-b z-20 blur-md from-secondary-500 via-secondary-500 to-secondary-500"></div>
      <div className="absolute hidden lg:block bottom-[0px] left-0 w-full h-[110px] bg-gradient-to-t z-20 from-secondary-500 to-transparent"></div>

      <Layout>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="pt-[90px]  lg:pt-[100px] lg:pb-12">
            <div className="flex flex-col sm:flex-col">
              <Heading
                level="h2"
                color="gredient"
                spacing="lg"
                className="text-center sm:text-left font-semibold"
              >
                DESIGN. OPTIMIZE. ADVERTISE.
                <AccentText size="lg" className={" block text-orange-500 text-base "}>
                We've got your eBay store covered.
                </AccentText>
              </Heading>
              <p className="text-sm text-center sm:text-left sm:text-[16px] mb-2 sm:mb-2">
                Get a skilled creative team to build a strong brand, improve your listings, and create eye-catching ads that help you sell more
              </p>
              <p className="text-base text-center sm:text-left text-[#EBFAFE] font-semibold mb-6 sm:mb-6">
                Make your eBay store unforgettable. Sell more. Scale faster. 🚀
              </p>
            </div>
            {/* Features */}
            <ul className="hidden sm:flex flex-col gap-2 text-sm sm:text-[16px] sm:gap-2 mb-5 sm:mb-8">
              {[
                "Custom eBay Storefront Design",
                "High-Impact Listing Creatives",
                "Scroll-Stopping Ad Campaign Graphics",
                "Brand-Consistent Templates",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#EBFAFE]" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="flex w-full flex-col lg:flex-row items-center gap-4">
              <Button
                href="/contact"
                textColor="text-secondary-500"
                bgColor="bg-[#88D7F0]"
                borderColor="border-[#88D7F0]"
                hoverBgColor="bg-secondary-500"
                hoverTextColor="#88D7F0"
                className="block w-[250px] text-center md:w-auto sm:w-[400px] mx-auto md:mx-0"
              >
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 pb-8 lg:pb-0 w-full relative overflow-hidden">
            {/* Desktop View - Vertical Scroll */}
            <div className="hidden lg:flex gap-4  h-screen md:max-h-[800px] xl:max-h-[850px] 2xl:max-h-screen overflow-hidden">
              <div className="w-1/3 marquee-vertical">
                <div className="marquee-vertical-content space-y-5">
                  {[...images1, ...images1].map((img, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden cursor-pointer rounded-xl group"
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-[250px] object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-xl"
                      />
                      <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                        <img
                          src={img.src.replace('.png', '.svg')}
                          alt=""
                          className={`${
                            img.src.includes('salesforce') 
                              ? 'w-[25%] h-[25%] mt-1'
                              : img.src.includes('kins')
                              ? 'w-[30%] h-[30%] -mt-3'
                              : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/3 marquee-vertical-reverse">
                <div className="marquee-vertical-content space-y-5">
                  {[...images2, ...images2].map((img, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden cursor-pointer rounded-xl group"
                    >
                      <img
                        src={img.src}
                        alt=""
                        className={`w-full ${index % 2 === 0 ? 'h-[280px]' : 'h-[200px]'} object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-2xl`}
                      />
                      <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                        <img
                          src={img.src.replace('.png', '.svg')}
                          alt=""
                          className={`${
                            img.src.includes('salesforce') 
                              ? 'w-[25%] h-[25%] mt-1'
                              : img.src.includes('kins')
                              ? 'w-[30%] h-[30%] -mt-3'
                              : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/3 marquee-vertical">
                <div className="marquee-vertical-content space-y-5">
                  {[...images3, ...images3].map((img, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden cursor-pointer rounded-xl group"
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-[220px] object-cover rounded-xl group-hover:scale-105 transition-all duration-300 shadow-2xl"
                      />
                      <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                        <img
                          src={img.src.replace('.png', '.svg')}
                          alt=""
                          className={`${
                            img.src.includes('salesforce') 
                              ? 'w-[25%] h-[25%] mt-1'
                              : img.src.includes('kins')
                              ? 'w-[30%] h-[30%] -mt-3'
                              : 'w-[40%] h-[40%] -mt-3'
                          } object-contain`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View - Dual Line Scroll */}
            <div className="lg:hidden space-y-4 overflow-hidden">
              {/* First Row - Left Scroll */}
              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                className="overflow-x-auto scrollbar-hide"
              >
                <div className="flex  marquee-horizontal ">
                  {[...images1, ...images1, ...images1].map((img, index) => (
                    <div
                      className="relative flex-shrink-0 select-none overflow-hidden cursor-pointer rounded-xl group"
                      key={index}
                    >
                      <div className="overflow-hidden relative rounded-xl mx-2">
                        <img
                          src={img.src}
                          draggable={false}
                          alt=""
                          className="w-[150px] h-48 object-cover group-hover:scale-105 transition-all duration-300 rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                          <img
                            src={img.src.replace('.png', '.svg')}
                            alt=""
                            className={`${
                              img.src.includes('salesforce') 
                                ? 'w-[25%] h-[25%] mt-1'
                                : img.src.includes('kins')
                                ? 'w-[30%] h-[30%] -mt-3'
                                : 'w-[40%] h-[40%] -mt-3'
                            } object-contain`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Row - Right Scroll */}
              <div
                ref={scrollRefRight}
                onMouseDown={handleMouseDownRight}
                onMouseMove={handleMouseMoveRight}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDownRight}
                onTouchMove={handleMouseMoveRight}
                onTouchEnd={handleMouseUp}
                className="overflow-x-auto scrollbar-hide"
              >
                <div className="flex marquee-horizontal-reverse">
                  {[...images2, ...images2, ...images2]
                    .reverse()
                    .map((img, index) => (
                      <div
                        className="relative flex-shrink-0 select-none overflow-hidden cursor-pointer rounded-xl group"
                        key={index}
                      >
                        <div className="overflow-hidden relative rounded-xl mx-2">
                          <img
                            src={img.src}
                            alt=""
                            draggable={false}
                            className="w-[150px] h-48 object-cover group-hover:scale-105 transition-all duration-300 rounded-xl shadow-lg"
                          />
                          <div className="absolute inset-0 flex items-start justify-center bg-black/10">
                            <img
                              src={img.src.replace('.png', '.svg')}
                              alt=""
                              className={`${
                                img.src.includes('salesforce') 
                                  ? 'w-[25%] h-[25%] mt-1'
                                  : img.src.includes('kins')
                                  ? 'w-[30%] h-[30%] -mt-3'
                                  : 'w-[40%] h-[40%] -mt-3'
                              } object-contain`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <style jsx global>{`
        /* Vertical Marquee Animation */
        @keyframes marqueeVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marqueeVerticalReverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .marquee-vertical {
          animation: marqueeVertical 50s linear infinite;
        }

        .marquee-vertical-reverse {
          animation: marqueeVerticalReverse 50s linear infinite;
        }

        /* Horizontal Marquee Animation */
        @keyframes marqueeHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeHorizontalReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-horizontal {
          animation: marqueeHorizontal 30s linear infinite;
        }

        .marquee-horizontal-reverse {
          animation: marqueeHorizontalReverse 30s linear infinite;
        }

        /* Pause animation on hover */
        .marquee-vertical:hover,
        .marquee-vertical-reverse:hover {
          animation-play-state: paused;
        }

        /* Hide Scrollbar */
        .md\:hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .md\:hidden::-webkit-scrollbar {
          display: none;
        }

        /* Custom Scrollbar for Mobile */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #88d7f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
