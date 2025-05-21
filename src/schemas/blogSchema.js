// Schema for blog posts in Sanity.io
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'estimatedReadingTime',
      title: 'Estimated Reading Time (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
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
    },
    {
      name: 'excerpt',
      title: 'Excerpt/Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300)
    },
    {
      name: 'tldr',
      title: 'TL;DR Summary',
      type: 'text',
      description: 'A brief summary of the article (like Superside uses)',
      rows: 4
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark this as a featured article'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          name: 'youtubeEmbed',
          title: 'YouTube Embed',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              description: 'Paste a YouTube URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              title: 'Caption (optional)',
              type: 'string'
            }
          ],
          preview: {
            select: {
              url: 'url'
            },
            prepare({ url }) {
              const id = url
                ? url.split('v=')[1]?.split('&')[0] || url.split('youtu.be/')[1]?.split('?')[0] || ''
                : '';
              return {
                title: 'YouTube Video',
                subtitle: url || '',
                media: id 
                  ? { 
                      asset: {
                        _ref: 'image-https://img.youtube.com/vi/' + id + '/hqdefault.jpg'
                      }
                    }
                  : undefined
              };
            },
            component: ({ value }) => {
              const id = value?.url
                ? value.url.split('v=')[1]?.split('&')[0] || value.url.split('youtu.be/')[1]?.split('?')[0] || ''
                : '';
              if (!id) return <div>Invalid YouTube URL</div>;
              return (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }
          }
        },
        {
          name: 'table',
          title: 'Table',
          type: 'object',
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
                  ]
                }
              ]
            },
            {
              name: 'hasHeaderRow',
              title: 'First row is header',
              type: 'boolean',
              initialValue: true
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ],
          preview: {
            select: {
              rows: 'rows',
              caption: 'caption'
            },
            prepare({ rows = [], caption }) {
              const rowCount = rows.length;
              return {
                title: caption || 'Table',
                subtitle: `${rowCount} row${rowCount === 1 ? '' : 's'}`
              }
            }
          }
        },
        {
          name: 'callout',
          title: 'Callout Box',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'text'
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Info', value: 'info' },
                  { title: 'Tip', value: 'tip' },
                  { title: 'Warning', value: 'warning' }
                ]
              }
            }
          ],
          preview: {
            select: {
              content: 'content',
              type: 'type'
            },
            prepare({ content, type }) {
              return {
                title: `${type || 'Info'} Callout`,
                subtitle: content
              }
            }
          }
        },
        {
          name: 'tableOfContents',
          title: 'Table of Contents',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Table of Contents'
            }
          ]
        },
        {
          name: 'quote',
          title: 'Quote',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Quote Text',
              type: 'text',
              rows: 3
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string'
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
} 