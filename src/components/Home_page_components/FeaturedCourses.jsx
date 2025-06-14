// src/components/FeaturedCourses.jsx
import React from 'react'
import img1 from '../../assets/featured1.png'
import img2 from '../../assets/featured2.png'
import img3 from '../../assets/featured3.png'

const courses = [
  { img: img1, title: 'MERN Full-Stack Development', lessons: 12, students: 8.5, price: 4999, old: 7999 },
  { img: img2, title: 'Frontend Development', lessons: 10, students: 9.2, price: 3999, old: 6999 },
  { img: img3, title: 'Backend with Node.js', lessons: 8, students: 7.8, price: 2999, old: 5999 },
]

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c,i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-40 object-cover"/>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{c.title}</h3>
                <div className="flex items-center text-sm text-gray-600 gap-4">
                  <span>📚 {c.lessons} Lessons</span>
                  <span>👥 {c.students}k Students</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-blue-600 font-bold">₹{c.price}</span>
                    <span className="text-gray-400 line-through ml-2">₹{c.old}</span>
                  </div>
                  <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
