// Faqs.jsx
import React from 'react';

const Faqs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">What is MyLinki?</h2>
          <p>
            MyLinki is a tool that allows users to create a personalized landing page with multiple links. It's commonly used in social media bios to share various links from a single URL.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">How do I create a MyLinki?</h2>
          <p>
            To create a MyLinki, you can sign up on their website and customize your links and appearance. Once you're done, you can copy the MyLinki URL and share it on your social media profiles.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">What is Solo.to?</h2>
          <p>
            Solo.to is a similar tool to MyLinki, allowing users to create a personalized landing page with multiple links. It offers additional customization options and analytics features.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Can I use both MyLinki?</h2>
          <p>
            Yes, you can use both MyLinki and Solo.to to maximize your link-sharing capabilities. Each platform offers unique features and customization options, so you can choose the one that best fits your needs.
          </p>
        </div>
      </div>
      <p>
        If you have any other questions or inquiries, feel free to contact us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
      </p>
    </div>
  );
};

export default Faqs;
