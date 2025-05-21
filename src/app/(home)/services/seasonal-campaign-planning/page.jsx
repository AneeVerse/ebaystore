import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import EbayServicesFAQSection from '@/components/services/common/EbayServicesFAQSection'
import React from 'react'

// metadata
export const metadata = {
  title: "Seasonal Campaign Planning | eBay Services",
  description: "Strategic planning and execution of seasonal sales campaigns to maximize your eBay revenue during peak periods.",
  openGraph: {
    title: "Seasonal Campaign Planning | eBay Services",
    description: "Strategic planning and execution of seasonal sales campaigns to maximize your eBay revenue during peak periods.",
    url: `https://aneeverse.com/services/seasonal-campaign-planning`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Seasonal Campaign Planning | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Campaign Planning | eBay Services",
    description: "Strategic planning and execution of seasonal sales campaigns to maximize your eBay revenue during peak periods.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Annual Campaign Calendar",
      about: "Strategic planning of your yearly promotional calendar to capture sales opportunities throughout the year.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Holiday Season Strategies",
      about: "Tailored campaign planning for major holiday shopping periods to maximize revenue during peak seasons.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Inventory Planning",
      about: "Strategic inventory management to ensure optimal stock levels for seasonal demand fluctuations.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Seasonal Listing Optimization",
      about: "Adaptation of your product listings to align with seasonal themes and shopping behaviors.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Promotional Offer Development",
      about: "Creation of compelling seasonal offers and promotions that drive conversion during key periods.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Seasonal Marketing Materials",
      about: "Design and implementation of seasonal graphics and marketing assets for your eBay store.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Campaign Performance Tracking",
      about: "Real-time monitoring of seasonal campaign performance with strategic adjustments as needed.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Post-Campaign Analysis",
      about: "Comprehensive analysis of seasonal campaign results with insights for future planning.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "67%",
      description: "Average increase in Q4 sales for clients using our seasonal campaign planning.",
    },
    {
      value: "42%",
      description: "Higher conversion rates during managed seasonal promotions.",
    },
    {
      value: "5.3x",
      description: "Return on investment for seasonal advertising spend with our strategies.",
    },
    {
      value: "93%",
      description: "Of our clients achieve their seasonal sales targets with our campaign planning.",
    },
  ];

  // Custom FAQs specific to seasonal campaign planning
  const customFaqs = [
    {
      question: "What are the most important seasonal periods for eBay sellers?",
      answer: "The key seasonal periods include Q4 holiday shopping (Black Friday through Christmas), Back to School, Valentine's Day, Mother's/Father's Day, Summer season, and category-specific seasonal peaks that vary by product type.",
    },
    {
      question: "How far in advance should seasonal campaign planning begin?",
      answer: "We recommend starting major seasonal campaign planning at least 3 months in advance, with inventory preparations beginning 4-6 months ahead for Q4 holiday campaigns.",
    },
    {
      question: "How do you balance inventory for seasonal demand spikes?",
      answer: "We use historical data analysis, market trend forecasting, and staged inventory acquisition strategies to ensure you have sufficient stock without overextending capital on excess inventory.",
    },
    {
      question: "What makes holiday listings stand out on eBay?",
      answer: "Successful holiday listings feature seasonally optimized titles and descriptions, holiday-themed photography, gift-focused positioning, competitive shipping options, and strategic use of eBay's promotional tools.",
    },
    {
      question: "How do you adjust pricing for seasonal campaigns?",
      answer: "We implement dynamic pricing strategies based on competitive analysis, demand forecasting, and margin requirements, with planned promotional discounts that preserve profitability while remaining competitive.",
    },
    {
      question: "Can you help with post-holiday inventory management?",
      answer: "Yes, our seasonal planning includes post-holiday strategies for efficient inventory sell-through, including targeted clearance campaigns, bundle offers, and cross-seasonal merchandising approaches.",
    },
    {
      question: "How do you coordinate seasonal campaigns with eBay's own promotions?",
      answer: "We actively monitor eBay's promotional calendar and seller update announcements to align your campaigns with platform-wide events, ensuring maximum visibility and participation in eBay's seasonal spotlights.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Seasonal Campaign Planning"
        subtitle="Strategic Seasonal eBay Sales"
        description="Maximize your eBay revenue during peak shopping seasons with expert campaign planning. Our team develops comprehensive seasonal strategies that boost visibility, drive traffic, and increase conversions during the most profitable times of the year."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Peak Season Expertise"
        title="Seasonal Strategies That"
        highlightText="Maximize Revenue"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Seasonal Campaign Planning"
        description="Don't miss out on the tremendous sales potential of seasonal shopping periods. Our expert team creates data-driven campaign strategies that help you capture your share of holiday and seasonal spending."
        additionalText="From **Black Friday** to **Christmas**, **Valentine's Day** to **Back to School**, our comprehensive seasonal campaign planning ensures your eBay business is optimized for success during every major shopping event."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Seasonal Solutions"
        title="Campaign Planning"
        heighlightText="Strategic"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Seasonal Campaign Impact"
        subtitle="Peak Season Performance Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <EbayServicesFAQSection customFaqs={customFaqs} />
    </div>
  )
}

export default page 