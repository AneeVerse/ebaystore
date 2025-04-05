import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import LocalSeoFAQSection from '@/components/services/local-seo/LocalSeoFAQSection'
import LocalSeoStateSection from '@/components/services/local-seo/LocalSeoStateSection'
import React from 'react'



// metadata
export const metadata = {
  title: "Local SEO | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Local SEO | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/local-seo`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Local SEO | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {

  const items = [
    {
      name: "Local SEO Audits",
      about: "Comprehensive audits to analyze local SEO factors, ensuring your website is optimized for local search rankings.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Google My Business Optimization",
      about: "Enhancing your GMB profile with accurate business information, photos, posts, and customer reviews for maximum visibility.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Local Citation Building",
      about: "Building consistent and high-quality local citations across directories to boost your business's local credibility and ranking.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "NAP Consistency",
      about: "Ensuring Name, Address, and Phone number consistency across your online listings to strengthen local SEO performance.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Localized Content Creation",
      about: "Crafting region-specific content that resonates with local audiences and enhances your visibility in local search results.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Mobile Optimization for Local Search",
      about: "Optimizing your website for mobile devices to ensure fast loading times and improved user experience for local searches.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Reputation Management",
      about: "Managing and responding to customer reviews to enhance your online reputation and improve local rankings.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Local Link Building",
      about: "Building high-quality local backlinks from trusted sources to increase domain authority and improve search engine rankings.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Local SEO Optimization Services"
        subtitle="Data-Driven Local SEO Strategies"
        description="Enhance your local search presence with our expert local SEO services. We optimize your business for local visibility and drive targeted traffic from your area."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Boost Your Local Visibility"
        title="Drive Local Results with "
        highlightText=" optimized strategies"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Web design process"
        description=" Stand out in local searches and attract the right customers with our tailored local SEO services.
          We ensure your business ranks where it matters most—right in your community."
        additionalText="From **GMB profile enhancements** to **local backlinks** and **geo-targeted content**,  
            we create strategies that position your business as a local leader in search results."
      />
      
      <DynamicCreativeSection
        subtitle="Boost Your Local Search Visibility"
        title=" Services"
        heighlightText=" Local SEO"
        items={items}
      />
      
      
      <CommonServicesOurWorks />
      <LocalSeoStateSection />
      <TestimonialSlider />
      <LocalSeoFAQSection />

    </div>
  )
}

export default page
