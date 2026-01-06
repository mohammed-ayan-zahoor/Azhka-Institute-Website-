import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image (Real & Trustworthy) */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-4">
              <Image
                src="/about-azhka.jpg"
                alt="Students learning in a practical environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-sm text-gray-400 italic text-center uppercase tracking-wide">
              Hands-on learning environment at Azhka Institute
            </p>
          </div>

          {/* Right - Content (Human & Story-led) */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
                About Azhka Institute
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Azhka Institute was founded with a simple idea — to help students gain <span className="text-[#1FB6C9] font-bold">practical computer skills</span> that actually matter in real life and careers.
              </p>
            </div>

            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                We focus on hands-on training, clear explanations, and industry-relevant courses so that students feel confident, not overwhelmed.
              </p>

              {/* What We Believe (Replaces Mission/Vision) */}
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
              <div className="flex items-center gap-6 py-4 border-t border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">1000+</span>
                  <span className="text-sm text-gray-500">Students <br />Trained</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">100%</span>
                  <span className="text-sm text-gray-500">Practical <br />Couses</span>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">5+</span>
                  <span className="text-sm text-gray-500">Years <br />Experience</span>
                </div>
              </div>

              {/* Soft CTA */}
              <div className="pt-2">
                <Link href="#courses" className="text-[#1FB6C9] font-bold text-lg hover:text-[#0A4C59] flex items-center gap-2 transition-colors group">
                  Explore Our Courses
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
