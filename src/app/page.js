"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import stressImage from "../image/logo.png";
import Card from "@/components/Card";
import Router from "next/router";
import ImageCursor from "@/components/imagecursor";

// Add the correct extension.

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col w-screen">
      <ImageCursor />
    
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-gradient-to-b from-blue-100 to-green-100 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 mt-20">Take an Assessment</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="flex p-2 mb-0">
              <Card testName={"depression"} title={'Depression Assessment'} description={'Evaluate your mood and emotional well-being'}/>
              <Card testName={"sleep_disorder"} title={'Sleep Disorder Test'} description={'Analyze your sleep patterns and quality'}/>
            </div>
            <div className="flex p-2 mt-0">
              <Card testName={"mania"} title={'Anxiety Screening'} description={'Check for signs of manic episodes'}/>
              <Card testName={"anxiety"} title={'Mania Evaluation'} description={'Assess your anxiety levels and triggers'}/>
            </div>
          </div>
          
        </div>      
      </main>

      <Footer />
    </div>
  );
}
