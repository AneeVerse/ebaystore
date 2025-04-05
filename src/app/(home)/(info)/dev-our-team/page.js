import ParnterSection from '@/components/about/PartnerSection'
import HeroSectionOurTeam from '@/components/ourTeam/HeroSectionOurTeam'
import OneTestimonialsOurTeam from '@/components/ourTeam/OneTestimonialsOurTeam'
import OurTeamSection from '@/components/ourTeam/OurTeamSection'
import OurTeamStatsSection from '@/components/ourTeam/OurTeamStateSection'
import OurWorkWithVideoOurTeam from '@/components/ourTeam/OurWorkWithVideoOurTeam'
import React from 'react'

const page = () => {
  return (
    <div>
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
    </div>
  )
}

export default page
