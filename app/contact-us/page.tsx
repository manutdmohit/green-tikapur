'use client';

import React, { FormEvent } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Message sent successfully');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-8">
      <h1 className="text-4xl font-bold mt-4 mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-center  max-w-4xl mx-auto">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl mb-4 ">सम्पर्क गर्नुहोस्</h2>
          <p className="mb-8 text-xl">
            हामी तपाईंबाट सुन्न चाहन्छौं! तपाईंलाई कुनै प्रश्न, प्रतिक्रिया वा
            केही सोध्न चाहनुहुन्छ वा स्वागत गर्नुहुन्छ, हामीलाई सम्पर्क
            गर्नुहोस्।
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-4 mb-5" />
              <div>
                <h3 className="font-semibold">ठेगाना</h3>
                <p>सेती अञ्चल जिल्ला कैलाली टीकापुर नगरपालिका वडा न. ९</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-4 mb-5" />
              <div>
                <h3 className="font-semibold">फोन</h3>
                <p>९८४८४४०२८१, ०९१–५६०१८९</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-4 mb-5" />
              <div>
                <h3 className="font-semibold">ईमेल</h3>
                <p>saudlalbahadur2017@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg md:mb-5">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
