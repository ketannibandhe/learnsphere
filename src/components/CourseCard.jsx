import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <button className="bg-[#ecbcfd] text-white py-2 px-4 rounded-full transition duration-300 hover:bg-[#e5b3fe]">
          Go to Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
