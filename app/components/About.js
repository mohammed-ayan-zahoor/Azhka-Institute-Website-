'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Center image
  const images = [
    { src: '/Lab-Left.jpg', alt: 'Azhka Lab Left View' },
    { src: '/Lab-Center.jpg', alt: 'Azhka Lab Center View' },
    { src: '/Lab-Right.jpg', alt: 'Azhka Lab Right View' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          {/* Top - Lab Carousel (Full Width 100vw) */}
          <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] group">
            <div className="relative w-full overflow-hidden shadow-[inset_0_20px_50px_rgba(31,182,201,0.2),inset_0_-20px_50px_rgba(0,0,0,0.3)]">
              {/* Slides Container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="relative w-full flex-shrink-0 aspect-[4/5] md:aspect-video lg:aspect-[21/9]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Inverted Shadow Overlays */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_60px_100px_rgba(0,0,0,0.6),inset_0_-60px_100px_rgba(0,0,0,0.6)] z-10"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#1FB6C9] p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#1FB6C9] p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-current={currentSlide === idx ? 'true' : 'false'}
                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-[#1FB6C9] w-8' : 'bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-400 italic text-center uppercase tracking-[0.2em] py-6 bg-white" aria-live="polite" aria-atomic="true">
              Practical Lab Environment • Image {currentSlide + 1} of 3
            </p>          </div>

          {/* Bottom - Info (Left and Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-gray-600 text-lg leading-relaxed">
            {/* Left Info Part */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
                About Azhka Institute
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Azhka Institute was founded with a simple idea — to help students gain <span className="text-[#1FB6C9] font-bold">practical computer skills</span> that actually matter in real life and careers.
              </p>
              <p>
                We focus on hands-on training, clear explanations, and industry-relevant courses so that students feel confident, not overwhelmed.
              </p>

              {/* Soft CTA Moved Here */}
              <div className="pt-4">
                <Link href="#courses" className="text-[#1FB6C9] font-bold text-lg hover:text-[#0A4C59] flex items-center gap-2 transition-colors group">
                  Explore Our Courses
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Info Part */}
            <div className="space-y-8">
              {/* What We Believe */}
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#1FB6C9] shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-[#1FB6C9]">✦</span> What We Believe
                </h3>
                <ul className="space-y-4">
                  {[
                    "Learning should be practical, not just theory",
                    "Guidance should be simple and supportive",
                    "Skills should match real job needs",
                    "Education should be accessible and affordable"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Credibility Anchors */}
              <div className="flex items-center justify-between gap-4 py-6 border-t border-b border-gray-100">
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">250+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Students <br />Trained</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">100%</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Practical <br />Courses</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">5+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years <br />Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
