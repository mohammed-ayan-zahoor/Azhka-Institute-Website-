import Image from 'next/image';

export default function Instructors() {
  const technicalLeaders = [
    {
      name: 'Shaikh Zahoor Rasheed',
      role: 'Artificial Intelligence & Advanced Computing',
      why: 'Specializes in explaining complex topics in simple, practical ways',
      experience: '30+ Years Teaching',
      signal: 'Mentors final year projects',
      image: '/instructor3.jpg',
    },
    {
      name: 'Chirag Kazi',
      role: 'Managing Director',
      why: 'Incharge of overall institute management',
      experience: '10 Years Experience',
      signal: 'Incharge of overall institute management',
      image: '/instructor10.png',
    },
    {
      name: 'Rahul Sonawane',
      role: 'English Communication Specialist',
      why: 'Helps students build confidence in professional speaking',
      experience: '18 Years Professional Training',
      signal: 'Focuses on interview preparation',
      image: '/instructor7.jpg',
    }
  ];

  const coreTrainers = [
    {
      name: 'Inseram Kazi',
      role: 'Computer Applications Trainer',
      why: 'Patient and detailed approach for beginners',
      experience: 'Lab-Focused Instructor',
      signal: 'Known for beginner-friendly teaching',
      image: '/instructor1.jpg',
    },
    {
      name: 'Maaz Kazi',
      role: 'Senior Technical Trainer',
      why: 'Focuses on building strong programming logic',
      experience: 'Hands-on Technical Trainer',
      signal: 'Leads practical lab sessions',
      image: '/instructor2.png',
    },
    {
      name: 'Shagufta Pathan',
      role: 'Academic Instructor',
      why: 'Dedicated to student academic success',
      experience: '8 Years Academic Experience',
      signal: 'Specializes in theory fundamentals',
      image: '/instructor5.jpg',
    },
    {
      name: 'Naveed Shaikh',
      role: 'Academic Instructor',
      why: 'Ensures comprehensive syllabus coverage',
      experience: '8 Years Teaching Experience',
      signal: 'Focuses on exam preparation',
      image: '/instructor6.jpg',
    }
  ];

  const supportTeam = [
    {
      name: 'Danish Shaikh',
      role: 'Student Success Manager',
      why: 'Ensures every student gets the support they need',
      experience: 'Student Mentorship Experience',
      signal: 'Guides career planning',
      image: '/instructor4.jpg',
    },
    {
      name: 'Sania Shaikh',
      role: 'Academic Support',
      why: 'Provides additional help for student queries',
      experience: 'Student Support Specialist',
      signal: 'Available for doubt solving',
      image: '/instructor8.jpg',
    },
    {
      name: 'Mohammed Ayan',
      role: 'Programming Instructor',
      why: 'Ensures comprehensive syllabus coverage',
      experience: '2 Years Teaching Experience',
      signal: 'Focuses on exam preparation',
      image: '/instructor9.jpg',
    }
  ];

  const InstructorCard = ({ instructor }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border border-gray-100">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-[#1FB6C9] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 shadow-sm">
            {instructor.experience}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#1FB6C9] transition-colors">
          {instructor.name}
        </h3>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
          {instructor.role}
        </p>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed border-l-2 border-[#1FB6C9] pl-3">
          {instructor.why}
        </p>

        <div className="flex items-center text-gray-500 text-sm font-medium pt-3 border-t border-gray-100">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          {instructor.signal}
        </div>
      </div>
    </div>
  );

  return (
    <section id="instructors" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Instructors Who Guide You From <br />
            <span className="text-[#1FB6C9]">Basics to Career Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry experience • Practical teaching • Student-friendly approach
          </p>
        </div>

        {/* Technical Leaders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-[#1FB6C9] rounded-full"></span>
            Advanced & Specialized Faculty
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalLeaders.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
          </div>
        </div>

        {/* Core Trainers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Technical Trainers & Mentors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTrainers.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
          </div>
        </div>

        {/* Support Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Student Success Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTeam.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
