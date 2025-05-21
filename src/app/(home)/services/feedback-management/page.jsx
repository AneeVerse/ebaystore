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
  title: "Feedback Management | eBay Services",
  description: "Strategic management of your eBay feedback to improve ratings and build buyer trust.",
  openGraph: {
    title: "Feedback Management | eBay Services",
    description: "Strategic management of your eBay feedback to improve ratings and build buyer trust.",
    url: `https://aneeverse.com/services/feedback-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Feedback Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback Management | eBay Services",
    description: "Strategic management of your eBay feedback to improve ratings and build buyer trust.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Feedback Monitoring",
      about: "Continuous monitoring of your eBay feedback to identify trends and opportunities for improvement.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Positive Feedback Strategy",
      about: "Proactive approaches to encourage satisfied customers to leave positive feedback for your store.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Negative Feedback Resolution",
      about: "Professional handling of negative feedback with strategic responses and resolution processes.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Feedback Removal Assistance",
      about: "Expert help with requesting removal of unfair or policy-violating negative feedback.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Follow-up Communication",
      about: "Strategic post-purchase communication to ensure customer satisfaction and positive ratings.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Rating Improvement Planning",
      about: "Customized strategies to improve your overall feedback score and detailed seller ratings.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Service Process Optimization",
      about: "Identification and correction of business processes that may be leading to negative feedback.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Reputation Management",
      about: "Comprehensive management of your eBay seller reputation to build buyer trust and loyalty.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "98.7%",
      description: "Average positive feedback rate achieved for our managed eBay sellers.",
    },
    {
      value: "85%",
      description: "Success rate in resolving or removing unfair negative feedback.",
    },
    {
      value: "45%",
      description: "Increase in feedback submission rate through our follow-up strategies.",
    },
    {
      value: "74%",
      description: "Of buyers cite high feedback scores as a key factor in their purchase decisions.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Feedback Management"
        subtitle="Build a Stellar eBay Reputation"
        description="Improve your eBay feedback score and seller reputation with our professional feedback management service. We implement strategic approaches to encourage positive feedback, address negative ratings, and build buyer trust in your store."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Reputation Excellence"
        title="Feedback Strategies That"
        highlightText="Drive Sales"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Feedback Management"
        description="Your eBay feedback score directly impacts buyer trust and sales. Our expert team helps you build and maintain an exceptional seller reputation that sets you apart from competitors."
        additionalText="From **encouraging positive ratings** to **resolving negative feedback** and **optimizing your service processes**, our comprehensive approach helps you achieve and maintain top seller status."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Reputation Solutions"
        title="Management Services"
        heighlightText="Feedback"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Feedback Management Impact"
        subtitle="Reputation Metrics That Matter"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 