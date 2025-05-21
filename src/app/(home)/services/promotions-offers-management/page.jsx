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
  title: "Promotions & Offers Management | eBay Services",
  description: "Strategic management of your eBay promotions and offers to maximize sales and customer engagement.",
  openGraph: {
    title: "Promotions & Offers Management | eBay Services",
    description: "Strategic management of your eBay promotions and offers to maximize sales and customer engagement.",
    url: `https://aneeverse.com/services/promotions-offers-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Promotions & Offers Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotions & Offers Management | eBay Services",
    description: "Strategic management of your eBay promotions and offers to maximize sales and customer engagement.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Promotional Strategy Development",
      about: "Creation of tailored promotional strategies aligned with your business goals and target audience.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Order Discount Campaigns",
      about: "Strategic implementation of order-based discounts to increase average order value and conversion.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Volume Pricing Setup",
      about: "Configuration of tiered pricing strategies to encourage bulk purchases and inventory clearance.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Shipping Discount Management",
      about: "Strategic use of shipping promotions to enhance buyer value perception and increase conversions.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Seasonal Promotion Planning",
      about: "Targeted promotional campaigns aligned with seasonal events and buying patterns.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Markdown Strategy Management",
      about: "Strategic price reduction approaches that maintain margins while clearing inventory.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Coupon Campaign Design",
      about: "Development of targeted coupon strategies to drive customer acquisition and retention.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Promotion Performance Analysis",
      about: "Comprehensive tracking and analysis of promotional performance to refine future strategies.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "38%",
      description: "Average increase in sales during professionally managed promotional campaigns.",
    },
    {
      value: "4.7x",
      description: "Higher ROI on promotional spend through strategic campaign management.",
    },
    {
      value: "27%",
      description: "Increase in average order value through targeted offer strategies.",
    },
    {
      value: "42%",
      description: "Improvement in inventory turnover through strategic promotional approaches.",
    },
  ];

  // Custom FAQs specific to promotions & offers management
  const customFaqs = [
    {
      question: "What types of eBay promotions are most effective?",
      answer: "The most effective promotion types vary by business, but order discounts, volume pricing, codeless coupons, and shipping discounts typically yield the strongest results when strategically implemented.",
    },
    {
      question: "How do you measure promotional campaign success?",
      answer: "We track key metrics including sales lift, conversion rate increase, ROI, average order value, inventory turnover rate, customer acquisition cost, and repeat purchase rate.",
    },
    {
      question: "How frequently should I run eBay promotions?",
      answer: "The optimal frequency depends on your business model, but we typically recommend a strategic mix of always-on core promotions, regular monthly offers, and special event campaigns.",
    },
    {
      question: "Can promotions hurt my profit margins?",
      answer: "Without proper strategy, yes. We carefully design promotions that balance sales growth with margin protection, focusing on overall profitability rather than just revenue increase.",
    },
    {
      question: "What is the best way to promote clearance inventory?",
      answer: "We recommend a tiered approach combining markdown strategies, volume pricing incentives, and featured promotion placement with urgency triggers to accelerate inventory turnover.",
    },
    {
      question: "How do you integrate promotional offers with eBay's algorithm?",
      answer: "We structure promotions to maximize visibility in eBay's search results by aligning with eBay's Best Match factors and leveraging promotional badges and special placements.",
    },
    {
      question: "Can you create category-specific promotional strategies?",
      answer: "Yes, we develop tailored promotional strategies for different product categories based on their unique market dynamics, competition, and customer behavior patterns.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Promotions & Offers Management"
        subtitle="Strategic eBay Promotional Strategies"
        description="Drive more sales and customer engagement with expertly managed eBay promotions and offers. Our team develops and implements strategic promotional campaigns that increase conversion rates, boost average order values, and accelerate inventory turnover."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Sales-Driving Promotional Expertise"
        title="Strategic Offers That"
        highlightText="Boost Revenue"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Promotions & Offers Management"
        description="Effective promotions can dramatically increase your eBay sales when strategically planned and executed. Our promotional experts create data-driven campaigns that maximize impact while protecting your margins."
        additionalText="From **order discounts** to **volume pricing** and **seasonal campaigns**, our comprehensive promotional management services help you leverage eBay's promotional tools for maximum sales growth."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Promotional Solutions"
        title="Offer Management"
        heighlightText="Strategic"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Promotion Performance Impact"
        subtitle="Sales Growth Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <EbayServicesFAQSection customFaqs={customFaqs} />
    </div>
  )
}

export default page 