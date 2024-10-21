import React, { useState } from 'react';
import videoData from '../data/videoData'; // Ensure this file exports an array of video objects
import notesData from '../data/notesData'; // Ensure this file exports an array of notes
import Navbar1 from '../components/Navbar/Navbar1';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const username = location.state?.username || '';
  const [currentVideo, setCurrentVideo] = useState(videoData[0]); // Set initial video
  const [showNotes, setShowNotes] = useState(false); // State to toggle notes visibility

  const handleVideoSelect = (video) => {
    setCurrentVideo(video); // Update current video
  };

  return (
    <div className='w-screen'>
      <Navbar1 />
      <div className="flex flex-col lg:flex-row bg-gray-100p-4">
        {/* Video Player Section */}
        <div className="flex-1 p-5">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to the Course</h1>
          <div className="relative mb-5">
            <video
              controls
              src={currentVideo.src}
              className="rounded-lg shadow-lg mx-auto h-80 " // Adjusted width and height
            />
          </div>
          <div className="flex justify-center"> {/* Centering the button */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="mt-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700 shadow-md"
            >
              {showNotes ? 'Hide Notes' : 'Click Here to View Notes'}
            </button>
          </div>
          {showNotes && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Notes</h2>
              <ul className="list-disc pl-5">
                {notesData.map((note, index) => (
                  <li key={index} className="mt-1 flex justify-between items-center">
                    <span className="text-gray-700">{note.title}</span>
                    <a 
                      href={note.filePath} 
                      download // This attribute triggers the download
                      className="ml-4 bg-purple-500 text-white py-1 px-3 rounded transition duration-300 hover:bg-purple-600 shadow"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Video List Section */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-5 mt-5 lg:mt-0 lg:ml-5">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Videos List</h2>
          <ul className="space-y-3">
            {videoData.map((video) => (
              <li key={video.id} className="flex justify-between items-center p-3 border-b border-gray-200">
                <span className="text-gray-800">{video.title}</span>
                <button
                  onClick={() => handleVideoSelect(video)}
                  className="bg-green-500 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-green-600 shadow"
                >
                  Play
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
