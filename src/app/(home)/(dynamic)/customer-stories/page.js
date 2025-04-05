import CustomerStoriesButtonWithCategoryCard from '@/components/customer-stories/CustomerStoriesButtonWithCategoryCard'
import CustomerStoryHero from '@/components/customer-stories/CustomerStoryHero'
import SlidingLogos from '@/components/home/SlidingLogos'
import React from 'react'


export const metadata = {
    title: "Customer Stories | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title: "Customer Stories | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/customer-stories`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
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


const page = () => {
  return (
    <div>
        <CustomerStoryHero    />
        <SlidingLogos />
        <CustomerStoriesButtonWithCategoryCard />
      
    </div>
  )
}

export default page
