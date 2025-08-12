import React from "react";
import { Wrench } from "lucide-react"; // optional icon

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <div className="text-orange-500 mb-4">
        <Wrench size={64} strokeWidth={1.5} />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Page Under Construction
      </h1>
      <p className="text-lg text-gray-600">
        We are working on it. This page is under construction.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Go to Home
      </a>
    </div>
  );
}
