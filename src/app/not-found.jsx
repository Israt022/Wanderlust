import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-cyan-100 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-[#15A1BF] mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Destination Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Oops! The destination you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#15A1BF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1189a3] transition"
          >
            Back To Home
          </Link>

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
}

export default NotFound;