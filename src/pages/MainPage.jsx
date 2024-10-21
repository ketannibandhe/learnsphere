import React, { useState, useRef, useEffect } from "react";
import Navbar1 from "../components/Navbar/Navbar1";
import Footer from "../components/Footer";
import CoursesPage from "./CoursesPage";

const MainPage = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotRef = useRef(null); // Create a ref for the chatbot container

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  // Close chatbot when clicking outside
  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsChatbotOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-300 to-white">
      <Navbar1 />
      <div>
        <CoursesPage />
      </div>

      <div className="fixed bottom-10 right-4 z-50 flex flex-col items-end" ref={chatbotRef}>
        {/* Chatbot iframe */}
        {isChatbotOpen && (
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://www.chatbase.co/chatbot-iframe/NU6lWFXaqOEEu_hoqON0y"
            title="Chatbot"
            className="border border-gray-300 rounded mb-2" // Add margin-bottom to create space between iframe and button
          ></iframe>
        )}
        {/* Chatbot button */}
        <button
          onClick={toggleChatbot}
          className="bg-sky-600 text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-sky-700"
        >
          Chat
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
