'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`} className=" block group rounded-2xl ">
      {/* Image Section */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image
          src={blog.thumbnail} // Use the blog's image
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-500  uppercase tracking-widest font-medium">{blog.category} • {blog.timeToRead}</p>
        <h2 className="text-lg line-clamp-1 font-semibold mt-1 text-black group-hover:underline underline-offset-2 transition-all duration-300">
          {blog.title}
        </h2>
        <div className="text-sm text-gray-600 mt-2 line-clamp-2">
          {blog.shortDescription}
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={blog.author.image} // Use the blog's author image
            alt={blog.author.name}
            width={40}
            height={40}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold">{blog.author.name}</p>
          <p className="text-xs text-gray-500">{blog.author.role}</p>
        </div>
      </div>
    </Link>
  );
}