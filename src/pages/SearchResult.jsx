import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  const query = new URLSearchParams(useLocation().search).get('query');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-semibold mb-4">No exact match found</h1>
      <p className="text-lg text-gray-600">
        You searched for: <span className="font-bold text-blue-600">{query}</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">Please try a different keyword.</p>
    </div>
  );
}
