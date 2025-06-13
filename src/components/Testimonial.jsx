// src/components/Testimonial.jsx
import React from 'react'
import studentVid from '../assets/student.mp4'

export default function Testimonial() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
          <video
            src={studentVid}
            controls
            className="w-full rounded-lg shadow"
            poster="/path/to/optional-thumbnail.jpg" // Optional: add a thumbnail image if you have one
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold">What Our Student Say</h3>
          <p className="italic">
            “The UI/UX course provided a solid foundation… I highly recommend NovaNectar to every aspiring designer!”
          </p>
          <p className="font-bold">— Subhranshu, Full Stack Developer</p>
        </div>
      </div>
    </section>
  )
}

