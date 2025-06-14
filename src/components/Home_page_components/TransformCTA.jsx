// src/components/TransformCTA.jsx
import React from 'react'
import student2 from '../../assets/transform.png'

export default function TransformCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Transform Your Future with Excellence in Education</h2>
          <ul className="space-y-2 text-gray-600">
            {[
              'Unlock your potential with expert guidance.',
              'Achieve your career and personal goals.',
              'Empower yourself with lifelong learning.'
            ].map((txt,i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-600 text-white flex items-center justify-center rounded-full">✓</div>
                {txt}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Get Started →
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={student2} alt="Transform" className="w-full rounded-lg shadow"/>
        </div>
      </div>
    </section>
  )
}
