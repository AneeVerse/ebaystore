/**
 * Utility functions for working with Sanity content
 */

/**
 * Convert Sanity's block content to HTML (simple version)
 * For a more robust solution, consider using the @portabletext/react package
 */
export function blockContentToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) {
    return '';
  }

  // Track list state
  let inList = false;
  let currentListType = null;
  let html = '';

  // Process blocks with list awareness
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const isListItem = block.listItem === 'bullet' || block.listItem === 'number';
    
    // Opening a new list
    if (isListItem && !inList) {
      currentListType = block.listItem === 'bullet' ? 'ul' : 'ol';
      html += `<${currentListType} class="${currentListType === 'ul' ? 'list-disc' : 'list-decimal'} pl-6 my-4">`;
      inList = true;
    }
    
    // Closing a list
    if (!isListItem && inList) {
      html += `</${currentListType}>`;
      inList = false;
      currentListType = null;
    }
    
    // Changing list type
    if (isListItem && inList && 
        ((currentListType === 'ul' && block.listItem === 'number') || 
         (currentListType === 'ol' && block.listItem === 'bullet'))) {
      html += `</${currentListType}>`;
      currentListType = block.listItem === 'bullet' ? 'ul' : 'ol';
      html += `<${currentListType} class="${currentListType === 'ul' ? 'list-disc' : 'list-decimal'} pl-6 my-4">`;
    }
    
    // Handle different block types
    switch (block._type) {
      case 'block':
        if (isListItem) {
          html += textBlockToListItem(block);
        } else {
          html += textBlockToHtml(block);
        }
        break;
      case 'image':
        if (inList) {
          html += `</${currentListType}>`;
          inList = false;
          currentListType = null;
        }
        html += imageBlockToHtml(block);
        break;
      case 'youtube':
      case 'youtubeEmbed':
        if (inList) {
          html += `</${currentListType}>`;
          inList = false;
          currentListType = null;
        }
        html += youtubeBlockToHtml(block);
        break;
      case 'table':
        if (inList) {
          html += `</${currentListType}>`;
          inList = false;
          currentListType = null;
        }
        html += tableBlockToHtml(block);
        break;
      default:
        console.warn('Unsupported block type:', block._type);
    }
  }
  
  // Close any remaining open list
  if (inList) {
    html += `</${currentListType}>`;
  }
  
  return html;
}

/**
 * Convert a text block to a list item
 */
function textBlockToListItem(block) {
  if (!block) return '';

  // Get the base text with spans applied
  const text = block.children
    .map(child => {
      let text = child.text;
      
      // Apply marks (formatting)
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach(mark => {
          switch (mark) {
            case 'strong':
              text = `<strong>${text}</strong>`;
              break;
            case 'em':
              text = `<em>${text}</em>`;
              break;
            case 'code':
              text = `<code>${text}</code>`;
              break;
            case 'underline':
              text = `<u>${text}</u>`;
              break;
            case 'strike-through':
              text = `<s>${text}</s>`;
              break;
            default:
              // Handle link marks or custom marks here
              if (mark.startsWith('link-')) {
                // For a robust solution, use the proper annotation data
                text = `<a href="#">${text}</a>`;
              }
          }
        });
      }
      
      return text;
    })
    .join('');

  // Return properly styled list item
  return `<li class="my-1">${text}</li>`;
}

/**
 * Convert a text block to HTML
 */
function textBlockToHtml(block) {
  if (!block) return '';

  // Get the base text with spans applied
  const text = block.children
    .map(child => {
      let text = child.text;
      
      // Apply marks (formatting)
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach(mark => {
          switch (mark) {
            case 'strong':
              text = `<strong>${text}</strong>`;
              break;
            case 'em':
              text = `<em>${text}</em>`;
              break;
            case 'code':
              text = `<code>${text}</code>`;
              break;
            case 'underline':
              text = `<u>${text}</u>`;
              break;
            case 'strike-through':
              text = `<s>${text}</s>`;
              break;
            default:
              // Handle link marks or custom marks here
              if (mark.startsWith('link-')) {
                // Extract link from mark name if using a simple approach
                // For a robust solution, use the proper annotation data
                text = `<a href="#">${text}</a>`;
              }
          }
        });
      }
      
      return text;
    })
    .join('');

  // Apply block style
  switch (block.style) {
    case 'h1':
      return `<h1>${text}</h1>`;
    case 'h2':
      return `<h2>${text}</h2>`;
    case 'h3':
      return `<h3>${text}</h3>`;
    case 'h4':
      return `<h4>${text}</h4>`;
    case 'h5':
      return `<h5>${text}</h5>`;
    case 'h6':
      return `<h6>${text}</h6>`;
    case 'blockquote':
      return `<blockquote>${text}</blockquote>`;
    case 'normal':
    default:
      return `<p>${text}</p>`;
  }
}

/**
 * Convert an image block to HTML
 */
function imageBlockToHtml(block) {
  if (!block || !block.asset || !block.asset._ref) {
    return '';
  }

  // Extract image ID from reference
  const ref = block.asset._ref;
  const [, id, dimensions, format] = ref.split('-');
  
  // Get Sanity project ID and dataset from environment (fallback to values if not available at build time)
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leph7aip';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  
  // Build image URL
  const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  
  // Create HTML with alt text and caption if available
  const alt = block.alt || 'Blog image';
  const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : '';
  
  return `
    <figure>
      <img src="${imageUrl}" alt="${alt}" />
      ${caption}
    </figure>
  `;
}

/**
 * Convert a YouTube block to HTML
 */
function youtubeBlockToHtml(block) {
  if (!block || !block.url) {
    return '';
  }

  // Extract YouTube video ID from URL
  let videoId = '';
  const url = block.url;
  
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URL(url).searchParams;
    videoId = urlParams.get('v');
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }
  
  if (!videoId) {
    return `<p>Invalid YouTube URL: ${url}</p>`;
  }
  
  // Create responsive embed like Superside uses
  const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : '';
  
  // Check if custom thumbnail is available
  let thumbnailHtml = '';
  if (block.customThumbnail && block.customThumbnail.asset && block.customThumbnail.asset._ref) {
    // Extract image ID from reference
    const ref = block.customThumbnail.asset._ref;
    const [, id, dimensions, format] = ref.split('-');
    
    // Get Sanity project ID and dataset from environment
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'leph7aip';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    
    // Build image URL
    const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
    const alt = block.customThumbnail.alt || `YouTube video: ${block.url}`;
    
    // Create YouTube embed with custom thumbnail
    return `
      <figure class="youtube-embed">
        <div class="relative">
          <img src="${imageUrl}" alt="${alt}" class="w-full rounded-lg" />
          <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 flex items-center justify-center">
            <div class="rounded-full bg-black bg-opacity-70 p-4 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        </div>
        ${caption}
      </figure>
    `;
  }
  
  // Default YouTube embed with iframe
  return `
    <figure class="youtube-embed">
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        class="youtube-player"
      ></iframe>
      ${caption}
    </figure>
  `;
}

/**
 * Convert a table block to HTML
 */
function tableBlockToHtml(block) {
  if (!block || !block.rows || !Array.isArray(block.rows)) {
    return '';
  }
  
  const hasHeaderRow = block.hasHeaderRow;
  const caption = block.caption ? `<caption>${block.caption}</caption>` : '';
  
  // Updated table styling to match blog design
  let tableHtml = `
    <div class="overflow-x-auto my-8">
      <table class="min-w-full border-collapse bg-white rounded-lg shadow-sm">
        ${caption}
  `;
  
  // Process rows
  block.rows.forEach((row, rowIndex) => {
    const isHeader = hasHeaderRow && rowIndex === 0;
    const rowClass = isHeader 
      ? 'bg-[#0A2E3D] text-white' 
      : rowIndex % 2 === 0 ? 'bg-[#EBFAFE]' : 'bg-white';
    
    tableHtml += `<tr class="${rowClass}">`;
    
    // Process cells
    if (row.cells && Array.isArray(row.cells)) {
      row.cells.forEach((cell, cellIndex) => {
        // Use th for header row if specified
        if (isHeader) {
          tableHtml += `<th class="px-4 py-3 text-left font-semibold">${cell}</th>`;
        } else {
          tableHtml += `<td class="border-t border-gray-200 px-4 py-3">${cell}</td>`;
        }
      });
    }
    
    tableHtml += '</tr>';
  });
  
  tableHtml += '</table></div>';
  return tableHtml;
}