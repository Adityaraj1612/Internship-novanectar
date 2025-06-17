// src/components/Testimonial.jsx
import React, { useState, useEffect, useRef } from 'react'
import studentVid from '../../assets/student.mp4'

const slides = [
  {
    quote: '“The UI/UX Design course provided a rock‑solid foundation. The instructors were supportive and the projects were super engaging!”',
    name: 'Sarah',
    title: 'UI/UX Designer',
    avatar: '/avatars/sarah.jpg',
  },
  {
    quote: '“I built my first React app in just 2 weeks thanks to the hands‑on labs and 1:1 mentorship.”',
    name: 'Aditya Raj',
    title: 'Full‑Stack Developer',
    avatar: '/avatars/raj.jpg',
  },
  {
    quote: '“Thanks to the data science bootcamp, I landed my dream job analyzing real‑world datasets!”',
    name: 'Subhranshu',
    title: 'Data Scientist',
    avatar: '/avatars/maria.jpg',
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef(null)

  // auto‑advance every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearTimeout(timeoutRef.current)
  }, [current])

  return (
    <section className="py-6 bg-[#296AD2] text-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Video */}
        <div className="lg:w-1/2">
          <video
            src={studentVid}
            controls
            className="w-full h-96 md:h-[28rem] object-cover rounded-lg shadow-lg"
            poster="/path/to/optional-thumbnail.jpg"
          >
            Your browser does not support video.
          </video>
        </div>

        {/* Right: Carousel */}
        <div className="lg:w-1/2 flex flex-col items-start">
          {/* Pill + Heading */}
          <div className="flex flex-col items-start space-y-4 mb-6">
            <span className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              {/* ← placeholder for your thunderbolt icon */}
              <img src="/icons/thunderbolt.svg" alt="⚡" className="w-5 h-5 mr-2" />
              <span className="text-sm uppercase tracking-wide">Testimonials</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              What Our Students Say
            </h2>
          </div>

          {/* Slides */}
          <div className="relative w-full h-64 md:h-72 overflow-hidden">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`
                  absolute inset-0 p-6 transition-opacity duration-700
                  ${idx === current ? 'opacity-100' : 'opacity-0'}
                `}
              >
                <p className="mb-6 text-lg md:text-xl leading-relaxed">{s.quote}</p>
                <div className="flex items-center">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold">{s.name}</p>
                    <p className="text-sm md:text-base opacity-75">{s.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex space-x-3 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  clearTimeout(timeoutRef.current)
                  setCurrent(idx)
                }}
                className={`
                  w-3 h-3 md:w-4 md:h-4 rounded-full transition-all
                  ${idx === current ? 'bg-white' : 'bg-white/50'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
