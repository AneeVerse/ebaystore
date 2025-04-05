import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import FeaturesSection from '@/components/home/FeaturesSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import NewFooter from '@/components/layout/NewFooter'
import AboutDesignServicesSection from '@/components/services/AboutDesignServicesSection'
import ContentWritingServices from '@/components/services/ContentWritingServices'
import CreativeDesignServices from '@/components/services/CreativeDesignServices'
import FAQSection from '@/components/services/FAQSection'
import MarketingServices from '@/components/services/MarketingServices'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesSupportSection from '@/components/services/ServicesSupportSection'
import WebsiteServices from '@/components/services/WebsiteServices'
import React from 'react'



export const metadata = {
  title: "Services | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Services | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return (
   <div>
    <ServicesHero />
     <SlidingLogos />
     <ServicesSupportSection />
     <div className='bg-secondary-500 space-y-8 py-16'>
        <WebsiteServices />

        <MarketingServices />
        
        <ContentWritingServices />

        <CreativeDesignServices />

        </div>
        <DynamicOurWorks />
        <FeaturesSection />
        <AboutDesignServicesSection />
        <FAQSection />
   </div>
  )
}

export default page