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
  title: "eBay Policy Compliance Assistance | eBay Services",
  description: "Expert guidance to ensure your eBay business stays compliant with all policies and regulations.",
  openGraph: {
    title: "eBay Policy Compliance Assistance | eBay Services",
    description: "Expert guidance to ensure your eBay business stays compliant with all policies and regulations.",
    url: `https://aneeverse.com/services/ebay-policy-compliance-assistance`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "eBay Policy Compliance Assistance | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eBay Policy Compliance Assistance | eBay Services",
    description: "Expert guidance to ensure your eBay business stays compliant with all policies and regulations.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Policy Compliance Audit",
      about: "Comprehensive review of your eBay listings and business practices to identify compliance issues.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Listing Compliance Optimization",
      about: "Updating your product listings to ensure they comply with eBay's category-specific policies.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Prohibited Items Review",
      about: "Thorough assessment of your inventory to identify and address any prohibited or restricted items.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Store Policy Development",
      about: "Creation of compliant, professional store policies that protect your business and inform customers.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Intellectual Property Guidance",
      about: "Expert advice on navigating trademark, copyright, and intellectual property issues on eBay.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "VERO Program Navigation",
      about: "Support for resolving Verified Rights Owner (VERO) issues and avoiding future problems.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Policy Update Monitoring",
      about: "Ongoing monitoring of eBay policy changes with actionable recommendations for your business.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Compliance Training",
      about: "Training for you and your team on maintaining eBay policy compliance in day-to-day operations.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "96%",
      description: "Success rate in resolving policy compliance issues for eBay sellers.",
    },
    {
      value: "85%",
      description: "Reduction in policy violations after implementing our compliance strategies.",
    },
    {
      value: "100+",
      description: "eBay categories where we've successfully implemented compliance solutions.",
    },
    {
      value: "24hr",
      description: "Average response time for urgent policy compliance issues.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="eBay Policy Compliance Assistance"
        subtitle="Stay Compliant, Stay Selling"
        description="Ensure your eBay business operates smoothly with expert policy compliance assistance. Our team helps you navigate eBay's complex policies and requirements, reducing violations and keeping your seller account in good standing."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Expert eBay Policy Navigation"
        title="Compliance Solutions That"
        highlightText="Protect Your Business"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="eBay Policy Compliance Assistance"
        description="Navigate eBay's complex policies with confidence. Our compliance experts help you understand and implement best practices that keep your seller account in good standing."
        additionalText="From **policy audits** to **listing optimization** and **ongoing monitoring**, we provide comprehensive support to ensure every aspect of your eBay business meets platform requirements."
      />
      <DynamicCreativeSection
        subtitle="Complete Policy Support"
        title="Compliance Services"
        heighlightText="eBay Policy"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Policy Compliance Results"
        subtitle="Protecting eBay Businesses"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 