import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import BlogWritingFAQSection from '@/components/services/blog-writing/BlogWritingFAQSection'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import React from 'react'

// metadata
export const metadata = {
  title: "Competitor Analysis | eBay Services",
  description: "Strategic analysis of your eBay competitors to identify opportunities and improve your market position.",
  openGraph: {
    title: "Competitor Analysis | eBay Services",
    description: "Strategic analysis of your eBay competitors to identify opportunities and improve your market position.",
    url: `https://aneeverse.com/services/competitor-analysis`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Competitor Analysis | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Analysis | eBay Services",
    description: "Strategic analysis of your eBay competitors to identify opportunities and improve your market position.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Marketplace Competitor Identification",
      about: "Comprehensive research to identify your direct and indirect competitors on eBay.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Product Listing Analysis",
      about: "Detailed review of competitor listings to identify strengths, weaknesses, and opportunities.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Pricing Strategy Assessment",
      about: "Analysis of competitor pricing models to help you develop optimal pricing strategies.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Marketing & Promotion Review",
      about: "Evaluation of competitor promotional strategies to inform your marketing approach.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Store Design Comparison",
      about: "Assessment of competitor store designs to identify effective presentation techniques.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Feedback & Rating Assessment",
      about: "Analysis of competitor reviews and feedback to identify service improvement opportunities.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Competitive Advantage Identification",
      about: "Strategic analysis to identify potential competitive advantages for your eBay business.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Actionable Strategy Development",
      about: "Development of specific, actionable strategies based on competitive insights.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "35%",
      description: "Average increase in sales after implementing our competitor-informed strategies.",
    },
    {
      value: "12+",
      description: "Competitor metrics analyzed per business to develop comprehensive insights.",
    },
    {
      value: "87%",
      description: "Of clients discover untapped market opportunities through our competitor analysis.",
    },
    {
      value: "28%",
      description: "Average improvement in conversion rates after implementing competitive advantages.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Competitor Analysis"
        subtitle="Gain the Competitive Edge on eBay"
        description="Understand your competition and position your eBay business for success with our in-depth competitor analysis service. We identify market opportunities, reveal competitor strategies, and help you develop winning approaches to outperform your rivals."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Strategic Market Intelligence"
        title="Competitor Insights That"
        highlightText="Drive Growth"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Competitor Analysis"
        description="Gain valuable insights into your eBay competitors' strategies and use this intelligence to refine your approach and capture more market share."
        additionalText="From **product listing analysis** to **pricing strategies** and **promotional tactics**, our comprehensive competitor analysis provides you with the insights needed to outperform your competition."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Competitive Intelligence"
        title="Analysis Services"
        heighlightText="Competitor"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Competitive Analysis Impact"
        subtitle="Real Results for eBay Sellers"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 