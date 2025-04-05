import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import PresentationiDesignFAQSection from '@/components/services/presentation-design/PresentationiDesignFAQSection'
import PresentationiDesignStateSection from '@/components/services/presentation-design/PresentationiDesignStateSection'
import React from 'react'

// metadata
export const metadata = {
  title: "Presentation Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Presentation Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/presentation-design`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Presentation Design | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}



const page = () => {
  const items = [
    {
      name: "Pitch Deck Design",
      about: "Creating visually compelling pitch decks that clearly convey your business story and vision.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Corporate Presentation Design",
      about: "Designing professional presentations tailored to corporate meetings, making your content stand out.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Interactive Presentations",
      about: "Enhancing presentations with interactive elements, ensuring an engaging and memorable experience.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Infographic Design",
      about: "Transforming complex data into easily digestible infographics to enhance your presentations.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Custom Template Design",
      about: "Designing custom presentation templates that fit your brand’s style and ensure consistency.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Storytelling Design",
      about: "Crafting presentations that tell a compelling story, enhancing audience engagement and retention.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Video Integration for Presentations",
      about: "Integrating videos seamlessly into your presentations to make them dynamic and interactive.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Data Visualization for Presentations",
      about: "Designing visually stunning charts, graphs, and data visualizations for your presentations.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Presentation Designs"
        subtitle="Impactful Presentation Design"
        description=" Create visually compelling and engaging presentations that resonate with your audience.
                From pitch decks to corporate presentations, we bring your ideas to life.
             "
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/presentation-design/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Create Impactful Presentations"
        title="Presentation Designs That "
        highlightText=" captivate & convert"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Web design process"
        description=" Craft engaging and professional presentations that make a lasting impact.
            Whether for pitches, corporate meetings, or investor presentations, we help you deliver your message with style."
        additionalText="Our expertise spans across **pitch decks**, **corporate presentations**, **interactive presentations**, and more,
            ensuring your content stands out and effectively communicates your vision."
      />


      <DynamicCreativeSection
        subtitle="Present Your Ideas Effectively"
        title=" Services"
        heighlightText=" Presentation Design"
        items={items}
      />

      <CommonServicesOurWorks />
      <PresentationiDesignStateSection />
      <TestimonialSlider />
      <PresentationiDesignFAQSection />
    </div>
  )
}

export default page
