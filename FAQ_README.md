# FAQ Implementation Guide

This document explains how to use the FAQ feature in the Sanity CMS implementation.

## Overview

The FAQ system consists of:
1. A Sanity Schema for creating FAQ entries
2. A dashboard widget for quick reference
3. A frontend component for displaying FAQs to users
4. Post-specific FAQs that can be added to individual blog posts

## Creating FAQ Content in Sanity Studio

### Global FAQs
1. Navigate to the Sanity Studio (/studio)
2. Click on "FAQs" in the sidebar
3. Click "Create new FAQ"
4. Fill in the following fields:
   - **Section Title**: The title of the FAQ section
   - **Slug**: Auto-generated from the title (can be customized)
   - **Description**: Optional brief introduction text
   - **Category**: Optional categorization of FAQs
   - **FAQ Items**: Add question/answer pairs
     - **Question**: The question text
     - **Answer**: Rich text field for the answer (supports formatting)

### Post-Specific FAQs
You can also add FAQs directly to individual blog posts:
1. Edit or create a blog post
2. Scroll below the main body content
3. Toggle "Include FAQ Section" to YES
4. Configure the FAQ section:
   - **FAQ Section Title**: The heading for the FAQ section (defaults to "Frequently Asked Questions")
   - **FAQ Items**: Add question/answer pairs specific to this post

## Using the FAQ Dashboard Widget

A convenient FAQ dashboard widget appears in the bottom-right corner of the Sanity Studio interface. This widget:
- Shows all global FAQ sections
- Allows expanding/collapsing individual questions
- Provides quick reference for content editors

## Adding FAQs to Your Frontend

### Global FAQs
1. Import the FAQ component:
```jsx
import FAQ from '@/components/dashboard/FAQ';
```

2. Use the component with data fetched from Sanity:
```jsx
// Example usage with data from Sanity
const FAQSection = ({ faqData }) => {
  return (
    <FAQ
      title={faqData.title}
      description={faqData.description}
      items={faqData.questions.map(item => ({
        question: item.question,
        answer: <PortableText value={item.answer} />
      }))}
    />
  );
};
```

3. Fetch data from Sanity using a query like:
```javascript
const faqQuery = `*[_type == "faq"] {
  title,
  description,
  questions[] {
    question,
    answer
  }
}`;
```

### Post-Specific FAQs
When displaying a blog post, you can check for and render its FAQ section:

```jsx
// In your post template
const PostTemplate = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      {/* Post content */}
      <PortableText value={post.body} />
      
      {/* Post-specific FAQ */}
      {post.includeFaq && post.faqSection && (
        <FAQ
          title={post.faqSection.title}
          items={post.faqSection.questions.map(item => ({
            question: item.question,
            answer: <PortableText value={item.answer} />
          }))}
        />
      )}
    </article>
  );
};
```

4. Make sure to include the FAQ fields in your post query:
```javascript
const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  body,
  // ... other fields
  includeFaq,
  faqSection {
    title,
    questions[] {
      question,
      answer
    }
  }
}`;
```

## Styling and Customization

The FAQ component uses Tailwind CSS for styling and Framer Motion for animations. You can customize the appearance by:

1. Modifying the component props
2. Editing the CSS classes in the component
3. Adding additional props for color schemes, sizes, etc.

## Technical Implementation

The FAQ system is implemented with these key files:
- `src/sanity/schemaTypes/faqType.ts`: The Sanity schema definition for global FAQs
- `src/sanity/schemaTypes/postType.ts`: Post schema with FAQ option
- `src/components/dashboard/FAQ.tsx`: The frontend component
- `src/sanity/components/FAQWidget.tsx`: The Sanity dashboard widget
- `src/sanity/plugins/faqDashboardPlugin.js`: The plugin that adds the widget to the Sanity Studio

These components work together to provide a complete FAQ management system. 