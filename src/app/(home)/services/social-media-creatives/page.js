import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import SocialMediaFAQSection from '@/components/services/social-media-creatives/SocialMediaFAQSection'
import SocialMediaStateSection from '@/components/services/social-media-creatives/SocialMediaStateSection'
import React from 'react'



// metadata
export const metadata = {
  title: "Social Media Creatives | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Social Media Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/social-media-creatives`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Social Media Creatives | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}
const page = () => {

  const items = [
    {
      name: "Social Media Branding",
      about: "Creating striking visuals and graphics for your brand's social media profiles, ensuring a consistent and engaging presence.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Ad Creatives for Social Media",
      about: "Designing high-converting ad creatives that capture attention and drive action across various social media platforms.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Social Media Posts",
      about: "Crafting engaging social media posts designed to spark conversations and increase audience engagement.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Animated Social Content",
      about: "Developing eye-catching animations that boost engagement and improve brand recall across social platforms.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Social Media Campaigns",
      about: "Managing and creating strategic social media campaigns to enhance brand visibility and drive traffic.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Story Designs for Social Platforms",
      about: "Designing compelling stories that captivate your audience and boost engagement on platforms like Instagram and Facebook.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Influencer Content Creation",
      about: "Collaborating with influencers to create content that resonates with their audience and strengthens your brand message.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Content Strategy for Social Media",
      about: "Developing and executing content strategies to ensure your social media profiles are optimized for engagement and growth.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Social Media Creatives"
        subtitle="Engaging Visuals, Maximum Reach"
        description=" Grab attention with high-impact social media visuals. Our creatives are designed to
                increase engagement, brand recall, and audience interaction across platforms."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Creative Social Media Branding"
        title=" Visuals That "
        highlightText=" engage & Inspire"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Creative Social Media"
        description="  Elevate your social media presence with eye-catching visuals. Our
            creatives are designed to boost engagement, drive brand awareness,
            and keep your audience hooked."
        additionalText="From **Instagram posts & Facebook ads** to **animated social media
            content**, we create impactful designs that align with your brand
            and maximize online visibility."
      />


      <DynamicCreativeSection
        subtitle="Enhance Your Brand's Social Media Presence"
        title=" Services"
        heighlightText=" Social Media Creatives"
        items={items}
      />


      <CommonServicesOurWorks />
      <SocialMediaStateSection />
      <TestimonialSlider />
      <SocialMediaFAQSection />

    </div>
  )
}

export default page
