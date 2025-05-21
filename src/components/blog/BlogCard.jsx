'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogCard({ blog }) {
  const [thumbnailError, setThumbnailError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  
  // Default placeholder images
  const defaultThumbnail = "/images/blog1.avif";
  const defaultAuthorImage = "/images/blog/author/abhi.png";
  
  // Safe access to blog data with fallbacks
  const title = blog?.title || 'Untitled Blog Post';
  const category = blog?.category || 'Uncategorized';
  const timeToRead = typeof blog?.timeToRead === 'number' || !isNaN(parseInt(blog?.timeToRead))
    ? `${blog?.timeToRead} min read`
    : (blog?.timeToRead || '5 min read');
  const shortDescription = blog?.shortDescription || '';
  const author = blog?.author || { name: 'Anonymous', role: 'Author', image: defaultAuthorImage };
  
  // Check for slug first, then fall back to id for compatibility
  // If slug is an object (from Sanity), use slug.current
  const slug = blog?.slug?.current || blog?.slug || blog?.id || '#';
  
  // Ensure thumbnail exists and is a non-empty string
  const thumbnailSrc = blog?.thumbnail && typeof blog.thumbnail === 'string' && blog.thumbnail.trim() !== '' 
    ? blog.thumbnail
    : defaultThumbnail;
  
  // Ensure author image exists and is a non-empty string
  const authorImageSrc = author?.image && typeof author.image === 'string' && author.image.trim() !== ''
    ? author.image
    : defaultAuthorImage;

  const handleThumbnailError = () => {
    console.error('Failed to load thumbnail:', thumbnailSrc);
    setThumbnailError(true);
  };

  const handleAuthorImageError = () => {
    console.error('Failed to load author image:', authorImageSrc);
    setAuthorImageError(true);
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Image Section - Superside style */}
      <Link href={`/blog/${slug}`} className="block group overflow-hidden rounded-lg">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={thumbnailError ? defaultThumbnail : thumbnailSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
            onError={handleThumbnailError}
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col flex-1 mt-5">
        {/* Category and Read Time - Superside style */}
        <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#475467] mb-2">
          <span className="font-medium">{category}</span>
          <span className="text-[#D9D9D9]">•</span>
          <span>{timeToRead}</span>
        </div>

        {/* Title - Superside style with underline animation */}
        <Link href={`/blog/${slug}`} className="group block">
          <h3 className="text-xl sm:text-[22px] leading-tight text-[#101828] font-normal mb-3 line-clamp-2 group-hover:text-[#0A2E3D] transition-colors duration-200">
            <span className="underline-animation">{title}</span>
          </h3>
        </Link>

        {/* Description - Superside style - changed to 2 lines */}
        <p className="text-base leading-normal text-[#475467] line-clamp-2 mb-4">
          {shortDescription}
        </p>

        {/* Author Section - Square with curved corners */}
        <div className="flex items-center mt-auto pt-2">
          <div className="relative w-[56px] h-[56px] flex-shrink-0">
            <Image
              src={authorImageError ? defaultAuthorImage : authorImageSrc}
              alt={author.name}
              width={56}
              height={56}
              className="object-cover rounded-md border-2 border-white shadow-sm"
              onError={handleAuthorImageError}
            />
          </div>
          <div className="ml-4">
            <p className="text-[16px] font-medium text-[#101828] leading-tight mb-0.5">{author.name}</p>
            <p className="text-[15px] text-[#667085] leading-tight">{author.role}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .underline-animation {
          background-image: linear-gradient(#0A2E3D, #0A2E3D);
          background-size: 0% 2px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.6s;
          padding-bottom: 2px;
        }
        :global(.group:hover) .underline-animation {
          background-size: 100% 1.5px;
        }
      `}</style>
    </div>
  );
}