// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}