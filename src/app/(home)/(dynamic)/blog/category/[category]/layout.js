import { blogs } from "@/data/blogData";

// ✅ Generate Dynamic Metadata for Blog Categories
export async function generateMetadata({ params }) {
  const category = params.category.replace(/-/g, " ");
  const categoryBlogs = blogs.filter((blog) => blog.category.toLowerCase() === category);

  if (categoryBlogs.length === 0) {
    return {
      title: "Blog Category Not Found - Aneeverse",
      description: "This Blog Category does not exist.",
    };
  }

  return {
    title: `${category} Blogs | Aneeverse`,
    description: `Explore the latest insights and articles on ${category}. Stay updated with the latest trends and expert advice.`,
    openGraph: {
      title: `${category} Blogs | Aneeverse`,
      description: `Stay informed with expert insights on ${category}.`,
      url: `https://aneeverse.com/blog/category/${params.category}`,
      images: categoryBlogs[0]?.thumbnail
        ? [
            {
              url: categoryBlogs[0].thumbnail, // ✅ Dynamic Image from the first blog
              width: 1200,
              height: 630,
              alt: `${category} Blogs`,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category} Blogs | Aneeverse`,
      description: `Explore expert insights on ${category}.`,
      image: categoryBlogs[0]?.thumbnail || "/default-thumbnail.jpg",
    },
  };
}

// ✅ Category Layout Wrapper
export default function CategoryLayout({ children }) {
  return <>{children}</>;
}
