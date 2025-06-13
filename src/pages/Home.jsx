// src/pages/Home.jsx
import React from 'react'
import img1 from '../assets/image.png'

export default function Home() {
  return (
    <header className="bg-blue-50">
      <div className="container mx-auto px-4 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
       

        {/* Right image */}
        <div className="flex-1">
          <img
            src={img1}
            alt="Student pointing"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </header>
  )
}
