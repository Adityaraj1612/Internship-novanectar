import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import cyberImage from '../../assets/cyber-security.jpg';
import appDevImage from '../../assets/app-developement.jpg';
import dataEngImage from '../../assets/data-engineer.jpg';
import gameDevImage from '../../assets/game-development.jpg';
import netdevImage from '../../assets/net-developer.jpg';
import projectManagerImage from '../../assets/project-manager.jpg';
import salesExecutiveImage from '../../assets/sales-executive.jpg';
import socialMediaImage from '../../assets/social-media.jpg';

const internships = [
  {
    title: 'Cyber Security',
    description: 'Protecting systems, networks, and data from digital threats.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: cyberImage
  },
  {
    title: 'App Development',
    description: 'Designing and building mobile or web applications.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: appDevImage
  },
  {
    title: 'Data Engineer',
    description: 'Building and maintaining scalable data pipelines.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: dataEngImage
  },
  {
    title: 'Game Development',
    description: 'Creating interactive games using engines like Unity.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: gameDevImage
  },
  {
    title: '.Net Developer',
    description: 'Using .NET framework and C# for software development.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: netdevImage
  },
  {
    title: 'Project Manager',
    description: 'Managing projects, teams, and resources.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: projectManagerImage
  },
  {
    title: 'Sales Executive',
    description: 'Selling products/services and building client relationships.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: salesExecutiveImage
  },
  {
    title: 'Social Media Handling',
    description: 'Creating content and managing online engagement.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: socialMediaImage
  },
];

// Reusable CourseCard component
const CourseCard = ({ title, description, duration, price, oldPrice, image }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 relative">
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
          ₹{price} <span className="line-through text-red-500 text-sm">₹{oldPrice}</span>
        </div>
        <button className="px-4 py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
          Register Now
        </button>
      </div>
    </div>
    <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
      {duration}
    </span>
  </div>
);

export default function FeaturedCourses() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Explore Featured Internships
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((item, index) => (
            <CourseCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/internship')}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
          >
            View More Internships →
          </button>
        </div>
      </div>
    </section>
  );
}
