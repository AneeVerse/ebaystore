import { getBlogPost } from '@/lib/blogUtils';

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog | Aneeverse", description: "This blog post does not exist." };

  return {
    title: `${post.title} | Aneeverse Blog`,
    description: post.shortDescription,
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      url: `https://aneeverse.com/blog/${post.slug}`,
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      article: {
        publishedTime: post.date,
        authors: [post.author.name],
      },
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.shortDescription,
      image: post.thumbnail,
    },
  };
}

// Add the missing default export function
export default function BlogSlugLayout({ children }) {
  return children;
} 