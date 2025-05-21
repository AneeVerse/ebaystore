import { definePlugin } from 'sanity';
import TableInput from '../components/studio/TableInput';
import RichTextPasteHandler from '../components/studio/RichTextPasteHandler';

// Define and export all custom Sanity components
export const customComponents = definePlugin({
  name: 'custom-components',
  components: {
    input: {
      // Custom table component
      table: TableInput,
      
      // Apply paste handler to all rich text fields
      // This handles the main content blocks
      block: RichTextPasteHandler,
      
      // Also handle arrays that might contain blocks
      array: {
        item: {
          // This specifically targets block content within arrays
          blockContent: RichTextPasteHandler
        }
      },
      
      // Apply to portable text fields
      portableText: RichTextPasteHandler
    },
    
    // Add to form builder to catch all text inputs
    form: {
      builder: {
        // Ensure blocks get the paste handler
        block: RichTextPasteHandler
      }
    }
  },
}); 