// CustomLinks.jsx
import React, { useState } from 'react';

const CustomLinks = () => {
  const [links, setLinks] = useState([{ id: 1, title: '', url: '', isEditMode: false }]);
  const [isError, setIsError] = useState(false);

  const handleChange = (id, key, value) => {
    const newLinks = links.map(link =>
      link.id === id ? { ...link, [key]: value } : link
    );
    setLinks(newLinks);
  };

  const handleAddMore = () => {
    if (links.every(link => link.title !== '' && link.url !== '')) {
      const newId = links.length + 1;
      setLinks([...links, { id: newId, title: '', url: '', isEditMode: true }]);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleSave = (id) => {
    const updatedLinks = links.map(link =>
      link.id === id ? { ...link, isEditMode: false } : link
    );
    setLinks(updatedLinks);
  };

  const handleEdit = (id) => {
    const newLinks = links.map(link =>
      link.id === id ? { ...link, isEditMode: true } : link
    );
    setLinks(newLinks);
  };

  const handleDelete = (id) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Custom Links</h2>
      {links.map((link, index) => (
        <div key={link.id} className="mb-4">
          <label htmlFor={`title-${link.id}`} className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            type="text"
            id={`title-${link.id}`}
            placeholder="Title"
            value={link.title}
            onChange={(e) => handleChange(link.id, 'title', e.target.value)}
            disabled={!link.isEditMode}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <label htmlFor={`url-${link.id}`} className="block text-gray-700 font-semibold mt-2 mb-1">URL</label>
          <input
            type="text"
            id={`url-${link.id}`}
            placeholder="URL"
            value={link.url}
            onChange={(e) => handleChange(link.id, 'url', e.target.value)}
            disabled={!link.isEditMode}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          {link.isEditMode ? (
            <div className="flex mt-2">
              <button onClick={() => handleSave(link.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">Save</button>
              <button onClick={() => setLinks(links.map(l => l.id === link.id ? { ...l, isEditMode: false } : l))} className="text-red-500 hover:text-red-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            </div>
          ) : (
            <div className="flex mt-2">
              <button onClick={() => handleEdit(link.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">Edit</button>
              {links.length > 1 && (
                <button onClick={() => handleDelete(link.id)} className="text-red-500 hover:text-red-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
              )}
            </div>
          )}
          {isError && (link.title === '' || link.url === '') && <p className="text-red-500 mt-2">Please fill in all fields</p>}
        </div>
      ))}
      <button onClick={handleAddMore} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add More
      </button>
    </div>
  );
};

export default CustomLinks;