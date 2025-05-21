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
  title: "Cross-Border Selling Support | eBay Services",
  description: "Expand your eBay business globally with expert cross-border selling support and strategies.",
  openGraph: {
    title: "Cross-Border Selling Support | eBay Services",
    description: "Expand your eBay business globally with expert cross-border selling support and strategies.",
    url: `https://aneeverse.com/services/cross-border-selling-support`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Cross-Border Selling Support | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Selling Support | eBay Services",
    description: "Expand your eBay business globally with expert cross-border selling support and strategies.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Global Market Research",
      about: "Identify promising international markets for your products based on demand and competition analysis.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "International Listing Optimization",
      about: "Adapt your product listings for international markets with localized content and keywords.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Global Shipping Program Setup",
      about: "Configure eBay's Global Shipping Program or international shipping solutions for your store.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Currency & Payment Management",
      about: "Optimize your payment settings to handle multiple currencies and international payment methods.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Customs & Import Guidance",
      about: "Navigate customs requirements, import duties, and international shipping documentation.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "International Customer Service",
      about: "Develop strategies for providing customer support across different time zones and languages.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "International Compliance Support",
      about: "Ensure your listings comply with international regulations and eBay policies in target markets.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Cross-Border Growth Strategy",
      about: "Develop comprehensive strategies to scale your international sales on eBay's global marketplace.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "65%",
      description: "Average increase in sales through successful international market expansion.",
    },
    {
      value: "120+",
      description: "Countries reached by our clients through strategic cross-border selling.",
    },
    {
      value: "40%",
      description: "Typical reduction in international shipping complications with our support.",
    },
    {
      value: "4.2x",
      description: "Average ROI for sellers investing in our cross-border selling strategies.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Cross-Border Selling Support"
        subtitle="Expand Your eBay Business Globally"
        description="Take your eBay business worldwide with expert cross-border selling support. Our team helps you navigate international markets, optimize global shipping, handle customs requirements, and build a successful international presence on eBay."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Global eBay Expansion"
        title="International Selling"
        highlightText="Made Simple"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Cross-Border Selling Support"
        description="Unlock new revenue streams by expanding your eBay business internationally. Our cross-border selling experts help you overcome barriers and tap into global markets with confidence."
        additionalText="From **international market research** to **shipping logistics** and **customs compliance**, our comprehensive service handles every aspect of global selling to help you reach customers worldwide."
      />
      <DynamicCreativeSection
        subtitle="Global Expansion Solutions"
        title="Cross-Border Services"
        heighlightText="International"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Global Selling Impact"
        subtitle="International Growth Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 