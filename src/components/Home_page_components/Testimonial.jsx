// src/components/Testimonial.jsx
import React, { useState, useEffect, useRef } from 'react'
import faqIcon             from '../../assets/Vector.png'
import sarahAvatar         from '../../assets/sarah.jpg'
import adityaRajAvatar     from '../../assets/AdityaRaj.jpg'
import subhranshuAvatar    from '../../assets/Subhranshu.jpg'
import posterImg           from '../../assets/testimonial_video_poster.png'  // your left‑half image

const slides = [
  {
    quote: '“The UI/UX Design course provided a rock‑solid foundation. The instructors were supportive and the projects were super engaging!”',
    name: 'Sarah',
    title: 'UI/UX Designer',
    avatar: sarahAvatar,
  },
  {
    quote: '“I built my first React app in just 2 weeks thanks to the hands‑on labs and 1:1 mentorship.”',
    name: 'Aditya Raj',
    title: 'Full‑Stack Developer',
    avatar: adityaRajAvatar,
  },
  {
    quote: '“Thanks to the data science bootcamp, I landed my dream job analyzing real‑world datasets!”',
    name: 'Subhranshu',
    title: 'Data Scientist',
    avatar: subhranshuAvatar,
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0)
  const [showYT, setShowYT] = useState(false)
  const timeoutRef = useRef(null)

  // auto‑advance every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearTimeout(timeoutRef.current)
  }, [current])

  return (
    <section className="py-6 bg-[#296AD2] text-white relative">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">

        {/* LEFT: poster image with play icon */}
        <div
          className="lg:w-1/2 relative cursor-pointer rounded-lg overflow-hidden"
          onClick={() => setShowYT(true)}
        >
          <img
            src={posterImg}
            alt="Play testimonial video"
            className="w-full h-96 md:h-[28rem] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 hover:bg-white transition">
              <svg
                className="w-8 h-8 text-red-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="lg:w-1/2 flex flex-col items-start">
          {/* Pill + Heading */}
          <div className="flex flex-col items-start space-y-4 mb-6">
            <span className="flex items-center bg-white text-black px-4 py-2 rounded-full">
              <img src={faqIcon} alt="Testimonial Icon" className="w-4 h-4 mr-2" />
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
          <div className="flex justify-center space-x-3 mt-8">
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

      {/* YouTube Modal */}
      {showYT && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setShowYT(false)}
            >
              ×
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6Iy39kLpfr8"

              title="Testimonial Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
