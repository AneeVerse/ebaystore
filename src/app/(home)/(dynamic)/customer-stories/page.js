import CustomerStoriesButtonWithCategoryCard from '@/components/customer-stories/CustomerStoriesButtonWithCategoryCard'
import CustomerStoryHero from '@/components/customer-stories/CustomerStoryHero'
import SlidingLogos from '@/components/home/SlidingLogos'
import React, { Suspense } from 'react'
import { client } from '@/sanity/lib/client'
import { getCustomerStoriesQuery } from '@/sanity/lib/queries'

// Define revalidate directly in the page file
export const revalidate = 60; // Revalidate content every 60 seconds

export const metadata = {
    title: "Customer Stories | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title: "Customer Stories | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/customer-stories`,
      images: [
        {
          url: "/images/meta/phone.avif",
          width: 1200,
          height: 630,
          alt: "Customer Stories | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Customer Stories | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
}

// Fetch customer stories from Sanity
async function getCustomerStories() {
  return await client.fetch(getCustomerStoriesQuery);
}

// Loading component
function LoadingState() {
  return (
    <div className="min-h-screen">
      <div className="mt-[40px]">
        <CustomerStoryHero />
        <SlidingLogos />
        <div className="py-16 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
        </div>
      </div>
    </div>
  );
}

export default async function CustomerStoriesPage() {
  const customerStories = await getCustomerStories();
  
  return (
    <Suspense fallback={<LoadingState />}>
      <div>
        <div className='mt-[40px]'>
          <CustomerStoryHero />
          <SlidingLogos />
          <CustomerStoriesButtonWithCategoryCard stories={customerStories} />
        </div>
      </div>
    </Suspense>
  )
}

