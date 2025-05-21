import React, { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { FaRegClock } from "react-icons/fa6";

const TableOfContents = ({ timeToRead = "5 min read" }) => {
  const [headings, setHeadings] = useState([]);
  const activeId = useScrollSpy('h2, h3'); // Adjust selectors based on your needs
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Get all headings from the article
    const elements = Array.from(document.querySelectorAll('h2, h3')).map((element) => ({
      id: element.id,
      text: element.textContent,
      level: Number(element.tagName.charAt(1))
    }));
    setHeadings(elements);
  }, []);

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

  return (
    <nav className="table-of-contents sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        {/* Read Time Indicator with Progress Bar */}
        <div className="mb-6">
          <div className="text-[#EBFAFE] flex items-center gap-3 font-medium mb-2">
            <FaRegClock />
            <div>{timeToRead}</div>
          </div>
          <div className="h-1 bg-gray-200/30 rounded-full">
            <div
              className="h-full bg-[#88D7F0] transition-all duration-300 rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-[#EBFAFE]">Table of Contents</h2>
        <ul className="space-y-3">
          {headings.map((heading, idx) => {
            // Add extra margin above h2 if previous was h3, or always for h2
            const isH2 = heading.level === 2;
            const prevIsH3 = idx > 0 && headings[idx - 1].level === 3;
            return (
              <li
                key={heading.id}
                className={`${heading.level === 3 ? 'ml-4' : ''} ${isH2 ? 'mt-8' : ''}`}
                style={isH2 && idx !== 0 ? { marginTop: '2rem' } : {}}
              >
                <a
                  href={`#${heading.id}`}
                  className={`block text-sm transition-colors duration-200 font-bold ${
                    activeId === heading.id
                      ? 'text-[#88D7F0] font-medium'
                      : 'text-[#EBFAFE]/80 hover:text-[#88D7F0]'
                  } ${heading.level === 3 ? 'text-[13px]' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`).scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents; 