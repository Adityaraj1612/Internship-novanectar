import React from 'react';
import { FaClock, FaUser, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cyberImage from '../assets/cyber-security.jpg';
import appDevImage from '../assets/app-developement.jpg';
import dataEngImage from '../assets/data-engineer.jpg';
import gameDevImage from '../assets/game-development.jpg';
import netdevImage from '../assets/net-developer.jpg';
import projectManagerImage from '../assets/project-manager.jpg';
import salesExecutiveImage from '../assets/sales-executive.jpg';
const CourseCard = ({ title, description, duration, price, oldPrice, image }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 relative">
    
    {/* Replace this: */}
    {/* <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div> */}

    {/* With this: */}
    <img src={image} alt={`${title} Thumbnail`} className="w-full h-48 object-cover" />

    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 leading-tight mb-3">
        {description} <a href="#" className="text-blue-500">see more...</a>
      </p>

      <div className="flex items-center text-yellow-400 text-sm mb-3">
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        <span className="text-gray-600 ml-2">(4.5/5 Ratings)</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-base font-semibold text-gray-800">
          Rs. {price} <span className="line-through text-red-500 text-sm">Rs. {oldPrice}</span>
        </div>
        <button className="px-4 py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
          Register Now
        </button>
      </div>
    </div>

    {/* Duration badge */}
    <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
      {duration}
    </span>
  </div>
);


export default function InternshipCoursesPage() {
  const courses = [
    {
      title: 'Cyber Security',
      description: ' Protecting systems, networks, and data from digital threats, unauthorized access, and cyberattacks to ensure confidentiality, integrity, and availability.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
      image:cyberImage
    },
    {
      title: 'App Development',
      description: 'Designing and building mobile or web applications to solve problems, provide services, or entertain users across platforms like Android, iOS, or web.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:  appDevImage
    },
    {
      title: 'Data Engineer',
      description: ' Building and maintaining scalable data pipelines, architectures, and infrastructure to support analytics, reporting, and machine learning..',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:  dataEngImage
    },
    {
      title: 'Game Development',
      description: 'Creating interactive games using programming, design, animation, and game engines like Unity or Unreal Engine for various platforms.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:  gameDevImage
    },
    {
      title: '.Net Developer',
      description: ' Designing and building web, desktop, or mobile applications using Microsoft’s .NET framework, C#, and related technologies.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:       netdevImage
    },
    {
      title: 'Project Manager',
      description: ' Planning, executing, and monitoring projects by managing teams, resources, budgets, and timelines to ensure successful delivery.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:       projectManagerImage
    },
    {
      title: 'Sales Executive',
      description: 'Identifying prospects, pitching products or services, negotiating deals, and closing sales to generate revenue and build client relationships.',
      duration: '3 Months',
      price: '5,999',
      oldPrice: '10,000',
        image:        salesExecutiveImage
    },
  ];

  return (
    <div className="bg-gray-50">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800">INTERNSHIP</h1>
        <div className="mt-4 inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">Top Internship</div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Explore Featured Internship</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 7 }).map((_, i) => (
            <CourseCard key={i}
              title={courses[i % courses.length].title}
              description={courses[i % courses.length].description}
              duration={courses[i % courses.length].duration}
              price={courses[i % courses.length].price}
              oldPrice={courses[i % courses.length].oldPrice}
              image={
                courses[i % courses.length].image} />
          ))}
        </div>
      </main>
       <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">NOVANECTAR SERVICES PVT. LTD.</h4>
            <p className="text-sm text-gray-400">NovaNectar Services is a Dehradun-based IT company delivering smart digital solutions like web development, app design, and marketing to drive business growth.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>About Us</li>
              <li>Courses</li>
              <li>Internships</li>
              <li>Blogs</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Courses</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Web Development</li>
              <li>Marketing</li>
              <li>UI UX Designer</li>
              <li>Data Science</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>📞 8979817073</li>
              <li>📍 GMS Road Dehradun, Uttarakhand, India</li>
              <li>📧 info@novanectar.co.in</li>
              <li className="flex space-x-3 mt-2">
                <a href="#" className="hover:text-white">📘</a>
                <a href="#" className="hover:text-white">🐦</a>
                <a href="#" className="hover:text-white">📸</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>


      {courses.map((course , index)=>(
        <div key =  {index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p>{course.title}</p>
             </div>
      ))}
    </div>
  );
}
