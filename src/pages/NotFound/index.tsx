// src/pages/NotFound.tsx

import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center px-6">
      <div className="text-center text-white max-w-lg">

        <h1 className="text-8xl md:text-9xl font-bold">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-purple-100">
          Sorry, the page you're looking for doesn't exist
          or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

          <Link
            to="/"
            className="flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
}