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
  title: "Blog Writing | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "blog Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/blog-writing`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "blog Writing | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "blog Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  const items = [
    {
      name: "SEO-Optimized Blogs",
      about: "Crafting blog content with strategic keywords to boost organic traffic and search rankings.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Thought Leadership Articles",
      about: "Position your brand as an industry leader with insightful and authoritative blog content.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Engaging Storytelling",
      about: "Creating compelling blog narratives that captivate readers and enhance brand connection.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Long-Form Content",
      about: "In-depth, well-researched blog posts designed to provide value and keep audiences engaged.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Guest Blogging",
      about: "Expand your reach with high-quality guest blog content for authoritative websites.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Industry-Specific Blogs",
      about: "Specialized blog content tailored to your niche, ensuring relevance and expertise. Specialized blog content tailored to your niche, ensuring relevance and expertise.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Content Strategy & Planning",
      about: "Developing a structured content calendar for consistent, impactful blogging.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Editing & Proofreading",
      about: "Ensuring error-free, polished, and high-quality blog content that resonates.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];


  // stats data
  const statsData = [
    {
      value: "98%",
      description: "Clients saw a major boost in website traffic with our SEO-optimized blog content.",
    },
    {
      value: "4x",
      description: "Increase in audience engagement through consistent, high-quality blog posts.",
    },
    {
      value: "700+",
      description: "Blogs written across multiple industries, ensuring niche-specific expertise.",
    },
    {
      value: "3x",
      description: "Higher lead conversions for businesses leveraging content marketing strategies.",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Blog Writing Services"
        subtitle="Content That Engages & Converts"
        description="  Transform your brand’s online presence with compelling blog content. Our expert writers craft engaging, SEO-friendly articles that drive traffic, boost credibility, and enhance audience engagement."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />

      <SlidingLogos />
      <DynamicSupportSection
        subtitle="High-Quality Blog Content That Engages"
        title="Blog Writing That"
        highlightText="Informs &  converts"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Blog Writing"
        description=" Establish your brand’s authority with well-researched, engaging, and SEO-friendly blog content. 
            Our expert writers craft compelling articles that drive traffic and keep your audience engaged."
        additionalText="     From **SEO-optimized blogs** to **thought leadership articles** and **industry-specific insights**, 
            our content strategy ensures your blog attracts the right audience and builds brand credibility."
      />
      <DynamicCreativeSection
        subtitle="Content That Drives Engagement"
        title="Services"
        heighlightText="Blog Writing"
        items={items}
      />
      <CommonServicesOurWorks />

      <DynamicStateSection
        title="Performance Metrics for Blog Writing"
        subtitle="Content That Delivers Results"
        stats={statsData}
      />
      <TestimonialSlider />
      <BlogWritingFAQSection />

    </div>
  )
}


export default page
