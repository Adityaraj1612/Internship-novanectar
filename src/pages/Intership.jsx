import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Footer from "../components/Home_page_components/Footer";

import cyberImage from '../assets/cyber-security.jpg';
import appDevImage from '../assets/app-developement.jpg';
import dataEngImage from '../assets/data-engineer.jpg';
import gameDevImage from '../assets/game-development.jpg';
import netdevImage from '../assets/net-developer.jpg';
import projectManagerImage from '../assets/project-manager.jpg';
import salesExecutiveImage from '../assets/sales-executive.jpg';
import socialMediaImage from '../assets/social-media.jpg';
import softwareTestingImage from '../assets/software-testing.jpg';
import javaFullStackImage from '../assets/java-full-stack.jpg';
import pythonDevImage from '../assets/python-developer..jpg';
import pythondevlopmentImage from '../assets/python-developer.jpeg';
import reactDevImage from '../assets/react-developer.jpg';
import dataScienceImage from '../assets/data-analytics.jpeg';
import buinessAnalyticsImage from '../assets/business-analyst.jpeg';
import digitalMarketingImage from '../assets/digital-marketing..jpg';   
import accountancyImage from '../assets/accountant.jpg'; 
import frontendimqage from '../assets/frontend-developer.jpg';
  import fullstackImage from '../assets/full-stack-developer.jpg';
  import graphicDesignImage from '../assets/graphic-design.jpg';
  import seoImage from '../assets/SEO.jpg';
  import contentWritingImage from '../assets/content-writing.jpg';
  import HRimage from '../assets/HR..jpg';
import meanstackImage from '../assets/mean-stack-development.jpg';  
import  mernstackimage from '../assets/mern-stack-development.jpg';
import socialMediamanagerImage from '../assets/social-media-manager..jpg';
import uiuxdesignerimage  from '../assets/ui-ux-designer.jpeg';
import webdevelopmentImage from '../assets/web-development.jpg';
import wordpressimage from '../assets/wordpress..jpg';
import deimage from '../assets/DE.jpeg';
import aiimage from '../assets/ai.jpg';
import vedioiamge from '../assets/vedio editor.jpeg';
import emailmarketingimage from '../assets/email-marketing-thumbnail.webp';
import advancedexcelimage from '../assets/advanced-excel.jpg';
import telecallingimage from '../assets/telecalling.png';
import callcentreimage from '../assets/call-centre.webp';
import socialMediaMarketingImage from '../assets/socialmediamarketing.png';
import metaGoogleAdsImage from '../assets/meta-vs-google-ads.webp';
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

export default function InternshipCoursesPage() {
   const [selectedCategory, setSelectedCategory] = useState('all');

const courses = [
  {
    title: 'Cyber Security',
    description: 'Protecting systems, networks, and data from digital threats.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: cyberImage,
    category: 'trending'
  },
  {
    title: 'App Development',
    description: 'Designing and building mobile or web applications.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: appDevImage,
    category: 'trending'
  },
  {
    title: 'Data Engineer',
    description: 'Building and maintaining scalable data pipelines.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: dataEngImage,
    category: 'technology'
  },
  {
    title: 'Game Development',
    description: 'Creating interactive games using engines like Unity.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: gameDevImage,
    category: 'technology'
  },
  {
    title: '.Net Developer',
    description: 'Using .NET framework and C# for software development.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: netdevImage,
    category: 'technology'
  },
  {
    title: 'Project Manager',
    description: 'Managing projects, teams, and resources.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: projectManagerImage,
    category: 'technology'
  },
  {
    title: 'Sales Executive',
    description: 'Selling products/services and building client relationships.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: salesExecutiveImage,
    category: 'trending'
  },
  {
    title: 'Social Media Handling',
    description: 'Creating content and managing online engagement.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: socialMediaImage,
    category: 'technology'
  },
  {
    title: 'Software Testing',
    description: 'Detecting bugs and ensuring software quality through manual and automated testing processes like functional, regression, and performance tests.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: softwareTestingImage,
    category: 'technology'
  },
  {
    title: 'Java Full Stack Development',
    description: 'Creating both frontend and backend applications using Java, Spring Boot, Angular/React, and databases for enterprise solutions.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: javaFullStackImage,
    category: 'trending'
  },
  {
    title: 'Python Developer',
    description: 'Developing backend systems, automation tools, APIs, and data-driven applications using the Python programming language.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: pythonDevImage,
    category: 'trending'
  },
  {
    title: 'React Developer',
    description: 'Building dynamic, responsive web interfaces using the React JavaScript library, including component architecture and state management.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: reactDevImage,
    category: 'technology'
  },
  {
    title: 'Buiness Analyst ',
    description: 'Evaluating business processes and systems, gathering requirements, and proposing solutions to improve performance and achieve goals.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: buinessAnalyticsImage,
    category: 'trending'
  },
  {
    title: 'Accountant',
    description: 'Recording, analyzing, and reporting financial transactions and statements, ensuring compliance with laws and effective business financial management.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: accountancyImage,
    category: 'trending'
  },
  {
    title: 'Frontend Development',
    description: ' Developing the client-side of web applications using HTML, CSS, JavaScript, and frameworks like React to create responsive user interfaces.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: frontendimqage,
    category: 'trending'
  },
  {
    title: 'Content Creator',
    description: 'Producing engaging multimedia content such as videos, images, blogs, and social posts tailored to platforms and audience interests',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: contentWritingImage,
    category: 'trending'
  },
  {
    title: 'Data Visualization',
    description: 'Creating visual representations like charts, graphs, and dashboards to make complex data easily understandable and visually insightful.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: deimage,
    category: 'technology'
  },
  {
    title: 'Data Science',
    description: 'Combining statistics, programming, and domain expertise to extract knowledge and actionable insights from structured and unstructured data',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: dataScienceImage,
    category: 'technology'
  },
  {
    title: 'MEAN Stack Development',
    description: 'Developing full-stack web applications using MongoDB, Express.js, Angular, and Node.js for scalable and high-performance solutions',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: meanstackImage,
    category: 'trending'
  },
  {
    title: 'MERN Stack Development',
    description: 'Building modern web applications using MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend development',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: mernstackimage,
    category: 'trending'
  },
  {
    title: 'Machine Learning',
    description: 'Machine Learning is a technology that allows computers to learn from data and improve their performance without being explicitly programmed.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: aiimage,
    category: 'technology'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Designing intelligent algorithms and systems that learn from data to perform tasks such as prediction, classification, automation, and decision-making',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: aiimage,
    category: 'technology'
  },
  {
    title: 'Data Analytics',
    description: 'Analyzing large datasets using statistical tools and techniques to identify trends, patterns, and actionable insights for business decisions',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: dataEngImage,
    category: 'technology'
  },
  {
    title: 'SEO',
    description: 'Optimizing websites and content using keyword research, link-building, and technical improvements to improve rankings on search engines like Google',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: seoImage,
    category: 'trending'
  },
  {
    title: 'Video Editor',
    description: 'Editing, assembling, and enhancing raw video footage with effects, sound, and transitions to produce professional-quality video content.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: vedioiamge,
    category: 'trending'
  },
  {
    title: 'HR',
    description: 'Managing recruitment, employee engagement, payroll, compliance, and company culture to ensure smooth and productive human resource operations.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: HRimage,
    category: 'trending'
  },
  {
    title: 'Web Development',
    description: 'Creating, deploying, and maintaining dynamic websites and web applications using frontend and backend technologies for optimal user experience.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: webdevelopmentImage,
    category: 'technology'
  },
  {
    title: 'Content Writing',
    description: 'Crafting clear, engaging, and SEO-optimized written content for blogs, websites, articles, and marketing materials to inform or persuade target audiences.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: contentWritingImage,
    category: 'trending'
  },
  {
    title: 'Social Media Manager',
    description: 'Strategizing, creating, scheduling, and managing content across social media platforms to grow brand presence, engagement, and audience interaction.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: socialMediamanagerImage,
    category: 'trending'
  },
  {
    title: 'UI-UX Designer',
    description: 'Designing intuitive, engaging, and user-centered digital interfaces by researching user behavior and crafting seamless experiences and appealing visuals.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: uiuxdesignerimage,
    category: 'technology'
  },
  {
    title: 'WordPress Developer',
    description: 'Building, customizing, and maintaining websites using WordPress CMS, plugins, themes, and PHP, ensuring responsive and user-friendly design.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: wordpressimage,
    category: 'technology'
  },
  {
    title: 'Digital Marketing',
    description: 'Promoting products or services through digital channels like SEO, social media, email, and paid advertising to increase visibility, engagement, and sales.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: digitalMarketingImage,
    category: 'trending'
  },
  {
    title: 'Graphic Design',
    description: 'Creating compelling visual content such as logos, banners, brochures, and social media creatives for branding, marketing, and effective visual communication.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: graphicDesignImage,
    category: 'trending'
  },
  {
    title: 'Python Full Stack Development',
    description: 'Involves building both the front-end and back-end of web applications using Python for server-side logic and technologies like HTML, CSS, and JavaScript for the user interface.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: pythondevlopmentImage,
    category: 'technology'
  },
  {
    title: 'Full Stack Development',
    description: 'Promoting products or services through digital channels like SEO, social media, email, and paid advertising to increase visibility, engagement, and sales.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: fullstackImage,
    category: 'trending'
  },
  {
    title: 'Email Marketing',
    description: 'Create engaging content, segment email lists, and learn to track and optimize campaign effectiveness. This role provides valuable experience in a key digital marketing area and often involves collaboration with other marketing teams.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: emailmarketingimage,
    category: 'trending'
  },
  {
    title: 'Advanced Excel',
    description: 'This internship are designed to equip individuals with the skills needed to handle large datasets, create insightful reports, and streamline workflows using Excel. ',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: advancedexcelimage,
    category: 'technology'
  },
  {
    title: 'Tele Calling',
    description: 'This internship cover topics like active listening, objection handling, and building rapport, ultimately aiming to enhance customer satisfaction and drive business success.',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: telecallingimage,
    category: 'trending'
  },
  {
    title: 'Support Calling',
    description: ' This often involves on-call management, where personnel are responsible for addressing critical issues or providing customer service when the main support staff is unavailable. .',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: callcentreimage,
    category: 'trending'
  },
  {
    title: 'Social Media Marketing ',
    description: 'This internship  involves creating and publishing content, engaging with the audience, and running social media ads to achieve marketing goals like increasing brand awareness, driving website traffic, and boosting sales. ',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: socialMediaMarketingImage,
    category: 'trending'
  },
  {
    title: 'Meta ads & Google ads',
    description: 'Meta Ads excels at building brand awareness and engaging users through social media, while Google Ads is more effective for reaching users actively searching for products or services. ',
    duration: '3 Months',
    price: '5999',
    oldPrice: '10000',
    image: metaGoogleAdsImage,
    category: 'technology'
  }
];

 const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter((course) => course.category === selectedCategory);

  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800"> OFFLINE INTERNSHIP</h1>
        <div className="mt-8 inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">Top Internship</div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className=" mt-3 text-3xl font-semibold text-gray-800 mb-4 text-center">Explore Featured Internship</h2>

      <div className="flex gap-4 justify-center mb-8">
          {['trending', 'technology', 'all'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-150 ease-in-out ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {cat === 'trending' ? '🔥 Trending' : cat === 'technology' ? '💻 Technology' : 'All'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCourses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(Math.ceil(filteredCourses.length / itemsPerPage))].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-9 h-9 rounded border text-sm font-medium \${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-100`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}


