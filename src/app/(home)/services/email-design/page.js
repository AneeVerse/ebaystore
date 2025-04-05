import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import EmailDesignAiDesignSection from '@/components/services/email-design/EmailDesignAiDesignSection'
import EmailDesignFAQSection from '@/components/services/email-design/EmailDesignFAQSection'
import EmailDesignStateSection from '@/components/services/email-design/EmailDesignStateSection'
import React from 'react'


// metadata
export const metadata = {
    title: "Email Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Email Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/email-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Email Design | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Email Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

  
const page = () => {
  const items = [
    {
        name: "Email Design",
        about: "Creating visually appealing email templates that reflect your brand and engage your audience.",
        image: "/images/services/email-design/email-design.avif",
        bgColor: "bg-secondary-500",
        textColor: "text-primary-500",
    },
    {
        name: "Email Strategy",
        about: "Our consulting team can craft an effective email strategy to help structure and optimize your efforts.",
        image: "/images/services/email-design/email-strategy.avif",
        bgColor: "bg-[#c0e2ff]",
        textColor: "text-[#0a211f]",
    },
    {
        name: "Email HTML5",
        about: "Coding responsive and interactive email designs that look great on any device.",
        image: "/images/services/email-design/email-html5.avif",
        bgColor: "bg-[#f9f9f9]",
        textColor: "text-[#3d3d3d]",
    },
    {
        name: "Email Design Templates",
        about: "Get customized email design templates that reflect your brand's identity and can be easily adapted for various campaigns.",
        image: "/images/services/email-design/email-design-templates.avif",
        bgColor: "bg-[#292423]",
        textColor: "text-[#ffafed]",
    },
    // add webflow development, ux ui audit, design system, content development
    {
        name: "Email Newsletter Design",
        about: "Engage your subscribers with beautifully designed newsletters that inform, entertain, and drive engagement.",
        image: "/images/services/email-design/email-newsletter-design.avif",
        bgColor: "bg-[#d8ff85]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Email UI UX Audits",
        about: "Email audit to identify design improvements, increasing user satisfaction, and boosting click through rates for overall business success.",
        image: "/images/services/email-design/email-ui-ux-audits.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Graphics & Illustrations",
        about: "Enhance your emails with custom graphics that grab attention and convey your message visually.",
        image: "/images/services/email-design/graphics-and-illustrations.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
    },
    {
        name: "Email Design Systems",
        about: "Compilation and development of a design system taking into account your brand’s requirements and objectives for your emails.",
        image: "/images/services/email-design/email-design-systems.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
    }
  
    
];
  return (
    <div>
           <CommonServicesHeroSection
            title="Email Design Services"
            subtitle="Creative Services"
            description="  Our web design services combine creativity and strategy to deliver
            stunning websites that meet your objectives. From concept to launch,
            our experts craft tailored solutions to help your brand stand out
            and drive results."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/email-design/hero-banner.avif"
           
          />
        <SlidingLogos />
         <DynamicSupportSection
        subtitle="BUILT FOR COMMS, CREATIVE & MARKETING TEAMS"
        title="Email Designs That "
        highlightText=" drive action and engagement"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Email Designs"
        description="Stand out in every inbox with our custom email design services. Our team crafts visually appealing and strategically structured emails that resonate with your audience and align with your brand's voice."
        additionalText="From promo campaigns to regular newsletters, we deliver email designs that enhance readability, engagement and encourage CTR ensuring your message is impactful and memorable."
      />
      
      <DynamicCreativeSection
        subtitle="Design Expertise"
        title="Email Design Services"
        heighlightText="Comprehensive "
        items={items}
      />
        <CommonServicesOurWorks />
        <EmailDesignAiDesignSection />
        <EmailDesignStateSection />
        <TestimonialSlider />
        <EmailDesignFAQSection />
      
    </div>
  )
}

export default page
