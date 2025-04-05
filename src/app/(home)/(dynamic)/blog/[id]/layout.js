import { blogs } from "@/data/blogData";

// ✅ Fetch blog post by ID
const getBlogPost = (id) => blogs.find((blog) => blog.id === id);

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const post = getBlogPost(params.id);
  if (!post) return { title: "Blog Not Found - Aneeverse", description: "This blog post does not exist." };

  return {
    title: `${post.title} | Aneeverse Blog`,
    description: post.shortDescription,
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      url: `https://aneeverse.com/blog/${post.id}`,
      images: [
        {
          url: post.thumbnail, // ✅ Dynamic Image
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

// ✅ Layout Wrapper for Blog Post
export default function BlogLayout({ children }) {
  return <>{children}</>;
}
