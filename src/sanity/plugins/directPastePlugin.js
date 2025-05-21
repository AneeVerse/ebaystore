import { definePlugin } from 'sanity';
import { htmlToPortableText } from '../../lib/html-to-portable-text';

/**
 * A plugin that enhances Sanity Studio's paste functionality
 * This allows pasting rich text from Word, Google Docs, etc. while preserving formatting
 */
export const directPastePlugin = definePlugin({
  name: 'direct-paste-plugin',
  
  // Add a document options plugin that adds paste handling to block content
  document: {
    // Enhance the actions on documents
    actions: (prev) => {
      return prev;
    },
    
    // Add a paste handler to the entire document editor
    unstable_fieldActions: (prev, { documentId, documentType, schemaType }) => {
      // We only want to enhance fields with block content
      return schemaType.fields
        .filter(field => field.type === 'array' && field.of?.some(item => item.type === 'block'))
        .map(field => {
          return {
            field: field.name,
            icon: () => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2H4V4H12V2Z" fill="currentColor" />
                <path d="M2 5H14V7H2V5Z" fill="currentColor" />
                <path d="M14 8H2V10H14V8Z" fill="currentColor" />
                <path d="M2 11H14V13H2V11Z" fill="currentColor" />
              </svg>
            ),
            label: 'Paste Rich Text',
            onAction: ({ patches, fieldPath }) => {
              // Create a temporary textarea to capture paste
              const textarea = document.createElement('textarea');
              textarea.style.position = 'fixed';
              textarea.style.left = '-9999px';
              document.body.appendChild(textarea);
              
              textarea.focus();
              
              // Show a notification
              const notification = {
                status: 'info',
                title: 'Paste Formatted Content',
                description: 'Paste your content now (Ctrl+V or Cmd+V)',
                actions: [{
                  label: 'Cancel',
                  action: () => {
                    document.body.removeChild(textarea);
                  }
                }]
              };
              
              const notificationId = Math.random().toString(36).substr(2, 9);
              window.postMessage({
                type: 'sanity-showNotification',
                notificationId,
                notification
              }, '*');
              
              // Handle paste event
              const handlePaste = (event) => {
                // Get HTML content from clipboard
                const clipboardData = event.clipboardData || window.clipboardData;
                const htmlContent = clipboardData.getData('text/html');
                const plainText = clipboardData.getData('text/plain');
                
                // Clean up
                document.body.removeChild(textarea);
                textarea.removeEventListener('paste', handlePaste);
                
                // Hide notification
                window.postMessage({
                  type: 'sanity-hideNotification',
                  notificationId
                }, '*');
                
                if (htmlContent && htmlContent.trim()) {
                  try {
                    // Convert HTML to Portable Text
                    const blocks = htmlToPortableText(htmlContent);
                    
                    if (blocks && blocks.length > 0) {
                      // Set the blocks at the field path
                      patches.setIfMissing(fieldPath, []);
                      
                      // Get current blocks and append new ones
                      const currentBlocks = patches.getValueAtPath(fieldPath) || [];
                      patches.set([...fieldPath, { _type: 'insert', items: blocks, position: 'after', referenceItem: { _key: currentBlocks[currentBlocks.length - 1]?._key } }]);
                      
                      // Show success notification
                      window.postMessage({
                        type: 'sanity-showNotification',
                        notificationId: `${notificationId}-success`,
                        notification: {
                          status: 'success',
                          title: 'Content Pasted',
                          description: `Pasted ${blocks.length} content blocks`
                        }
                      }, '*');
                      
                      return;
                    }
                  } catch (error) {
                    console.error('Error parsing HTML:', error);
                  }
                }
                
                // Fallback to plain text
                if (plainText && plainText.trim()) {
                  // Create a simple text block
                  const block = {
                    _type: 'block',
                    style: 'normal',
                    children: [
                      {
                        _type: 'span',
                        text: plainText.trim()
                      }
                    ]
                  };
                  
                  // Set the block at the field path
                  patches.setIfMissing(fieldPath, []);
                  
                  // Get current blocks and append new ones
                  const currentBlocks = patches.getValueAtPath(fieldPath) || [];
                  patches.set([...fieldPath, { _type: 'insert', items: [block], position: 'after', referenceItem: { _key: currentBlocks[currentBlocks.length - 1]?._key } }]);
                  
                  // Show success notification
                  window.postMessage({
                    type: 'sanity-showNotification',
                    notificationId: `${notificationId}-success`,
                    notification: {
                      status: 'success',
                      title: 'Content Pasted',
                      description: 'Pasted as plain text'
                    }
                  }, '*');
                }
              };
              
              textarea.addEventListener('paste', handlePaste);
            }
          };
        });
    }
  },
  
  // Studio components
  studio: {
    components: {
      layout: {
        // Add a global paste event listener
        component: (props) => {
          // Render the original component
          return props.renderDefault(props);
        }
      }
    }
  }
}); 