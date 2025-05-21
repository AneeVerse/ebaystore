'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { FaImage, FaYoutube, FaPaste, FaPlus } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { Toaster, toast } from 'react-hot-toast';

// Dynamically import the RichTextEditor component
const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />
});

export default function NewBlog() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingAuthor, setIsAddingAuthor] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [newAuthor, setNewAuthor] = useState({ name: '', role: '', image: '', bio: '' });
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    shortDescription: '',
    content: '',
    thumbnail: '',
    author: {
      name: '',
      role: '',
      image: ''
    },
    timeToRead: '',
    date: new Date().toISOString().split('T')[0]
  });

  // Create ref for the content textarea
  const contentTextareaRef = useRef(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      });

      const data = await response.json();
      if (data.success) {
        setCategories([...categories, data.category]);
        setFormData({ ...formData, category: data.category.name });
        setNewCategory({ name: '', description: '' });
        setIsAddingCategory(false);
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error adding category:', error);
      setErrorMessage('Failed to add category');
    }
  };

  const handleDeleteCategory = async (categoryName) => {
    try {
      // Encode the category name for the URL
      const encodedName = encodeURIComponent(categoryName);
      console.log('Deleting category:', categoryName);
      
      const response = await fetch(`/api/categories/${encodedName}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      console.log('Delete response:', data);

      if (data.success) {
        setCategories(categories.filter(cat => cat.name !== categoryName));
        if (formData.category === categoryName) {
          setFormData(prev => ({ ...prev, category: '' }));
        }
        toast.success('Category deleted successfully!');
      } else {
        console.error('Failed to delete category:', data.error);
        toast.error(data.error || 'Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category: ' + (error.message || 'Unknown error'));
    }
  };

  // Fetch authors on component mount
  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await fetch('/api/authors');
      const data = await response.json();
      if (data.success) {
        setAuthors(data.authors);
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handleAddAuthor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/authors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAuthor)
      });

      const data = await response.json();
      if (data.success) {
        setAuthors([...authors, data.author]);
        setFormData(prev => ({
          ...prev,
          author: {
            name: data.author.name,
            role: data.author.role,
            image: data.author.image || ''
          }
        }));
        setNewAuthor({ name: '', role: '', image: '', bio: '' });
        setIsAddingAuthor(false);
        toast.success('Author added successfully!');
      } else {
        toast.error(data.error || 'Failed to add author');
      }
    } catch (error) {
      console.error('Error adding author:', error);
      toast.error('Failed to add author');
    }
  };

  const handleDeleteAuthor = async (authorName) => {
    try {
      const encodedName = encodeURIComponent(authorName);
      const response = await fetch(`/api/authors/${encodedName}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setAuthors(authors.filter(a => a.name !== authorName));
        if (formData.author.name === authorName) {
          setFormData(prev => ({
            ...prev,
            author: { name: '', role: '', image: '' }
          }));
        }
        toast.success('Author deleted successfully!');
      } else {
        toast.error(data.error || 'Failed to delete author');
      }
    } catch (error) {
      console.error('Error deleting author:', error);
      toast.error('Failed to delete author');
    }
  };

  const handleAuthorSelect = (authorName) => {
    const selectedAuthor = authors.find(a => a.name === authorName);
    if (selectedAuthor) {
      setFormData(prev => ({
        ...prev,
        author: {
          name: selectedAuthor.name,
          role: selectedAuthor.role,
          image: selectedAuthor.image || ''
        }
      }));
    }
  };

  // Setup the paste event handler
  useEffect(() => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const handlePaste = (e) => {
      // Prevent the default paste behavior
      e.preventDefault();
      
      // Get the clipboard data
      const clipboardData = e.clipboardData || window.clipboardData;
      let pastedData;
      
      // Try to get HTML content first (this preserves formatting)
      if (clipboardData.types.includes('text/html')) {
        pastedData = clipboardData.getData('text/html');
        
        // Clean the HTML: remove head, scripts, styles, etc.
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pastedData;
        
        // Remove unwanted elements
        const elementsToRemove = ['head', 'script', 'style', 'meta', 'link'];
        elementsToRemove.forEach(tag => {
          const elements = tempDiv.getElementsByTagName(tag);
          while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
        });
        
        // Process Word-specific markup
        // Convert Word list items
        const wordListItems = tempDiv.querySelectorAll('p.MsoListParagraph, p[style*="mso-list"]');
        wordListItems.forEach(item => {
          const newLi = document.createElement('li');
          newLi.innerHTML = item.innerHTML;
          item.parentNode.replaceChild(newLi, item);
        });
        
        // Wrap consecutive list items in ul
        let currentUl = null;
        Array.from(tempDiv.children).forEach(child => {
          if (child.tagName === 'LI') {
            if (!currentUl) {
              currentUl = document.createElement('ul');
              child.parentNode.insertBefore(currentUl, child);
            }
            currentUl.appendChild(child);
          } else {
            currentUl = null;
          }
        });
        
        // Convert Word's specific span styles to standard HTML
        const spans = tempDiv.querySelectorAll('span');
        spans.forEach(span => {
          const style = span.getAttribute('style') || '';
          
          // Bold
          if (style.includes('font-weight:bold') || style.includes('font-weight: bold')) {
            const b = document.createElement('b');
            b.innerHTML = span.innerHTML;
            span.parentNode.replaceChild(b, span);
          }
          // Italic
          else if (style.includes('font-style:italic') || style.includes('font-style: italic')) {
            const i = document.createElement('i');
            i.innerHTML = span.innerHTML;
            span.parentNode.replaceChild(i, span);
          }
        });
        
        // Get the cleaned HTML
        pastedData = tempDiv.innerHTML;
      } else {
        // Fallback to plain text
        pastedData = clipboardData.getData('text/plain');
      }
      
      // Get cursor position
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      // Insert the pasted content at cursor position
      const newContent = 
        formData.content.substring(0, start) + 
        pastedData + 
        formData.content.substring(end);
      
      // Update the form data
      setFormData(prev => ({
        ...prev,
        content: newContent
      }));
    };
    
    // Add the paste event listener
    textarea.addEventListener('paste', handlePaste);
    
    // Clean up
    return () => {
      textarea.removeEventListener('paste', handlePaste);
    };
  }, [formData.content]);

  // Add function to generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Trim hyphens from start and end
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        // Auto-generate slug when title changes
        ...(name === 'title' ? { slug: generateSlug(value) } : {})
      });
    }
  };

  const insertContentTemplate = (template) => {
    const contentTextarea = contentTextareaRef.current;
    if (!contentTextarea) return;

    const start = contentTextarea.selectionStart;
    const end = contentTextarea.selectionEnd;

    const newContent = 
      formData.content.substring(0, start) + 
      template +
      formData.content.substring(end);

    setFormData(prev => ({
      ...prev,
      content: newContent
    }));
  };

  const insertImage = () => {
    const imageUrl = prompt('Enter image URL:', 'https://example.com/image.jpg');
    if (imageUrl) {
      const imageTemplate = `
<div class="my-8">
  <img 
    src="${imageUrl}" 
    alt="Blog image" 
    class="rounded-lg max-w-full max-h-[500px] object-contain"
  />
</div>
`;
      insertContentTemplate(imageTemplate);
    }
  };

  const insertYouTube = () => {
    const videoId = prompt('Enter YouTube video ID or full URL:', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    
    if (videoId) {
      // Extract ID from URL if needed
      let youtubeId = videoId;
      if (videoId.includes('youtube.com/watch?v=')) {
        const url = new URL(videoId);
        youtubeId = url.searchParams.get('v');
      } else if (videoId.includes('youtu.be/')) {
        youtubeId = videoId.split('youtu.be/')[1];
      }
      
      if (youtubeId) {
        const youtubeTemplate = `
<div class="my-8 flex justify-center">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/${youtubeId}" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    class="rounded-lg"
  ></iframe>
</div>
`;
        insertContentTemplate(youtubeTemplate);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Ensure thumbnail URL starts with /images if it's a relative path
      const thumbnailUrl = formData.thumbnail.startsWith('http') 
        ? formData.thumbnail 
        : formData.thumbnail.startsWith('/') 
          ? formData.thumbnail 
          : `/images/${formData.thumbnail}`;

      // Ensure author image URL starts with /images if it's a relative path
      const authorImageUrl = formData.author.image.startsWith('http')
        ? formData.author.image
        : formData.author.image.startsWith('/')
          ? formData.author.image
          : `/images/${formData.author.image}`;

      const blogData = {
        ...formData,
        thumbnail: thumbnailUrl,
        author: {
          ...formData.author,
          image: authorImageUrl
        }
      };

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create blog');
      }

      toast.success('Blog created successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error creating blog:', error);
      setErrorMessage(error.message || 'Failed to create blog');
      toast.error(error.message || 'Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>
        
        {errorMessage && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {errorMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Title*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug*
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                placeholder="url-friendly-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
              <p className="mt-1 text-sm text-gray-500">
                This will be used in the blog URL. Auto-generated from title but can be edited.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail URL*
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author*
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.author.name}
                  onChange={(e) => handleAuthorSelect(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  disabled={isSubmitting}
                >
                  <option value="">Select an author</option>
                  {authors.map((author) => (
                    <option key={author.name} value={author.name}>
                      {author.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setIsAddingAuthor(true)}
                  className="px-3 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600"
                  title="Add new author"
                >
                  <FaPlus />
                </button>
                {formData.author.name && (
                  <button
                    type="button"
                    onClick={() => handleDeleteAuthor(formData.author.name)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    title="Delete selected author"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
              {isAddingAuthor && (
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    placeholder="Author name"
                    value={newAuthor.name}
                    onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Author role"
                    value={newAuthor.role}
                    onChange={(e) => setNewAuthor({ ...newAuthor, role: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="url"
                    placeholder="Author image URL"
                    value={newAuthor.image}
                    onChange={(e) => setNewAuthor({ ...newAuthor, image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleAddAuthor}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingAuthor(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Role
              </label>
              <input
                type="text"
                value={formData.author.role}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author Image URL
              </label>
              <input
                type="url"
                value={formData.author.image}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time to Read (minutes)*
              </label>
              <input
                type="number"
                name="timeToRead"
                value={formData.timeToRead}
                onChange={handleChange}
                min="1"
                max="60"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Will be displayed as "{formData.timeToRead || '0'} min read"
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publication Date*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <div className="flex gap-2">
              {!isAddingCategory ? (
                <>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => setIsAddingCategory(true)}
                    className="px-3 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600"
                    title="Add new category"
                  >
                    <FaPlus />
                  </button>
                  {formData.category && (
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(formData.category)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      title="Delete selected category"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </>
              ) : (
                <div className="w-full">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Category name"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleAddCategory}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingCategory(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Category description (optional)"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description*
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="2"
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content*
            </label>
            <RichTextEditor
              value={formData.content}
              onChange={(data) => {
                setFormData(prev => ({
                  ...prev,
                  content: data
                }));
              }}
              disabled={isSubmitting}
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/admin/blogs')}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 