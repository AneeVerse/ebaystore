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
  title: "eBay Dropshipping Assistance | eBay Services",
  description: "Expert assistance for setting up and managing your eBay dropshipping business.",
  openGraph: {
    title: "eBay Dropshipping Assistance | eBay Services",
    description: "Expert assistance for setting up and managing your eBay dropshipping business.",
    url: `https://aneeverse.com/services/ebay-dropshipping-assistance`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "eBay Dropshipping Assistance | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eBay Dropshipping Assistance | eBay Services",
    description: "Expert assistance for setting up and managing your eBay dropshipping business.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Dropshipping Strategy Planning",
      about: "Develop a tailored dropshipping strategy aligned with your business goals and eBay's policies.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Supplier Sourcing & Management",
      about: "Identify and connect with reliable suppliers who work well with the dropshipping model.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Product Research & Selection",
      about: "Research profitable products with good margins and demand for your dropshipping business.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Automated Order Processing",
      about: "Set up systems for efficient, automated order processing between eBay and your suppliers.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Inventory Synchronization",
      about: "Implement tools to sync inventory across multiple platforms and prevent overselling.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Policy Compliance Support",
      about: "Ensure your dropshipping business fully complies with eBay's policies and requirements.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Pricing Strategy Development",
      about: "Create pricing models that maintain competitive pricing while ensuring healthy profit margins.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Scaling Support & Growth",
      about: "Strategic guidance to scale your dropshipping business and expand to new product categories.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "78%",
      description: "Of our clients achieve profitable dropshipping operations within three months.",
    },
    {
      value: "150+",
      description: "Successful dropshipping businesses launched with our assistance.",
    },
    {
      value: "3.5x",
      description: "Average inventory expansion through our supplier sourcing strategies.",
    },
    {
      value: "42%",
      description: "Average reduction in order processing time with our automated systems.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="eBay Dropshipping Assistance"
        subtitle="Streamlined Dropshipping Solutions"
        description="Launch and grow your eBay dropshipping business with expert assistance. Our team helps you navigate supplier relationships, automate order fulfillment, and build a profitable dropshipping operation in compliance with eBay's policies."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Expert Dropshipping Guidance"
        title="eBay Dropshipping"
        highlightText="Made Simple"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="eBay Dropshipping Assistance"
        description="Build a successful dropshipping business on eBay with our comprehensive support and expertise, from account setup to scaling your operations."
        additionalText="From **finding reliable suppliers** to **automating order processes** and **scaling your business**, our service covers every aspect of successful eBay dropshipping."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Dropshipping Support"
        title="Services"
        heighlightText="Dropshipping"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Dropshipping Success Metrics"
        subtitle="Real Results for Sellers"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 