// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home_page_components/Navbar';
import HomePage from './pages/Home';
import AboutUs from "./pages/AboutUs";
import InternshipCoursesPage from './pages/Intership';
import Testimonial from './components/Home_page_components/Testimonial';
import ContactUs from "./pages/ContactUs"; // Adjust path accordingly
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResult from './pages/SearchResult';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internship" element={<InternshipCoursesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contactus" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<SearchResult />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
