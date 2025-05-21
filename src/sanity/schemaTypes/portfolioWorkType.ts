import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolioWorkType = defineType({
  name: 'portfolioWork',
  title: 'Portfolio Work',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/*',
      },
      description: 'Main showcase image of the project',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/*',
      },
      description: 'Thumbnail image for gallery view (will use main image if not provided)',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      description: 'Logo of the client for this project',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      validation: Rule => Rule.required().min(1).error('At least one category is required'),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year or date range of the project (e.g., "2023" or "2022-2023")',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'Industry of the client',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [
        defineField({
          name: 'service',
          type: 'string',
        })
      ],
      description: 'List of services provided for this project',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief summary of the project (150-200 characters recommended)',
      validation: Rule => Rule.max(200).warning('Short descriptions work best when kept under 200 characters'),
    }),
    defineField({
      name: 'projectSummary',
      title: 'Project Summary',
      type: 'text',
      description: 'Detailed summary of the project goals and outcomes',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            })
          ]
        }
      ],
      description: 'Additional images showcasing the project',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'metric',
              type: 'string',
              title: 'Metric',
              description: 'E.g., "Increase in CTR"',
            }),
            defineField({
              name: 'value',
              type: 'string',
              title: 'Value',
              description: 'E.g., "240%"',
            })
          ]
        }
      ],
      description: 'Key metrics and results from the project',
    }),
    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'blockContent',
      description: 'Full detailed description and case study of the work',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Work',
      type: 'boolean',
      description: 'Mark this as a featured work to show prominently on the site',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display in the portfolio (lower numbers appear first)',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'categories.0.title',
      year: 'year',
    },
    prepare(selection) {
      const {title, media, category, year} = selection
      return {
        title,
        subtitle: `${category ? category + ' | ' : ''}${year ? year : 'No date'}`,
        media,
      }
    },
  },
}) 