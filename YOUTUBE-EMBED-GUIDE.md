# YouTube Embedding in Blog Posts

This guide explains how to add YouTube videos to your blog posts using the direct embed approach (similar to what Superside uses).

## Adding YouTube Videos to Your Blog Posts

1. **Edit a blog post** in Sanity Studio
2. **Click the "+" icon** in the content editor to add a new block
3. **Select "YouTube Embed"** from the options
4. **Paste a YouTube URL** into the field (both standard and shortened URLs work):
   - Standard: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Shortened: `https://youtu.be/dQw4w9WgXcQ`
5. **Add a custom thumbnail** (optional):
   - Click "Browse" to upload a custom image instead of using the default YouTube thumbnail
   - Add alt text for the image for accessibility
6. **Add an optional caption** if desired
7. **Preview the video** directly in the editor

## How It Works

The YouTube embed works by:

1. Extracting the video ID from the YouTube URL
2. Using your custom thumbnail if provided, or creating a standard YouTube embed
3. Creating a responsive experience that maintains aspect ratio
4. Rendering the video with proper dimensions on all devices

### Benefits of this approach:

- **No API key required** - works out of the box
- **Live preview** in the editor
- **Responsive design** that works on all screen sizes
- **Custom thumbnails** allow for brand consistency
- **Simple implementation** that mimics what major sites like Superside use

## Custom Thumbnails vs. Default Embeds

### Using Custom Thumbnails
When you provide a custom thumbnail:
- A static image is shown with a play button overlay
- Clicking the image opens the YouTube video in a new tab
- The experience is less intrusive and more visually consistent with your brand
- Useful for maintaining visual consistency in the blog

### Using Default Embeds
Without a custom thumbnail:
- The standard YouTube player iframe is embedded directly in the page
- Video can be played inline without leaving the site
- Default YouTube UI and controls are presented

## Styling Options

The YouTube embeds use the following CSS classes that you can customize in your stylesheet:

- `.youtube-embed` - The container for the entire embed
- `.aspect-w-16.aspect-h-9` - The aspect ratio container

## Troubleshooting

**If videos don't appear correctly:**
- Check that the YouTube URL is valid and accessible
- Ensure your CSS properly handles responsive iframes
- Try both formats of YouTube URLs if one isn't working 
- If using custom thumbnails, make sure the image uploads correctly 