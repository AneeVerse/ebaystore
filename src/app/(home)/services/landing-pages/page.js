import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import LandingPagesFAQSection from '@/components/services/landign-pages/LandingPagesFAQSection'
import LandingPagesStateSection from '@/components/services/landign-pages/LandingPagesStateSection'
import React from 'react'





// metadata
export const metadata = {
  title: "Landign Pages | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Landign Pages | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/landing-pages`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Landign Pages | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landign Pages | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}



const page = () => {
  const items = [
    {
        name: "Landing Page Strategy",
        about: "Developing conversion-focused landing page strategies to capture leads and maximize ROI.",
        image: "/images/services/email-design/email-design.avif", // Keeping same images
        bgColor: "bg-secondary-500",
        textColor: "text-primary-500",
    },
    {
        name: "High-Converting Design",
        about: "Crafting landing pages with stunning UI and seamless UX for better engagement & conversions.",
        image: "/images/services/email-design/email-strategy.avif",
        bgColor: "bg-[#c0e2ff]",
        textColor: "text-[#0a211f]",
    },
    {
        name: "Custom Landing Page Templates",
        about: "Providing ready-to-use custom landing page templates that align with your brand & campaign goals.",
        image: "/images/services/email-design/email-html5.avif",
        bgColor: "bg-[#f9f9f9]",
        textColor: "text-[#3d3d3d]",
    },
    {
        name: "Responsive & Fast Loading",
        about: "Building mobile-friendly landing pages optimized for speed and user experience.",
        image: "/images/services/email-design/email-design-templates.avif",
        bgColor: "bg-[#292423]",
        textColor: "text-[#ffafed]",
    },
    {
        name: "A/B Testing & Optimization",
        about: "Improving landing page performance through A/B testing, analytics, and continuous enhancements.",
        image: "/images/services/email-design/email-newsletter-design.avif",
        bgColor: "bg-[#d8ff85]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Landing Page UI/UX Audits",
        about: "Conducting audits to identify usability issues and suggest design improvements for higher conversions.",
        image: "/images/services/email-design/email-ui-ux-audits.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Interactive Elements",
        about: "Enhancing landing pages with animations, interactive UI elements, and engaging visuals.",
        image: "/images/services/email-design/graphics-and-illustrations.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
    },
    {
        name: "Landing Page Design Systems",
        about: "Creating scalable landing page design systems for consistent branding across campaigns.",
        image: "/images/services/email-design/email-design-systems.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
    },
];
  return (
    <div>
      <CommonServicesHeroSection
        title="Landing Page Design Services"
        subtitle="Performance-Driven Design"
        description=" High-converting landing pages crafted to maximize engagement, lead generation, and sales.
                Our expert team designs pages tailored to your goals, ensuring a seamless user experience."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Optimized for High Conversions"
        title="Landing Pages That "
        highlightText=" convert & engage"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Landing Pages"
        description="Elevate your digital marketing efforts with high-performing landing pages.  
            We design pages that are visually compelling, strategically structured,  
            and optimized for conversions."
        additionalText="From lead generation to e-commerce sales, we create tailored landing pages  
          that capture attention, guide users seamlessly, and drive measurable results."
      />
      
      <DynamicCreativeSection
        subtitle="Conversion-Focused Design"
        title=" Design Services"
        heighlightText=" Landing Page"
        items={items}
      />
      <CommonServicesOurWorks />
      <LandingPagesStateSection />
      <TestimonialSlider />
      <LandingPagesFAQSection />

    </div>
  )
}

export default page
