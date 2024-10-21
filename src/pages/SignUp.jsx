import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Link } from 'react-router-dom'; // Import Link for navigation
import svg6 from '../../src/assets/svg/svg6.jpeg';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the user data for submission
    const userData = { username, password, email }; // Included email

    setError(''); // Clear previous error message

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Show success message
        navigate('/login', { state: { username, password } }); // Pass username and password to login page
      } else {
        setError(data.error || 'Error occurred while signing up');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#bbd0ff] p-5">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-8 w-full">
        <div className="lg:w-1/2 flex flex-col justify-center p-6 order-last lg:order-first">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Sign Up for LearnSphere</h2>
          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border text-gray-800 border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-[#c8b6ff] transition duration-300 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-gray-800 border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-[#c8b6ff] transition duration-300 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-gray-800 border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-[#c8b6ff] transition duration-300 focus:outline-none"
              required
            />
            <button type="submit" className="bg-[#e7c6ff] text-white py-4 px-6 w-full rounded-full transition duration-300 hover:bg-[#c8b6ff] focus:ring-2 focus:ring-[#c8b6ff] focus:outline-none">
              Sign Up
            </button>
          </form>
          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-dark font-semibold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center p-6 order-first lg:order-last">
          <img src={svg6} alt="Signup Illustration" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
