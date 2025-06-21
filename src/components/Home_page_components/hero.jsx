import React from 'react'
import faqIcon from '../../assets/Vector.png'     // thunderbolt
import satisfiedIcon from '../../assets/100percent_icon.png' // 100% icon
import studentsIcon from '../../assets/offlinestudents.png' // group icon
import novanectarinternship from '../../assets/novanectar internship.png' // internship icon
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
// ...existing code...
<section id="hero" className="relative bg-blue-50 overflow-hidden py-8 sm:py-16">
  <div className="container mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
    {/* LEFT COLUMN */}
    <div className="flex-1 space-y-6 sm:space-y-8">
      {/* Capsule */}
      <span className="inline-flex items-center bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm">
        <img src={faqIcon} alt="FAQ Icon" className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-medium ml-2">Welcome To NovaNectar</span>
      </span>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold ui-serif text-gray-900 leading-tight">
        Empowering You  
        <br className="hidden sm:block"/>to Learn, Grow,  
        <br className="hidden sm:block"/>and Succeed
      </h1>

      {/* Sub‑text */}
      <p className="text-base sm:text-lg text-gray-600 max-w-md">
        Unlock your potential with expert-led courses designed for every goal and learn at your own pace.
      </p>

      {/* Buttons full‑width on md+ */}
      <div className="flex flex-col sm:flex-row gap-2">
        <Link to="/internship" onClick={() => window.scrollTo(0, 0)}>
          <button className="w-full sm:w-auto border-2 font-bold border-blue-600 text-blue-800 px-6 sm:px-10 py-3 sm:py-4 rounded-md hover:bg-blue-100 transition text-center">
            Explore Internship →
          </button>
        </Link>
        <Link to="/signup" onClick={() => window.scrollTo(0, 0)}>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md hover:bg-blue-700 transition text-center">
            Enroll Now →
          </button>
        </Link>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex-1 relative flex justify-center mt-8 lg:mt-0">
      {/* Statistic Card: 100% Satisfied Learner */}
      <div className="absolute top-4 left-4 sm:top-30 sm:left-20 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center space-x-2 sm:space-x-3">
        <img src={satisfiedIcon} alt="100%" className="w-5 h-5 sm:w-6 sm:h-6 text-black bg-blue-500" />
        <div>
          <p className="text-xs sm:text-sm font-medium text-black-100">100% Satisfied</p>
          <p className="text-xs text-gray-500">Learners</p>
        </div>
      </div>

      {/* Statistic Card: 10K+ Online Students */}
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-20 z-50 transform translate-x-1/2 bg-white rounded-lg shadow-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center space-x-2 sm:space-x-3">
        <img src={studentsIcon} alt="10K+" className="w-5 h-5 sm:w-6 sm:h-6" />
        <div>
          <p className="text-xs sm:text-sm font-medium text-gray-900">10K+ Online</p>
          <p className="text-xs text-gray-500">Students</p>
        </div>
      </div>

      {/* Main Hero Image */}
      <div className="relative z-10">
        <img
          src={novanectarinternship}
          alt="Student pointing"
          className="w-60 h-60 sm:w-full sm:h-150 object-cover mr-0 sm:mr-12 max-w-xs sm:max-w-md lg:max-w-xl rounded-lg"
        />
      </div>

      {/* Light Blob Behind */}
      <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-30 w-60 h-60 sm:w-96 sm:h-96 bg-blue-200 rounded-full opacity-50 filter blur-3xl"></div>
    </div>
  </div>
</section>
// ...existing code...
  )
}