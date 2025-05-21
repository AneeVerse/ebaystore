import React, { useEffect } from 'react';
import TableOfContents from './TableOfContents';

const BlogPost = ({ children }) => {
  useEffect(() => {
    // Add IDs to headings if they don't have them
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
      if (!heading.id) {
        // Create URL-friendly ID from heading text
        const id = heading.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      }
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24">
          {children}
        </article>
        <aside className="hidden lg:block">
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
};

export default BlogPost; 