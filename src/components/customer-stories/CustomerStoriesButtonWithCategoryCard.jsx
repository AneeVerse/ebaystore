"use client";

import { useState } from "react";
import Link from "next/link";
import CustomerStoryCard from "./common/CustomerStoryCard";

const CustomerStoriesButtonWithCategoryCard = ({ stories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories from stories
  const allCategories = stories.reduce((acc, story) => {
    if (story.categories && story.categories.length > 0) {
      story.categories.forEach(cat => {
        if (!acc.includes(cat.title)) {
          acc.push(cat.title);
        }
      });
    }
    return acc;
  }, []);

  const categories = ["All", ...allCategories];

  // Filter stories by selected category
  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((story) => 
          story.categories && 
          story.categories.some(cat => cat.title === selectedCategory)
        );

  return (
    <section className="py-12 md:py-16 bg-[#EBFAFE]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - Left aligned like Superside */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#0A2E3D] mb-8" style={{ fontFamily: '"Inter", sans-serif' }}>
          On-demand Content
        </h2>

        {/* Category Buttons styled like Superside */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-base font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-[#0A2E3D] text-white"
                  : "bg-[#e8f4f8] text-[#0A2E3D] hover:bg-gray-200"
              }`}
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {category === "All" ? "All content" : category}
            </button>
          ))}
        </div>

        {/* Display Filtered Customer Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
          {filteredStories.map((story) => (
           <CustomerStoryCard story={story} key={story._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesButtonWithCategoryCard;
