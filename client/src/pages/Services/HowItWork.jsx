// HowItWorks.jsx
import React from 'react';

const ItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">How It Works</h1>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Step 1: Sign Up</h2>
          <p>
            Create an account on our platform by providing your email address and creating a password. It's quick and easy!
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Step 2: Customize Your Page</h2>
          <p>
            Once you're signed in, you can customize your landing page by adding links, uploading images, and writing a bio. Make it unique to you!
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Step 3: Share Your Page</h2>
          <p>
            After customizing your page, share the URL on your social media profiles, website, or anywhere else you'd like. Start directing traffic to your links!
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Step 4: Analyze and Optimize</h2>
          <p>
            Keep track of your page's performance with built-in analytics. Analyze click-through rates and user engagement to optimize your page for better results.
          </p>
        </div>
      </div>
      <p>
        Ready to get started? <a href="/signup" className="text-blue-500">Sign up now</a> or <a href="/login" className="text-blue-500">log in</a> to your account.
      </p>
    </div>
  );
};

export default ItWorks;