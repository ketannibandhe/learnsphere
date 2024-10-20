import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-[#eef1f7] text-center" id="contact">
      <h2 className="text-3xl text-gray-800 mb-10">Ready to Start Learning? Contact Us!</h2>
      <div className="flex justify-center">
        <form className="w-1/2 bg-white p-10 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg text-base"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-5 border border-gray-300 rounded-lg text-base"
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
