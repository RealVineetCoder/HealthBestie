"use client"
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    setSuccess('');

    // Send login request to the API
    const response = await fetch('https://backend-health-bestie.vercel.app/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(data.message);
      const getToken = data.token

      localStorage.setItem("Token" , getToken)
      toast.success("Account verified successfully!");
    } else {
      setError(data.message);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("Token");
    
    if (token) {
      router.push("/");
    }
  }, []);


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl text-black font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
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
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
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
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
    
  );
}
