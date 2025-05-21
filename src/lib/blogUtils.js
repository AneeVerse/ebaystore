import { blogs } from '@/data/blogData';

/**
 * Function to fetch a blog post by slug - synchronous version for metadata generation
 * @param {string} slug - The slug of the blog post to fetch
 * @returns {object|null} - The blog post object or null if not found
 */
export function getBlogPost(slug) {
  if (!slug) return null;
  
  // For metadata generation, we can only access the static data
  // This is a simplified version of the async function in the page component
  const staticBlog = blogs.find((blog) => blog.slug === slug);
  return staticBlog || null;
} 