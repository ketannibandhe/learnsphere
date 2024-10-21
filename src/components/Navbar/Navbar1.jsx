import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/images/learnsphere_logo1.png';
import { useLocation } from 'react-router-dom';

const Navbar1 = () => {
    const location = useLocation();
  const username = location.state?.username || '';

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
            <Link to='/contact'>
            <a href="" className=" no-underline">Contact Us</a>
            </Link>
          </li>
          <li>
            <a href="" className="no-underline">Whislist</a>
          </li>
          <li>
            <a href="" className="no-underline">My Courses</a>
          </li>
        </ul>
      </div>

      {/* Right-aligned items */}
      <div className="flex space-x-4">
        <Link to="/profile" className=" no-underline">{username}</Link>
        {/* <Link to="/signup" className="text-gray-800 no-underline">Sign Up</Link> */}
        {/* <button className="px-2 py-1 bg-gray-800 text-white border-none cursor-pointer">
          Dark Mode
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar1;
