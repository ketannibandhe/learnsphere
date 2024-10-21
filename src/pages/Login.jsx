import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import svg6 from '../../src/assets/svg/svg6.jpeg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUsername(location.state.username);
      setPassword(location.state.password);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Clear previous error message
    setError('');
  
    // Hardcoded admin credentials for the teachers
    const adminCredentials = [
      { username: 'teacher1', password: 'teach123' },
      { username: 'teacher2', password: 'teach456' },
    ];
  
    // Check if the username and password match admin credentials
    const isAdmin = adminCredentials.some(
      (admin) => admin.username === username && admin.password === password
    );
  
    // If the user is an admin, redirect them to the Admin Dashboard
    if (isAdmin) {
      navigate('/admin-dashboard', { state: { username } });
      return; // Stop further execution
    }
  
    // If not admin, proceed to check with the backend for regular users
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // If login successful for non-admin users, navigate to courses page
        navigate('/courses', { state: { username } });
      } else {
        // If login failed, set the error message
        setError(data.message || 'Invalid username or password');
      }
    } catch (error) {
      // Handle any other errors
      setError('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#bbd0ff] p-5">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8 w-full">
        <div className="lg:w-1/2 flex flex-col justify-center p-6 order-last lg:order-first">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Login to LearnSphere</h2>
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Username/Email ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-[#c8b6ff] transition duration-300 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-[#c8b6ff] transition duration-300 focus:outline-none"
              required
            />
            <button type="submit" className="bg-[#e7c6ff] text-white py-4 px-6 w-full rounded-full transition duration-300 hover:bg-[#c8b6ff] focus:ring-2 focus:ring-[#c8b6ff] focus:outline-none">
              Login
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 flex justify-center p-6 order-first lg:order-last">
          <img src={svg6} alt="Login Illustration" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Login;
