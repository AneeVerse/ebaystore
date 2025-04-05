import FeaturesSectionAbout from '@/components/about/FeaturesSectionAbout';
import HeroSectionAbout from '@/components/about/HeroSectionAbout';
import ParnterSection from '@/components/about/PartnerSection';
import TeamSectionAbout from '@/components/about/TeamSectionAbout';
import TestimonialSlider from '@/components/about/TestimonialSlider';
import TextWithVideo from '@/components/about/TextWithVideo';
import ValuesComponent from '@/components/about/ValuesComponent';
import UnderConstructionPage from '@/components/layout/UnderConstructionPage';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';




export const metadata = {
  title: "About Us | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "About Us | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/about-us`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "About Us | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "About Us | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const AboutUsPage = () => {
  return <UnderConstructionPage />;

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
  );
};

export default AboutUsPage;
