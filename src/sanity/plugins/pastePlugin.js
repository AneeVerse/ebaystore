import { htmlToPortableText } from '../../lib/html-to-portable-text';
import React, { useCallback } from 'react';
import { PasteModal } from '../../components/studio/PasteModal';
import { definePlugin } from 'sanity';

/**
 * Sanity plugin for handling paste operations
 * This allows users to paste formatted content from any source
 */
export const pastePlugin = definePlugin({
  name: 'paste-plugin',
  
  studio: {
    components: {
      tool: {
        component: (props) => {
          return props.renderDefault(props);
        }
      }
    }
  },
  
  document: {
    actions: (prev, context) => {
      const pasteAction = {
        name: 'paste-content',
        label: 'Paste Formatted Content',
        icon: () => (
          <span role="img" aria-label="paste">
            📋
          </span>
        ),
        onHandle: (props) => {
          // Show the paste modal
          props.presentComponent({
            component: PasteModal,
            props: {
              onClose: () => props.onComplete(),
              onComplete: (blocks) => {
                // Insert the blocks into the document
                const patch = props.draft || props.published;
                if (patch) {
                  const contentPath = ['content'];
                  const existingContent = patch.content || [];
                  const newContent = [...existingContent, ...blocks];
                  
                  props.patch.set(contentPath, newContent);
                  
                  // Complete the action
                  props.onComplete();
                }
              }
            }
          });
        }
      };

      return [...prev, pasteAction];
    }
  },
  
  schema: {
    types: [
      {
        name: 'table',
        type: 'object',
        title: 'Table',
        preview: {
          select: {
            rows: 'rows'
          },
          prepare({ rows }) {
            return {
              title: 'Table',
              subtitle: rows ? `${rows.length} row(s)` : 'Empty table'
            };
          }
        },
        fields: [
          {
            name: 'rows',
            type: 'array',
            title: 'Rows',
            of: [
              {
                type: 'object',
                name: 'row',
                fields: [
                  {
                    name: 'cells',
                    type: 'array',
                    title: 'Cells',
                    of: [{ type: 'string' }]
                  }
                ]
              }
            ]
          },
          {
            name: 'hasHeaderRow',
            type: 'boolean',
            title: 'Has Header Row',
            initialValue: true
          }
        ]
      }
    ]
  }
}); 