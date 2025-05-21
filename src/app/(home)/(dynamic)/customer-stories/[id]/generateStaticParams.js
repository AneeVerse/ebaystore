import { client } from '@/sanity/lib/client';
import { revalidate } from '../config';

export { revalidate };

export async function generateStaticParams() {
  try {
    const stories = await client.fetch(`*[_type == "customerStory"] { slug }`);
    return stories.map((story) => ({
      id: story.slug.current,
    }));
  } catch (error) {
    console.error('Error generating static params for customer stories:', error);
    return [];
  }
} 