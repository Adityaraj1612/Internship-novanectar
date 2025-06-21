/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link
import blogImg from '../../assets/blog.png';
import pythonimg from '../../assets/python.webp';
import reactblogimg from '../../assets/reactblog.png';

// ...posts array remains the same...
const posts = [
  {
    img: blogImg,
    title: 'UI/UX Design Principles',
    description: 'Learn the core principles of user-friendly design and how to apply them in your projects.',
    author: 'Alice Johnson',
    date: '10 November 2023',
  },
  {
    img: pythonimg,
    title: 'Mastering Python in 2024',
    description: 'Become a Python Developer Even If You’re Starting from Zero. Let’s face it — coding can feel overwhelming when you’re new.',
    author: 'Atul Semwal',
    date: '22 January 2024',
  },
  {
    img: reactblogimg,
    title: 'React Performance Tips',
    description: 'Boost the performance of your React apps with these expert tips and techniques.',
    author: 'Clara Smith',
    date: '5 March 2024',
  },
  {
    img: blogImg,
    title: 'Designing for Accessibility',
    description: 'Make your apps more inclusive with accessibility-focused design strategies.',
    author: 'David Lee',
    date: '12 April 2024',
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Blog</h1>
        <div className="grid md:grid-cols-4 gap-7">
          {posts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-xl text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-62 object-contain transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-xs text-gray-500">{p.author} • {p.date}</p>
                <button className="text-blue-600 text-sm font-medium mt-2">Read More →</button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Step 2: Use Link instead of button */}
        <Link
          to="/blog"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}
