// src/components/TopPicks.jsx
import React from 'react'

const picks = [
  'Graphics Design','Web Development','Data Science','Business Analysis',
  'Digital Marketing','UI/UX','Cyber Security','AI & ML'
]

export default function TopPicks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Picks for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {picks.map((p, i) => (
            <button
              key={i}
              className="flex items-center justify-between bg-white py-3 px-4 rounded-lg shadow hover:shadow-md transition"
            >
              <span className="text-sm font-medium">{p}</span>
              <span className="text-blue-600 font-bold">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

