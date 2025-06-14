// src/components/Hero.jsx
import React from 'react'
import heroImg from '../../assets/hero.png'

export default function Hero() {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Welcome to NovaNectar</span>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering You to Learn, Grow, and Succeed
          </h1>
          <p className="max-w-md text-gray-600">
            Unlock your potential with expert-led courses designed for every goal, on any device.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Enroll Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Explore Courses →
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                {/* replace with icon */}
                🎓
              </div>
              <div>
                <p className="text-sm font-semibold">30K+ Students</p>
                <p className="text-xs text-gray-500">Trusted Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                👨‍🏫
              </div>
              <div>
                <p className="text-sm font-semibold">200+ Instructors</p>
                <p className="text-xs text-gray-500">Industry Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                🏆
              </div>
              <div>
                <p className="text-sm font-semibold">15K+ Certificates</p>
                <p className="text-xs text-gray-500">Earned</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src={heroImg} alt="Student pointing" className="w-full rounded-lg shadow-lg relative z-10" />
          {/* blue gradient blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-50 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
