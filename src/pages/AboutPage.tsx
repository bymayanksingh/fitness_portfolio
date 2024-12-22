import React from 'react';
import { Users, Award, Clock, Activity } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const stats = [
  {
    number: "600K+",
    label: "Training Hours"
  },
  {
    number: "790+",
    label: "Success Stories"
  },
  {
    number: "2,560+",
    label: "Happy Clients"
  },
  {
    number: "830+",
    label: "Expert Classes"
  }
];

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Trainers",
    description: "Our certified trainers bring years of experience and dedication to your fitness journey."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Schedule",
    description: "Choose from a wide range of class times that fit your busy lifestyle."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Focus",
    description: "Join a supportive community that celebrates every member's success."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Results Driven",
    description: "Our proven methods and tracking systems ensure you reach your goals."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-material-50 dark:bg-material-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-material-200">
            Building stronger, healthier lives through expert guidance and unwavering support
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1571388208497-71bedc66e932"
                alt="Training Session"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-material-900 dark:text-material-50">
                Welcome to Apex Fitness
              </h2>
              <div className="space-y-4 text-lg text-material-600 dark:text-material-400">
                <p>
                  At Apex Fitness, we believe in transforming lives through science-based fitness 
                  and personalized training. Our state-of-the-art facility and expert trainers 
                  are here to guide you on your fitness journey.
                </p>
                <p>
                  Whether you're just starting out or looking to take your fitness to the next level, 
                  our comprehensive programs and supportive community will help you achieve your goals.
                </p>
                <blockquote className="pl-4 border-l-4 border-primary-light dark:border-primary-dark italic">
                  "Inspiring lives through fitness excellence and dedicated support"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-material-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-material-100 dark:bg-dark-elevation-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-material-900 dark:text-material-50">
              Why Choose Us
            </h2>
            <p className="text-xl text-material-600 dark:text-material-400 max-w-2xl mx-auto">
              Build your best body with our expert guidance and proven methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-dark-elevation-2
                         shadow-sm hover:shadow-md
                         dark:shadow-black/20 dark:hover:shadow-black/30
                         transform hover:-translate-y-1
                         transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 
                             flex items-center justify-center
                             text-primary-light dark:text-primary-dark">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-material-900 dark:text-material-50">
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

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
