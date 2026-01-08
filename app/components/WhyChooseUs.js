import Image from 'next/image';
import Link from 'next/link';
import { Monitor, UserCheck, Target, Wallet, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Pillar 1 — How You Learn",
      items: [
        {
          title: 'Practical Training',
          description: 'Learn by doing. Every course includes hands-on labs and real project work — not just theory.',
          icon: <Monitor className="w-6 h-6 text-[#1FB6C9]" />,
        },
        {
          title: 'Career-Oriented Syllabus',
          description: 'Syllabus updated based on current job requirements and industry trends.',
          icon: <Target className="w-6 h-6 text-[#1FB6C9]" />,
          highlight: true,
        }
      ]
    },
    {
      title: "Pillar 2 — Who Teaches You",
      items: [
        {
          title: 'Experienced Instructors',
          description: 'Trainers with real industry and teaching experience — not fresh graduates.',
          icon: <UserCheck className="w-6 h-6 text-[#1FB6C9]" />,
        }
      ]
    },
    {
      title: "Pillar 3 — What You Get",
      items: [
        {
          title: 'Certification',
          description: 'Receive recognized certificates that add value to your resume.',
          icon: <Award className="w-6 h-6 text-[#1FB6C9]" />,
        },
        {
          title: 'Affordable Fees',
          description: 'Quality training at student-friendly fees, with flexible payment options.',
          icon: <Wallet className="w-6 h-6 text-[#1FB6C9]" />,
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Students Choose <span className="text-[#1FB6C9]">Azhka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just teach courses. We build careers by combining high-end tech skills with professional communication and memory mastery.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left - Narrative Pillars (60%) */}
          <div className="flex-1 space-y-12">
            {pillars.map((pillar, pIndex) => (
              <div key={pIndex}>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                  {pillar.title}
                </h3>
                <div className="space-y-6">
                  {pillar.items.map((feature, index) => (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ${feature.highlight ? 'bg-teal-50 border-l-4 border-[#1FB6C9] shadow-sm' : 'hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200'}`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${feature.highlight ? 'text-[#0A4C59]' : 'text-gray-900'}`}>
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 pl-5">
              <Link href="#courses" className="text-[#1FB6C9] font-bold text-lg hover:text-[#0A4C59] flex items-center gap-2 transition-colors group">
                View Learning Paths <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right - Image (40%) */}
          <div className="hidden lg:block w-[40%] sticky top-24">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/classroom.png"
                alt="Modern computer classroom at Azhka Institute Dhule for practical coding and software training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <p className="text-white font-medium text-lg leading-relaxed italic">
                  "Most students choose us for practical learning and friendly teaching environment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
