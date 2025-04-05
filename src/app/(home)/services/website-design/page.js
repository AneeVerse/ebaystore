import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import WebsiteDesignFAQSection from '@/components/services/website-design/WebsiteDesignFAQSection'
import WebsiteDesignStateSections from '@/components/services/website-design/WebsiteDesignStateSections'
import React from 'react'

// metadata
export const metadata = {
  title: "Website Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Website Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/website-design`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Website Design | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {

  const items = [
    {
        name: "Website Strategy",
        about: "Our marketing consulting team can help you craft channel and campaign plans that drive traffic to your website.",
        image: "/images/services/website/website-strategy.avif",
        bgColor: "bg-secondary-500",
        textColor: "text-primary-500",
    },
    {
        name: "Website Design",
        about: "Superside creates conversion-focused websites and landing pages that are tailored to your campaign goals",
        image: "/images/services/website/website-design.avif",
        bgColor: "bg-[#c0e2ff]",
        textColor: "text-[#0a211f]",
    },
    {
        name: "Landing Page Design",
        about: "Our team of designers can create high-converting landing pages that are optimized for your campaign goals.",
        image: "/images/services/website/landing-page-design.avif",
        bgColor: "bg-[#f9f9f9]",
        textColor: "text-[#3d3d3d]",
    },
    {
        name: "Illustration Design",
        about: "Our team of illustrators can create custom illustrations that bring your brand to life.",
        image: "/images/services/website/website-illustrations.avif",
        bgColor: "bg-[#292423]",
        textColor: "text-[#ffafed]",
    },
    
    {
        name: "Webflow Development",
        about: "Our team of developers can build custom websites using Webflow that are tailored to your campaign goals.",
        image: "/images/services/website/webflow-development.avif",
        bgColor: "bg-[#d8ff85]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "UX UI Audit",
        about: "Our team of designers can audit your website and provide recommendations to improve user experience and user interface.",
        image: "/images/services/website/ux-ui-audit.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
    },
    {
        name: "Design Systems",
        about: "Our team of designers can create design systems that help maintain brand consistency across all marketing materials.",
        image: "/images/services/website/design-systems.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
    },
    {
        name: "Content Development",
        about: "Our team of copywriters can create compelling content that resonates with your target audience.",
        image: "/images/services/website/content-development.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
    }
  
    
];

  return (
    <div>
      <CommonServicesHeroSection
        title="Web Design"
        subtitle="Creative Services"
        description=" Get email designs, templates, and creative to capture your audience’s attention. Invigorate your communications and get access to a fully-stacked team of designers to start bringing your email campaigns to life."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Built for Creative, Performance & Marketing Teams"
        title="Get streamlined "
        highlightText=" web design that converts"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="Web design"
        description=" More than visually appealing web design, Superside delivers strategic,
            user-centric solutions that drive growth, improve engagement, and
            solidify your online presence."
        additionalText="From concept to launch, our veteran designers craft captivating,
            user-friendly online experiences. The result? Websites that align with
            your goals and help you crush them."
      />


      <DynamicCreativeSection
        subtitle="TAILORED CREATIVE SOLUTIONS"
        title=" web design services"
        heighlightText=" Full-stack"
        items={items}
      />


      <CommonServicesOurWorks />
      <WebsiteDesignStateSections />
      <TestimonialSlider />
      <WebsiteDesignFAQSection />
    </div>
  )
}

export default page
