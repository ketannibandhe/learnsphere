import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CoursesPage from './pages/CoursesPage';
import NotFound from './pages/NotFound'; // Import a NotFound component for 404 handling
import './App.css';  // Global styles, if any

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-[#ffcbf2] to-[#c8e7ff] min-h-screen">
        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Routes for Sign Up and Login pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Route for the Courses Page */}
          <Route path="/courses" element={<CoursesPage />} />

          {/* Route for handling 404 errors */}
          <Route path="*" element={<NotFound />} /> {/* Add NotFound route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
