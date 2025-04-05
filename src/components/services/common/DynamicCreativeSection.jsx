"use client";
import { useRef, useState } from "react";
import Layout from "../../common/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { Heading } from "@/components/common/typography/Heading";
import { AccentText } from "@/components/common/typography/AccentText";

const DynamicCreativeSection = ({
  title = "",
  subtitle = "",
  heighlightText = "",
  items = [
    {
      name: "Name Loading",
      about: "about loading...",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
  ],
}) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleDragEnd = () => setIsDragging(false);

  const handleDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="text-secondary-500 py-12 select-none">
      <Layout>
        <div className="text-center max-w-4xl mx-auto mb-8">
          <UiSubheading className="text-secondary-500 text-center mb-2">
            {subtitle}
          </UiSubheading>
          <Heading
            level="h2"
            color="dark"
            spacing="lg"
            className="font-semibold"
          >
            <AccentText size="lg" className={``}>
              {heighlightText}{" "}
            </AccentText>{" "}
            {title}
          </Heading>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto py-4 scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragging}
        >
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`min-w-[280px] sm:min-w-[350px]  md:min-w-[470px] relative h-[440px] sm:h-[480px]  md:min-h-[580px] pb-[30px] hover:pb-[90px] hover:mt-[-5px] transition-all duration-300 group ${item.bgColor} shadow-md shadow-primary-500 rounded-lg overflow-hidden`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <div
                className={`p-[20px] sm:p-[30px] md:p-[40px] transition-all duration-300 absolute bottom-0 left-0 w-full ${item.bgColor}`}
              >
                <p
                  className={`text-lg sm:text-2xl font-semibold ${item.textColor}`}
                >
                  {item.name}
                </p>
                <motion.p className="text-md max-h-0 mt-1 group-hover:max-h-[300px] overflow-hidden transition-all duration-700">
                  <span className={`${item.textColor}`}>{item.about}</span>
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default DynamicCreativeSection;
