# Setting Up Sanity.io with Your Blog

This guide will walk you through setting up Sanity.io as a headless CMS for your blog.

## Step 1: Create a Sanity.io Account

1. Go to [sanity.io](https://www.sanity.io/) and sign up for a free account
2. Once logged in, create a new project by clicking "Create project"
3. Give your project a name (e.g., "Aneeverse Blog")
4. Choose the "Blog" starter template when prompted
5. This will set up a basic blog schema for you

## Step 2: Get Your Project Credentials

1. In your Sanity dashboard, click on your new project
2. Navigate to "API" in the left sidebar
3. Copy your Project ID from the page (it will look like `abcd1234`)
4. Under "CORS origins", add your website domain (during development, add `http://localhost:3000`)
5. Generate an API token with read permissions by clicking "Add API token" 
6. Copy the API token (you'll need it for your .env file)

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
# Sanity.io credentials
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

Replace `your-project-id` and `your-api-token` with the values you copied earlier.

## Step 4: Customize Your Schema (Optional)

If you want to customize your content structure:

1. Install the Sanity CLI: `npm install -g @sanity/cli`
2. Navigate to your Sanity studio folder (created when you set up your project)
3. Start the studio locally: `sanity start`
4. Open http://localhost:3333 to access your local Sanity studio
5. Modify the schema files in the `schemas` directory to match your blog structure

Our integration expects a schema with the following fields:
- `post` type with fields:
  - `title` (string)
  - `slug` (slug)
  - `excerpt` (text)
  - `body` (block content)
  - `mainImage` (image)
  - `publishedAt` (date)
  - `estimatedReadingTime` (number)
  - `categories` (array of references to category)
  - `featured` (boolean)
  - `tags` (array of references to tag)
  - `author` (reference to author)

- `author` type with fields:
  - `name` (string)
  - `role` (string)
  - `image` (image)

- `category` type with fields:
  - `title` (string)

- `tag` type with fields:
  - `title` (string)

## Step 5: Create Content in Sanity

1. Go to your Sanity studio (either locally via `sanity start` or on the web at `https://your-project-name.sanity.studio`)
2. Create a few authors, categories, and tags first
3. Then create blog posts, making sure to fill out all required fields
4. Publish your content when ready

## Step 6: Test the Integration

1. Start your Next.js application with `npm run dev`
2. Visit the blog pages and verify that content is being pulled from Sanity
3. If content doesn't appear, check the browser's developer console for any errors

## Troubleshooting

- **No content showing**: Verify your environment variables are correctly set and that your Sanity project has published content
- **Images not loading**: Make sure your Sanity project allows your website domain in CORS settings
- **API errors**: Check that your API token has the correct permissions

## Additional Features

The current integration supports:
- Fetching all blog posts
- Filtering by category
- Featured posts
- Individual post pages by slug
- Pagination

To add more features, you can extend the API routes in:
- `src/app/api/sanity-blogs/route.js`
- `src/app/api/sanity-blogs/[slug]/route.js` 