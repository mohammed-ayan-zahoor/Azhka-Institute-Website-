import { BookOpen, Layers, MonitorPlay, Rocket } from 'lucide-react';

export default function LearningPath() {
    const steps = [
        {
            title: 'Start with Basics',
            description: 'Build a strong foundation with CCA / CCB',
            icon: <BookOpen className="w-8 h-8 text-white" />,
            color: 'bg-emerald-500',
        },
        {
            title: 'Build Core Skills',
            description: 'Master programming & logic with DCA',
            icon: <Layers className="w-8 h-8 text-white" />,
            color: 'bg-blue-500',
        },
        {
            title: 'Specialize',
            description: 'Go pro with ADCA or Web Development',
            icon: <MonitorPlay className="w-8 h-8 text-white" />,
            color: 'bg-purple-500',
        },
        {
            title: 'Career Support',
            description: 'Real projects, resume building & guidance',
            icon: <Rocket className="w-8 h-8 text-white" />,
            color: 'bg-[#216BAC]',
        },
    ];

    return (
        <section className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How Your Journey Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A structured path from beginner to professional
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300 relative`}>
                                    {step.icon}
                                    <div className="absolute -bottom-2 w-6 h-6 bg-white rotate-45 transform"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
