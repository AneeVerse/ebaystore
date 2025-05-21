import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeSectionPricing from '@/components/pricing/CreativeSectionPricing'
import FAQSectionPricing from '@/components/pricing/FAQSectionPricing'
import FeatureGridPricing from '@/components/pricing/FeatureGridPricing'
import PricingComponent from '@/components/pricing/PricingComponent'
import TestimonialSliderPricing from '@/components/pricing/TestimonialSliderPricing'
import React from 'react'



export const metadata = {
  title: "Pricing | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Pricing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/pricing`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Pricing | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Pricing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return (
    <div>
        <PricingComponent  />
        <div className='py-16 bg-primary-500'>
        <SlidingLogos />
        </div>
        <CreativeSectionPricing />
        <FeatureGridPricing />
        {/* <TestimonialSliderPricing /> */}
        <TestimonialSlider  />
        <AIDesignSection />
        <FAQSectionPricing />
    </div>
  )
}

export default page