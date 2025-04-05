import BlogHeroSection from '@/components/blog/BlogHeroSection'
import DesignBlogSection from '@/components/blog/DesignBlogSection'
import EbayBlogSection from '@/components/blog/EbayBlogSection'
import EcommerceBlogSection from '@/components/blog/EcommerceBlogSection'
import Newsletter from '@/components/blog/NewsLetter'
import SeoBlogSection from '@/components/blog/SeoBlogSection'
import UiuxBlogSection from '@/components/blog/UiuxBlogSection'
import LocalSeoBlogSection from '@/components/blog/LocalSeoBlogSection'
import ContentMarketingBlogSection from '@/components/blog/ContentMarketingBlogSection'
import WebDevelopmentBlogSection from '@/components/blog/WebDevelopmentBlogSection'
import WebDesignBlogSection from '@/components/blog/WebDesignBlogSection'
import Layout from '@/components/common/Layout'
import React from 'react'

export const metadata = {
  title: "Blog | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Blog | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/blog`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Blog | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return (
    <div className='bg-white pb-16'>
        <BlogHeroSection />
        <DesignBlogSection />
        <SeoBlogSection />
        <EcommerceBlogSection />
        <EbayBlogSection />
        <UiuxBlogSection />
        <LocalSeoBlogSection />
        <ContentMarketingBlogSection />
        <WebDevelopmentBlogSection />
        <WebDesignBlogSection />

        <Layout>
          <Newsletter />
        </Layout>
    </div>
  )
}

export default page
