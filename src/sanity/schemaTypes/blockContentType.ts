import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, PlayIcon, EditIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    // YouTube embed
    defineArrayMember({
      name: 'youtubeEmbed',
      title: 'YouTube Video',
      type: 'object',
      icon: PlayIcon,
      fields: [
        {
          name: 'url',
          title: 'YouTube URL',
          type: 'url',
          description: 'Paste a YouTube URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
        },
        {
          name: 'caption',
          title: 'Caption (optional)',
          type: 'string',
        },
        {
          name: 'customThumbnail',
          title: 'Custom Thumbnail',
          type: 'image',
          description: 'Upload a custom thumbnail instead of using the default YouTube thumbnail',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        }
      ],
      preview: {
        select: {
          url: 'url',
          customThumbnail: 'customThumbnail'
        },
        prepare({url, customThumbnail}) {
          const id = url
            ? url.split('v=')[1]?.split('&')[0] || url.split('youtu.be/')[1]?.split('?')[0] || ''
            : '';
          return {
            title: 'YouTube Video',
            subtitle: url || '',
            media: customThumbnail ? customThumbnail : PlayIcon
          };
        }
      }
    }),
    // Table Component
    defineArrayMember({
      name: 'table',
      title: 'Table',
      type: 'object',
      icon: EditIcon,
      fields: [
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              name: 'row',
              title: 'Row',
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{ type: 'text' }]
                }
              ],
              preview: {
                select: {
                  cells: 'cells'
                },
                prepare({ cells }) {
                  return {
                    title: cells ? cells.join(' | ') : 'Empty row'
                  }
                }
              }
            }
          ]
        },
        {
          name: 'hasHeaderRow',
          title: 'Has Header Row',
          type: 'boolean',
          initialValue: true
        }
      ],
      preview: {
        select: {
          rows: 'rows'
        },
        prepare({ rows }) {
          return {
            title: 'Table',
            subtitle: rows ? `${rows.length} row(s)` : 'Empty table'
          }
        }
      }
    }),
  ],
})
