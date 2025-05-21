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
  title: "Customer Support Management | eBay Services",
  description: "Professional management of your eBay customer service to boost satisfaction and ratings.",
  openGraph: {
    title: "Customer Support Management | eBay Services",
    description: "Professional management of your eBay customer service to boost satisfaction and ratings.",
    url: `https://aneeverse.com/services/customer-support-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Customer Support Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support Management | eBay Services",
    description: "Professional management of your eBay customer service to boost satisfaction and ratings.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Customer Inquiry Management",
      about: "Professional handling of all customer questions and inquiries to ensure prompt, helpful responses.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Message Response System",
      about: "Implementation of efficient messaging systems to ensure timely, consistent communication.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Issue Resolution Management",
      about: "Strategic handling of customer issues to ensure positive outcomes and maintain seller ratings.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Customer Experience Enhancement",
      about: "Implementation of processes to create exceptional customer experiences that drive positive feedback.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Template Development",
      about: "Creation of professional response templates for consistent, efficient customer communications.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Multilingual Support",
      about: "Customer service in multiple languages to support your international eBay business.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Feedback Management",
      about: "Proactive strategies to encourage positive feedback and address negative feedback effectively.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Support Analytics & Reporting",
      about: "Detailed reporting on customer support metrics to identify trends and improvement opportunities.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "96%",
      description: "Customer satisfaction rate achieved through our support management services.",
    },
    {
      value: "1.5hr",
      description: "Average response time for customer inquiries with our management solutions.",
    },
    {
      value: "92%",
      description: "First-contact resolution rate for customer issues and questions.",
    },
    {
      value: "35%",
      description: "Average increase in positive feedback after implementing our support strategies.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Customer Support Management"
        subtitle="Exceptional eBay Customer Service"
        description="Delight your eBay customers with professional, responsive customer support management. Our team handles inquiries, resolves issues, and creates exceptional experiences that lead to positive feedback and repeat business."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Professional Customer Care"
        title="Support Management That"
        highlightText="Builds Trust"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Customer Support Management"
        description="Elevate your eBay business with customer support that exceeds expectations. Our professional team ensures every buyer interaction reflects positively on your brand and builds lasting customer relationships."
        additionalText="From **inquiry management** to **issue resolution** and **feedback management**, our comprehensive service handles every aspect of customer support to maintain your stellar reputation on eBay."
      />
      <DynamicCreativeSection
        subtitle="Complete Customer Care Solutions"
        title="Support Services"
        heighlightText="Customer"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Customer Support Impact"
        subtitle="Service Excellence Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 