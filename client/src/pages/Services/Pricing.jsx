// Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Pricing Plans</h1>
      <div className="mb-8">
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
          <p className="text-gray-600 mb-4">Perfect for getting started with essential features</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">$0</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
          <p className="text-gray-600 mb-4">Unlock additional features and customization options</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">$9.99</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Save 10% with semi-annual billing</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">Enterprise Plan</h2>
          <p className="text-gray-600 mb-4">Tailored solutions for businesses with advanced needs</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">$99.99</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Save 20% with annual billing</p>
        </div>
      </div>
      <p>
        Need more information or have custom requirements? Feel free to contact us at <a href="mailto:sales@example.com" className="text-blue-500">sales@example.com</a>.
      </p>
    </div>
  );
};

export default Pricing;
