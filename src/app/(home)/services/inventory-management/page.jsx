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
  title: "Inventory Management | eBay Services",
  description: "Efficient inventory management solutions for your eBay business to optimize stock and maximize sales.",
  openGraph: {
    title: "Inventory Management | eBay Services",
    description: "Efficient inventory management solutions for your eBay business to optimize stock and maximize sales.",
    url: `https://aneeverse.com/services/inventory-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Inventory Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Management | eBay Services",
    description: "Efficient inventory management solutions for your eBay business to optimize stock and maximize sales.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Inventory System Implementation",
      about: "Setup and configuration of efficient inventory management systems tailored for eBay sellers.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Multi-channel Inventory Sync",
      about: "Synchronization of inventory across eBay and other selling channels to prevent overselling.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Stock Level Optimization",
      about: "Data-driven strategies to maintain optimal stock levels based on sales velocity and seasonality.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Automated Reordering Systems",
      about: "Implementation of automatic reordering processes to maintain ideal inventory levels.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Supplier Relationship Management",
      about: "Development and maintenance of reliable supplier relationships for inventory security.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Inventory Performance Analysis",
      about: "Regular assessment of inventory metrics to identify fast and slow-moving products.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Warehouse Organization",
      about: "Strategic warehouse setup and organization for efficient order fulfillment processes.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Seasonal Planning",
      about: "Proactive inventory planning for seasonal demands and promotional events.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "42%",
      description: "Average reduction in stockouts after implementing our inventory management solutions.",
    },
    {
      value: "37%",
      description: "Decrease in excess inventory costs through optimized stock level management.",
    },
    {
      value: "98.5%",
      description: "Order fulfillment accuracy rate achieved with our inventory systems.",
    },
    {
      value: "2.7x",
      description: "Faster inventory turnover through data-driven stock optimization strategies.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Inventory Management"
        subtitle="Optimize Your eBay Stock"
        description="Take control of your eBay inventory with our professional management solutions. We help you streamline inventory processes, prevent stockouts, reduce excess stock, and create efficient systems that scale with your business."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Strategic Stock Control"
        title="Inventory Solutions That"
        highlightText="Maximize Profits"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Inventory Management"
        description="Effective inventory management is critical to eBay success. Our expert team implements systems and strategies that optimize your stock levels, improve cash flow, and ensure you never miss a sale."
        additionalText="From **multi-channel synchronization** to **reordering automation** and **performance analytics**, our comprehensive inventory management services keep your eBay business running smoothly."
      />
      <DynamicCreativeSection
        subtitle="Complete Inventory Control"
        title="Management Services"
        heighlightText="Inventory"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Inventory Optimization Impact"
        subtitle="Stock Management Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 