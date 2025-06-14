// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Home_page_components/Navbar';
import HomePage from './pages/Home';

import InternshipCoursesPage from './pages/Intership';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internship" element={<InternshipCoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
