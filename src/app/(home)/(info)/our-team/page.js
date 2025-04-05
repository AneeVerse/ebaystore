import ParnterSection from '@/components/about/PartnerSection'
import UnderConstructionPage from '@/components/layout/UnderConstructionPage'
import HeroSectionOurTeam from '@/components/ourTeam/HeroSectionOurTeam'
import OneTestimonialsOurTeam from '@/components/ourTeam/OneTestimonialsOurTeam'
import OurTeamSection from '@/components/ourTeam/OurTeamSection'
import OurTeamStatsSection from '@/components/ourTeam/OurTeamStateSection'
import OurWorkWithVideoOurTeam from '@/components/ourTeam/OurWorkWithVideoOurTeam'
import React from 'react'



export const metadata = {
  title: "Our Team | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Our Team | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/our-team`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Our Team  | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Our Team | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return <UnderConstructionPage />;

  return (
    <div>

    <div className='bg-secondary-500 space-y-[60px] py-16'>
        <HeroSectionOurTeam />
        <ParnterSection />
        <OurTeamSection />
        </div>

        <OneTestimonialsOurTeam />
        <OurTeamStatsSection />
        <OurWorkWithVideoOurTeam />
    </div>
  )
}

export default page