import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import BrochureDesignFAQSection from '@/components/services/brochure-design/BrochureDesignFAQSection'
import BrochureDesignStateSection from '@/components/services/brochure-design/BrochureDesignStateSection'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import React from 'react'



// metadata
export const metadata = {
    title: "Custom Store Design | eBay Services",
    description: "Unique, branded store design for your eBay business that stands out from competitors.",
    openGraph: {
      title:  "Custom Store Design | eBay Services",
      description: "Unique, branded store design for your eBay business that stands out from competitors.",
      url: `https://aneeverse.com/services/custom-store-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Custom Store Design | eBay Services",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Custom Store Design | eBay Services",
      description: "Unique, branded store design for your eBay business that stands out from competitors.",
      image: "/images/meta/phone.avif",
    },
}

const page = () => {

  const items = [
    {
      name: "Brand-Aligned Store Design",
      about: "Creating distinctive eBay store designs that perfectly align with your brand identity and values.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Category Organization",
      about: "Strategic organization of your eBay store categories for optimal customer navigation and discovery.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Visual Merchandising",
      about: "Expertly curated product displays and featured items that enhance the customer shopping experience.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Custom Store Header",
      about: "Professional, branded headers that create immediate recognition and establish your store's identity.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Mobile Optimization",
      about: "Ensuring your eBay store looks professional and functions perfectly on all mobile devices.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Conversion-Focused Layout",
      about: "Store designs strategically created to guide customers through the buying journey and increase sales.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Custom Graphics & Elements",
      about: "Tailored visual elements that enhance your store's aesthetic and reinforce your brand identity.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Store Policy Styling",
      about: "Professional presentation of your store policies that builds trust while maintaining brand consistency.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
           <CommonServicesHeroSection
            title="Custom Store Design"
            subtitle="Stand Out on eBay"
            description="Transform your eBay presence with a professionally designed store that reflects your brand identity and drives customer engagement."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/brochure-design/hero-banner.avif"
           
          />
        <SlidingLogos />
        <DynamicSupportSection
        subtitle="Distinctive eBay Store Designs"
        title="Professional Store"
        highlightText="design services"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Custom Store Design"
        description="Stand out in the competitive eBay marketplace with beautifully crafted store designs that deliver your message effectively and convert browsers into buyers."
        additionalText="From **brand-aligned layouts** to **strategic category organization** and **custom visual elements**, our designs help communicate your brand story and engage your audience with style."
      />
      
      <DynamicCreativeSection
        subtitle="Elevate Your eBay Presence"
        title="Design Services"
        heighlightText="Professional Store"
        items={items}
      />
        <CommonServicesOurWorks />
        <BrochureDesignStateSection />
        <TestimonialSlider />
        <BrochureDesignFAQSection />
      
    </div>
  )
}

export default page 