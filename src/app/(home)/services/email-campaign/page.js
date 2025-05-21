import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import EmailCampaignFAQSection from '@/components/services/email-campaign/EmailCampaignFAQSection'
import EmailCampaignStateSection from '@/components/services/email-campaign/EmailCampaignStateSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Email Campaign | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Email Campaign | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/email-campaign`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Email Campaign | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Email Campaign | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }



const page = () => {
  const items = [
    {
      name: "Email Campaign Strategy",
      about: "Developing tailored email strategies that align with your business goals, ensuring maximum engagement and conversions.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Automated Email Sequences",
      about: "Setting up automated email sequences to nurture leads, re-engage customers, and improve retention through personalized messaging.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Targeted Email Segmentation",
      about: "Segmenting your email lists to send targeted messages, ensuring your emails reach the right audience with the right content.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "A/B Testing for Emails",
      about: "Running A/B tests on subject lines, content, and design to maximize open rates and drive higher engagement.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Personalized Campaigns",
      about: "Creating personalized email campaigns that speak directly to your audience, increasing conversion rates and customer loyalty.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Email List Growth",
      about: "Helping you grow your email list with proven strategies, ensuring that your emails reach a larger, more relevant audience.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Analytics & Reporting",
      about: "Analyzing email campaign data to track performance and optimize future campaigns for better results.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Mobile-Optimized Emails",
      about: "Ensuring all email campaigns are mobile-optimized, providing a seamless experience for users on any device.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
           <CommonServicesHeroSection
            title="Email Campaign Services"
            subtitle="Data-Driven Email Campaigns"
            description="  Unlock the full potential of email marketing with expertly designed campaigns that drive results.
                We optimize every aspect of your email strategy, from the design to the delivery."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/email-design/hero-banner.avif"
           
          />
        <SlidingLogos />
        <DynamicSupportSection
        subtitle="Email Campaigns that Drive Results"
        title="Email Marketing That "
        highlightText=" engages &  converts"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Email Campaigns that Drive Results"
        description=" Unlock the power of targeted email marketing with our customized campaigns designed to drive conversions and build customer loyalty."
        additionalText="From **personalized email sequences** to **automated workflows** and **A/B testing**,  
            our expert team crafts strategies that deliver measurable results and foster lasting relationships with your audience."
      />
      
      <DynamicCreativeSection
        subtitle="Transform Your Email Campaigns"
        title="That Drive Engagement"
        heighlightText="Effective Email Campaigns "
        items={items}
      />
        <CommonServicesOurWorks />
        <EmailCampaignStateSection />
        <TestimonialSlider />
        <EmailCampaignFAQSection />
      
    </div>
  )
}

export default page
