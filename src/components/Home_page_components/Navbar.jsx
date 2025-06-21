/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { FaXbox } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import img1 from "../../assets/img2.jpg";
import searchRoutes from '../../data/searchRoutes'; // adjust path as needed


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Internship', href: '/internship' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contactus' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

 const handleSearchSubmit = () => {
  const lowerQuery = searchQuery.trim().toLowerCase();
  const matchedRoute = searchRoutes[lowerQuery];

  if (matchedRoute) {
    navigate(matchedRoute);
  } else {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // fallback page
  }

  setShowSearch(false);
  setSearchQuery('');
};


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <nav className="bg-white shadow-md w-full relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to='/'>
            <img src={logo} alt="NovaNectar Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-black hover:text-blue-600 font-semibold transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
{/* Login / Signup Buttons (Desktop) */}
<div className="hidden md:flex items-center space-x-4">
  <Link to="/login">
    <button className="text-black-600 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
      Login
    </button>
  </Link>
  <Link to="/signup">
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Sign Up
    </button>
  </Link>
</div>


          {/* Search Icon + Input Dropdown */}
          <div className="relative hidden md:flex items-center space-x-4">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-5 w-5 text-black" />
            </button>

            {showSearch && (
              <div className="absolute top-10 right-0 bg-white border rounded-md shadow-md px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="ml-2 text-blue-600 font-medium"
                  onClick={handleSearchSubmit}
                >
                  Go
                </button>
              </div>
            )}
            
            <div className="flex items-center space-x-2 md:hidden">
              <img src={img1} alt="User" className="h-8 w-8 rounded-full" />
              <Menu className="h-6 w-6 text-black" onClick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 p-6 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <FaXbox onClick={() => setOpen(false)} className="text-2xl text-black cursor-pointer" />
        </div>
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-lg font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
{/* Login / Signup Buttons (Mobile) */}
<div className="mt-6 flex flex-col space-y-3">
  <Link to="/login">
    <button className="w-full text-blue-600 font-semibold px-4 py-2 rounded border border-blue-600 hover:bg-blue-50 transition">
      Login
    </button>
  </Link>
  <Link to="/signup">
    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Sign Up
    </button>
  </Link>
</div>

      </div>
    </nav>
  );
}
