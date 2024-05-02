// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or inquiries, feel free to reach out to us using the form below or via email. We'll get back to you as soon as possible.
      </p>
      <form className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
      <p>
        You can also reach us via email at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.
      </p>
    </div>
  );
};

export default Contact;
