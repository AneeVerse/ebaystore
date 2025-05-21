import React, { useCallback } from 'react';
import { htmlToPortableText } from '../../lib/html-to-portable-text';

/**
 * Component that handles direct pasting of tables from Google Sheets and other sources
 */
export default function TableDirectPaste(props) {
  const { onChange, value } = props;
  
  // Handle paste event directly
  const handlePaste = useCallback((e) => {
    // Get clipboard data
    const clipboardData = e.clipboardData || window.clipboardData;
    
    // Get HTML content
    const htmlContent = clipboardData.getData('text/html');
    
    // If there's no HTML content, let default handling occur
    if (!htmlContent || htmlContent.trim() === '') {
      return;
    }
    
    // Try to detect if the HTML is a table from Google Sheets
    const hasGoogleSheetsTable = htmlContent.includes('google-sheets-html-origin') || 
                                 htmlContent.includes('table cellspacing="0" cellpadding="0"') ||
                                 htmlContent.includes('xlsx');
    
    const hasTable = htmlContent.includes('<table') && htmlContent.includes('<tr');
    
    // Only attempt to parse if we think it's a table
    if (hasGoogleSheetsTable || hasTable) {
      console.log('Detected potential table in pasted content');
      
      try {
        // Create a DOM parser and parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        // Find the table element
        const tableElement = doc.querySelector('table');
        
        if (tableElement) {
          console.log('Table element found in pasted content');
          
          // Stop default paste behavior
          e.preventDefault();
          
          // Parse the table into rows and cells
          const rows = [];
          const hasHeaderRow = tableElement.querySelector('thead') !== null;
          
          // Process all rows
          tableElement.querySelectorAll('tr').forEach((tr, rowIndex) => {
            const cells = [];
            
            // Process cells
            tr.querySelectorAll('th, td').forEach(cell => {
              cells.push(cell.textContent.trim());
            });
            
            if (cells.length > 0) {
              rows.push({
                _type: 'row',
                _key: `row_${Date.now()}_${rowIndex}`,
                cells
              });
            }
          });
          
          // Create the table structure
          const tableData = {
            _type: 'table',
            hasHeaderRow: hasHeaderRow || false,
            rows
          };
          
          // Update the value
          onChange(tableData);
          
          console.log('Table data created:', tableData);
          return;
        }
      } catch (error) {
        console.error('Error parsing pasted table:', error);
      }
    }
  }, [onChange]);
  
  return (
    <div className="table-paste-container">
      <h3 className="text-lg font-bold mb-3">Paste Table</h3>
      <p className="text-sm text-gray-500 mb-4">
        Copy a table from Google Sheets, Excel, or any other source and paste it directly below.
      </p>
      
      <div 
        className="border-2 border-dashed border-blue-200 p-4 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[150px]"
        contentEditable
        onPaste={handlePaste}
        suppressContentEditableWarning={true}
      >
        Click here and paste your table (Ctrl+V or ⌘+V)
      </div>
      
      {value && value.rows && value.rows.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Preview</h4>
          <div className="overflow-x-auto border rounded">
            <table className="min-w-full border-collapse">
              <tbody>
                {value.rows.map((row, rowIndex) => (
                  <tr 
                    key={row._key || rowIndex}
                    className={rowIndex === 0 && value.hasHeaderRow ? 'bg-gray-100 font-medium' : ''}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border px-3 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
} 