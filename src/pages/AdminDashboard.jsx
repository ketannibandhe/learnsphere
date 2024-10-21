import React, { useState } from 'react';

const AdminDashboard = () => {
  const [video, setVideo] = useState(null);
  const [note, setNote] = useState(null);
  const [videoMessage, setVideoMessage] = useState('');
  const [noteMessage, setNoteMessage] = useState('');

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);
  
    try {
      const response = await fetch('http://localhost:5000/api/uploadVideo', { // Correct endpoint
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      setVideoMessage(data.message || 'Video upload failed.');
    } catch (error) {
      setVideoMessage('Something went wrong.');
      console.error(error); // Log the error for better debugging
    }
  };
  
  const handleNoteUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('note', note);
  
    try {
      const response = await fetch('http://localhost:5000/api/uploadNote', { // Correct endpoint
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      setNoteMessage(data.message || 'Note upload failed.');
    } catch (error) {
      setNoteMessage('Something went wrong.');
      console.error(error); // Log the error for better debugging
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffd6ff] to-[#bbd0ff] p-10">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="flex flex-wrap justify-center"> {/* Flex wrap and center the items */}
        {/* Video Upload Section */}
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg m-2 flex-shrink-0"> {/* Flex-shrink to avoid stretching */}
          <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
          <form onSubmit={handleVideoUpload} className="space-y-4">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
            <button type="submit" className="bg-[#e7c6ff] text-white py-2 px-4 rounded-lg w-full">
              Upload Video
            </button>
          </form>
          {videoMessage && <p className="mt-4 text-center text-red-500">{videoMessage}</p>}
        </div>

        {/* Notes Upload Section */}
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg m-2 flex-shrink-0"> {/* Flex-shrink to avoid stretching */}
          <h2 className="text-2xl font-bold mb-4">Upload Note</h2>
          <form onSubmit={handleNoteUpload} className="space-y-4">
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setNote(e.target.files[0])}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
            <button type="submit" className="bg-[#e7c6ff] text-white py-2 px-4 rounded-lg w-full">
              Upload Note
            </button>
          </form>
          {noteMessage && <p className="mt-4 text-center text-red-500">{noteMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
