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
  title: "Product Photography | eBay Services",
  description: "Professional product images to enhance your eBay listings and increase conversion rates.",
  openGraph: {
    title: "Product Photography | eBay Services",
    description: "Professional product images to enhance your eBay listings and increase conversion rates.",
    url: `https://aneeverse.com/services/product-photography`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Product Photography | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Photography | eBay Services",
    description: "Professional product images to enhance your eBay listings and increase conversion rates.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  const items = [
    {
      name: "Professional Product Shots",
      about: "High-quality, professional product photography that showcases your items in the best possible light.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "White Background Photography",
      about: "Clean, professional product images on white backgrounds that meet eBay's best practices.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Lifestyle Photography",
      about: "Contextual images showing your products in use to help customers envision ownership.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "360° Product Views",
      about: "Interactive product photography allowing customers to view items from all angles.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Detail & Feature Highlighting",
      about: "Macro photography that showcases important product details and unique selling points.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Product Grouping & Sets",
      about: "Strategic photography of product bundles, variations, and sets to maximize sales opportunities.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Image Editing & Retouching",
      about: "Professional post-production to ensure your product images look perfect and consistent.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Image Optimization for eBay",
      about: "Ensuring your product photos are perfectly sized and optimized for eBay's platform requirements.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];


  // stats data
  const statsData = [
    {
      value: "93%",
      description: "eBay shoppers rank product images as the most important factor in purchase decisions.",
    },
    {
      value: "3x",
      description: "Increase in attention time on listings with professional product photography.",
    },
    {
      value: "70%",
      description: "Higher sell-through rate for listings with multiple professional product images.",
    },
    {
      value: "2.5x",
      description: "Increase in conversion rate with high-quality, professional product photography.",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Product Photography"
        subtitle="Professional eBay Images"
        description="Boost your eBay sales with stunning, professional product photography. Our expert photographers create images that showcase your items perfectly, build buyer confidence, and increase conversion rates."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />

      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Visual Excellence for eBay Listings"
        title="Product Photography That"
        highlightText="Sells"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Product Photography"
        description="Stand out in the crowded eBay marketplace with professionally shot product images that highlight quality and detail, building buyer trust and driving more sales."
        additionalText="From **white background product shots** to **lifestyle photography** and **detail highlighting**, our comprehensive photography services ensure your products look their absolute best online."
      />
      <DynamicCreativeSection
        subtitle="Visual Excellence for eBay"
        title="Services"
        heighlightText="Photography"
        items={items}
      />
      <CommonServicesOurWorks />

      <DynamicStateSection
        title="The Impact of Professional Photography"
        subtitle="Visual Results That Drive Sales"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />

    </div>
  )
}


export default page 