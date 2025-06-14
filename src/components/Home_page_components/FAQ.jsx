// src/components/FAQ.jsx
import React, { useState } from 'react'

const faqs = [
  'Can I enroll in multiple courses at once?',
  'What kind of support can I expect from instructors?',
  'Are the courses self-paced or do they have specific start/end dates?',
  'Are there any prerequisites for the courses?',
  'Can I download the course materials for offline access?'
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((q,i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => setOpen(open===i? null : i)}
              >
                <span className="font-medium text-gray-800">{q}</span>
                <span>{open===i ? '–' : '+'}</span>
              </button>
              {open===i && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
