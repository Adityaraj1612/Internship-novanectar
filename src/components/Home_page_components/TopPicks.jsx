// src/components/TopPicks.jsx
import React from 'react';

const picks = [
  'Graphics Design', 'Web Development', 'Data Science', 'Business Analysis',
  'Digital Marketing', 'UI/UX', 'Cyber Security', 'AI & ML'
];

export default function TopPicks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Top Picks for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {picks.map((p, i) => (
            <button
              key={i}
              className="flex items-center justify-between w-full py-6 px-6 rounded-xl bg-white text-gray-800 shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <span className="text-lg font-semibold">{p}</span>
              <span className="text-blue-600 hover:text-white text-xl font-bold transition duration-300">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
