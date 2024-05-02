// Tips.jsx
import React from 'react';

const Tips = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Tips and Recommendations</h1>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tip 1: Optimize Your Profile</h2>
          <p>
            Make sure to complete your profile with relevant information, a profile picture, and a bio. This helps users understand who you are and what you do.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tip 2: Use High-Quality Images</h2>
          <p>
            Use high-quality images for your profile picture and any images you share on your page. Clear and attractive visuals can make a big difference in engaging your audience.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tip 3: Organize Your Links</h2>
          <p>
            Arrange your links in a logical order and use clear titles. This makes it easier for visitors to navigate your page and find the information they're looking for.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tip 4: Share Valuable Content</h2>
          <p>
            Regularly update your page with valuable content that resonates with your audience. Whether it's blog posts, videos, or other resources, make sure it adds value to your visitors.
          </p>
        </div>
      </div>
      <p>
        Need more tips or have questions? Feel free to reach out to us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
      </p>
    </div>
  );
};

export default Tips;
