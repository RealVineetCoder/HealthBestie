// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>Health Bestie Project</div>
//   );
// }
// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Health Bestie</h1>
          <div>
            <a href="#" className="text-white px-3 py-2 rounded-md hover:bg-blue-500">Home</a>
            <a href="#" className="text-white px-3 py-2 rounded-md hover:bg-blue-500">About</a>
            <a href="#" className="text-white px-3 py-2 rounded-md hover:bg-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto mt-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your AI Health Bestie
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Diagnose heart disease, check your BMI, and get personalized health tips!
        </p>
        <div className="space-x-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Diagnose Heart Disease
          </a>
          <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Check BMI
          </a>
          <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Get Health Tips
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto mt-16 p-8 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Health Bestie?</h3>
        <p className="text-gray-600">
          Health Bestie is your personal AI assistant to help you track and improve your health. 
          From diagnosing heart disease to helping you maintain a healthy BMI, we're here for you!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Health Bestie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

