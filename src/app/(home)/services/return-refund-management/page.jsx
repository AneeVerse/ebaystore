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
  title: "Return & Refund Management | eBay Services",
  description: "Professional management of your eBay returns and refunds to maintain customer satisfaction and protect your business.",
  openGraph: {
    title: "Return & Refund Management | eBay Services",
    description: "Professional management of your eBay returns and refunds to maintain customer satisfaction and protect your business.",
    url: `https://aneeverse.com/services/return-refund-management`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Return & Refund Management | eBay Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return & Refund Management | eBay Services",
    description: "Professional management of your eBay returns and refunds to maintain customer satisfaction and protect your business.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Return Policy Development",
      about: "Creation of strategic, compliant return policies that protect your business while meeting buyer expectations.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Return Request Processing",
      about: "Professional handling of return requests to ensure timely resolution and customer satisfaction.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Return Reason Analysis",
      about: "Detailed analysis of return reasons to identify and address product or listing issues.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Refund Management",
      about: "Efficient processing of refunds with strategies to minimize financial impact on your business.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Return Shipping Coordination",
      about: "Management of return shipping logistics to streamline the process for you and your customers.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Customer Communication Management",
      about: "Professional, solution-oriented communication with customers throughout the return process.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Return Rate Reduction Strategies",
      about: "Implementation of proven strategies to reduce return rates and associated costs.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Returns Performance Reporting",
      about: "Regular analysis and reporting on return metrics with actionable insights for improvement.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];

  // stats data
  const statsData = [
    {
      value: "42%",
      description: "Average reduction in return rates after implementing our optimization strategies.",
    },
    {
      value: "92%",
      description: "Customer satisfaction rate with our managed return processes.",
    },
    {
      value: "37%",
      description: "Reduction in refund-related costs through strategic return management.",
    },
    {
      value: "98%",
      description: "Of return issues resolved without escalation to eBay case management.",
    },
  ];

  // Custom FAQs specific to returns and refund management
  const customFaqs = [
    {
      question: "What are the key components of an effective eBay return policy?",
      answer: "An effective eBay return policy clearly states timeframes, condition requirements, who pays return shipping, refund methods, and exclusions while maintaining compliance with eBay's minimum requirements.",
    },
    {
      question: "How can you help reduce my return rate on eBay?",
      answer: "We implement a comprehensive approach including improved product descriptions and images, better packaging, detailed measurement information, and analysis of past returns to address common causes.",
    },
    {
      question: "How do you handle difficult or unreasonable return requests?",
      answer: "We employ professional negotiation techniques, thorough documentation, and strategic use of eBay's seller protections to resolve difficult returns fairly while protecting your business interests.",
    },
    {
      question: "Can you manage partial refunds on eBay?",
      answer: "Yes, we strategically utilize partial refunds when appropriate, with clear communication to buyers about the rationale, helping to resolve issues without full returns when possible.",
    },
    {
      question: "What happens when a buyer files an eBay Money Back Guarantee case?",
      answer: "We manage the entire case process, gathering necessary evidence, communicating with the buyer, responding within required timeframes, and representing your interests to achieve a fair resolution.",
    },
    {
      question: "How do you track and analyze return patterns?",
      answer: "We use specialized tracking systems to identify patterns in return reasons, problem products, customer segments with high return rates, and operational factors that may contribute to returns.",
    },
    {
      question: "Can you help with international returns?",
      answer: "Yes, we manage international returns with specialized processes for cross-border shipping logistics, customs documentation, and region-specific return requirements to minimize complexity and cost.",
    },
  ];

  return (
    <div>
      <CommonServicesHeroSection
        title="Return & Refund Management"
        subtitle="Streamlined eBay Return Solutions"
        description="Take the stress out of eBay returns and refunds with our professional management service. Our team handles every aspect of the return process, from policy development to customer communication, ensuring fair outcomes while protecting your business interests."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Expert Return Process Management"
        title="Return Solutions That"
        highlightText="Protect Your Business"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Return & Refund Management"
        description="Returns are inevitable in e-commerce, but they don't have to damage your business. Our expert team transforms returns from a burden into an opportunity to demonstrate excellent customer service while minimizing losses."
        additionalText="From **policy development** to **return processing** and **customer communication**, our comprehensive return management services ensure smooth, fair resolution of every return situation."
      />
      <DynamicCreativeSection
        subtitle="Complete Return Management"
        title="Return Services"
        heighlightText="Professional"
        items={items}
      />
      <CommonServicesOurWorks />
      <DynamicStateSection
        title="Return Management Impact"
        subtitle="Process Improvement Metrics"
        stats={statsData}
      />
      <TestimonialSlider />
      <EbayServicesFAQSection customFaqs={customFaqs} />
    </div>
  )
}

export default page 