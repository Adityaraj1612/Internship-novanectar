// src/components/StatsBar.jsx
import React from 'react'

export default function StatsBar() {
  const stats = [
    { label: '50+ Courses', value: '50+' },
    { label: '20K+ Students', value: '20K+' },
    { label: '15K+ Certificates', value: '15K+' },
    { label: '200+ Instructors', value: '200+' }
  ]
  return (
    <section className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 text-center">
        {stats.map((s,i) => (
          <div key={i}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
