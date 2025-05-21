'use client';

import Link from 'next/link';
import { FaEdit, FaTrash, FaPlus, FaSync } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogList() {
  const router = useRouter();
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });

  // Fetch blogs from API
  const fetchBlogs = async (page = 1) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`/api/blogs?page=${page}&limit=${pagination.limit}&t=${Date.now()}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch blogs');
      }
      
      if (data.success) {
        setBlogList(data.blogs || []);
        setPagination(data.pagination || pagination);
      } else {
        throw new Error(data.error || 'Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setErrorMessage(`Error: ${error.message}`);
      setBlogList([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize blog data
  useEffect(() => {
    fetchBlogs();
  }, []);

  const refreshBlogs = async () => {
    setIsRefreshing(true);
    setErrorMessage('');
    try {
      await fetchBlogs(pagination.page);
      setErrorMessage('Success: Blogs refreshed successfully');
    } catch (error) {
      console.error('Error refreshing blogs:', error);
      setErrorMessage('Error: Failed to refresh blogs. Please try again.');
    } finally {
      // Safety timeout to ensure loading state is reset
      setTimeout(() => {
        setIsRefreshing(false);
      }, 2000);
    }
  };

  const handleDelete = async (blog) => {
    if (isDeleting) return;
    
    if (confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      setIsDeleting(true);
      setErrorMessage('');
      try {
        const response = await fetch(`/api/blogs/${blog.slug}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Failed to delete blog');
        }
        
        // Remove blog from local state immediately
        setBlogList(prev => prev.filter(b => b.id !== blog.id));
        
        // Show success message
        setErrorMessage(`Success: ${data.message || 'Blog deleted successfully'}`);
        
        // Refresh data after a short delay
        setTimeout(() => {
          refreshBlogs();
        }, 1000);
        
      } catch (error) {
        console.error('Error deleting blog:', error);
        setErrorMessage('Error: ' + error.message);
      } finally {
        // Safety timeout to ensure loading state is reset
        setTimeout(() => {
          setIsDeleting(false);
        }, 2000);
      }
    }
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.pages) return;
    fetchBlogs(newPage);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
        <div className="flex gap-4">
          <button
            onClick={refreshBlogs}
            className={`p-2 text-gray-600 hover:bg-gray-100 rounded-full transition ${isRefreshing ? 'animate-spin' : ''}`}
            title="Refresh blog list"
            disabled={isRefreshing || isDeleting || isLoading}
          >
            <FaSync />
          </button>
          <Link 
            href="/admin/blogs/new" 
            className="bg-secondary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary-600"
          >
            <FaPlus /> New Blog
          </Link>
        </div>
      </div>

      {(isRefreshing || isDeleting || isLoading) && (
        <div className="bg-blue-50 text-blue-700 p-3 rounded mb-4">
          {isLoading ? 'Loading blogs...' : isRefreshing ? 'Refreshing blogs...' : 'Deleting blog...'}
        </div>
      )}

      {errorMessage && (
        <div className={`p-3 rounded mb-4 ${errorMessage.startsWith('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {errorMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4">Blog</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Author</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading && blogList?.length > 0 ? (
                blogList.map((blog) => (
                  <tr key={blog.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded overflow-hidden">
                          <Image
                            src={blog.thumbnail || '/placeholder.jpg'}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{blog.title}</h3>
                          <p className="text-sm text-gray-500 truncate max-w-md">
                            {blog.shortDescription}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {blog.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={blog.author?.image || '/placeholder.jpg'}
                            alt={blog.author?.name || 'Author'}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{blog.author?.name || 'Unknown'}</p>
                          <p className="text-sm text-gray-500">{blog.author?.role || 'Author'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{blog.date || 'Unknown'}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/blogs/${blog.slug}/edit`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                          title="Edit blog"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                          title="Delete blog"
                          disabled={isDeleting}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    {isLoading ? 'Loading...' : 'No blogs found.'} 
                    {!isLoading && (
                      <Link href="/admin/blogs/new" className="text-blue-600 hover:underline ml-1">
                        Create one
                      </Link>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="flex justify-center items-center p-4 border-t">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50 mr-2"
            >
              Previous
            </button>
            <span className="mx-2">
              Page {pagination.page} of {pagination.pages}
            </span>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.pages}
              className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50 ml-2"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 