import React, { useState } from 'react';
import './../../index.css'

const AddLinks = () => {
  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    pinterest: '',
    snapchat: '',
    youtube: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks(prevLinks => ({
      ...prevLinks,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Social Media Handles</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(links).map((socialMedia, index) => (
          <div key={index}>
            <label htmlFor={socialMedia} className="block text-gray-700 font-semibold mb-1">{socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}</label>
            <input
              type="text"
              id={socialMedia}
              name={socialMedia}
              value={links[socialMedia]}
              onChange={handleChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder={`Enter ${socialMedia} handle`}
            />
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
    </div>
  );
};

export default AddLinks;