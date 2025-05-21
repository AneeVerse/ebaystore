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
  title: "eCommerce Website Design | eBay Services",
  description: "Custom eCommerce website design to complement your eBay store and expand your online presence.",
  openGraph: {
    title: "eCommerce Website Design | eBay Services",
    description: "Custom eCommerce website design to complement your eBay store and expand your online presence.",
    url: `https://aneeverse.com/services/ecommerce-website-design`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "eCommerce Website Design | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Website Design | eBay Services",
    description: "Custom eCommerce website design to complement your eBay store and expand your online presence.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Custom eCommerce Development",
      about: "Tailored eCommerce website design that complements and extends your eBay business.",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "eBay Integration",
      about: "Seamless integration between your eCommerce site and eBay store for unified inventory and orders.",
      image: "/images/services/website/website-design.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Responsive Store Design",
      about: "Mobile-optimized websites that deliver exceptional shopping experiences on all devices.",
      image: "/images/services/website/landing-page-design.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Conversion Optimization",
      about: "Strategic design elements that drive higher conversion rates and increase average order values.",
      image: "/images/services/website/website-illustrations.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Payment Processing Setup",
      about: "Implementation of secure, reliable payment gateways tailored to your business needs.",
      image: "/images/services/website/webflow-development.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Product Catalog Management",
      about: "Organized, user-friendly product catalog systems that enhance the shopping experience.",
      image: "/images/services/website/ux-ui-audit.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "SEO-Optimized Structure",
      about: "Search engine optimized website architecture to drive organic traffic to your online store.",
      image: "/images/services/website/design-systems.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Analytics Implementation",
      about: "Comprehensive analytics setup to track performance and identify growth opportunities.",
      image: "/images/services/website/content-development.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "115%",
      description: "Average increase in online revenue after launching a custom eCommerce website.",
    },
    {
      value: "62%",
      description: "More return customers compared to eBay-only selling strategies.",
    },
    {
      value: "3.2x",
      description: "Higher customer lifetime value through combined eBay and website selling.",
    },
    {
      value: "40%",
      description: "Average increase in profit margins through direct website sales.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="eCommerce Website Design"
        subtitle="Beyond eBay: Your Own Online Store"
        description="Expand your online presence beyond eBay with a custom-designed eCommerce website. Our expert team creates beautiful, functional online stores that integrate with your eBay business while establishing your independent brand presence."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Custom Online Store Development"
        title="eCommerce Websites"
        highlightText="That Convert"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="eCommerce Website Design"
        description="Complement your eBay business with a professionally designed eCommerce website that gives you complete control over your brand, customer experience, and margins."
        additionalText="From **responsive design** to **payment processing** and **eBay integration**, our comprehensive website development services create powerful selling platforms that work alongside your eBay store."
      />
      <DynamicCreativeSection
        subtitle="Complete eCommerce Solutions"
        title="Website Services"
        heighlightText="eCommerce"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="eCommerce Website Impact"
        subtitle="Growth Beyond eBay"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />
    </div>
  )
}

export default page 