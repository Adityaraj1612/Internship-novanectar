// src/components/Community.jsx
import React from 'react'
import communityImg from '../../assets/community.png'

export default function Community() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">About Us</span>
          <h2 className="text-3xl font-bold text-gray-800">Creating A Community Of Life Long Learners</h2>
          <p className="text-gray-600">
            Connecting learners worldwide through collaborative projects, peer review, and expert mentorship.
          </p>
          <ul className="space-y-2">
            {['Flexible Classes','Learn From Anywhere','Learn from Experts'].map((t, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center">✓</div>
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-800 text-white px-6 py-2 rounded hover:bg-black transition">
            Learn More About Us →
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={communityImg} alt="Community" className="w-full rounded-lg shadow" />
        </div>
      </div>
    </section>
  )
}
