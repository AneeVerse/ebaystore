'use client';

import { useState, useEffect } from 'react';
import { FaDatabase, FaChartBar, FaClock } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/dashboard/stats');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
      } else {
        setError(data.error || 'Failed to fetch dashboard statistics');
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      setError('Failed to fetch dashboard statistics');
    } finally {
      setIsLoading(false);
    }
  };

  const formatBytes = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const chartData = {
    labels: stats?.last5DaysStats.map(stat => stat._id) || [],
    datasets: [
      {
        label: 'Blogs Published',
        data: stats?.last5DaysStats.map(stat => stat.count) || [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blog Posts - Last 5 Days',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Total Blogs</h2>
              <p className="text-4xl font-bold text-secondary-600">{stats.totalBlogs}</p>
            </div>
            <FaChartBar className="text-4xl text-secondary-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Categories</h2>
              <p className="text-4xl font-bold text-secondary-600">{stats.totalCategories}</p>
            </div>
            <FaDatabase className="text-4xl text-secondary-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Storage Used</h2>
              <p className="text-4xl font-bold text-secondary-600">
                {formatBytes(stats.storageStats.dataSize)}
              </p>
              <p className="text-sm text-gray-500">
                of {formatBytes(stats.storageStats.maxSize)} ({stats.storageStats.usagePercentage}%)
              </p>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="3"
                  strokeDasharray={`${stats.storageStats.usagePercentage}, 100`}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Blog Activity</h2>
          <div className="h-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Blogs by Category</h2>
          <div className="space-y-4">
            {stats.blogsByCategory.map((category) => (
              <div key={category._id} className="flex items-center justify-between bg-white">
                <span className="font-medium text-gray-800">{category._id || 'Uncategorized'}</span>
                <span className="px-3 py-1 bg-[#0A2E3D] text-white rounded-full min-w-[80px] text-center">
                  {category.count} posts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Blogs Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Blogs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stats.recentBlogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.category || 'Uncategorized'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.author?.name || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.createdAt ? formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true }) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 