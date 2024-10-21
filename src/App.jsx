import React, { useState } from "react";
// import { MessageCircle } from "lucide-react";
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

function App() {
  

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
          <Route path="*" element={<NotFound />} />

        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
