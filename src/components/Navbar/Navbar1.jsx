import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/learnsphere_logo1.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center p-3 bg-dark">
      {/* Left-aligned logo */}
      <div className="flex-shrink-0">
        <Link to='/'>
          <img src={logo} alt="LearnSphere Logo" className="h-12" />
        </Link>
      </div>

      {/* Centered items */}
      <div className="flex-grow text-center">
        <ul className="flex justify-center space-x-8 list-none">
          <li>
            <a href="/contact" className="text-white no-underline">Contact Us</a>
          </li>
          <li>
            <a href="/login" className="text-white no-underline">Teach on LearnSphere</a>
          </li>
          <li>
            <a href="/plans" className="text-white no-underline">Plans & Pricing</a>
          </li>
          <li>
            {/* New Link for Tests */}
            <Link to='/tests' className="text-white no-underline">Tests</Link>
          </li>
        </ul>
      </div>

      {/* Right-aligned items */}
      <div className="flex space-x-4 px-5">
        <Link to="/login" className="text-white no-underline">Login</Link>
        <Link to="/signup" className="text-white no-underline">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
