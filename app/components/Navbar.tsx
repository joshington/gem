
"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'; // Import the Next.js Image component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <a href="/" className="flex items-center">
          <Image 
            src="/logo.png" // Replace with your actual filename
            alt="GEM Logo"
            width={150}  // Adjust based on your logo aspect ratio
            height={50}
            className="h-10 w-auto object-contain" // h-10 keeps it perfectly sized for the nav
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-blue-900">
          {['Home', 'About', 'Giving', 'Ministries', 'Events', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-900">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}