import React from 'react';
import { Dumbbell, Users, Video, MessageSquare, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Programs() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "1:1 Personal Training",
      description: "Personalized workout and nutrition plans tailored to your specific goals.",
      icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3",
      duration: "60 min sessions",
      groupSize: "1-on-1",
      level: "All Levels",
      price: "$199/month",
      link: "/programs/1-on-1-personal-training"
    },
    {
      title: "Group Fitness Classes",
      description: "High-energy group sessions that combine strength training and cardio.",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3",
      duration: "45 min sessions",
      groupSize: "5-10 people",
      level: "All Levels",
      price: "$99/month",
      link: "/programs/group-fitness-classes"
    },
    {
      title: "Online Coaching",
      description: "Remote coaching with weekly check-ins and custom workout plans.",
      icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3",
      duration: "Flexible",
      groupSize: "1-on-1",
      level: "All Levels",
      price: "$149/month",
      link: "/programs/online-personal-coaching"
    },
    {
      title: "Nutrition Consultation",
      description: "Expert guidance on meal planning and nutritional strategies.",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3",
      duration: "30 min sessions",
      groupSize: "1-on-1",
      level: "All Levels",
      price: "$129/month",
      link: "/programs/nutrition-consultation"
    }
  ];

  const handleProgramClick = (program) => {
    navigate(program.link);
  };

  return (
    <div className="bg-material-50 dark:bg-material-950 py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-material-900 dark:text-material-50">
            Training Programs
          </h2>
          <p className="text-lg sm:text-xl text-material-600 dark:text-material-300 max-w-2xl mx-auto px-4">
            Choose the perfect program to achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              onClick={() => handleProgramClick(program)}
              className="bg-material-50 dark:bg-dark-elevation-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-black/20 dark:hover:shadow-black/30 transition-all duration-200 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="relative h-40 sm:h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-material-50/90 dark:bg-dark-elevation-2/90 rounded-full flex items-center justify-center shadow-md dark:shadow-black/20">
                    <div className="text-primary-light dark:text-primary-dark">
                      {program.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-material-900 dark:text-material-50">
                    {program.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-primary-light dark:text-primary-dark mt-1">
                    {program.price}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-material-600 dark:text-material-300 mb-4">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                    <span className="text-material-600 dark:text-material-300">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                    <span className="text-material-600 dark:text-material-300">{program.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Target className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                    <span className="text-material-600 dark:text-material-300">{program.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}