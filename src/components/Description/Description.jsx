import React from 'react';
import { FaVideo, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';

const Description = () => {
  return (
    <section className="bg-[#f4f7fa] py-16 px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#333] mb-4">What LearnSphere Offers You</h2>
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          Enhance your learning experience with video lectures, comprehensive notes, and regular tests.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex justify-around items-start space-x-8">
        <div className="text-center max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <FaVideo size={60} className="text-[#ffd6ff] mx-auto mb-4 hover:scale-110 transition-transform duration-200" />
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">Watch Videos</h3>
          <p className="text-gray-600">Access high-quality video courses anytime, anywhere.</p>
        </div>

        <div className="text-center max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <FaFileAlt size={60} className="text-[#e7c6ff] mx-auto mb-4 hover:scale-110 transition-transform duration-200" />
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">Take Notes</h3>
          <p className="text-gray-600">Download course notes for offline use and learning.</p>
        </div>

        <div className="text-center max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <FaClipboardCheck size={60} className="text-[#c8b6ff] mx-auto mb-4 hover:scale-110 transition-transform duration-200" />
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">Give Tests</h3>
          <p className="text-gray-600">Evaluate your progress with regular tests and quizzes.</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
