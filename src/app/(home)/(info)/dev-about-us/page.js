import FeaturesSectionAbout from '@/components/about/FeaturesSectionAbout'
import HeroSectionAbout from '@/components/about/HeroSectionAbout'
import ParnterSection from '@/components/about/PartnerSection'
import TeamSectionAbout from '@/components/about/TeamSectionAbout'
import TestimonialSlider from '@/components/about/TestimonialSlider'
import TextWithVideo from '@/components/about/TextWithVideo'
import ValuesComponent from '@/components/about/ValuesComponent'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-secondary-500 space-y-[60px] py-16'>
    <HeroSectionAbout/>
    <ParnterSection/>
    <TextWithVideo/>
    </div>

    <FeaturesSectionAbout/>
    <TeamSectionAbout/>
    <TestimonialSlider/>
    <ValuesComponent/>
    </>
  )
}

export default page
