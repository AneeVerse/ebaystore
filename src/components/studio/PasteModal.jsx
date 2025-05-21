import React, { useState, useCallback } from 'react';
import { Dialog } from '@sanity/ui';
import { htmlToPortableText } from '../../lib/html-to-portable-text';

/**
 * Modal for pasting rich content into Sanity Studio
 * This allows users to paste formatted content from any source
 */
export function PasteModal({ onClose, onComplete }) {
  const [pasteContent, setPasteContent] = useState('');
  const [isPasting, setIsPasting] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  
  /**
   * Handle paste event from clipboard
   */
  const handlePaste = useCallback((e) => {
    // Prevent default to handle paste ourselves
    e.preventDefault();
    
    // Get clipboard data in different formats
    const clipboardData = e.clipboardData || window.clipboardData;
    
    // Try to get HTML content first (preserves most formatting)
    const htmlContent = clipboardData.getData('text/html');
    const plainText = clipboardData.getData('text/plain');
    
    // Set raw content for display
    setPasteContent(htmlContent || plainText);
    
    if (htmlContent) {
      try {
        // Convert HTML to Portable Text
        const blocks = htmlToPortableText(htmlContent);
        
        // Generate preview
        setPreviewData({
          source: 'html',
          blocks,
          tableCount: blocks.filter(block => block._type === 'table').length
        });
      } catch (error) {
        console.error('Error parsing HTML:', error);
        setPreviewData({
          source: 'error',
          error: error.message
        });
      }
    } else if (plainText) {
      // Check if it might be tabular data
      const lines = plainText.split('\n');
      const hasTabularStructure = lines.some(line => line.includes('\t'));
      
      if (hasTabularStructure) {
        try {
          // Parse as tabular data
          const rows = lines.map(line => 
            line.split('\t').map(cell => cell.trim())
          );
          
          // Check if columns are consistent
          const columnCount = rows[0].length;
          const isConsistent = rows.every(row => row.length === columnCount);
          
          setPreviewData({
            source: 'table',
            isConsistent,
            rows,
            columnCount
          });
        } catch (error) {
          console.error('Error parsing tabular data:', error);
          setPreviewData({
            source: 'text',
            text: plainText
          });
        }
      } else {
        // Handle as plain text
        setPreviewData({
          source: 'text',
          text: plainText
        });
      }
    }
  }, []);
  
  /**
   * Insert content into the document
   */
  const handleInsert = useCallback(() => {
    setIsPasting(true);
    
    try {
      // The actual insertion logic would depend on Sanity's API
      // This is a simplified example
      if (previewData?.source === 'html') {
        onComplete(previewData.blocks);
      } else if (previewData?.source === 'table' && previewData.isConsistent) {
        // Convert table data to Sanity table block
        const tableBlock = {
          _type: 'table',
          hasHeaderRow: true, // Default to true, can be toggled in UI
          rows: previewData.rows.map(row => ({
            _type: 'row',
            cells: row
          }))
        };
        
        onComplete([tableBlock]);
      } else if (previewData?.source === 'text') {
        // Convert plain text to block
        const textBlock = {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: previewData.text
            }
          ]
        };
        
        onComplete([textBlock]);
      }
      
      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error inserting content:', error);
      alert('Failed to insert content: ' + error.message);
    } finally {
      setIsPasting(false);
    }
  }, [previewData, onComplete, onClose]);
  
  return (
    <Dialog
      id="paste-modal"
      header="Paste Formatted Content"
      onClose={onClose}
      width={1}
      position="fixed"
      padding={4}
    >
      <div className="space-y-4">
        <div>
          <div className="text-base font-medium mb-2">Paste content from anywhere</div>
          <p className="text-sm text-gray-600 mb-4">
            Copy content from Excel, Word, Google Docs, websites, or any source, then paste (Ctrl+V) below.
            We'll preserve formatting, tables, and structure.
          </p>
          
          <div 
            className="w-full min-h-[200px] p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            contentEditable
            onPaste={handlePaste}
            style={{ whiteSpace: 'pre-wrap' }}
          >
            Click here and paste your content (Ctrl+V or ⌘+V)
          </div>
        </div>
        
        {previewData && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Preview</h3>
            
            {previewData.source === 'html' && (
              <div>
                <div className="p-3 bg-gray-50 rounded border mb-2">
                  <div className="text-sm font-medium">Detected Content:</div>
                  <ul className="list-disc ml-5 text-sm">
                    <li>{previewData.blocks.length} content blocks</li>
                    {previewData.tableCount > 0 && (
                      <li className="text-green-600">{previewData.tableCount} tables found</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
            
            {previewData.source === 'table' && (
              <div>
                <div className="p-3 bg-gray-50 rounded border mb-2">
                  <div className="text-sm font-medium">Detected Table:</div>
                  <ul className="list-disc ml-5 text-sm">
                    <li>{previewData.rows.length} rows</li>
                    <li>{previewData.columnCount} columns</li>
                    {!previewData.isConsistent && (
                      <li className="text-red-600">Warning: Inconsistent column count</li>
                    )}
                  </ul>
                </div>
                
                <div className="overflow-x-auto mt-2 border rounded">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      {previewData.rows.slice(0, 5).map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-50' : undefined}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-4 py-2 border-r text-sm">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {previewData.rows.length > 5 && (
                    <div className="text-center py-2 text-gray-500 text-sm">
                      ...and {previewData.rows.length - 5} more rows
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {previewData.source === 'text' && (
              <div className="p-4 bg-gray-50 rounded border text-sm">
                {previewData.text.length > 200 
                  ? previewData.text.substring(0, 200) + '...' 
                  : previewData.text}
              </div>
            )}
            
            {previewData.source === 'error' && (
              <div className="p-4 bg-red-50 rounded border text-sm text-red-600">
                Error parsing content: {previewData.error}
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-end pt-4 border-t">
          <button
            className="px-4 py-2 mr-2 border rounded hover:bg-gray-50"
            onClick={onClose}
            disabled={isPasting}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
            onClick={handleInsert}
            disabled={!previewData || isPasting}
          >
            {isPasting ? 'Inserting...' : 'Insert Content'}
          </button>
        </div>
      </div>
    </Dialog>
  );
} 