import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import SeoFAQSection from '@/components/services/seo-optimization/SeoFAQSection'
import SeoStateSection from '@/components/services/seo-optimization/SeoStateSection'
import React from 'react'




// metadata
export const metadata = {
  title: "Seo Optimization | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Seo Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/seo-optimization`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Seo Optimization | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seo Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}
const page = () => {
  const items = [
    {
      name: "SEO-Optimized Landing Pages",
      about: "Designing landing pages with keyword-rich content to boost search engine rankings and drive organic traffic.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Conversion Rate Optimization",
      about: "Crafting high-converting landing pages using data-driven insights, A/B testing, and UX enhancements.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Mobile-Responsive Design",
      about: "Ensuring that landing pages are fully responsive and provide seamless user experience across all devices.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "High-Quality Copywriting",
      about: "Creating compelling and persuasive content that aligns with your SEO strategy and engages visitors effectively.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Landing Page A/B Testing",
      about: "Using A/B testing to analyze different layouts, headlines, and CTA placements for better conversions.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "UX & SEO Performance Audits",
      about: "Conducting audits to identify areas of improvement in usability, SEO, and lead conversion strategy.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Interactive & Engaging Elements",
      about: "Enhancing landing pages with interactive elements, animations, and engaging visuals to increase dwell time.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Scalable Landing Page Systems",
      about: "Developing structured landing page design systems that maintain brand consistency and drive conversions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="SEO Optimization Services"
        subtitle="Data-Driven SEO Strategies"
        description=" Maximize your search engine visibility with our cutting-edge SEO techniques.
                From keyword research to technical audits, we ensure your website ranks higher
                and attracts quality traffic."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="SEO Strategies for Maximum Visibility"
        title="SEO That "
        highlightText=" ranks & converts"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="SEO Strategies for Maximum Visibility"
        description=" Drive organic traffic and improve search rankings with our expert SEO solutions.
          We optimize websites for better visibility, engagement, and long-term success."
        additionalText=" From **technical SEO audits** to **keyword research** and **content optimization**,  
            our tailored strategies ensure that your brand gets discovered and ranks higher in SERPs."
      />


      <DynamicCreativeSection
        subtitle="Boost Your Online Presence"
        title=" Services"
        heighlightText=" seo-optimized"
        items={items}
      />
      <CommonServicesOurWorks />
      <SeoStateSection />
      <TestimonialSlider />
      <SeoFAQSection />

    </div>
  )
}

export default page
