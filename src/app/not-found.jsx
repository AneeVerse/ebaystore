// pages/404.js
import Link from "next/link";
import Image from "next/image";
import NewFooter from "@/components/layout/NewFooter";

export default function Custom404() {
  return (
    <div className="bg-white">
    <div className="min-h-screen  flex flex-col items-center justify-center ">
      {/* Illustration */}
      <div className="max-w-md mx-auto">
        <Image
          src="/images/image-404.jpg" // Replace with your 404 illustration
          alt="404 Illustration"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-600 mb-8">
          It might have been moved or deleted. Let's get you back on track!
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-secondary-500 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Go Back Home
        </Link>
      </div></div>
      <div className="w-full">
      <NewFooter /></div>
    </div>
  );
}