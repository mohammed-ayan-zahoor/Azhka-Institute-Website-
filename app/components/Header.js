'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Azhka Institute"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Home
            </Link>
            <Link href="#courses" className="text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Courses
            </Link>
            <Link href="#instructors" className="text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Instructors
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="#contact"
              className="bg-[#1FB6C9] text-white px-6 py-2.5 rounded-lg hover:bg-[#0A4C59] transition-colors font-medium"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="#home" className="block text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Home
            </Link>
            <Link href="#courses" className="block text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Courses
            </Link>
            <Link href="#instructors" className="block text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Instructors
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              About
            </Link>
            <Link href="#contact" className="block text-gray-700 hover:text-[#1FB6C9] transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="#contact"
              className="block bg-[#1FB6C9] text-white px-6 py-2.5 rounded-lg hover:bg-[#0A4C59] transition-colors font-medium text-center"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
