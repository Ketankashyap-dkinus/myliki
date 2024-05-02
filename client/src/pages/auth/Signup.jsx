// SignupPage.jsx
import React, { useState } from 'react';

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    password: '',
    age: '',
    bio: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to state or API
    console.log(formData);
    // Redirect to next step or submit the form
    if (step < 3) {
      handleNextStep();
    } else {
      // Handle form submission
      console.log('Form submitted');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-1">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 font-semibold mb-1">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
        )}
        <div className="flex justify-between">
          {step > 1 && (
            <button type="button" onClick={handlePrevStep} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
