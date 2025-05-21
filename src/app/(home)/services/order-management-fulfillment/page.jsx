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
  title: "Order Management & Fulfillment | eBay Services",
  description: "Streamlined order processing and fulfillment services for your eBay business.",
  openGraph: {
    title: "Order Management & Fulfillment | eBay Services",
    description: "Streamlined order processing and fulfillment services for your eBay business.",
    url: `https://aneeverse.com/services/order-management-fulfillment`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Order Management & Fulfillment | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Management & Fulfillment | eBay Services",
    description: "Streamlined order processing and fulfillment services for your eBay business.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Order Processing Automation",
      about: "Implementation of automated order processing systems to streamline your eBay operations.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Fulfillment Workflow Optimization",
      about: "Strategic workflow design to minimize processing time and maximize order accuracy.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Shipping Integration",
      about: "Seamless integration with shipping carriers and services to streamline label creation and tracking.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Multi-Location Fulfillment",
      about: "Coordination of fulfillment across multiple warehouses or locations for optimal efficiency.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Packaging Optimization",
      about: "Strategic packaging solutions that minimize costs while ensuring product protection.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Order Status Communication",
      about: "Automated customer communications to keep buyers informed throughout the fulfillment process.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "International Shipping Management",
      about: "Expert handling of international orders, including customs documentation and shipping requirements.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Performance Monitoring & Reporting",
      about: "Regular analysis of order fulfillment metrics to identify improvement opportunities.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "98.7%",
      description: "On-time shipping rate achieved with our order management systems.",
    },
    {
      value: "65%",
      description: "Average reduction in order processing time after implementation.",
    },
    {
      value: "42%",
      description: "Decrease in shipping costs through carrier optimization strategies.",
    },
    {
      value: "99.6%",
      description: "Order accuracy rate leading to higher customer satisfaction.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Order Management & Fulfillment"
        subtitle="Streamline Your eBay Operations"
        description="Transform your eBay order processing and fulfillment with our professional management solutions. We help you implement efficient systems that process orders quickly, ship accurately, and keep customers informed throughout the delivery process."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Optimized Fulfillment Processes"
        title="Order Management That"
        highlightText="Drives Efficiency"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Order Management & Fulfillment"
        description="Order fulfillment can make or break your eBay business. Our expert team implements systems and processes that ensure orders are processed efficiently, packed properly, and shipped on time, every time."
        additionalText="From **process automation** to **shipping integration** and **status communications**, our comprehensive order management services help you deliver exceptional service that earns positive feedback."
      />
      <DynamicCreativeSection
        subtitle="End-to-End Fulfillment Solutions"
        title="Management Services"
        heighlightText="Order"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Fulfillment Performance Impact"
        subtitle="Order Efficiency Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 