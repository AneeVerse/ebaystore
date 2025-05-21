'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaImage, FaYoutube, FaPaste, FaPlus } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Toaster, toast } from 'react-hot-toast';

// Dynamically import the RichTextEditor component
const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />
});

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
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

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.slug) return;
      
      try {
        setIsLoading(true);
        setError('');
        
        // First try the API
        const response = await fetch(`/api/blogs/${params.slug}`);
        const data = await response.json();
        
        if (response.ok && data.success) {
          // Use the API data if available
          const blog = data.blog;
          
          // Store the current category for later consistency check
          const currentCategory = blog.category;
          
          setFormData({
            ...blog,
            date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            content: blog.content || '',
            category: currentCategory // Ensure category is set
          });
          
          console.log('Blog data loaded with category:', currentCategory);
        } else {
          // If API failed, try static data as fallback
          import('@/data/blogData').then(({ blogs }) => {
            const staticBlog = blogs.find(b => b.slug === params.slug);
            if (staticBlog) {
              // Store the current category
              const currentCategory = staticBlog.category;
              
              setFormData({
                ...staticBlog,
                date: staticBlog.date ? new Date(staticBlog.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                content: staticBlog.content || '',
                category: currentCategory // Ensure category is set
              });
              
              console.log('Static blog data loaded with category:', currentCategory);
            } else {
              setError('Blog not found');
            }
          }).catch(err => {
            console.error('Error importing static blogs:', err);
            setError('Failed to load blog data');
          });
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  useEffect(() => {
    fetchCategories();
    fetchAuthors();
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
        setError(data.error);
      }
    } catch (error) {
      console.error('Error adding category:', error);
      setError('Failed to add category');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

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

      const response = await fetch(`/api/blogs/${params.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update blog');
      }

      toast.success('Blog updated successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error updating blog:', error);
      setError(error.message || 'Failed to update blog');
      toast.error(error.message || 'Failed to update blog');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    if (name.startsWith('author.')) {
      const authorField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        // Auto-generate slug when title changes
        ...(name === 'title' ? { slug: generateSlug(value) } : {})
      }));
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-5xl mx-auto py-10 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/admin/blogs"
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FaArrowLeft />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Edit Blog</h1>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  placeholder="url-friendly-title"
                  disabled={isSubmitting}
                />
                <p className="mt-1 text-sm text-gray-500">
                  This will be used in the blog URL. Auto-generated from title but can be edited.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thumbnail URL
              </label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                required
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
                  Publication Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="flex gap-2">
                {!isAddingCategory ? (
                  <>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                      required
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
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content*
              </label>
              <div className="sticky top-4 z-10 bg-white rounded-lg shadow-lg h-[600px]">
                <div className="h-full">
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
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 shadow-lg z-20">
              <div className="max-w-4xl mx-auto flex justify-end gap-4">
                <Link
                  href="/admin/blogs"
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
} 