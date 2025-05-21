import { client } from '@/sanity/lib/client';
import { getPortfolioWorkBySlugQuery } from '@/sanity/lib/queries';

export async function generateMetadata({ params }) {
  try {
    // Fetch the project data
    const project = await client.fetch(getPortfolioWorkBySlugQuery, {
      slug: params.slug,
    });
    
    if (!project) {
      return {
        title: 'Project Not Found | Aneeverse',
      };
    }
    
    // Use the project data to build the metadata
    return {
      title: `${project.title} | Our Work | Aneeverse`,
      description: project.shortDescription || `Explore our ${project.title} project and see how we delivered results.`,
      openGraph: {
        title: `${project.title} | Our Work | Aneeverse`,
        description: project.shortDescription || `Explore our ${project.title} project and see how we delivered results.`,
        url: `https://aneeverse.com/our-work/${params.slug}`,
        images: [
          {
            url: "/images/meta/phone.avif", // Ideally, use project.mainImage here
            width: 1200,
            height: 630,
            alt: `${project.title} | Aneeverse`,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${project.title} | Our Work | Aneeverse`,
        description: project.shortDescription || `Explore our ${project.title} project and see how we delivered results.`,
        image: "/images/meta/phone.avif", // Ideally, use project.mainImage here
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Our Work | Aneeverse',
    };
  }
}

export default function PortfolioItemLayout({ children }) {
  return <>{children}</>;
} 