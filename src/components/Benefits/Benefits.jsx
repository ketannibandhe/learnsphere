import React from 'react';
import svg5 from '../../assets/svg/svg5.jpeg'; // Replace with the correct path to svg5
import svg1 from '../../assets/svg/svg1.jpeg'; // Replace with the correct path to svg1
import svg2 from '../../assets/svg/svg2.jpeg'; // Replace with the correct path to svg2

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#bbd0ff] to-[#e7c6ff] text-center">
      <h2 className="text-4xl font-bold text-[#023047] mb-16">Benefits of Learning with LearnSphere</h2>

      {/* Card 1 */}
      <div className="flex items-stretch justify-between mb-12 flex-wrap-reverse lg:flex-nowrap">
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md text-left mb-6 lg:mb-0 flex flex-col justify-between h-64">
          <h3 className="text-2xl font-semibold text-[#8e44ad] mb-2 text-center">Quality Content</h3>
          <p className="text-base text-gray-600 flex-grow text-center">
            Our courses are curated by industry experts, ensuring you receive top-notch education that is both relevant and practical. 
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={svg5}
            alt="Quality Content"
            className="h-64 object-contain lg:ml-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-stretch justify-between mb-12 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={svg1}
            alt="Flexible Learning"
            className="h-64 object-contain lg:mr-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md text-left mb-6 lg:mb-0 flex flex-col justify-between h-64">
          <h3 className="text-2xl font-semibold text-[#8e44ad] mb-2 text-center">Flexible Learning</h3>
          <p className="text-base text-gray-600 flex-grow text-center">
            Enjoy the freedom to learn at your own pace. Our platform is accessible anytime, anywhere, allowing you to fit education into your lifestyle.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-stretch justify-between mb-12 flex-wrap-reverse lg:flex-nowrap">
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md text-left mb-6 lg:mb-0 flex flex-col justify-between h-64">
          <h3 className="text-2xl font-semibold text-[#8e44ad] mb-2 text-center">Interactive Experience</h3>
          <p className="text-base text-gray-600 flex-grow text-center">
            Dive into engaging content with quizzes, interactive sessions, and a supportive community to help you thrive.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={svg2}
            alt="Interactive Experience"
            className="h-64 object-contain lg:ml-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
