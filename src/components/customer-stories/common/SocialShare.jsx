'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export default function SocialShare({ title }) {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="flex flex-col pb-3 gap-4">
      <p className="text-sm font-semibold uppercase">Share this Story:</p>
      <div className="flex items-center gap-4">
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" className="text-secondary-500 hover:text-blue-800">
          <FaFacebook size={24} />
        </Link>
        <Link href={`https://wa.me/?text=${encodeURIComponent(title + " - " + pageUrl)}`} target="_blank" className="text-secondary-500 hover:text-green-800">
          <FaWhatsapp size={24} />
        </Link>
        <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(pageUrl)}`} target="_blank" className="text-secondary-500 hover:text-blue-600">
          <FaTwitter size={24} />
        </Link>
        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}`} target="_blank" className="text-secondary-500 hover:text-blue-900">
          <FaLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
}