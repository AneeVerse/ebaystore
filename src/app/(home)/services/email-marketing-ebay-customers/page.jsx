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
  title: "Email Marketing for eBay Customers | eBay Services",
  description: "Strategic email campaigns to engage eBay customers and drive repeat purchases.",
  openGraph: {
    title: "Email Marketing for eBay Customers | eBay Services",
    description: "Strategic email campaigns to engage eBay customers and drive repeat purchases.",
    url: `https://aneeverse.com/services/email-marketing-ebay-customers`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Email Marketing for eBay Customers | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing for eBay Customers | eBay Services",
    description: "Strategic email campaigns to engage eBay customers and drive repeat purchases.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "eBay-Compliant Email Strategies",
      about: "Email marketing campaigns that fully comply with eBay's policies and best practices.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Customer Segmentation",
      about: "Strategic segmentation of your customer base for targeted, personalized communications.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Post-Purchase Follow-ups",
      about: "Automated post-purchase email sequences to encourage reviews and repeat business.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Promotional Campaign Design",
      about: "Strategically designed promotional campaigns to boost sales during key periods.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Newsletter Development",
      about: "Regular newsletters to keep your customers informed about new products and offers.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Abandoned Cart Recovery",
      about: "Targeted email strategies to recover potential sales from abandoned shopping carts.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Email Performance Analysis",
      about: "Comprehensive analysis of email campaign performance with actionable insights.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Cross-Selling Email Campaigns",
      about: "Targeted emails that promote related products to increase average order values.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "68%",
      description: "Average increase in repeat purchases through targeted email campaigns.",
    },
    {
      value: "4.2x",
      description: "Higher customer retention rates for sellers using our email marketing services.",
    },
    {
      value: "23%",
      description: "Average recovery rate for abandoned carts through our email strategies.",
    },
    {
      value: "32%",
      description: "Increase in average order value through cross-selling email campaigns.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Email Marketing for eBay Customers"
        subtitle="Engage & Retain Your Buyers"
        description="Convert one-time eBay buyers into loyal, repeat customers with strategic email marketing campaigns. Our expert team develops eBay-compliant email strategies that boost customer engagement, encourage reviews, and drive consistent sales."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Customer-Focused Email Strategies"
        title="Email Marketing That"
        highlightText="Drives Repeat Sales"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Email Marketing for eBay Customers"
        description="Leverage the power of permission-based email marketing to build lasting relationships with your eBay customers and maximize lifetime customer value."
        additionalText="From **post-purchase follow-ups** to **promotional campaigns** and **strategic newsletters**, our email marketing services help you maintain contact with buyers in ways that comply with eBay's policies."
      />
      <DynamicCreativeSection
        subtitle="Strategic Email Solutions"
        title="Marketing Services"
        heighlightText="eBay Email"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Email Marketing Impact"
        subtitle="Measurable Results for eBay Sellers"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 