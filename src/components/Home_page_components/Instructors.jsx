// src/components/Instructors.jsx
import React from 'react'
import i1 from '../../assets/instructor1.png'
import i2 from '../../assets/instructor2.png'
import i3 from '../../assets/instructor3.png'
import i4 from '../../assets/instructor4.png'

const instructors = [
  { img: i1, name: 'Brendan Fraser', role: 'Graphic Designer' },
  { img: i2, name: 'Michaels Leonel', role: 'Web Developer' },
  { img: i3, name: 'Jenny Wilson', role: 'Data Scientist' },
  { img: i4, name: 'John Wick', role: 'Digital Marketing' },
]

export default function Instructors() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Course Instructors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((ins,i) => (
            <div key={i} className="space-y-2">
              <img src={ins.img} alt={ins.name} className="w-full h-64 object-cover rounded-lg shadow"/>
              <h4 className="font-semibold">{ins.name}</h4>
              <p className="text-sm text-gray-600">{ins.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
