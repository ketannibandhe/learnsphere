import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/images/learnsphere_logo1.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    

  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center p-3 bg-gradient-to-r from-[#cdb4db] to-[#ffc8dd] shadow-md">
      {/* Left-aligned logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="LearnSphere Logo" className="h-12" />
      </div>

      {/* Centered items */}
      <div className="flex-grow text-center">
        <ul className="flex justify-center space-x-8 list-none">
          <li>
            <a href="#contact" className="text-gray-800 no-underline">Contact Us</a>
          </li>
          <li>
            <a href="#teach" className="text-gray-800 no-underline">Teach on LearnSphere</a>
          </li>
          <li>
            <a href="#teach" className="text-gray-800 no-underline">Plans & Pricing</a>
          </li>
        </ul>
      </div>

      {/* Right-aligned items */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-gray-800 no-underline">Login</Link>
        <Link to="/signup" className="text-gray-800 no-underline">Sign Up</Link>
        {/* <button className="px-2 py-1 bg-gray-800 text-white border-none cursor-pointer">
          Dark Mode
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
