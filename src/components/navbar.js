// export default function Navbar() {
//     return (
//       <header className="w-full bg-white shadow-md">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <a href="/" className="text-2xl font-bold text-pink-500">
//             AI Health Bestie
//           </a>
//           <ul className="flex gap-6 text-gray-700">
//             <li>
//               <a href="/" className="hover:text-pink-500 transition">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/login" className="hover:text-pink-500 transition">
//                 Login
//               </a>
//             </li>
//             <li>
//               <a href="/signup" className="hover:text-pink-500 transition">
//                 Sign Up
//               </a>
//             </li>
//             <li>
//               <a href="/mental-health" className="hover:text-pink-500 transition">
//                 Mental Health Chat
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../image/logo.png'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image
                  src={Logo} // Path relative to the public folder
                  alt="Description of the image"
                  width={100}         // Desired width
                  height={100}        // Desired height
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button>Sign In</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:max-w-none">
                <nav className="mt-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4">
                    <Button className="w-full">Sign In</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}


  