// src/components/Footer.jsx
import React from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src={logo} alt="NovaNectar Logo" className="w-24"/>
          <p className="text-sm leading-relaxed">
            NovaNectar EduScrippt Ltd.<br/>
            Empowering learners with top‑quality online education.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            {['Home','Courses','About','Contact'].map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Courses</h4>
          <ul className="space-y-1 text-sm">
            {['UI/UX','Full Stack','Data Science','Python'].map((c,i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">📞 +91 6278359903<br/>✉️ info@novanectar.in</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} NovaNectar EduScrippt Ltd. All rights reserved.
      </div>
    </footer>
  )
}
