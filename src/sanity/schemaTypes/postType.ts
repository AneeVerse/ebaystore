import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: '',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'timeToRead',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated time to read this article in minutes',
      validation: Rule => Rule.required().min(1).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief summary of the post that will appear on blog cards (150-200 characters recommended)',
      validation: Rule => Rule.max(200).warning('Short descriptions work best when kept under 200 characters'),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'includeFaq',
      title: 'Include FAQ Section',
      type: 'boolean',
      description: 'Toggle to include an FAQ section in this post',
      initialValue: false,
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'FAQ Section Title',
          type: 'string',
          description: 'Title for this post\'s FAQ section',
          initialValue: 'Frequently Asked Questions',
        }),
        defineField({
          name: 'questions',
          type: 'array',
          title: 'FAQ Items',
          description: 'Add question/answer pairs for this post',
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
      ],
      hidden: ({document}) => !document?.includeFaq,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
