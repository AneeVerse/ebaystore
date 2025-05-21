import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import GoogleAdsFAQSection from '@/components/services/google-ads/GoogleAdsFAQSection'

import GoogleAdsStateSection from '@/components/services/google-ads/GoogleAdsStateSection'
import React from 'react'




// metadata
export const metadata = {
  title: "Google Ads | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Google Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/google-ads`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Google Ads | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}
const page = () => {

  const items = [
    {
      name: "Google Ads Campaign Management",
      about: "Managing and optimizing Google Ads campaigns to maximize ROI, ensuring ads are targeting the right audience at the right time.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "PPC Strategy Development",
      about: "Developing data-driven pay-per-click (PPC) strategies that align with your business goals and deliver measurable results.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Keyword Research & Targeting",
      about: "Conducting in-depth keyword research to identify the most effective keywords for your ads, ensuring maximum visibility and conversion.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Ad Copywriting & Optimization",
      about: "Crafting compelling ad copy and continually optimizing for higher click-through rates, improving overall campaign performance.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Landing Page Optimization",
      about: "Optimizing landing pages for higher conversion rates, ensuring that visitors are driven to take action after clicking on your ads.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Bid Management & Budgeting",
      about: "Managing ad bids and budgets to ensure that you’re getting the most value for your money, with a focus on maximizing ROI.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Google Shopping Ads",
      about: "Creating and managing Google Shopping Ads campaigns to boost product visibility and drive high-intent traffic to your e-commerce site.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Google Display Network Ads",
      about: "Running display ads across Google’s network to build brand awareness, retarget visitors, and increase conversions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Google Ads Services"
        subtitle="Maximize Your ROI with Google Ads"
        description=" Unlock the power of paid search with our expertly managed Google Ads campaigns. We focus on driving high-quality traffic and maximizing your ROI."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Maximize Your ROI with Google Ads"
        title="Google Ads That "
        highlightText=" drive results"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Google Ads"
        description=" Elevate your digital marketing efforts with our expert Google Ads
            services. From creating high-performing campaigns to optimizing them
            for maximum conversions, we help your business reach its full
            potential."
        additionalText="Our comprehensive **Google Ads strategies** are designed to meet
            your business objectives. We offer everything from **keyword
            research and bid management** to **ad copywriting and A/B testing**,
            ensuring that your ads not only appear in front of the right
            audience but also generate meaningful results. Our **Google Shopping
            Ads** and **Google Display Network Ads** further ensure that your
            business reaches a broader market."
      />



      <DynamicCreativeSection
        subtitle="Boost Your Digital Advertising"
        title=" Services That Deliver Results"
        heighlightText="Google ads "
        items={items}
      />

      <CommonServicesOurWorks />
      <GoogleAdsStateSection />
      <TestimonialSlider />
      <GoogleAdsFAQSection />

    </div>
  )
}

export default page
