import { ImageResponse } from 'next/og';
import { client } from '@/sanity/lib/client';
import { getCustomerStoryBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const alt = 'Customer Story | Aneeverse';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  try {
    const story = await client.fetch(
      getCustomerStoryBySlugQuery,
      { slug: params.id }
    );

    if (!story) {
      // Fallback image if no story found
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 48,
              background: '#f0f9ff',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 30,
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#0c4a6e' }}>
              Aneeverse
            </div>
            <div style={{ fontSize: 26, color: '#0369a1', marginTop: 20 }}>
              Customer Story Not Found
            </div>
          </div>
        )
      );
    }

    // Get the primary category
    const primaryCategory = story.categories && story.categories.length > 0
      ? story.categories[0].title
      : 'General';

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: '#f0f9ff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 'bold', color: '#0e7490', marginBottom: 20, textTransform: 'uppercase' }}>
            {primaryCategory}
          </div>
          <div style={{ fontSize: 64, fontWeight: 'bold', color: '#0c4a6e', textAlign: 'center', maxWidth: '80%', lineHeight: 1.2 }}>
            {story.title}
          </div>
          <div style={{ fontSize: 28, color: '#0369a1', marginTop: 20, maxWidth: '80%', textAlign: 'center' }}>
            {story.shortDescription?.slice(0, 120)}{story.shortDescription?.length > 120 ? '...' : ''}
          </div>
          <div style={{ fontSize: 28, color: '#0369a1', marginTop: 40 }}>
            Aneeverse Customer Story
          </div>
        </div>
      )
    );
  } catch (error) {
    console.error('Error generating customer story OpenGraph image:', error);
    
    // Return fallback image on error
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: '#f0f9ff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 'bold', color: '#0c4a6e' }}>
            Aneeverse
          </div>
          <div style={{ fontSize: 26, color: '#0369a1', marginTop: 20 }}>
            Customer Story
          </div>
        </div>
      )
    );
  }
} 