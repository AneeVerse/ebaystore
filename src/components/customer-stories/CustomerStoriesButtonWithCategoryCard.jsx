"use client";

import { useState } from "react";
import { customerStories } from "@/data/customerStoriesData"; // Import your customer stories data
import Link from "next/link";
import CustomerStoryCard from "./common/CustomerStoryCard";

const CustomerStoriesButtonWithCategoryCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories
  const categories = [
    "All",
    ...new Set(customerStories.map((story) => story.category)),
  ];

  // Filter stories by selected category
  const filteredStories =
    selectedCategory === "All"
      ? customerStories
      : customerStories.filter((story) => story.category === selectedCategory);

  return (
    <section className="bg-primary-500 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl text-secondary-500 font-semibold">On-demand Content</h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-lg font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-secondary-500 text-primary-500 "
                  : "bg-primary-500 text-secondary-500 border border-secondary-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display Filtered Customer Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredStories.map((story) => (
           <CustomerStoryCard story={story} key={story.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesButtonWithCategoryCard;
