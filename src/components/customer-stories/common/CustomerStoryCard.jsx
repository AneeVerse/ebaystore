"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function CustomerStoryCard({ story }) {
  return (
    <Link
      href={`/customer-stories/${story.id}`}
      className=" block group rounded-2xl "
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden">
        <Image
          src={story.thumbnail} // Use the story's image
          alt={story.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-500  uppercase tracking-widest font-medium">
          {story.category} • {story.timeToRead}
        </p>
        <h2 className="text-lg line-clamp-1 font-semibold mt-1 text-black group-hover:underline underline-offset-2 transition-all duration-300">
          {story.title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 line-clamp-2">
          {story.shortDescription}
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-4">
        <div>
          <button className="flex group-hover:underline underline-offset-2 items-center text-gray-800 font-medium">
            See Our Customer Stories
            <FaChevronRight className="ml-2 text-sm" />
          </button>
        </div>
      </div>
    </Link>
  );
}
