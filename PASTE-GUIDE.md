# Pasting Rich Content in Sanity Studio

This guide explains how to paste formatted content from external sources (like Google Docs, Google Sheets, Microsoft Word, Excel, etc.) into Sanity Studio while preserving the formatting.

## Table of Contents

1. [Pasting Tables](#pasting-tables)
2. [Pasting Rich Text](#pasting-rich-text)
3. [Troubleshooting](#troubleshooting)

## Pasting Tables

### Direct Paste into ANY Content Field

The most important feature is that you can now paste tables directly into your content:

1. Copy a table from Google Sheets, Excel, or any webpage
2. Click in any content area in Sanity Studio
3. Paste (Ctrl+V or ⌘+V)
4. The table structure will be automatically preserved

This works in:
- The main body content
- Any rich text field
- Any block content field

No need to use a special table field or component - just copy and paste!

### Using the Table Field

If you prefer, you can also use the dedicated table field:

1. Copy a table from Google Sheets, Excel, or any HTML table from a webpage
2. Click inside the "Paste Table Directly" area
3. Paste your content (Ctrl+V or ⌘+V)
4. The table structure will be automatically detected and converted to Sanity's table format

If the table is successfully detected, you'll see a preview of the table below the paste area.

### Alternative Method: Manual Paste

If direct paste doesn't work:

1. Copy your table from the source
2. Paste it into the text area under "Or Paste from Excel/Google Sheets"
3. Click the "Create Table from Pasted Content" button

This works best for tab-separated data.

## Pasting Rich Text

### Direct Paste into the Content Editor

When editing content in the rich text editor:

1. Copy formatted text from Google Docs, Word, or any webpage
2. Click to position your cursor in the editor
3. Paste your content (Ctrl+V or ⌘+V)

The formatting will be preserved, including:

- Headings (H1, H2, H3, etc.)
- Bold, italic, underlined text
- Lists (bulleted and numbered)
- Tables
- Links

### Supported Formatting Elements

The following elements will be preserved when pasting:

- **Text formatting**: Bold, italic, underline, strikethrough
- **Structure**: Headings, paragraphs, lists (ordered and unordered)
- **Tables**: Full table structure with header rows
- **Links**: URLs will be preserved
- **Code blocks**: Preformatted text and code snippets

## Troubleshooting

### Table Isn't Preserving Structure

If your table isn't being recognized correctly:

1. Try copying the table again from the source, making sure to select the entire table
2. For Google Sheets, try using the "Copy range" option by right-clicking on the selected cells
3. Make sure you're pasting directly into a content area that accepts formatted content

### Rich Text Formatting Issues

If your formatted text isn't preserving formatting:

1. Check that you're copying from a supported source (Google Docs, Word, webpages)
2. Try refreshing the page and trying again
3. For complex formatting, you may need to adjust the content after pasting

### Images and Media

Note that images and other media embedded in the copied content will not be automatically uploaded to Sanity. You'll need to add these separately.

---

If you encounter any issues with the paste functionality, please contact your development team for assistance. 