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
  title: "eBay Ads Campaign Management | eBay Services",
  description: "Professional management of your eBay advertising campaigns for maximum ROI and sales.",
  openGraph: {
    title: "eBay Ads Campaign Management | eBay Services",
    description: "Professional management of your eBay advertising campaigns for maximum ROI and sales.",
    url: `https://aneeverse.com/services/ebay-ads-campaign-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "eBay Ads Campaign Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eBay Ads Campaign Management | eBay Services",
    description: "Professional management of your eBay advertising campaigns for maximum ROI and sales.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Promoted Listings Strategy",
      about: "Strategic campaign planning to maximize visibility and sales while controlling your ad spend.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Keyword Research & Targeting",
      about: "In-depth keyword analysis to ensure your ads reach the right buyers at the right time.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Bid Management & Optimization",
      about: "Ongoing monitoring and adjustment of your ad bids to maximize ROI and sales performance.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Competitor Analysis",
      about: "Research into competitor ad strategies to position your products more effectively.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Budget Planning & Allocation",
      about: "Strategic allocation of your advertising budget across different products and campaigns.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Performance Reporting & Analysis",
      about: "Detailed reporting on campaign performance with actionable insights for improvement.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "A/B Testing for Ads",
      about: "Testing different ad formats and approaches to identify the most effective strategies.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Campaign Scaling & Growth",
      about: "Strategic expansion of successful campaigns to drive increased traffic and sales.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "82%",
      description: "Increase in product visibility through optimized eBay ad campaigns.",
    },
    {
      value: "45%",
      description: "Average improvement in ad conversion rates for our clients.",
    },
    {
      value: "3.2x",
      description: "Average return on ad spend (ROAS) achieved for sellers.",
    },
    {
      value: "37%",
      description: "Reduction in cost per acquisition through targeted ad strategies.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="eBay Ads Campaign Management"
        subtitle="Maximize Your Ad Performance"
        description="Drive more traffic and sales to your eBay listings with professionally managed advertising campaigns. Our experts optimize your promoted listings strategy to increase visibility while maximizing your return on ad spend."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Data-Driven eBay Advertising"
        title="Ad Campaigns That"
        highlightText="Drive Results"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="eBay Ads Campaign Management"
        description="Stand out in the competitive eBay marketplace with strategically managed advertising campaigns that put your products in front of the right buyers."
        additionalText="From **keyword research** to **bid optimization** and **performance analysis**, our comprehensive ad management service handles every aspect of your eBay advertising."
      />
      <DynamicCreativeSection
        subtitle="Strategic Advertising Solutions"
        title="Campaign Management"
        heighlightText="eBay Ads"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="eBay Advertising Results"
        subtitle="Performance You Can Measure"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 