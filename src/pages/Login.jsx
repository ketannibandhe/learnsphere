import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import svg6 from '../../src/assets/svg/svg6.jpeg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Get location to access passed state

  useEffect(() => {
    // Check if state was passed and update username and password
    if (location.state) {
      setUsername(location.state.username);
      setPassword(location.state.password);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Logic to check credentials in MongoDB will go here

    // On successful login
    navigate('/courses', { state: { username } }); // Pass username to the CoursesPage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#bbd0ff] p-5">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8">
        <div className="lg:w-1/2 flex justify-center">
          <img src={svg6} alt="Login Illustration" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Login to LearnSphere</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username/Email ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
            <button type="submit" className="bg-[#e7c6ff] text-white py-3 px-6 rounded-full transition duration-300 hover:bg-[#c8b6ff]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
