import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import InfluencerMarketingFAQSection from '@/components/services/influencer-marketing/InfluencerMarketingFAQSection'
import InfluencerMarketingStateSection from '@/components/services/influencer-marketing/InfluencerMarketingStateSection'
import React from 'react'


// metadata
export const metadata = {
  title: "Influencer Marketing | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Influencer Marketing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/influencer-marketing`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Influencer Marketing | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {

  const items = [
    {
      name: "Influencer Partnership Strategy",
      about: "Creating tailored strategies to partner with influencers who align with your brand's values and target audience.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Campaign Management & Execution",
      about: "Managing end-to-end influencer campaigns, ensuring smooth collaboration, and delivering measurable results.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Audience Targeting & Segmentation",
      about: "Leveraging data to identify and target the most relevant audiences for influencer-driven campaigns.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Content Creation & Distribution",
      about: "Creating compelling content in collaboration with influencers and ensuring it reaches the right channels.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Influencer Engagement & Outreach",
      about: "Building and maintaining strong relationships with influencers to ensure long-term collaborations.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Performance Tracking & Analytics",
      about: "Monitoring and analyzing the performance of influencer campaigns to optimize and improve future initiatives.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Event & Activation Marketing",
      about: "Collaborating with influencers for live events, product launches, and activations to boost brand awareness.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Affiliate & Referral Programs",
      about: "Leveraging influencer networks to create affiliate and referral programs that drive sales and conversions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Influencer Marketing Services"
        subtitle="Unlock the Power of Influencer Marketings"
        description="  Expand your reach and build authentic relationships with your audience through tailored influencer marketing strategies. We help you partner with the right influencers to grow your brand."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/marketing-strategy/hero-banner.avif"

      />
      
      <SlidingLogos />

      <DynamicSupportSection
        subtitle="Boost Your Brand with Influencer Marketing"
        title="Influencer Marketing That "
        highlightText=" drives engagement & growth"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Influencer Marketing"
        description="Unlock the power of influencer collaborations to amplify your brand’s message and reach a larger audience. We specialize in connecting brands with the right influencers to create authentic and impactful campaigns."
        additionalText="From **influencer outreach** to **content creation**, **partnership management**, and **campaign analytics**, we ensure your brand gets maximum exposure through genuine influencer collaborations that resonate with your target audience."
      />


      <DynamicCreativeSection
        subtitle="Maximize Your Brand's Reach"
        title=" Services"
        heighlightText=" Influencer Marketing "
        items={items}
      />
      
      <CommonServicesOurWorks />
      <InfluencerMarketingStateSection />
      <TestimonialSlider />
      <InfluencerMarketingFAQSection />

    </div>
  )
}

export default page
