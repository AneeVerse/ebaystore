import { customerStories } from "@/data/customerStoriesData";

// ✅ Fetch blog post by ID
const getStoryPost = (id) => customerStories.find((story) => story.id === id);

// ✅ Generate Dynamic Metadata
export async function generateMetadata({ params }) {
  const {id} = await params;
  const post = getStoryPost(id);
  if (!post) return { title: "Customer Stories Not Found - Aneeverse", description: "This Customer Stories post does not exist." };

  return {
    title: `${post.title} | Aneeverse Customer Stories`,
    description: post.shortDescription,
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      url: `https://aneeverse.com/customer-stories/${post.id}`,
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
export default function CustomerStoryLayout({ children }) {
  return <>{children}</>;
}
