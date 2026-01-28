export default function Courses() {
  const starterCourses = [
    {
      name: 'CCA',
      fullName: 'Certificate in Computer Applications',
      description: 'Master fundamental computer skills including MS Office, internet basics, and essential digital literacy.',
      duration: '4 Months',
      level: 'Beginner',
      badge: null,
    },
    {
      name: 'CCB',
      fullName: 'Certificate in Computer Basic',
      description: 'Basic-focused computing skills including Fundamentals, and management tools.',
      duration: '1 Month',
      level: 'Beginner',
      badge: null,
    },
  ];

  const careerTracks = [
    {
      name: 'DCA',
      fullName: 'Diploma in Computer Applications',
      description: 'Comprehensive program covering programming fundamentals, database management, and system operations.',
      duration: '6 Months',
      level: 'Intermediate',
      badge: ' Most Popular',
      badgeColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      name: 'ADCA',
      fullName: 'Advanced Diploma in Computer Applications',
      description: 'Advanced topics in software development, networking, and modern IT infrastructure management.',
      duration: '1 Year',
      level: 'Advanced',
      badge: ' Advanced Track',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
    {
      name: 'Web Development',
      fullName: 'Full Stack Web Development',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and build professional websites from scratch.',
      duration: '6 Months',
      level: 'Professional',
      badge: ' Job-Oriented',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
  ];

  const skillDevelopment = [
    {
      name: 'English Speaking',
      fullName: 'Professional English Communication',
      description: 'Master the art of fluent English communication. Focus on grammar, vocabulary, public speaking, and confidence building.',
      duration: '3 Months',
      level: 'All Levels',
      badge: ' Fluency Focus',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      name: 'Mnemonic Science',
      fullName: 'Advanced Memory & Recall Science',
      description: 'Unlock the potential of your brain. Learn advanced mnemonic techniques to memorize vast amounts of data with ease.',
      duration: '2 Months',
      level: 'Advanced',
      badge: ' Brain Power',
      badgeColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      name: 'Memory Training',
      fullName: 'Student Memory Mastery Workshop',
      description: 'Specifically designed for students. Master techniques for rapid information recall, exam success, and stress-free learning.',
      duration: '1 Month',
      level: 'Students',
      badge: ' Exam Ready',
      badgeColor: 'bg-teal-100 text-teal-800',
    },
    {
      name: 'Robotics and Drones',
      fullName: 'Robotics & Drone Technology',
      description: 'Explore the world of robotics and drone technology. Learn to build, program, and operate drones with hands-on projects.',
      duration: '3 Months',
      level: 'Intermediate',
      badge: ' Tech Innovation',
      badgeColor: 'bg-cyan-100 text-cyan-800',
    },
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
      {course.badge && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${course.badgeColor} uppercase tracking-wide`}>
          {course.badge}
        </div>
      )}

      <div className="flex items-start justify-between mb-4 mt-2">
        <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-[#216BAC] transition-colors">
          {course.name}
        </h3>
      </div>

      <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-wider">
        {course.fullName}
      </p>

      <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
        {course.description}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center text-gray-600 font-semibold">
          <svg className="w-5 h-5 mr-2 text-[#216BAC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{course.duration}</span>
        </div>
        <button className="text-[#216BAC] hover:text-[#0A4C59] font-bold text-sm tracking-wide uppercase transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );

  return (
    <section id="courses" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From digital mastery to cognitive excellence — choose the track that transforms your future.
          </p>
        </div>

        {/* Career Lane */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-1 bg-[#216BAC] rounded-full"></div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Career Tracks (Computer)</h3>
              <p className="text-gray-500">Professional programs designed for job readiness</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerTracks.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>

        {/* Skill Lane */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-1 bg-purple-500 rounded-full"></div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Cognitive & Communication Tracks</h3>
              <p className="text-gray-500">Master the soft and mental skills that set you apart</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillDevelopment.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>

        {/* Starter Lane */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-1 bg-green-500 rounded-full"></div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Foundational Computer Courses</h3>
              <p className="text-gray-500">Perfect for building a strong digital foundation</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {starterCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
