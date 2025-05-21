import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import MetaAdsFAQSection from '@/components/services/meta-ads/MetaAdsFAQSection'
import MetaAdsStateSection from '@/components/services/meta-ads/MetaAdsStateSection'
import React from 'react'




// metadata
export const metadata = {
  title: "Meta Ads | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Meta Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/meta-ads`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Meta Ads | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  const items = [
    {
      name: "Targeted Audience Campaigns",
      about: "Designing targeted Meta Ads campaigns to effectively reach your ideal audience based on demographics, interests, and behaviors.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Conversion-Focused Ad Copy",
      about: "Crafting compelling Meta Ads copy to drive higher engagement and conversions, tailored to your specific campaign goals.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Mobile-Optimized Ads",
      about: "Ensuring your Meta Ads are optimized for mobile to capture the attention of users on smartphones and tablets.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "A/B Testing for Ads",
      about: "Running A/B tests on Meta Ads creatives and copy to identify the most effective strategies for higher engagement and ROI.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Budget Optimization",
      about: "Maximizing ad spend efficiency with budget optimization strategies that ensure you get the best results for your investment.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Detailed Campaign Analytics",
      about: "Providing in-depth analytics to track Meta Ads performance, refine targeting, and improve overall campaign results.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Engaging Visuals & Animations",
      about: "Enhancing Meta Ads with eye-catching visuals and animations that captivate the audience and drive interaction.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Custom Meta Ads Solutions",
      about: "Creating personalized Meta Ads strategies tailored to your business objectives, maximizing reach and conversions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Meta Ads Services"
        subtitle="Maximize Your Meta Ads Impact"
        description="Drive targeted traffic, boost conversions, and scale your business with our Meta Ads services. From ad creation to performance analysis, we help you leverage Meta’s advertising platform for optimal results."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/meta-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Meta Ads for Maximum Reach"
        title="Meta Ads That "
        highlightText="  convert & engage"
        imageSrc="/images/services/meta-ads/about-meta-ads.avif"
        imageAlt="Meta Ads for Maximum Reach"
        description="  Boost your business presence with targeted Meta Ads campaigns. From audience targeting to campaign optimization, we ensure your ads drive meaningful results."
        additionalText="From **audience segmentation** to **ad creative optimization** and **budget management**,  
            our comprehensive Meta Ads strategies ensure that your business gets the exposure it deserves while maximizing ROI."
      />


      <DynamicCreativeSection
        subtitle="Boost Your Meta Ads Strategy"
        title=" Services"
        heighlightText=" Meta ads"
        items={items}
      />

      <CommonServicesOurWorks />
      <MetaAdsStateSection />
      <TestimonialSlider />
      <MetaAdsFAQSection />

    </div>
  )
}

export default page
