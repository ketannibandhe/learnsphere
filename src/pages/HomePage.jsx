import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Heading from '../components/Heading/Heading';
import Description from '../components/Description/Description';
import Benefits from '../components/Benefits/Benefits';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8ecae6] to-[#219ebc] ">
      <Navbar/>
      <Heading />
      <Description />
      <Benefits />
      <Testimonials />
      <div className=" inset-0 bg-gradient-to-br from-[#023047] to-[#ffb703] opacity-10 pointer-events-none"></div>
      <Footer/>
    </div>
  );
};

export default HomePage;
