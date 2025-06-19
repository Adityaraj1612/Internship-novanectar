// src/components/Hero.jsx
import React from 'react'
import faqIcon from '../../assets/Vector.png'     // thunderbolt
import satisfiedIcon from '../../assets/100percent_icon.png' // 100% icon
import studentsIcon from '../../assets/offlinestudents.png' // group icon
import novanectarinternship from '../../assets/novanectar internship.png' // internship icon
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
   <section id="hero" className="relative bg-blue-50 overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8  flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-8">
          {/* Capsule */}
          <span className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full shadow-sm">
            <img src={faqIcon} alt="FAQ Icon" className="w-4 h-4" />
            <span className="text-sm font-medium">Welcome To NovaNectar</span>
          </span>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold ui-serif text-gray-900 leading-tight">
            Empowering You  
            <br/>to Learn, Grow,  
            <br/>and Succeed
          </h1>

          {/* Sub‑text */}
          <p className="text-lg text-gray-600 max-w-md">
            Unlock your potential with expert-led courses designed for every goal and learn at your own pace.
          </p>

          {/* Buttons full‑width on md+ */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-center">
              Enroll Now →
            </button>
            <Link to="/internship">
            <button className="flex-1 border-2 font-bold border-blue-600 text-blue-800 px-20 py-4 rounded-md hover:bg-blue-100 transition text-center">
              Explore Internship →
            
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 relative flex justify-center">
          {/* Statistic Card: 100% Satisfied Learner */}
          <div className="absolute top-30 left-20 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center space-x-3">
            <img src={satisfiedIcon} alt="100%" className="w-6  text-black bg-blue-500 h-6" />
            <div>
              <p className="text-sm font-medium text-black-100">100% Satisfied</p>
              <p className="text-xs text-gray-500">Learners</p>
            </div>
          </div>

          {/* Statistic Card: 10K+ Online Students */}
          <div className="absolute bottom-10 right-20 z-50 transform translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center space-x-3">
            <img src={studentsIcon} alt="10K+" className="w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-900">10K+ Online</p>
              <p className="text-xs text-gray-500">Students</p>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative z-10">
            <img
              src={novanectarinternship}
              alt="Student pointing"
              className="w-full h-150 object-cover mr-12 max-w-md lg:max-w-xl rounded-lg "
            />
          </div>

          {/* Light Blob Behind */}
          <div className="absolute -top-20 -right-30 w-96 h-96 bg-blue-200 rounded-full opacity-50 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
