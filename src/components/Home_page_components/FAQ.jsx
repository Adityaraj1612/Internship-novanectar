import React, { useState } from 'react'
import faqIcon from '../../assets/Vector.png'

const faqs = [
  {
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Absolutely! You can enroll in multiple courses at once and learn at your convenience.'
  },
  {
    question: 'What kind of support can I expect from instructors?',
    answer: 'You’ll receive full guidance, doubt resolution, and active mentorship throughout the course.'
  },
  {
    question: 'Are the courses self-paced or do they have specific start/end dates?',
    answer: 'Our courses are self-paced, so you can learn whenever it suits your schedule.'
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer: 'None at all! Beginners are more than welcome to start learning from scratch.'
  },
  {
    question: 'Can I download the course materials for offline access?',
    answer: 'Yes! You can download materials and access them even when offline.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-2">
          
            <span className="w-4 h-4 mr-1">
              
              <img src={faqIcon} alt="FAQ Icon" className="w-4 h-4" />

            </span>
            <span className="text-sm font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
        </div>

        
        <div className="rounded-xl overflow-hidden shadow-md divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 flex justify-between items-center transition-all duration-200"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="text-xl text-blue-600">{open === i ? '×' : '+'}</span>
              </button>
              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-blue-50 px-6 ${
                  open === i ? 'max-h-40 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
