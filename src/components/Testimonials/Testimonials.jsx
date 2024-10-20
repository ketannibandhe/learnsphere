import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#f4f7fa] text-center">
      <h2 className="text-3xl text-gray-800 mb-10">What Our Students Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-1/3 bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-5">
            "LearnSphere has transformed my learning experience. The videos are top-notch, and the tests help me track my progress!"
          </p>
          <h4 className="text-lg text-gray-800">John Doe</h4>
        </div>
        <div className="w-1/3 bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-5">
            "Amazing platform! The ability to download notes and give tests at my convenience is a game-changer."
          </p>
          <h4 className="text-lg text-gray-800">Jane Smith</h4>
        </div>
        <div className="w-1/3 bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-5">
            "I love how engaging and interactive the content is. The best e-learning platform I've used so far!"
          </p>
          <h4 className="text-lg text-gray-800">Alex Johnson</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
