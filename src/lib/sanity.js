import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leph7aip',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

// Helper function to generate image URL from Sanity image
export const urlFor = (source) => {
  if (!source) return null;
  // If source is already a string (URL), return it directly
  if (typeof source === 'string') return source;
  
  // Use Sanity's image URL builder if you add the @sanity/image-url package later
  // For now, we'll just return the asset URL if it exists
  if (source?.asset?._ref) {
    // This is a basic implementation without the image-url package
    // You can enhance this later with proper image URL generation
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leph7aip'}/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${source.asset._ref
      .replace('image-', '')
      .replace('-jpg', '.jpg')
      .replace('-png', '.png')
      .replace('-webp', '.webp')}`;
  }
  
  return null;
}; 