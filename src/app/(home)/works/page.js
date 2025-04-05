import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeStatsOurWorks from '@/components/works/CreativeStatsOurWorks'
import OurWorkSection from '@/components/works/OurWorkSection'
import React from 'react'




export const metadata = {
  title: "Our Works | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Our Works | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/works`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Our Works | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Our Works | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  return (
    <div>
      <CreativeStatsOurWorks/>
      <SlidingLogos/>
      <OurWorkSection   />
      <AIDesignSection/>
    </div>
  )
}

export default page