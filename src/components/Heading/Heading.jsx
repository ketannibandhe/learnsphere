import React from 'react';
import svg4 from '../../assets/svg/svg4.png'; // Update with the correct path to your image

const Heading = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-16 bg-gradient-to-b from-[#cdb4db] to-[#ffc8dd]">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-semibold text-[#023047] leading-tight mb-4">
          The Best Online Courses for Your Future
        </h1>
        <p className="text-lg text-[#333] mb-6">
          Join LearnSphere and enhance your skills through premium courses and engaging content.
        </p>
        <button className="bg-[#ffafcc] text-white py-3 px-6 rounded-full transition duration-300 hover:bg-[#bde0fe] shadow-lg">
          Get Started
        </button>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img 
          src={svg4} 
          alt="Learning Illustration" 
          className="w-4/5 lg:w-3/5 rounded-lg shadow-md" 
        />
      </div>
    </section>
  );
};

export default Heading;