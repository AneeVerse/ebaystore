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
  title: "Performance Analytics & Reporting | eBay Services",
  description: "Data-driven insights and comprehensive reporting to optimize your eBay business performance.",
  openGraph: {
    title: "Performance Analytics & Reporting | eBay Services",
    description: "Data-driven insights and comprehensive reporting to optimize your eBay business performance.",
    url: `https://aneeverse.com/services/performance-analytics-reporting`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Performance Analytics & Reporting | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Analytics & Reporting | eBay Services",
    description: "Data-driven insights and comprehensive reporting to optimize your eBay business performance.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Sales Performance Analysis",
      about: "Comprehensive analysis of your eBay sales data to identify trends, strengths, and improvement areas.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Conversion Rate Optimization",
      about: "Data-driven strategies to improve your listing-to-sale conversion rates and increase revenue.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Traffic Analysis",
      about: "Detailed analysis of your listing traffic sources and visitor behavior to optimize visibility.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Seller Performance Metrics",
      about: "Monitoring and optimization of your eBay seller metrics to maintain and improve your account standing.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Competitive Benchmarking",
      about: "Comparative analysis of your performance against competitors to identify market positioning opportunities.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Custom Performance Dashboards",
      about: "Development of tailored reporting dashboards that provide clear visibility into your business metrics.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Growth Opportunity Identification",
      about: "Data-based analysis to identify untapped growth opportunities and revenue streams for your eBay business.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Regular Performance Reporting",
      about: "Scheduled comprehensive performance reports with actionable insights for ongoing business improvement.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "47%",
      description: "Average increase in sales after implementing our data-driven optimization strategies.",
    },
    {
      value: "82%",
      description: "Of clients discover previously unidentified business improvement opportunities.",
    },
    {
      value: "3.2x",
      description: "Average ROI on business changes made based on our analytics insights.",
    },
    {
      value: "31%",
      description: "Typical reduction in listing-to-sale time through performance optimization.",
    },
  ];

  // Custom FAQs specific to performance analytics
  const customFaqs = [
    {
      question: "What key metrics do you track for eBay performance?",
      answer: "We track conversion rates, traffic sources, click-through rates, sell-through rates, average selling prices, profit margins, return rates, seller ratings, and competitive positioning metrics.",
    },
    {
      question: "How often will I receive performance reports?",
      answer: "We offer weekly snapshot reports, comprehensive monthly analyses, and quarterly strategic reviews, with the option to customize reporting frequency based on your business needs.",
    },
    {
      question: "Do you provide real-time analytics dashboards?",
      answer: "Yes, we create custom real-time dashboards that integrate eBay data with other business metrics for a comprehensive view of your performance accessible anytime.",
    },
    {
      question: "How do you identify growth opportunities from data?",
      answer: "We analyze market trends, competitive gaps, seasonal patterns, customer behavior, and category performance to identify untapped opportunities aligned with your business strengths.",
    },
    {
      question: "Can you help improve my eBay search ranking through analytics?",
      answer: "Absolutely. We analyze visibility metrics and implement data-driven strategies to optimize your listings for eBay's search algorithm, improving your organic ranking.",
    },
    {
      question: "What tools do you use for eBay performance analysis?",
      answer: "We use a combination of eBay's native seller tools, specialized third-party analytics platforms, and custom-built proprietary analysis systems designed specifically for eBay sellers.",
    },
    {
      question: "How do you measure ROI on eBay selling strategies?",
      answer: "We establish clear baseline metrics before implementing changes, then track performance against these baselines while accounting for all costs to calculate accurate ROI for each strategy.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Performance Analytics & Reporting"
        subtitle="Data-Driven eBay Success"
        description="Transform your eBay business with comprehensive performance analytics and reporting. Our expert team analyzes your sales data, traffic patterns, and seller metrics to identify opportunities for optimization and growth."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Strategic Business Intelligence"
        title="Analytics That"
        highlightText="Drive Results"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Performance Analytics & Reporting"
        description="Unlock the full potential of your eBay business with data-driven insights. Our comprehensive analytics services reveal what's working, what isn't, and where your greatest opportunities lie."
        additionalText="From **sales performance analysis** to **conversion optimization** and **custom dashboards**, our analytics solutions provide you with the intelligence needed to make strategic decisions that boost your bottom line."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Business Intelligence"
        title="Analytics Services"
        heighlightText="Performance"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Analytics Impact"
        subtitle="Performance Improvement Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <EbayServicesFAQSection customFaqs={customFaqs} />
    </div>
  )
}

export default page 