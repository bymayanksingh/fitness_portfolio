import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dumbbell, Users, Video, MessageSquare, Clock, Target, Check } from 'lucide-react';
import BookingButton from '../components/BookingButton';

const programsData = {
  '1-on-1-personal-training': {
    title: "1:1 Personal Training",
    description: "Get personalized attention and expert guidance to achieve your fitness goals faster and more effectively.",
    icon: <Dumbbell />,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3",
    duration: "60 min sessions",
    groupSize: "1-on-1",
    level: "All Levels",
    price: "$199/month",
    features: [
      "Customized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "Form correction",
      "Flexible scheduling",
      "Mobile app access"
    ],
    benefits: [
      "Faster results with personalized attention",
      "Expert guidance on proper form",
      "Customized plans for your goals",
      "Nutritional support and meal planning",
      "Accountability and motivation"
    ]
  },
  'group-fitness-classes': {
    title: "Group Fitness Classes",
    description: "Join our energetic group sessions combining strength training and cardio for a fun and effective workout experience.",
    icon: <Users />,
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3",
    duration: "45 min sessions",
    groupSize: "5-10 people",
    level: "All Levels",
    price: "$99/month",
    features: [
      "Various class types",
      "Expert instructors",
      "Fun group environment",
      "Flexible schedule",
      "Equipment provided",
      "Community support"
    ],
    benefits: [
      "Motivating group atmosphere",
      "Variety of workout styles",
      "Cost-effective training",
      "Social fitness experience",
      "Structured workout sessions"
    ]
  },
  'online-personal-coaching': {
    title: "Online Coaching",
    description: "Get professional guidance and customized workout plans that fit your schedule, all from the comfort of your home.",
    icon: <Video />,
    image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3",
    duration: "Flexible",
    groupSize: "1-on-1",
    level: "All Levels",
    price: "$149/month",
    features: [
      "Custom workout plans",
      "Video form checks",
      "24/7 chat support",
      "Progress tracking",
      "Nutrition guidance",
      "Weekly check-ins"
    ],
    benefits: [
      "Train on your schedule",
      "Access from anywhere",
      "Regular progress updates",
      "Continuous support",
      "Cost-effective personal training"
    ]
  },
  'nutrition-consultation': {
    title: "Nutrition Consultation",
    description: "Receive expert guidance on meal planning and nutritional strategies to support your fitness goals.",
    icon: <MessageSquare />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3",
    duration: "30 min sessions",
    groupSize: "1-on-1",
    level: "All Levels",
    price: "$129/month",
    features: [
      "Personalized meal plans",
      "Macro tracking guidance",
      "Recipe suggestions",
      "Shopping lists",
      "Supplement advice",
      "Regular check-ins"
    ],
    benefits: [
      "Customized nutrition plans",
      "Better eating habits",
      "Improved energy levels",
      "Sustainable results",
      "Expert dietary guidance"
    ]
  }
};

export default function ProgramDetail() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const program = programId ? programsData[programId] : null;

  if (!program) {
    return (
      <div className="pt-24 px-4 bg-material-50 dark:bg-material-950">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-material-900 dark:text-material-50">Program not found</h1>
          <button
            onClick={() => navigate('/programs')}
            className="mt-4 px-6 py-2 bg-primary-light dark:bg-primary-dark text-white dark:text-material-900 rounded-full"
          >
            View All Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-material-50 dark:bg-material-950 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {program.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {program.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-material-50 dark:bg-dark-elevation-2 rounded-xl p-8 shadow-sm dark:shadow-black/20">
              <h2 className="text-2xl font-bold mb-6 text-material-900 dark:text-material-50">
                Program Benefits
              </h2>
              <div className="grid gap-4">
                {program.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                    </div>
                    <p className="text-material-700 dark:text-material-300">{benefit}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-material-900 dark:text-material-50">
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                    <p className="text-material-700 dark:text-material-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-material-50 dark:bg-dark-elevation-2 rounded-xl p-6 shadow-sm dark:shadow-black/20 sticky top-24">
              <div className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">
                {program.price}
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-material-600 dark:text-material-400">
                  <Clock className="w-5 h-5" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-material-600 dark:text-material-400">
                  <Users className="w-5 h-5" />
                  <span>{program.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-material-600 dark:text-material-400">
                  <Target className="w-5 h-5" />
                  <span>{program.level}</span>
                </div>
              </div>

              <BookingButton />
              
              <p className="mt-4 text-sm text-material-600 dark:text-material-400 text-center">
                No commitment required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
