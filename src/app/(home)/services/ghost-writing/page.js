import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import GhostWritingFAQSection from '@/components/services/ghost-writing/GhostWritingFAQSection'
import GhostWritingStateSection from '@/components/services/ghost-writing/GhostWritingStateSection'
import React from 'react'




// metadata
export const metadata = {
  title: "Ghost Writing | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Ghost Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ghost-writing`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Ghost Writing | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {

  const items = [
    {
      name: "Book & Memoir Writing",
      about: "Transform your ideas into professionally written books and memoirs, ready for publishing.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Thought Leadership Articles",
      about: "Establish authority in your industry with well-researched and insightful thought leadership content.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Speech & Script Writing",
      about: "Engaging and persuasive speeches or video scripts crafted to capture your audience’s attention.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Website & Brand Copy",
      about: "Compelling brand messaging and website copy that resonates with your target audience.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Corporate Blog Writing",
      about: "Engaging blog content tailored to drive traffic and enhance your brand's credibility.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "E-Books & Whitepapers",
      about: "Detailed research-based e-books and whitepapers designed for content marketing success.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Social Media Storytelling",
      about: "Engaging and persuasive social media content that amplifies your brand’s voice.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Ghostwritten Articles",
      about: "High-quality articles written under your name, ensuring consistent brand authority.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <CommonServicesHeroSection
        title="Ghost writing Services"
        subtitle="Your Words, Our Expertise"
        description="  Transform your ideas into compelling narratives. Our ghostwriters craft books, articles, speeches, and more—seamlessly adapting to your unique voice and style."
        ctaText="Book a demo"
        ctaLink="/contact"
        backgroundImage="/images/services/ghost-writing/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Your Ideas, Our Words"
        title="Ghostwriting Services That "
        highlightText=" Inspire & Influence"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Ghostwriting Services"
        description=" Need content that speaks in your voice? Our expert ghostwriters craft compelling 
            books, blogs, speeches, and articles that capture your ideas while ensuring a 
            seamless, professional tone."
        additionalText="From **thought leadership articles** to **memoirs and business books**, we turn 
            your vision into well-structured, engaging, and market-ready content."
      />


      <DynamicCreativeSection
        subtitle="YOUR WORDS, OUR EXPERTISE"
        title=" Services"
        heighlightText="Ghost writing "
        items={items}
      />

      <CommonServicesOurWorks />
      <GhostWritingStateSection />
      <TestimonialSlider />
      <GhostWritingFAQSection />

    </div>
  )
}

export default page
