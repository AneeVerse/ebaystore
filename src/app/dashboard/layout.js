'use client';

import Link from 'next/link';
import { FaBlog, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the admin session cookie
    document.cookie = 'admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Navigation */}
      <nav className="bg-secondary-500 text-white fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-xl font-bold">
                Aneeverse Admin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="hover:text-gray-200 flex items-center gap-2">
                <FaHome /> Dashboard
              </Link>
              <Link href="/admin/blogs" className="hover:text-gray-200 flex items-center gap-2">
                <FaBlog /> Blogs
              </Link>
              <Link href="/" className="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-200 flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mt-16">
        {children}
      </main>
    </div>
  );
} 