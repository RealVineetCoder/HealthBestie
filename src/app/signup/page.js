'use client';  // Mark this file as a client-side component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify'; // Updated import for useRouter in app directory

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter(); // Now using the correct useRouter from next/navigation

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setSuccess('');

    // Send sign-up request to the API
    const response = await fetch('https://backend-health-bestie.vercel.app/users/signup ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(data.message);
      toast.success("Account Created successfully!");
      // Redirect to login page after successful sign-up
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-black font-bold text-center mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 text-black mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div> 
    </div>
  );
}
