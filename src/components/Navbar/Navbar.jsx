import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/images/learnsphere_logo1.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center p-3 bg-gradient-to-r from-[#cdb4db] to-[#ffc8dd] shadow-md">
      <img src={logo} alt="LearnSphere Logo" className="h-16" /> {/* Adjusted height */}
      <ul className="flex space-x-4 list-none"> {/* Adjusted spacing */}
        <li>
          <a href="#contact" className="text-gray-800 no-underline">Contact Us</a>
        </li>
        <li>
          <a href="#teach" className="text-gray-800 no-underline">Teach on LearnSphere</a>
        </li>
        <li>
          <Link to="/signup" className="text-gray-800 no-underline">Sign Up</Link>
        </li>
        <li>
          <Link to="/login" className="text-gray-800 no-underline">Login</Link>
        </li>
        <li>
          <button className="px-2 py-1 bg-gray-800 text-white border-none cursor-pointer">
            Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
