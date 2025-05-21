import TestimonialSlider from '@/components/about/TestimonialSlider';
import SlidingLogos from '@/components/home/SlidingLogos';
import BlogWritingFAQSection from '@/components/services/blog-writing/BlogWritingFAQSection';
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection';
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks';
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection';
import DynamicStateSection from '@/components/services/common/DynamicStateSection';
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection';
import React from 'react';

// metadata
export const metadata = {
  title: "Product Listing Optimization | eBay Services",
  description: "Optimize your eBay product listings for better sales and visibility.",
  openGraph: {
    title: "Product Listing Optimization | eBay Services",
    description: "Optimize your eBay product listings for better sales and visibility.",
    url: `https://aneeverse.com/services/product-listing-optimization`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Product Listing Optimization | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Listing Optimization | eBay Services",
    description: "Optimize your eBay product listings for better sales and visibility.",
    image: "/images/meta/phone.avif",
  },
};

const page = () => {
  const items = [
    {
      name: "SEO-Optimized Listings",
      about: "Crafting product listings with strategic keywords to boost search rankings and visibility on eBay.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Compelling Product Descriptions",
      about: "Writing clear, persuasive descriptions that drive conversions and reduce returns.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "High-Quality Images",
      about: "Showcasing your products with professional, high-resolution images for maximum impact.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Category & Attribute Optimization",
      about: "Ensuring your products are listed in the right categories with all relevant attributes for better discoverability.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Mobile-Friendly Listings",
      about: "Optimizing listings for mobile shoppers to increase reach and sales.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "A/B Testing",
      about: "Testing different titles, images, and descriptions to maximize conversion rates.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Bulk Listing Management",
      about: "Efficiently manage and optimize large inventories with bulk editing tools.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Ongoing Performance Tracking",
      about: "Monitor and refine your listings based on analytics and sales data.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "95%",
      description: "Clients saw improved sales after optimizing their eBay listings.",
    },
    {
      value: "3x",
      description: "Increase in product visibility through SEO and category optimization.",
    },
    {
      value: "10,000+",
      description: "Listings optimized for eBay sellers across multiple categories.",
    },
    {
      value: "2x",
      description: "Higher conversion rates with compelling product descriptions and images.",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Product Listing Optimization"
        subtitle="Boost Your eBay Sales"
        description="Maximize your eBay sales with expertly optimized product listings. We enhance your titles, descriptions, images, and categories to ensure your products stand out and convert."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="High-Impact eBay Listings"
        title="Listing Optimization That"
        highlightText="Drives Sales"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Product Listing Optimization"
        description="Stand out in the eBay marketplace with listings that are optimized for both search and conversion. Our team ensures every detail is tailored to attract buyers and increase sales."
        additionalText="From **SEO-optimized titles** to **mobile-friendly layouts** and **ongoing performance tracking**, our service covers every aspect of eBay listing optimization."
      />
      <DynamicCreativeSection
        subtitle="What We Offer"
        title="Optimization Services"
        heighlightText="eBay Listings"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="eBay Listing Optimization Results"
        subtitle="Proven Performance Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      {/* You can create a FAQ section for eBay Listing Optimization if needed */}
      <BlogWritingFAQSection />
    </div>
  );
};

export default page; 