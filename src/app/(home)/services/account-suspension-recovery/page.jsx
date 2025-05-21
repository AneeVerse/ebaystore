import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import EbayServicesFAQSection from '@/components/services/common/EbayServicesFAQSection'
import React from 'react'

// metadata
export const metadata = {
  title: "Account Suspension Recovery | eBay Services",
  description: "Expert assistance to recover your suspended eBay account and prevent future issues.",
  openGraph: {
    title: "Account Suspension Recovery | eBay Services",
    description: "Expert assistance to recover your suspended eBay account and prevent future issues.",
    url: `https://aneeverse.com/services/account-suspension-recovery`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Account Suspension Recovery | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Account Suspension Recovery | eBay Services",
    description: "Expert assistance to recover your suspended eBay account and prevent future issues.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Account Suspension Analysis",
      about: "Comprehensive review of your account suspension to identify the exact cause and develop a recovery plan.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Suspension Appeal Development",
      about: "Crafting professional, effective appeal letters that address eBay's concerns and demonstrate compliance.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Policy Violation Resolution",
      about: "Identifying and resolving the specific policy violations that led to your account suspension.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Account Reinstatement Support",
      about: "Step-by-step guidance through eBay's reinstatement process, including follow-up communications.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Business Practice Review",
      about: "Comprehensive audit of your business practices to identify and correct issues that may lead to suspension.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Suspension Prevention Plan",
      about: "Development of a customized plan to prevent future suspensions and maintain account health.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Seller Performance Improvement",
      about: "Strategies to improve your seller metrics and maintain a high-quality account after reinstatement.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Ongoing Compliance Support",
      about: "Continued assistance to ensure your eBay business remains compliant and avoids future suspensions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "89%",
      description: "Success rate in recovering suspended eBay accounts for our clients.",
    },
    {
      value: "72hrs",
      description: "Average time to prepare and submit a professional suspension appeal.",
    },
    {
      value: "95%",
      description: "Of recovered accounts remain in good standing after implementing our prevention plan.",
    },
    {
      value: "300+",
      description: "eBay accounts successfully recovered across various suspension types.",
    },
  ];

  // Custom FAQs specific to account suspension recovery
  const customFaqs = [
    {
      question: "What are the most common reasons for eBay account suspensions?",
      answer: "Common suspension reasons include policy violations, intellectual property infringement, selling prohibited items, poor seller performance metrics, and unusual account activity or security concerns.",
    },
    {
      question: "How long does the account recovery process typically take?",
      answer: "The timeline varies based on the suspension reason and eBay's processing time, but we typically submit appeals within 72 hours and see results within 1-2 weeks in most cases.",
    },
    {
      question: "Can you guarantee my account will be reinstated?",
      answer: "While we have an 89% success rate, we cannot guarantee reinstatement as the final decision rests with eBay. We can guarantee a professional, comprehensive approach to maximize your chances of recovery.",
    },
    {
      question: "What information do you need to begin the recovery process?",
      answer: "We need your suspension notice from eBay, account access details, selling history information, and details about any specific incidents that may have triggered the suspension.",
    },
    {
      question: "Do you work with international eBay sellers?",
      answer: "Yes, we work with eBay sellers from all global marketplaces with specialists familiar with the specific policies and requirements of different regions.",
    },
    {
      question: "What steps can I take to prevent future suspensions?",
      answer: "Our prevention plan includes implementing robust policy compliance measures, improving seller metrics, enhancing listing quality, and establishing regular account health monitoring.",
    },
    {
      question: "What happens if the first appeal is rejected?",
      answer: "We create a revised strategy and submit additional appeals with new information, often approaching from a different angle to address eBay's specific concerns.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Account Suspension Recovery"
        subtitle="Get Back to Selling on eBay"
        description="Facing an eBay account suspension? Our expert team specializes in analyzing suspension issues, developing effective appeals, and guiding you through the reinstatement process to get your business back online quickly."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Expert Suspension Assistance"
        title="Account Recovery"
        highlightText="Specialists"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Account Suspension Recovery"
        description="We help eBay sellers overcome account suspensions with strategic appeals and compliance solutions that address the root causes and get you back to selling quickly."
        additionalText="From **identifying suspension causes** to **crafting effective appeals** and **implementing prevention strategies**, our comprehensive service helps you recover your account and avoid future issues."
      />
      <DynamicCreativeSection
        subtitle="Comprehensive Recovery Solutions"
        title="Services"
        heighlightText="Reinstatement"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Recovery Success Metrics"
        subtitle="Proven Results for Sellers"
        stats={statsData}
      />
      <TestimonialSlider />
      <EbayServicesFAQSection customFaqs={customFaqs} />
    </div>
  )
}

export default page 