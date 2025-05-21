'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SunEditor to avoid SSR issues
const SunEditor = dynamic(() => import('suneditor-react').then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gray-100 flex items-center justify-center rounded-lg">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  ),
});

// Import SunEditor styles in the client
const SunEditorStyles = () => {
  useEffect(() => {
    import('suneditor/dist/css/suneditor.min.css');
  }, []);
  return null;
};

const RichTextEditor = ({ value, onChange, disabled = false }) => {
  const editorRef = useRef(null);
  
  // Handle getContent for form submission
  const getContent = () => {
    if (editorRef.current) {
      return editorRef.current.getContents(true);
    }
    return '';
  };

  // SunEditor Options
  const options = {
    height: 'auto',
    minHeight: '500px',
    maxHeight: '500px',
    buttonList: [
      ['undo', 'redo'],
      ['font', 'fontSize', 'formatBlock'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
      ['removeFormat'],
      ['fontColor', 'hiliteColor'],
      ['outdent', 'indent'],
      ['align', 'list', 'lineHeight'],
      ['table', 'link', 'image', 'video'],
      ['fullScreen', 'showBlocks', 'codeView']
    ],
    font: [
      'Arial', 'Comic Sans MS', 'Courier New', 'Impact', 'Georgia', 
      'Tahoma', 'Trebuchet MS', 'Verdana', 'Times New Roman'
    ],
    defaultStyle: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 16px;',
    defaultTag: 'div',
    defaultParagraphSeparator: 'div',
    imageAccept: '.jpg, .jpeg, .png, .webp, .gif',
    imageFileInput: true,
    imageUrlInput: true,
    videoResizing: true,
    videoHeightShow: true,
    videoWidthShow: true,
    videoFileInput: true,
    videoUrlInput: true,
    tabDisable: false,
    toolbarContainer: undefined,
    resizingBar: true,
    charCounter: true,
    charCounterType: 'char',
    callBackSave: function (contents) {
      if (onChange) {
        onChange(contents);
      }
    }
  };

  return (
    <div className="rich-text-editor-container">
      <SunEditorStyles />
      <SunEditor
        setOptions={options}
        setContents={value}
        onChange={onChange}
        disable={disabled}
        getSunEditorInstance={(sunEditor) => {
          editorRef.current = sunEditor;
        }}
      />
      
      <style jsx global>{`
        .sun-editor {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .sun-editor .se-container {
          border-radius: 0.5rem;
        }
        .sun-editor .se-toolbar {
          background-color: #f8fafc;
          outline: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .sun-editor .se-btn-tray {
          padding: 8px;
          flex-wrap: wrap;
        }
        .sun-editor .se-btn-module {
          margin: 2px;
        }
        .sun-editor .se-btn:enabled:focus, 
        .sun-editor .se-btn:enabled:hover {
          background-color: #e2e8f0;
          border-color: #e2e8f0;
        }
        .sun-editor .se-btn:active, 
        .sun-editor .se-btn.on {
          background-color: #e2e8f0;
          border-color: #e2e8f0;
        }
        .sun-editor .se-wrapper {
          height: 500px !important;
          min-height: 500px !important;
          max-height: 500px !important;
        }
        .sun-editor .se-wrapper .se-wrapper-inner {
          height: 500px !important;
          min-height: 500px !important;
          max-height: 500px !important;
        }
        .sun-editor .se-wrapper .se-wrapper-inner .se-placeholder {
          color: #94a3b8;
        }
        .sun-editor .se-resizing-bar {
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor; 