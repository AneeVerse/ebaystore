# Sanity.io Blog Integration Guide

This guide explains how the Sanity.io integration works in this project and how to use it.

## Overview

This integration allows you to manage your blog content using Sanity.io's headless CMS while maintaining your existing UI design. The integration has been implemented in a way that preserves all of your current UI components and styling.

## How It Works

The integration follows these principles:

1. **Parallel API Routes**: We've created new API routes for Sanity content alongside your existing API routes, allowing for a smooth transition.
2. **Fallback Mechanism**: If Sanity fails or isn't configured, the system falls back to your existing data sources.
3. **Data Transformation**: Sanity content is transformed to match your existing data structure, ensuring UI components work without modifications.

## Files Added/Modified

- **`src/lib/sanity.js`**: Sanity client configuration 
- **`src/lib/sanity-utils.js`**: Utilities for handling Sanity's portable text
- **`src/app/api/sanity-blogs/route.js`**: API endpoint for fetching all blog posts
- **`src/app/api/sanity-blogs/[slug]/route.js`**: API endpoint for fetching a single blog post
- **`src/app/(home)/(dynamic)/blog/ClientBlogPage.js`**: Modified to try Sanity API first
- **`src/app/(home)/(dynamic)/blog/[slug]/page.js`**: Modified to try Sanity API first

## Setup Instructions

1. Create a Sanity.io account and project (free tier available)
2. Set up your schema using the Sanity CLI (install with `npm install -g @sanity/cli`)
3. Deploy your Sanity Studio (your content management interface)
4. Add the following environment variables to your `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

See detailed setup instructions in `sanity-setup.md`.

## Content Structure

Your Sanity schema should include:

- **Post**: The main blog post content type
- **Author**: Information about the post author
- **Category**: Blog post categories
- **Tag**: Blog post tags (optional)

The schema should match the expected fields outlined in `sanity-setup.md`.

## Migration Strategy

To migrate your existing content to Sanity:

1. Set up your Sanity project as described above
2. Create the necessary authors, categories, and tags in Sanity
3. Manually add your existing blog posts to Sanity, or use the Sanity Import tool
4. Test the integration by visiting your blog while monitoring the browser console
5. Once confirmed working, you can gradually phase out the old data sources

## Additional Resources

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [Next.js + Sanity Integration Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview) 