# Aneeverse Blog System with Sanity.io

This project is a Next.js-based blog system that uses Sanity.io for content management. This approach is production-ready and works well with deployments on platforms like Vercel.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file based on `.env.example`:
   ```
   cp .env.example .env.local
   ```
4. Set up Sanity.io:
   - Create a free Sanity account (https://www.sanity.io/get-started)
   - Create a new project
   - Get your project ID and dataset name
   - Add these to your `.env.local` file
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Sanity.io Setup

### Creating a Sanity.io Account

1. Go to [Sanity.io](https://www.sanity.io/get-started)
2. Sign up for a free account
3. Create a new project
4. Note your project ID and dataset name
5. Set up an API token with read/write privileges

### Configuring Your Application

Update your `.env.local` file with your Sanity.io details:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

Replace `your-project-id` and `your-api-token` with your actual credentials.

## Sanity Studio

This project includes Sanity Studio for content management:

1. Access the Studio at `/studio` route
2. Log in with your Sanity credentials
3. Create and manage your content

## Deployment on Vercel

This application is designed to work seamlessly with Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy!

## Features

- Sanity.io integration for content management
- Built-in Sanity Studio for content editing
- Responsive design for all devices
- Categorized blog listings
- SEO optimized content delivery

### Main Image Auto-Sync

The blog includes an automatic main image sync feature that:
- Automatically adds the main image to the beginning of the blog post body content
- Eliminates the need to add the same image twice
- Updates the body content image if the main image changes

For more details, see [MAIN-IMAGE-SYNC.md](./MAIN-IMAGE-SYNC.md).
