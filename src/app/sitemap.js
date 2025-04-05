// app/sitemap.js
import { blogs } from "@/data/blogData";
import { customerStories } from "@/data/customerStoriesData";
import { projects } from "@/data/projects";

const BASE_URL = 'https://www.aneeverse.com';

export default function sitemap() {
    const servicesUrl = [
        {
          url: "/services/website-design",
        },
        {
          url: "/services/landing-pages",
        },
        {
          url: "/services/seo-optimization",
        },
        {
          url: "/services/gmb-optimization",
        },
        {
          url: "/services/local-seo",
        },
        {
          url: "/services/email-design",
        },
        {
             url: "/services/marketing-strategy",
        },
        {
          url: "/services/email-campaign",
        },
        {
          url: "/services/google-ads",
        },
        {
          url: "/services/meta-ads",
        },
        {
          url: "/services/influencer-marketing",
        },
        {
          url: "/services/blog-writing",
        },
        {
          url: "/services/ghost-writing",
        },
        {
          url: "/services/social-media-creatives",
        },
        {
          url: "/services/presentation-design",
        },
        {
              url: "/services/brochure-design",
        }
      ];
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/our-team`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/terms-of-use`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/works`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/customer-stories`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        {
            url: `${BASE_URL}/blog/category/ebay`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog/category/seo`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog/category/design`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog/category/e-commerce`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Dynamic routes (e.g., services)
        ...servicesUrl.map((post) => ({
            url: `${BASE_URL}/services${post.url}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        })),

        // Dynamic routes (e.g., our works)
        ...projects.map((post) => ({
            url: `${BASE_URL}/works/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        })),

        // Dynamic routes (e.g., blogs)
        ...blogs.map((post) => ({
            url: `${BASE_URL}/blog/${post.id}`,
            lastModified: new Date(),
            priority: 0.8,
        })),

        // Dynamic routes (e.g., customer-stories)
        ...customerStories.map((post) => ({
            url: `${BASE_URL}/customer-stories/${post.id}`,
            lastModified: new Date(),
            priority: 0.8,
        })),
    ];
}