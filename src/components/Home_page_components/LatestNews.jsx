// src/components/LatestNews.jsx
import React from 'react'
import blogImg from '../../assets/blog.png'

const posts = [1,2,3].map(i => ({
  img: blogImg,
  title: 'UI/UX Design Principles',
  author: 'Alice Johnson',
  date: '10 November 2023'
}))

export default function LatestNews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p,i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover"/>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-xs text-gray-500">{p.author} • {p.date}</p>
                <button className="text-blue-600 text-sm font-medium mt-2">Read More →</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View All News
        </button>
      </div>
    </section>
  )
}
