import React, { useState, useCallback, useEffect } from 'react';

/**
 * A component for creating and pasting tables into Sanity Studio
 * This is a custom input component meant to be used with the Sanity Studio
 */
export default function TableInput({ value, onChange }) {
  const [rows, setRows] = useState(value?.rows || []);
  const [hasHeaderRow, setHasHeaderRow] = useState(value?.hasHeaderRow || true);
  const [pasteText, setPasteText] = useState('');
  const [pasteStatus, setPasteStatus] = useState('');

  // Sync internal state with incoming value
  useEffect(() => {
    if (value?.rows) {
      setRows(value.rows);
    }
    if (value?.hasHeaderRow !== undefined) {
      setHasHeaderRow(value.hasHeaderRow);
    }
  }, [value]);

  // Function to handle pasting table data from Excel/Google Sheets/etc.
  const handleManualPaste = () => {
    if (!pasteText) return;

    try {
      // Split by lines first
      const lines = pasteText.trim().split('\n');
      const newRows = lines.map((line, index) => {
        // Split by tabs (common delimiter when copying from spreadsheets)
        const cells = line.split('\t').map(cell => cell.trim());
        return { 
          _type: 'row', 
          _key: `row_${Date.now()}_${index}`,
          cells 
        };
      });

      setRows(newRows);
      onChange({ _type: 'table', rows: newRows, hasHeaderRow });
      setPasteText('');
      setPasteStatus('Table content imported successfully!');
      
      // Clear status after 3 seconds
      setTimeout(() => setPasteStatus(''), 3000);
    } catch (error) {
      console.error('Error parsing pasted table:', error);
      setPasteStatus('Error: Could not parse the pasted content');
      
      // Clear status after 3 seconds
      setTimeout(() => setPasteStatus(''), 3000);
    }
  };
  
  // Handle direct paste from clipboard
  const handleDirectPaste = useCallback((e) => {
    // Prevent default paste behavior
    e.preventDefault();
    
    // Get clipboard data
    const clipboardData = e.clipboardData || window.clipboardData;
    const plainText = clipboardData.getData('text/plain');
    const htmlContent = clipboardData.getData('text/html');
    
    console.log('Paste detected', { plainText: plainText?.length, htmlContent: htmlContent?.length });
    
    if (htmlContent && htmlContent.includes('<table')) {
      try {
        console.log('HTML table detected, parsing...');
        // Parse HTML table
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const table = doc.querySelector('table');
        
        if (table) {
          console.log('Table element found, extracting data...');
          const newRows = [];
          const tableRows = table.querySelectorAll('tr');
          
          // Check if first row has th elements (likely a header)
          const firstRowHasHeaders = table.querySelector('tr:first-child th') !== null;
          
          tableRows.forEach((tr, rowIndex) => {
            const cells = [];
            const tableCells = tr.querySelectorAll('th, td');
            
            tableCells.forEach(cell => {
              cells.push(cell.textContent.trim());
            });
            
            if (cells.length > 0) {
              newRows.push({ 
                _type: 'row', 
                _key: `row_${Date.now()}_${rowIndex}`,
                cells 
              });
            }
          });
          
          if (newRows.length > 0) {
            setRows(newRows);
            onChange({ 
              _type: 'table', 
              rows: newRows, 
              hasHeaderRow: firstRowHasHeaders || hasHeaderRow 
            });
            setPasteStatus('Table imported successfully from HTML!');
            
            // Clear status after 3 seconds
            setTimeout(() => setPasteStatus(''), 3000);
            return;
          }
        }
      } catch (error) {
        console.error('Error parsing HTML table:', error);
      }
    }
    
    // If HTML parsing failed or no table found, try plain text
    if (plainText) {
      try {
        console.log('Processing plain text as table data...');
        
        // Check if it looks like a table (contains tabs or multiple lines)
        if (plainText.includes('\t') || plainText.includes('\n')) {
          // Process as tabular data
          const lines = plainText.trim().split('\n');
          
          // Check if all lines have roughly the same number of columns
          const columnCounts = lines.map(line => line.split('\t').length);
          const isConsistentColumns = Math.max(...columnCounts) - Math.min(...columnCounts) <= 1;
          
          if (isConsistentColumns) {
            const newRows = lines.map((line, index) => {
              const cells = line.split('\t').map(cell => cell.trim());
              return { 
                _type: 'row', 
                _key: `row_${Date.now()}_${index}`,
                cells 
              };
            });
            
            setRows(newRows);
            onChange({ _type: 'table', rows: newRows, hasHeaderRow });
            setPasteStatus('Table imported successfully from plain text!');
            
            // Clear status after 3 seconds
            setTimeout(() => setPasteStatus(''), 3000);
            return;
          }
        }
        
        // Set the text in the textarea for manual confirmation
        setPasteText(plainText);
        setPasteStatus('Content pasted! Click "Create Table" to import.');
      } catch (error) {
        console.error('Error handling paste:', error);
        setPasteStatus('Error processing pasted content');
        
        // Clear status after 3 seconds
        setTimeout(() => setPasteStatus(''), 3000);
      }
    }
  }, [onChange, hasHeaderRow]);

  // Function to add a new row
  const addRow = () => {
    const newRow = { 
      _type: 'row', 
      _key: `row_${Date.now()}`,
      cells: rows[0]?.cells?.map(() => '') || [''] 
    };
    const newRows = [...rows, newRow];
    setRows(newRows);
    onChange({ _type: 'table', rows: newRows, hasHeaderRow });
  };

  // Function to add a new column
  const addColumn = () => {
    const newRows = rows.map(row => ({
      ...row,
      cells: [...row.cells, '']
    }));
    setRows(newRows);
    onChange({ _type: 'table', rows: newRows, hasHeaderRow });
  };

  // Function to update a cell value
  const updateCell = (rowIndex, cellIndex, value) => {
    const newRows = [...rows];
    newRows[rowIndex].cells[cellIndex] = value;
    setRows(newRows);
    onChange({ _type: 'table', rows: newRows, hasHeaderRow });
  };

  // Function to toggle header row
  const toggleHeaderRow = () => {
    const newValue = !hasHeaderRow;
    setHasHeaderRow(newValue);
    onChange({ _type: 'table', rows, hasHeaderRow: newValue });
  };

  // Initialize with a basic table if empty
  if (rows.length === 0) {
    const initialRow = { 
      _type: 'row', 
      _key: `row_${Date.now()}_0`,
      cells: ['Header 1', 'Header 2', 'Header 3'] 
    };
    const initialSecondRow = { 
      _type: 'row', 
      _key: `row_${Date.now()}_1`,
      cells: ['Data 1', 'Data 2', 'Data 3'] 
    };
    setRows([initialRow, initialSecondRow]);
    onChange({ _type: 'table', rows: [initialRow, initialSecondRow], hasHeaderRow });
  }

  return (
    <div className="p-4 border rounded bg-white">
      <h3 className="text-lg font-semibold mb-4">Table Editor</h3>
      
      {/* Direct paste area */}
      <div className="mb-6 border-2 border-dashed border-blue-200 p-4 bg-blue-50 rounded">
        <h4 className="text-base font-medium mb-2">Paste Table Directly</h4>
        <p className="text-sm text-gray-600 mb-2">
          Copy a table from Excel, Google Sheets, or any webpage and paste it directly here.
        </p>
        <div 
          className="w-full p-4 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          contentEditable
          onPaste={handleDirectPaste}
          tabIndex={0}
        >
          Click here and paste your table (Ctrl+V or ⌘+V)
        </div>
        
        {pasteStatus && (
          <div className={`mt-2 text-sm ${pasteStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {pasteStatus}
          </div>
        )}
      </div>
      
      {/* Manual paste functionality */}
      <div className="mb-6">
        <h4 className="text-base font-medium mb-2">Or Paste from Excel/Google Sheets</h4>
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          value={pasteText}
          onChange={(e) => setPasteText(e.target.value)}
          placeholder="Paste table content here (tab-separated values from Excel or Google Sheets)"
        />
        <button
          type="button"
          onClick={handleManualPaste}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={!pasteText}
        >
          Create Table from Pasted Content
        </button>
      </div>
      
      {/* Header row toggle */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="header-row"
          checked={hasHeaderRow}
          onChange={toggleHeaderRow}
          className="mr-2"
        />
        <label htmlFor="header-row">First row is header</label>
      </div>
      
      {/* Table editor */}
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row._key || rowIndex} className={rowIndex === 0 && hasHeaderRow ? 'bg-gray-100' : ''}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border p-2">
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => updateCell(rowIndex, cellIndex, e.target.value)}
                      className="w-full p-1 border"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Controls */}
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={addRow}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Row
        </button>
        <button
          type="button"
          onClick={addColumn}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Column
        </button>
      </div>
    </div>
  );
} 