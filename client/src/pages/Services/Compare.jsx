// Compare.jsx
import React from 'react';

const Compare = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Compare Linktree and Solo.to</h1>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Linktree</h2>
          <p>
            Linktree is a popular tool for creating a landing page with multiple links. It offers a simple and straightforward interface, making it easy to set up and customize your page.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Easy to use</li>
            <li>Quick setup</li>
            <li>Basic customization options</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Solo.to</h2>
          <p>
            Solo.to is a similar tool to Linktree but offers more advanced customization options and features. It allows users to create a more personalized and branded landing page.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Advanced customization</li>
            <li>Additional features like analytics</li>
            <li>More control over branding</li>
          </ul>
        </div>
      </div>
      <p>
        Both Linktree and Solo.to are great options for creating a landing page with multiple links. Choose the one that best fits your needs and preferences.
      </p>
    </div>
  );
};

export default Compare;