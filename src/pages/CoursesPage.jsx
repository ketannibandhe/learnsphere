import React from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard'; // Import the CourseCard component

const CoursesPage = () => {
  const location = useLocation();
  const username = location.state?.username || 'Guest'; // Get username from location state, default to 'Guest' if not found

  const courses = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      description: "Learn full-stack web development with hands-on projects.",
      image: "./assets/images/wd.jpeg" // Corrected path to Web Development image
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      description: "Master the basics of data science and machine learning.",
      image: "./assets/images/ds.webp" // Corrected path to Data Science image
    },
    {
      id: 3,
      name: "Digital Marketing Strategies",
      description: "Explore the latest trends in digital marketing.",
      image: "./assets/images/dm.avif" // Corrected path to Digital Marketing image
    },
    {
      id: 4,
      name: "Graphic Design Masterclass",
      description: "Learn graphic design from beginner to advanced levels.",
      image: "gd.jpg" // Corrected path to Graphic Design image
    },
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#ffcbf2] to-[#c0fdff] flex flex-col justify-between">
      <div className="w-full mx-auto text-center flex-grow flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {username}!</h2>
        <p className="text-lg text-gray-600 mb-8">Explore our wide range of courses designed to enhance your skills and knowledge.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
