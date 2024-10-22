import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CoursesPage from "./pages/CoursesPage";
import PlansPricing from "./pages/PlansPricing";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact/Contact";
import Test from "./pages/test"; // Import Test component

function App() {
  // Sample test data to pass to the Test component
  const tests = [
    {
      _id: '1',
      name: 'Sample Test 1',
      totalQuestions: 3,
      marksPerQuestion: 1,
      questions: [
        {
          questionText: 'What is 2 + 2?',
          options: ['1', '2', '3', '4'],
          correctAnswer: '4',
        },
        {
          questionText: 'What is the capital of France?',
          options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
          correctAnswer: 'Paris',
        },
        {
          questionText: 'What is the square root of 9?',
          options: ['1', '2', '3', '4'],
          correctAnswer: '3',
        },
      ],
    },
    // More tests can be added here
  ];

  return (
    <Router>
      <div className="bg-gradient-to-br from-[#ffcbf2] to-[#c8e7ff] min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/plans" element={<PlansPricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tests" element={<Test tests={tests} />} /> {/* Add the Test route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
