'use client'

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">
          Oops!
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Something went wrong
        </h2>

        <p className="text-gray-600 mb-6">
          We could not load the destination details right now. 
          Please try again or go back to explore more destinations.
        </p>

        {/* Optional Error Message */}
        <p className="text-sm text-red-400 mb-8">
          {error?.message}
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-[#15A1BF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1189a3] transition"
          >
            Try Again
          </button>

          <Link
            href="/destinations"
            className="border border-[#15A1BF] text-[#15A1BF] px-6 py-3 rounded-lg font-medium hover:bg-[#15A1BF] hover:text-white transition"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;