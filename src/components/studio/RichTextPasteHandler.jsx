import React, { useCallback } from 'react';
import { htmlToPortableText } from '../../lib/html-to-portable-text';

/**
 * Enhances Sanity's rich text editor with better paste handling
 * This component wraps the default editor and adds paste event handlers
 */
export default function RichTextPasteHandler(props) {
  const { renderDefault, onChange, value, path } = props;

  // Handle paste events and convert rich text to Portable Text
  const handlePaste = useCallback((event) => {
    // Get clipboard data
    const clipboardData = event.clipboardData || window.clipboardData;
    const htmlContent = clipboardData.getData('text/html');
    const plainText = clipboardData.getData('text/plain');
    
    console.log('Paste event detected in RichTextPasteHandler');
    
    if (htmlContent) {
      console.log('HTML content found in clipboard');
      
      // Check specifically for Google Sheets table patterns
      const isGoogleSheetsTable = 
        (htmlContent.includes('google-sheets-html-origin') || 
         htmlContent.includes('docs.google.com/spreadsheets') ||
         htmlContent.includes('data-sheets-') ||
         (htmlContent.includes('<table') && 
          (htmlContent.includes('border="1"') || 
           htmlContent.includes('cellspacing="0"') || 
           htmlContent.includes('cellpadding="0"'))));
      
      if (isGoogleSheetsTable || 
         (htmlContent.includes('<table') && plainText.includes('\t'))) {
        console.log('Google Sheets table detected!');
        event.preventDefault();
        
        try {
          // Parse the HTML to find the table
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlContent, 'text/html');
          const tableElement = doc.querySelector('table');
          
          if (tableElement) {
            console.log('Table element found, creating Sanity table...');
            
            // Create table rows and cells
            const tableRows = [];
            
            // Check if first row is likely a header
            const firstRow = tableElement.querySelector('tr:first-child');
            const hasHeaderCells = firstRow && 
                                  (firstRow.querySelector('th') || 
                                   firstRow.style.fontWeight === 'bold' ||
                                   firstRow.classList.contains('header'));
            
            // Process all rows
            const rows = tableElement.querySelectorAll('tr');
            rows.forEach((row, rowIndex) => {
              const cells = [];
              
              // Process cells (th or td)
              const cellElements = row.querySelectorAll('th, td');
              cellElements.forEach(cell => {
                cells.push(cell.textContent.trim());
              });
              
              if (cells.length > 0) {
                tableRows.push({
                  _key: `row_${Date.now()}_${rowIndex}`,
                  _type: 'row',
                  cells
                });
              }
            });
            
            if (tableRows.length > 0) {
              // Create Sanity table block
              const tableBlock = {
                _key: `table_${Date.now()}`,
                _type: 'table',
                hasHeaderRow: !!hasHeaderCells,
                rows: tableRows
              };
              
              console.log('Created Sanity table:', tableBlock);
              
              // Get current blocks and append the table
              const currentBlocks = value || [];
              const newBlocks = [...currentBlocks, tableBlock];
              
              // Update the editor with the new blocks
              onChange(patches => patches.set(path, newBlocks));
              
              return;
            }
          }
        } catch (error) {
          console.error('Error creating table from HTML:', error);
        }
      } else if (plainText && plainText.includes('\t') && plainText.includes('\n')) {
        // Handle tab-separated plain text as a table
        console.log('Tab-separated text detected, creating table...');
        event.preventDefault();
        
        try {
          const lines = plainText.trim().split('\n');
          const tableRows = lines.map((line, rowIndex) => ({
            _key: `row_${Date.now()}_${rowIndex}`,
            _type: 'row',
            cells: line.split('\t').map(cell => cell.trim())
          }));
          
          if (tableRows.length > 0) {
            const tableBlock = {
              _key: `table_${Date.now()}`,
              _type: 'table',
              hasHeaderRow: true, // Assume first row is header
              rows: tableRows
            };
            
            // Get current blocks and append the table
            const currentBlocks = value || [];
            const newBlocks = [...currentBlocks, tableBlock];
            
            // Update the editor with the new blocks
            onChange(patches => patches.set(path, newBlocks));
            
            console.log('Created table from plain text');
            return;
          }
        } catch (error) {
          console.error('Error creating table from plain text:', error);
        }
      }
      
      // If not a table or table creation failed, process as regular HTML
      console.log('Processing as regular HTML...');
      event.preventDefault();
      
      try {
        // Convert HTML to Portable Text blocks
        const blocks = htmlToPortableText(htmlContent);
        
        // Get the current value
        const currentValue = value || [];
        
        // Insert blocks at current position
        const newValue = [...currentValue, ...blocks];
        
        // Update the editor value
        onChange(patches => patches.set(path, newValue));
      } catch (error) {
        console.error('Error processing HTML paste:', error);
      }
    } else if (plainText) {
      // Process plain text
      console.log('Processing plain text...');
    }
  }, [onChange, path, value]);

  // Get the default editor component and enhance it with paste handling
  const PortableTextEditor = renderDefault(props);
  
  // Add the paste handler to the component
  return React.cloneElement(PortableTextEditor, {
    onPaste: handlePaste
  });
} 