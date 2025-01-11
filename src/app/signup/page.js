'use client'; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({ error: '', success: '' });
  const router = useRouter();

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
    if (emptyFields.length) {
      setStatus({ error: 'All fields are required', success: '' });
      return;
    }

    try {
      const response = await fetch('https://backend-health-bestie.vercel.app/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: data.message, error: '' });
        toast.success("Account created successfully!");
        setTimeout(() => router.push('/login'), 2000); // Redirect after a delay
      } else {
        setStatus({ error: data.message, success: '' });
      }
    } catch (err) {
      setStatus({ error: 'Something went wrong. Please try again later.', success: '' });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
            {status.success && <p className="text-green-500 text-sm">{status.success}</p>}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Sign Up</Button>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

