import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
              Empowering Digital &{' '}
              <span className="text-[#1FB6C9]">Cognitive Excellence</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Computer Courses • English Speaking • Mnemonic Science
            </p>
            <p className="text-base text-gray-500 max-w-xl">
              Master the technology for your career and the mental skills for your growth. Join the most advanced learning hub in Dhule.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link
                href="#courses"
                className="bg-[#1FB6C9] text-white px-8 py-4 rounded-lg hover:bg-[#0A4C59] transition-colors font-semibold text-center text-lg"
              >
                Explore Courses
              </Link>
              <Link
                href="#contact"
                className="border-2 border-[#1FB6C9] text-[#1FB6C9] px-8 py-4 rounded-lg hover:bg-[#1FB6C9] hover:text-white transition-colors font-semibold text-center text-lg"
              >
                Contact Institute
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-video">
              <Image
                src="/hero-image.png"
                alt="Professional computer training and coding sessions at Azhka Institute Dhule"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
