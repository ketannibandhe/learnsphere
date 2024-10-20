import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#bbd0ff] text-center p-5">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <button 
        onClick={handleHomeRedirect} 
        className="bg-[#e7c6ff] text-white py-2 px-4 rounded-full transition duration-300 hover:bg-[#c8b6ff]"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
