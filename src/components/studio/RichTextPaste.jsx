import React, { useState } from 'react';

/**
 * Handles pasting rich content (tables, formatted text, etc.) into Sanity Studio
 */
export default function RichTextPaste() {
  const [pasteContent, setPasteContent] = useState('');
  const [parsedContent, setParsedContent] = useState(null);
  const [status, setStatus] = useState('');

  /**
   * Handle paste event from clipboard
   */
  const handlePaste = (e) => {
    // Prevent default to handle the paste ourselves
    e.preventDefault();
    
    // Get clipboard data in different formats
    const clipboardData = e.clipboardData || window.clipboardData;
    
    // Try to get HTML content first (preserves most formatting)
    let htmlContent = clipboardData.getData('text/html');
    
    // If no HTML content, try plain text
    if (!htmlContent || htmlContent.trim() === '') {
      const plainText = clipboardData.getData('text/plain');
      setPasteContent(plainText);
      
      // Check if it might be a table (has tab characters or multiple lines)
      if (plainText.includes('\t') || plainText.split('\n').length > 1) {
        try {
          const tableContent = parseTableFromPlainText(plainText);
          setParsedContent(tableContent);
          setStatus('Table content detected');
        } catch (error) {
          setParsedContent(null);
          setStatus('Parsed as plain text');
        }
      } else {
        setParsedContent(null);
        setStatus('Plain text content');
      }
    } else {
      setPasteContent(htmlContent);
      try {
        const parsedHtml = parseHtmlContent(htmlContent);
        setParsedContent(parsedHtml);
        setStatus('HTML content parsed successfully');
      } catch (error) {
        console.error('Error parsing HTML:', error);
        setParsedContent(null);
        setStatus('Error parsing HTML content');
      }
    }
  };

  /**
   * Parse plain text that might be a table
   */
  const parseTableFromPlainText = (text) => {
    const lines = text.trim().split('\n');
    const rows = lines.map(line => {
      // Split by tabs (common delimiter in spreadsheets)
      return line.split('\t').map(cell => cell.trim());
    });
    
    // Check if it seems like a valid table (consistent columns)
    const columnCount = rows[0].length;
    const isValidTable = rows.every(row => row.length === columnCount);
    
    if (!isValidTable) {
      throw new Error('Inconsistent column count in table data');
    }
    
    return {
      type: 'table',
      data: rows,
      hasHeader: true // Assume first row is header by default
    };
  };

  /**
   * Parse HTML content to identify tables and other formatted elements
   */
  const parseHtmlContent = (html) => {
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Check if there's a table in the HTML
    const tables = doc.querySelectorAll('table');
    if (tables.length > 0) {
      // Convert the first table to a data structure
      const firstTable = tables[0];
      const tableData = [];
      
      // Process rows
      const rows = firstTable.querySelectorAll('tr');
      rows.forEach(row => {
        const rowData = [];
        // Process cells (could be th or td)
        const cells = row.querySelectorAll('th, td');
        cells.forEach(cell => {
          rowData.push(cell.textContent.trim());
        });
        tableData.push(rowData);
      });
      
      return {
        type: 'table',
        data: tableData,
        hasHeader: rows[0]?.querySelectorAll('th').length > 0
      };
    }
    
    // If no table found, return the text content
    return {
      type: 'text',
      data: doc.body.textContent
    };
  };

  /**
   * Convert the parsed content to Sanity blocks
   */
  const convertToSanityBlocks = () => {
    if (!parsedContent) return;
    
    if (parsedContent.type === 'table') {
      // Create a Sanity table structure
      const tableRows = parsedContent.data.map(row => ({
        _type: 'row',
        cells: row
      }));
      
      const tableBlock = {
        _type: 'table',
        rows: tableRows,
        hasHeaderRow: parsedContent.hasHeader
      };
      
      // Return a serialized version for debugging
      return JSON.stringify(tableBlock, null, 2);
    }
    
    return 'Content will be converted to Sanity blocks';
  };

  return (
    <div className="p-4 border rounded bg-white">
      <h3 className="text-lg font-semibold mb-4">Paste Content</h3>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Paste content from any source (Excel, Word, websites, etc.) and we'll try to preserve the formatting.
        </p>
        
        <div 
          className="w-full min-h-[100px] p-3 border rounded focus:outline-none focus:ring-2"
          contentEditable
          onPaste={handlePaste}
          style={{ minHeight: '150px' }}
        >
          {/* This is where pasted content appears */}
          Click here and paste content (Ctrl+V or ⌘+V)
        </div>
        
        {status && (
          <div className="mt-2 text-sm">
            <span className="font-medium">Status:</span> {status}
          </div>
        )}
      </div>
      
      {parsedContent && (
        <div className="mt-6">
          <h4 className="text-base font-medium mb-2">Preview</h4>
          
          {parsedContent.type === 'table' && (
            <div className="overflow-x-auto border rounded">
              <table className="min-w-full border-collapse">
                <tbody>
                  {parsedContent.data.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                      className={rowIndex === 0 && parsedContent.hasHeader ? 'bg-gray-100 font-medium' : ''}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border px-3 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {parsedContent.type === 'text' && (
            <div className="p-3 border rounded bg-gray-50">
              {parsedContent.data}
            </div>
          )}
          
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                const result = convertToSanityBlocks();
                // Display the code that would be used (in a real implementation this would insert into the editor)
                console.log('Sanity blocks:', result);
                alert('Content converted! See console for details. In a production version, this would be inserted into your document.');
              }}
            >
              Insert Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 