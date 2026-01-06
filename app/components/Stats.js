import { GraduationCap, Users, UserCheck, Trophy } from 'lucide-react';

export default function Stats() {
  const stats = [
    { number: '50+', label: 'Courses', icon: <GraduationCap className="w-12 h-12 text-[#1FB6C9]" /> },
    { number: '8', label: 'Instructors', icon: <UserCheck className="w-12 h-12 text-[#1FB6C9]" /> },
    { number: '250+', label: 'Students Trained', icon: <Users className="w-12 h-12 text-[#1FB6C9]" /> },
    { number: '2+', label: 'Years Experience', icon: <Trophy className="w-12 h-12 text-[#1FB6C9]" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100 flex flex-col items-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#1FB6C9] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
