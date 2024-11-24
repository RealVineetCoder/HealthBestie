'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const images = [
  '/ai-image1.jpg',
  '/ai-image2.jpg',

]

export default function ImageCursor() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="relative h-[500px]  overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to AI Health Bestie</h1>
          <p className="text-xl mb-6">
          Share your thoughts, and let our AI friend guide you.
          </p>
          <Link href="/mental-health">
            <Button size="lg" variant="primary " className="bg-black" >Talk to AI Friend</Button>
          </Link>
          
        </div>
      </div>
    </main>
  )
}
