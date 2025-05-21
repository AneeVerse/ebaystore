import { groq } from 'next-sanity'

// Query to get all customer stories
export const getCustomerStoriesQuery = groq`
  *[_type == "customerStory"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    customerLogo,
    readTime,
    publishedAt,
    shortDescription,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get a single customer story by slug
export const getCustomerStoryBySlugQuery = groq`
  *[_type == "customerStory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    customerLogo,
    readTime,
    publishedAt,
    shortDescription,
    body,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get all portfolio work items
export const getPortfolioWorksQuery = groq`
  *[_type == "portfolioWork"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    clientLogo,
    year,
    industry,
    shortDescription,
    services,
    featured,
    publishedAt,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get featured portfolio work items
export const getFeaturedPortfolioWorksQuery = groq`
  *[_type == "portfolioWork" && featured == true] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    clientLogo,
    year,
    industry,
    shortDescription,
    services,
    featured,
    publishedAt,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get a single portfolio work by slug
export const getPortfolioWorkBySlugQuery = groq`
  *[_type == "portfolioWork" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    clientLogo,
    year,
    industry,
    projectSummary,
    shortDescription,
    services,
    galleryImages,
    results,
    body,
    featured,
    publishedAt,
    categories[]->{
      title,
      slug
    }
  }
`