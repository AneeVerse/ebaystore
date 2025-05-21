import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import MarketingStrategyFAQSection from '@/components/services/marketing-strategy/MarketingStrategyFAQSection'
import MarketingStrategyFeatureSection from '@/components/services/marketing-strategy/MarketingStrategyFeatureSection'
import MarketingStrategyStateSection from '@/components/services/marketing-strategy/MarketingStrategyStateSection'
import React from 'react'


// metadata
export const metadata = {
  title: "Marketing Strategy | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Marketing Strategy | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/marketing-strategy`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Marketing Strategy | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Strategy | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {

  const items = [
    {
      name: "Marketing insight projects",
      about: "Unlock deeper insights that drive your marketing strategies forward. Our expert strategists deliver tailored analyses to elevate your brand's performance.",
      image: "/images/services/marketing-strategy/marketing-insight-projects.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Marketing foundations insights",
      about: "Lay the groundwork for brand success with strategies that define your positioning and engage your audience.",
      image: "/images/services/marketing-strategy/marketing-foundations-insights.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Marketing planning projects",
      about: "Strategically plan impactful marketing initiatives that deliver measurable results and align with your business goals.",
      image: "/images/services/marketing-strategy/marketing-planning-projects.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },


  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Marketing Strategy Services"
        subtitle="Creative Services"
        description=" Empower your business with data-driven marketing initiatives, plans, and exceptional insights from our team of expert consultants. Leverage Superside's marketing strategy services for an on-demand marketing team extension."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/marketing-strategy/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS"
        title="Power-up your brand's  "
        highlightText=" marketing"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="marketing strategy"
        description=" In the fast-changing digital landscape, staying ahead requires strategic insight and expert guidance."
        additionalText=" Aneeverse marketing strategists create customized, data-driven strategies to enhance your brand’s online presence and drive measurable results.
       
         We focus on delivering actionable plans and strategic direction, empowering your marketing teams to achieve exceptional growth and visibility.
        "
      />


      <DynamicCreativeSection
        subtitle="Strategic Excellence"
        title=" marketing strategy services"
        heighlightText=" Full scale"
        items={items}
      />

      <CommonServicesOurWorks />
      <MarketingStrategyFeatureSection />
      <MarketingStrategyStateSection />
      <MarketingStrategyFAQSection />



    </div>
  )
}

export default page
