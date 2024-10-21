// src/components/PlanSection.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const plans = [
  {
    title: "Personal Plan",
    description: "For you",
    users: "Individual",
    price: "Starting at ₹850 per month",
    buttonText: "Start subscription",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
  },
  {
    title: "Team Plan",
    description: "For your team",
    users: "2 to 20 people",
    price: "₹1,167 a month per user",
    buttonText: "Start subscription",
    features: [
      "Access to 12,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    title: "Enterprise Plan",
    description: "For your whole organization",
    users: "More than 20 people",
    price: "Contact sales for pricing",
    buttonText: "Request a demo",
    features: [
      "Access to 27,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
  },
];

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
      <p className="text-black mb-4">{plan.description}</p>
      <p className="text-lg font-semibold mb-4">{plan.price}</p>
      <button className="bg-gray-800 text-white py-2 px-4 mb-2 rounded-lg">
        {plan.buttonText}
      </button>
      <ul className="mb-4 text-dark">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="h-5 w-5 text-gray-800 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PlanSection = () => {
  return (
    <div className="w-screen">
        <Navbar/>
      <div className="container mx-auto p-6 pt-12 bg-gradient-to-r from-sky-200 via-sky-300 to-white">
        <h1 className="text-3xl text-dark font-bold text-center mb-6">
          Choose a plan for success
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlanSection;
