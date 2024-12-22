import React from 'react';
import { Target, Clock, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Expert Training",
    description: "Professional guidance tailored to your goals"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Train on your schedule, 24/7 access"
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive fitness community"
  },
  {
    icon: Trophy,
    title: "Results",
    description: "Achieve your fitness goals with proven methods"
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Circle Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl
                       bg-white dark:bg-dark-elevation-2
                       shadow-sm hover:shadow-md
                       dark:shadow-black/20 dark:hover:shadow-black/30
                       transform hover:-translate-y-1
                       transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 
                           flex items-center justify-center
                           text-primary-light dark:text-primary-dark">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50">
                {feature.title}
              </h3>
              <p className="text-material-600 dark:text-material-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
