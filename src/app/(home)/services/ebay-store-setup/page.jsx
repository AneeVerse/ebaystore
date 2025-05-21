import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import WebsiteDesignFAQSection from '@/components/services/website-design/WebsiteDesignFAQSection'
import WebsiteDesignStateSections from '@/components/services/website-design/WebsiteDesignStateSections'
import React from 'react'

// metadata
export const metadata = {
  title: "eBay Store Setup | eBay Services",
  description: "Complete setup for your eBay store, tailored to your brand and business needs.",
  openGraph: {
    title: "eBay Store Setup | eBay Services",
    description: "Complete setup for your eBay store, tailored to your brand and business needs.",
    url: `https://aneeverse.com/services/ebay-store-setup`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "eBay Store Setup | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eBay Store Setup | eBay Services",
    description: "Complete setup for your eBay store, tailored to your brand and business needs.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {

  const items = [
    {
        name: "Store Strategy",
        about: "Our consulting team helps you craft the perfect eBay store strategy to maximize sales and brand visibility.",
        image: "/images/services/website/website-strategy.avif",
        bgColor: "bg-secondary-500",
        textColor: "text-primary-500",
    },
    {
        name: "Store Design",
        about: "We create conversion-focused eBay store designs that align with your brand identity and sales goals.",
        image: "/images/services/website/website-design.avif",
        bgColor: "bg-[#c0e2ff]",
        textColor: "text-[#0a211f]",
    },
    {
        name: "Category Setup",
        about: "Our team strategically organizes your product categories for optimal navigation and customer experience.",
        image: "/images/services/website/landing-page-design.avif",
        bgColor: "bg-[#f9f9f9]",
        textColor: "text-[#3d3d3d]",
    },
    {
        name: "Brand Identity Integration",
        about: "We integrate your existing brand elements into your eBay store for a cohesive shopping experience.",
        image: "/images/services/website/website-illustrations.avif",
        bgColor: "bg-[#292423]",
        textColor: "text-[#ffafed]",
    },
    {
        name: "Store Policy Setup",
        about: "We create professional, compliant store policies that build trust with your customers.",
        image: "/images/services/website/webflow-development.avif",
        bgColor: "bg-[#d8ff85]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Seller Performance Optimization",
        about: "We implement strategies to maximize your seller metrics and achieve Top Rated Seller status.",
        image: "/images/services/website/ux-ui-audit.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "International Selling Setup",
        about: "We configure your store for cross-border selling to expand your global customer reach.",
        image: "/images/services/website/design-systems.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
    },
    {
        name: "Promotion Strategy",
        about: "We develop effective promotional strategies to boost visibility and drive sales from day one.",
        image: "/images/services/website/content-development.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
    }
  
    
];

  return (
    <div>
      <CommonServicesHeroSection
        title="eBay Store Setup"
        subtitle="Complete Store Solutions"
        description="Launch your eBay business with a professional, optimized store setup. Our experts handle every aspect of your store creation, from branding to policies, ensuring you start selling with confidence and credibility."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Built for New and Expanding eBay Sellers"
        title="Get a professional "
        highlightText="eBay store that converts"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="eBay Store Setup"
        description="More than just basic setup, we deliver strategic, customer-focused eBay stores that drive growth, improve engagement, and establish your brand presence."
        additionalText="From account creation to store design, our experienced team handles every detail. The result? A professional eBay store that stands out from competitors and helps you achieve your selling goals."
      />


      <DynamicCreativeSection
        subtitle="COMPREHENSIVE SETUP SOLUTIONS"
        title="eBay store setup services"
        heighlightText="Full-service"
        items={items}
      />


      <CommonServicesOurWorks />
      <WebsiteDesignStateSections />
      <TestimonialSlider />
      <WebsiteDesignFAQSection />
    </div>
  )
}

export default page 