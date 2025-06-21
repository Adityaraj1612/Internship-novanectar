// src/components/TransformCTA.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import student2 from '../../assets/transform.png'
import faqIcon from '../../assets/Vector.png'
export default function TransformCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left column */}
        <div className="md:w-1/2 pl-4">
          {/* Contact Us pill */}
          <div className="flex items-center mb-3">
            <span className="flex items-center bg-white shadow px-3 py-1 rounded-full">
              {/* replace with your thunderbolt icon */}
              <img src={faqIcon} alt="FAQ Icon" className="w-4 h-4" />
              <span className="text-sm font-medium">ContactUs</span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transform Your Future with Excellence in Education
          </h2>

          {/* Bullet list */}
          <ul className="space-y-4 text-gray-600">
            {[
              'Unlock your potential with expert guidance.',
              'Achieve your academic and personal goals.',
              'Empower yourself with lifelong learning skills.'
            ].map((txt, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 bg-[#0EA16B] text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <span className="text-left">{txt}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className=" mt-10">
            <button
              onClick={() => {
                navigate('/contactus');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
            >
              contactus →
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Blue circle behind the image */}
          <div className=" absolute  rounded-full h-75 w-75 bg-blue-500  border"></div>
          
          <img
            src={student2}
            alt="Transform"
            className="relative z-10 w-full max-w-sm md:max-w-md rounded-lg "
          />
        </div>
      </div>
    </section>
  )
}
