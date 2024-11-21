// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>Health Bestie Project</div>
//   );
// }
// pages/index.js
"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import stressImage from "../image/logo.png";
import Card from "@/components/Card";
import Router from "next/router";
 // Add the correct extension.





export default function Home() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to AI Health Bestie
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Share your thoughts, and let our AI friend guide you.
        </p>
        <a
          href="/mental-health"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
        >
          Talk to AI Friend
        </a>
        <Card testName={'depression'} />
        <Card testName={'sleep_disorder'}  />
        <Card testName={'mania'}  />
        <Card testName={'anxiety'}  />
      </main>
    
    
      <Footer />
    </div>
  );
}
