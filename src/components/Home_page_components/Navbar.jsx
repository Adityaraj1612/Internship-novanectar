// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import logo from  "../../assets/logo.png"; // ✅ Make sure logo.png is correct and exists
import img1 from "../../assets/img2.jpg"; // ✅ Make sure img1.jpg is correct and exists
import { Link } from 'react-router-dom';
import { FaXbox } from 'react-icons/fa';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Internship', href: '/internship' },
  { name: 'About Us', href: '/about' },      // <-- FIXED HERE
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];




export default function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md w-full relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="NovaNectar Logo" className="h-12 w-auto object-contain" />
          </a>

          {/* Center: Navigation Links */}
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


          {/* Right: Search + User */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-black" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={img1}
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-black font-semibold">Hello</span>
              <Menu className="h-4 w-4 text-black" onClick={()=>setOpen(true)} />
            </div>
          </div>
        </div>
      </div>
           {/* Mobile Menu Button */}
     <div  className ={`  md:hidden block w-50 tr  h-100 border ${open ? "" : "hidden"}`} >
       hello
       <FaXbox onClick={()=>setOpen(false)}/>
     </div>
    </nav>
  );
}
