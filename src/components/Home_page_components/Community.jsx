import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import community1 from '../../assets/community1.jpg'
import community2 from '../../assets/community2.jpg'

export default function Community() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate() // ✅ navigate hook

  useEffect(() => {
    const target = 50
    const duration = 2000
    const intervalTime = 30
    const decrement = target / (duration / intervalTime)

    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(counter)
          return target
        }
        return prev + decrement
      })
    }, intervalTime)

    return () => clearInterval(counter)
  }, [])

  const formattedCount = Math.floor(count)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left column with grid layout */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center flex flex-col justify-center shadow-md transition-transform duration-500 hover:scale-105">
            <h3 className="text-4xl font-bold">{formattedCount}+</h3>
            <p className="mt-2 text-lg">Offline Internships</p>
          </div>

          <img src={community1} alt="Community 1" className="rounded-lg w-full h-full object-cover shadow-md" />

          <img src={community2} alt="Community 2" className="rounded-lg w-full h-full object-cover shadow-md" />

          <div className="bg-blue-50 p-6 rounded-lg text-center flex flex-col justify-center shadow-md transition-transform duration-500 hover:scale-105">
            <h3 className="text-4xl font-bold text-blue-800">{formattedCount}+</h3>
            <p className="mt-2 text-lg text-blue-900">Offline Internships</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-4">
          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Creating A Community Of Life Long Learners
          </h2>
          <p className="text-gray-600">
            Compellingly procrastinate equity invested markets with efficient process improvements. Actualize mission-critical partnerships with integrated portals.
          </p>
          <ul className="space-y-4">
            {['Flexible Classes', 'Learn From Anywhere', 'Learn from Experts'].map((t, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center">✓</div>
                {t}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate('/about')}
            className="mt-6 bg-blue-800 text-white px-6 py-2 rounded hover:bg-black transition"
          >
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  )
}
