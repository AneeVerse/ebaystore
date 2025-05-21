import {EditIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title for this FAQ section',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optional brief description for this FAQ section',
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'FAQ Items',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              type: 'blockContent',
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Optional category for grouping FAQs',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}) 