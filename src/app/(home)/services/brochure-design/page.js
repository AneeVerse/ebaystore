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
    title: "Brochure Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Brochure Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/brochure-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Brochure Design | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Brochure Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
}

const page = () => {

  const items = [
    {
      name: "Corporate Brochure Design",
      about: "Designing professional brochures that communicate your brand identity effectively.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Product Catalogs",
      about: "Creating visually engaging catalogs to showcase your products and services with clarity.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Event Materials",
      about: "Designing flyers, posters, and brochures for events that capture attention and drive engagement.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Business Presentations",
      about: "Designing high-impact presentations that align with your brand’s objectives and effectively convey your message.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Infographic Brochures",
      about: "Creating infographics that combine data and visuals for easy comprehension and maximum impact.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Annual Reports",
      about: "Designing annual reports that showcase your business achievements in a clean and impactful layout.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Interactive PDF Brochures",
      about: "Designing interactive PDF brochures that provide a dynamic experience for your clients.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Branding Materials",
      about: "Creating brochures that reflect your brand’s visual identity and help build a strong presence.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
           <CommonServicesHeroSection
            title="Brochure Design Services"
            subtitle="Creative Brochure Designs"
            description="   From concept to completion, we create brochures that effectively communicate your brand story."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/brochure-design/hero-banner.avif"
           
          />
        <SlidingLogos />
        <DynamicSupportSection
        subtitle="Creative Brochure Design"
        title=" Professional Brochure "
        highlightText=" design services"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Creative Brochure Design"
        description="  Stand out with beautifully crafted brochures that deliver your message effectively.
            We create impactful designs that elevate your brand identity."
        additionalText="From **corporate brochures** to **product catalogs** and **event materials**,  
            our designs help communicate your brand story and engage your audience with style."
      />
      
      <DynamicCreativeSection
        subtitle="Showcase Your Brand"
        title="Design Services"
        heighlightText="Professional Brochure "
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
