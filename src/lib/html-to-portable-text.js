/**
 * Library for converting HTML to Sanity Portable Text format
 * This allows copy-pasting content from anywhere while preserving formatting
 */

/**
 * Convert HTML string to Sanity Portable Text format
 * @param {string} html - The HTML string to convert
 * @returns {Array} - Array of Portable Text blocks
 */
export function htmlToPortableText(html) {
  if (!html) return [];
  
  console.log('Converting HTML to Portable Text...');
  
  // Check specifically for Google Sheets tables
  const isGoogleSheetsTable = 
    html.includes('google-sheets-html-origin') || 
    html.includes('docs.google.com/spreadsheets') ||
    html.includes('data-sheets-') ||
    (html.includes('<table') && 
     (html.includes('border="1"') || 
      html.includes('cellspacing="0"') || 
      html.includes('cellpadding="0"')));
  
  if (isGoogleSheetsTable) {
    console.log('Google Sheets table detected in htmlToPortableText');
    
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Find the table
    const tableElement = doc.querySelector('table');
    if (tableElement) {
      // Process the table into a Sanity table
      return [createTableBlock(tableElement)];
    }
  }
  
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Process the main content
  return processNode(doc.body);
}

/**
 * Create a Sanity table block from an HTML table element
 * @param {Element} tableElement - The HTML table element
 * @returns {Object} - A Sanity table block
 */
function createTableBlock(tableElement) {
  // Create table rows and cells
  const rows = [];
  
  // Check if first row is likely a header
  const firstRow = tableElement.querySelector('tr:first-child');
  const hasHeader = firstRow && 
                   (firstRow.querySelector('th') || 
                    firstRow.style.fontWeight === 'bold' ||
                    firstRow.classList.contains('header'));
  
  // Process all rows
  tableElement.querySelectorAll('tr').forEach((row, rowIndex) => {
    const cells = [];
    
    // Process cells (th or td)
    row.querySelectorAll('th, td').forEach(cell => {
      cells.push(cell.textContent.trim());
    });
    
    if (cells.length > 0) {
      rows.push({
        _key: `row_${Date.now()}_${rowIndex}`,
        _type: 'row',
        cells
      });
    }
  });
  
  // Create and return the table block
  return {
    _key: `table_${Date.now()}`,
    _type: 'table',
    hasHeaderRow: !!hasHeader,
    rows
  };
}

/**
 * Process a DOM node and its children into Portable Text
 * @param {Node} node - The DOM node to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processNode(node) {
  if (!node) return [];
  
  const blocks = [];
  let currentBlock = null;
  
  // Check specifically for table elements first
  const tables = node.querySelectorAll('table');
  if (tables.length > 0) {
    // Process each table into a separate block
    tables.forEach(table => {
      blocks.push(createTableBlock(table));
    });
    
    // Only process non-table content if there's more to process
    if (tables.length === 1 && tables[0] === node) {
      // The node itself is a table, so we're done
      return blocks;
    }
  }
  
  // Process all child nodes
  Array.from(node.childNodes).forEach(child => {
    // Handle different node types
    switch (child.nodeType) {
      case Node.ELEMENT_NODE:
        // Skip tables - we've already processed them
        if (child.tagName.toLowerCase() === 'table') {
          return;
        }
        
        // Process block elements
        const childBlocks = processElement(child);
        if (childBlocks.length > 0) {
          blocks.push(...childBlocks);
        }
        break;
      case Node.TEXT_NODE:
        // Only add text nodes with actual content
        if (child.textContent.trim()) {
          // Create a default block if none exists
          if (!currentBlock) {
            currentBlock = createTextBlock(child.textContent.trim());
            blocks.push(currentBlock);
          } else {
            // Add to the current block
            currentBlock.children.push({
              _type: 'span',
              text: child.textContent.trim()
            });
          }
        }
        break;
    }
  });
  
  return blocks;
}

/**
 * Process an element node into Portable Text
 * @param {Element} element - The element to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processElement(element) {
  const blocks = [];
  const tagName = element.tagName.toLowerCase();
  
  // Handle block elements
  switch (tagName) {
    case 'div':
    case 'section':
    case 'article':
    case 'main':
    case 'header':
    case 'footer':
      // For container elements, process all children
      blocks.push(...processNode(element));
      break;
    case 'p':
      blocks.push(processParagraph(element));
      break;
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      blocks.push(processHeading(element));
      break;
    case 'ul':
    case 'ol':
      blocks.push(...processList(element));
      break;
    case 'li':
      // Skip list items - they are handled by processList
      break;
    case 'blockquote':
      blocks.push(processBlockquote(element));
      break;
    case 'table':
      blocks.push(processTable(element));
      break;
    case 'pre':
      blocks.push(processPreformatted(element));
      break;
    case 'hr':
      blocks.push(processHorizontalRule());
      break;
    case 'figure':
      blocks.push(...processFigure(element));
      break;
    default:
      // Check if it's an inline element
      if (isInlineElement(tagName)) {
        // Create a text block with the inline content
        blocks.push({
          _type: 'block',
          style: 'normal',
          children: processInlineContent(element)
        });
      } else if (element.textContent.trim()) {
        // For unknown elements, just get their text content
        blocks.push(createTextBlock(element.textContent.trim()));
      }
      break;
  }
  
  return blocks;
}

/**
 * Check if an element is an inline element
 * @param {string} tagName - The tag name to check
 * @returns {boolean} - True if it's an inline element
 */
function isInlineElement(tagName) {
  const inlineElements = [
    'a', 'abbr', 'acronym', 'b', 'bdo', 'big', 'br', 'button', 'cite', 'code',
    'dfn', 'em', 'i', 'img', 'input', 'kbd', 'label', 'map', 'object', 'q',
    'samp', 'script', 'select', 'small', 'span', 'strong', 'sub', 'sup',
    'textarea', 'time', 'tt', 'var'
  ];
  
  return inlineElements.includes(tagName);
}

/**
 * Process a table element into a Portable Text table block
 * @param {Element} tableElement - The table element to process
 * @returns {Object} - A Portable Text table block
 */
function processTable(tableElement) {
  const rows = [];
  let hasHeaderRow = false;
  
  // Check for header row in thead
  const thead = tableElement.querySelector('thead');
  if (thead) {
    hasHeaderRow = true;
  }
  
  // Process all rows (both in thead and tbody)
  const allRows = tableElement.querySelectorAll('tr');
  allRows.forEach((rowElement, rowIndex) => {
    const cells = [];
    
    // If first row and not already determined to have header
    if (rowIndex === 0 && !hasHeaderRow) {
      // Check if first row has th elements
      hasHeaderRow = rowElement.querySelectorAll('th').length > 0;
    }
    
    // Process cells
    rowElement.querySelectorAll('th, td').forEach(cellElement => {
      // Process rich content inside the cell
      const cellContent = cellElement.textContent.trim();
      cells.push(cellContent);
    });
    
    if (cells.length > 0) {
      rows.push({
        _type: 'row',
        cells
      });
    }
  });
  
  return {
    _type: 'table',
    hasHeaderRow,
    rows
  };
}

/**
 * Process a paragraph element into a Portable Text block
 * @param {Element} element - The paragraph element to process
 * @returns {Object} - A Portable Text block
 */
function processParagraph(element) {
  // Check for alignment
  let alignment = 'left'; // default
  
  if (element.style?.textAlign) {
    alignment = element.style.textAlign;
  } else if (element.hasAttribute('align')) {
    alignment = element.getAttribute('align');
  } else if (element.classList.contains('text-center')) {
    alignment = 'center';
  } else if (element.classList.contains('text-right')) {
    alignment = 'right';
  } else if (element.classList.contains('text-justify')) {
    alignment = 'justify';
  }
  
  return {
    _type: 'block',
    style: 'normal',
    children: processInlineContent(element),
    markDefs: [],
    // Add alignment as a custom property if not left (default)
    ...(alignment !== 'left' && { alignment })
  };
}

/**
 * Process a heading element into a Portable Text block
 * @param {Element} element - The heading element to process
 * @returns {Object} - A Portable Text block
 */
function processHeading(element) {
  const tagName = element.tagName.toLowerCase();
  
  return {
    _type: 'block',
    style: tagName, // h1, h2, etc.
    children: processInlineContent(element),
    markDefs: []
  };
}

/**
 * Process a list element into Portable Text blocks
 * @param {Element} element - The list element to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processList(element) {
  const blocks = [];
  const listType = element.tagName.toLowerCase() === 'ol' ? 'number' : 'bullet';
  
  // Process list items
  element.querySelectorAll('li').forEach((item, index) => {
    blocks.push({
      _type: 'block',
      style: 'normal',
      listItem: listType,
      level: 1, // Default level, would need to be calculated for nested lists
      children: processInlineContent(item)
    });
  });
  
  return blocks;
}

/**
 * Process a blockquote element into a Portable Text block
 * @param {Element} element - The blockquote element to process
 * @returns {Object} - A Portable Text block
 */
function processBlockquote(element) {
  return {
    _type: 'block',
    style: 'blockquote',
    children: processInlineContent(element),
    markDefs: []
  };
}

/**
 * Process a preformatted code block
 * @param {Element} element - The pre element to process
 * @returns {Object} - A Portable Text block
 */
function processPreformatted(element) {
  // Check if it contains a code element
  const codeElement = element.querySelector('code');
  const content = codeElement ? codeElement.textContent : element.textContent;
  
  return {
    _type: 'block',
    style: 'normal',
    children: [{
      _type: 'span',
      text: content,
      marks: ['code']
    }],
    markDefs: []
  };
}

/**
 * Create a horizontal rule block
 * @returns {Object} - A Portable Text block for horizontal rule
 */
function processHorizontalRule() {
  // Sanity doesn't have a built-in hr type, so we use a custom type
  return {
    _type: 'horizontalRule'
  };
}

/**
 * Process a figure element (images, videos, etc.)
 * @param {Element} element - The figure element to process
 * @returns {Array} - Array of Portable Text blocks
 */
function processFigure(element) {
  const blocks = [];
  
  // Check for image
  const img = element.querySelector('img');
  if (img) {
    // In a real implementation, you would probably want to fetch and upload the image
    // For now, we'll just create a text block with the image description
    const alt = img.getAttribute('alt') || 'Image';
    blocks.push(createTextBlock(`[Image: ${alt}]`));
  }
  
  // Check for figcaption
  const caption = element.querySelector('figcaption');
  if (caption) {
    blocks.push({
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: caption.textContent,
        marks: ['strong']
      }],
      markDefs: []
    });
  }
  
  // If no specific content found, process as normal
  if (blocks.length === 0 && element.textContent.trim()) {
    blocks.push(createTextBlock(element.textContent.trim()));
  }
  
  return blocks;
}

/**
 * Process inline content into Portable Text spans
 * @param {Element} element - The element containing inline content
 * @returns {Array} - Array of Portable Text spans
 */
function processInlineContent(element) {
  const spans = [];
  let markDefs = [];
  
  // Process all inline nodes
  processInlineNodes(element, spans, [], markDefs);
  
  // If no spans, add a default span with the text content
  if (spans.length === 0 && element.textContent.trim()) {
    spans.push({
      _type: 'span',
      text: element.textContent.trim()
    });
  }
  
  return spans;
}

/**
 * Process inline nodes recursively
 * @param {Node} node - The node to process
 * @param {Array} spans - Array of spans to add to
 * @param {Array} marks - Current active marks
 * @param {Array} markDefs - Array of mark definitions
 */
function processInlineNodes(node, spans, marks = [], markDefs = []) {
  if (!node) return;
  
  // Process different node types
  switch (node.nodeType) {
    case Node.TEXT_NODE:
      // Add text node with current marks if it has content
      if (node.textContent.trim()) {
        spans.push({
          _type: 'span',
          text: node.textContent,
          marks: [...marks]
        });
      }
      break;
    case Node.ELEMENT_NODE:
      // Process element node
      const element = node;
      const tagName = element.tagName.toLowerCase();
      
      // Get marks for this element
      const elementMarks = getMarksForElement(element, marks, markDefs);
      
      // Special handling for links
      if (tagName === 'a') {
        const href = element.getAttribute('href');
        if (href) {
          // Create a mark definition for the link
          const linkMarkId = `link-${markDefs.length}`;
          markDefs.push({
            _key: linkMarkId,
            _type: 'link',
            href
          });
          
          // Add the link mark to the current marks
          elementMarks.push(linkMarkId);
        }
      }
      
      // If element has no children, add its text content with current marks
      if (element.childNodes.length === 0 && element.textContent.trim()) {
        spans.push({
          _type: 'span',
          text: element.textContent,
          marks: elementMarks
        });
      } else {
        // Process all children with updated marks
        Array.from(element.childNodes).forEach(child => {
          processInlineNodes(child, spans, elementMarks, markDefs);
        });
      }
      break;
  }
}

/**
 * Get marks for an element based on its tag and attributes
 * @param {Element} element - The element to get marks for
 * @param {Array} currentMarks - Current active marks
 * @param {Array} markDefs - Array of mark definitions
 * @returns {Array} - Updated marks array
 */
function getMarksForElement(element, currentMarks = [], markDefs = []) {
  const newMarks = [...currentMarks];
  const tagName = element.tagName.toLowerCase();
  
  // Add marks based on tag name
  switch (tagName) {
    case 'strong':
    case 'b':
      newMarks.push('strong');
      break;
    case 'em':
    case 'i':
      newMarks.push('em');
      break;
    case 'u':
      newMarks.push('underline');
      break;
    case 's':
    case 'strike':
    case 'del':
      newMarks.push('strike-through');
      break;
    case 'code':
      newMarks.push('code');
      break;
    // Links are handled separately
  }
  
  // Check for style attribute
  if (element.style) {
    if (element.style.fontWeight === 'bold' || parseInt(element.style.fontWeight, 10) >= 600) {
      if (!newMarks.includes('strong')) {
        newMarks.push('strong');
      }
    }
    if (element.style.fontStyle === 'italic') {
      if (!newMarks.includes('em')) {
        newMarks.push('em');
      }
    }
    if (element.style.textDecoration === 'underline') {
      if (!newMarks.includes('underline')) {
        newMarks.push('underline');
      }
    }
    if (element.style.textDecoration === 'line-through') {
      if (!newMarks.includes('strike-through')) {
        newMarks.push('strike-through');
      }
    }
  }
  
  // Check for classes that might indicate formatting
  if (element.classList) {
    if (
      element.classList.contains('bold') || 
      element.classList.contains('font-bold') ||
      element.classList.contains('fw-bold')
    ) {
      if (!newMarks.includes('strong')) {
        newMarks.push('strong');
      }
    }
    if (
      element.classList.contains('italic') || 
      element.classList.contains('font-italic') ||
      element.classList.contains('fst-italic')
    ) {
      if (!newMarks.includes('em')) {
        newMarks.push('em');
      }
    }
    // Add more class checks as needed
  }
  
  return newMarks;
}

/**
 * Create a simple text block
 * @param {string} text - The text content
 * @returns {Object} - A Portable Text block
 */
function createTextBlock(text) {
  return {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text
      }
    ],
    markDefs: []
  };
} 