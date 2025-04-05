import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import GmbOptimizationFAQSection from '@/components/services/gmb-optimization/GmbOptimizationFAQSection'
import GmbOptimizationStateSection from '@/components/services/gmb-optimization/GmbOptimizationStateSection'
import React from 'react'

// metadata
export const metadata = {
  title: "GMB Optimization | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "GMB Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/gmb-optimization`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "GMB Optimization | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMB Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  const items = [
    {
      name: "Google My Business Profile Setup",
      about: "Setting up your Google My Business profile to ensure that all business details are accurate and complete for maximum visibility.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "GMB Profile Optimization",
      about: "Optimizing your GMB profile with keyword-rich descriptions and media to enhance local search rankings and engagement.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Local SEO Integration for GMB",
      about: "Integrating local SEO strategies to ensure your business shows up in the right local searches and attracts relevant customers.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Review Management for GMB",
      about: "Managing customer reviews to build trust, increase visibility, and enhance your brand’s reputation on Google.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "GMB Insights & Analytics",
      about: "Using GMB insights and analytics to monitor performance, track customer interactions, and refine your optimization strategies.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "GMB Posts & Updates",
      about: "Regularly posting updates, offers, and news to your GMB profile to keep your audience engaged and informed.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "GMB Media Optimization",
      about: "Optimizing images and videos on your GMB profile to enhance your brand's visual appeal and improve engagement.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "GMB Q&A Management",
      about: "Managing the questions and answers section on your GMB profile to provide helpful information and build customer trust.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="GMB Optimization Services"
        subtitle="Google My Business Optimization"
        description="Boost your local visibility with expert GMB optimization services. From profile setup to review management, we help you attract more customers."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Google My Business Optimization"
        title="GMB Optimization That "
        highlightText=" ranks & converts"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Google My Business Optimization"
        description=" Enhance your local search presence with our expert GMB optimization strategies.
            We optimize your Google My Business profile to improve visibility, attract more
            customers, and drive conversions."
        additionalText=" From **GMB profile setup** to **review management** and **insights tracking**,  
            our tailored GMB strategies help your business show up on local searches, gaining trust
            and increasing traffic."
      />



      <DynamicCreativeSection
        subtitle="Boost Your Local Visibility"
        title=" Services"
        heighlightText="GMB Optimization "
        items={items}
      />
      <CommonServicesOurWorks />
      <GmbOptimizationStateSection />
      <TestimonialSlider />
      <GmbOptimizationFAQSection />

    </div>
  )
}

export default page
