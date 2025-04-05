"use client";
import { FaTools, FaSpinner, FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/common/Layout";

export default function UnderConstructionPage() {
  return (
    <div className="bg-secondary-500 min-h-screen flex flex-col items-center justify-center text-white">
      <Layout>
        {/* Centered Content */}
        <div className="text-center">
          <FaTools className="text-6xl mb-4 mx-auto text-yellow-400 animate-spin" />
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">This Page is Under Development</h1>
          <p className="text-lg sm:text-xl mb-6">
            We are working hard to bring this page to life! Stay tuned for updates.
          </p>
          <FaExclamationTriangle className="text-4xl mb-4 mx-auto text-yellow-500" />
          <p className="text-sm sm:text-base text-gray-400">
            In the meantime, feel free to explore other pages or reach out if you have questions.
          </p>
          <div className="mt-6">
            <button
              className="bg-primary-500 text-secondary-500 px-6 py-2 rounded-lg  transition duration-300"
              onClick={() => window.location.href = "/"}  // Redirect to homepage or any other page
            >
              Go Back to Homepage
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
