import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Image
              src="/logo.png"
              alt="Azhka Institute"
              width={160}
              height={40}
              className="h-{20} w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Empowering students with quality computer education and practical skills for a successful career in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-[#216BAC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-[#216BAC] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#instructors" className="text-gray-400 hover:text-[#216BAC] transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#216BAC] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#216BAC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xl font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">CCA</li>
              <li className="text-gray-400">DCA</li>
              <li className="text-gray-400">CCB</li>
              <li className="text-gray-400">ADCA</li>
              <li className="text-gray-400">Web Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>2nd Floor, Poonam Towers,<br />Near Tiranga Chowk, 80 Feet Road</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 8055117133</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>office.azhka@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/azhkainstitute?igsh=MzJreHI4ZXpxZHlp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#216BAC] p-2 rounded-full hover:bg-[#0A4C59] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Azhka-technologies-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#216BAC] p-2 rounded-full hover:bg-[#0A4C59] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Azhka Institute. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with ❤️ for empowering digital education
          </p>
        </div>
      </div>
    </footer>
  );
}
