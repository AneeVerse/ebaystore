import { client } from '@/sanity/lib/client';
import { getCustomerStoryBySlugQuery } from '@/sanity/lib/queries';

export async function generateMetadata({ params }) {
  try {
    const story = await client.fetch(
      getCustomerStoryBySlugQuery,
      { slug: params.id }
    );

    if (!story) {
      return {
        title: 'Customer Story Not Found | Aneeverse',
        description: 'The requested customer story could not be found',
      };
    }

    // Get the primary category
    const primaryCategory = story.categories && story.categories.length > 0
      ? story.categories[0].title
      : 'General';

    return {
      title: `${story.title} | Customer Stories | Aneeverse`,
      description: story.shortDescription || 'Aneeverse Customer Story',
      openGraph: {
        title: `${story.title} | Customer Stories | Aneeverse`,
        description: story.shortDescription || 'Aneeverse Customer Story',
        url: `https://aneeverse.com/customer-stories/${params.id}`,
        siteName: 'Aneeverse',
        locale: 'en_US',
        type: 'article',
        publishedTime: story.publishedAt || new Date().toISOString(),
        section: primaryCategory,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${story.title} | Aneeverse`,
        description: story.shortDescription || 'Aneeverse Customer Story',
      },
    };
  } catch (error) {
    console.error('Error generating metadata for customer story:', error);
    return {
      title: 'Customer Story | Aneeverse',
      description: 'Aneeverse Customer Story',
    };
  }
} 