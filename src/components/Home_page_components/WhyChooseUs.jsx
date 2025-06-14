// src/components/WhyChooseUs.jsx
import React from 'react'

const items = [
  { icon: '👩‍🏫', title: 'World‑Class Faculty', desc: 'Learn from industry leaders.' },
  { icon: '💬', title: 'Direct Interaction', desc: 'Live Q&A & mentorship.' },
  { icon: '🧰', title: 'Cutting‑Edge Curriculum', desc: 'Projects & case studies.' },
  { icon: '🚀', title: 'Innovative Learning', desc: 'VR, AR & gamified lessons.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Explore Yourself All Over The World</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it,i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">{it.icon}</div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
