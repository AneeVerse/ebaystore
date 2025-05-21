'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const cookies = document.cookie.split(';');
    const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('session='));
    if (sessionCookie && sessionCookie.trim().split('=')[1] === 'true') {
      window.location.href = '/dashboard';
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-600 mt-2">Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-600 transition-colors relative"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="opacity-0">Sign In</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 