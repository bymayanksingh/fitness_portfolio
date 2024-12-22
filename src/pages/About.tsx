import React from 'react';
import { Award, Clock, Users, Target, CheckCircle, Instagram, Youtube, Linkedin } from 'lucide-react';
import BookingButton from '../components/BookingButton';

export default function About() {
  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "5k+", label: "Clients Trained" },
    { number: "15+", label: "Certifications" },
    { number: "98%", label: "Success Rate" }
  ];

  const certifications = [
    { icon: <Award className="w-6 h-6" />, title: "Certified Trainer", description: "NASM & ACE certified with 10+ years experience" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Schedule", description: "Morning, evening, and weekend sessions available" },
    { icon: <Users className="w-6 h-6" />, title: "Community Focus", description: "Built a thriving community of 5000+ members" },
    { icon: <Target className="w-6 h-6" />, title: "Goal Oriented", description: "98% success rate in achieving client goals" }
  ];

  const specialties = [
    "Weight Loss & Body Transformation",
    "Strength & Conditioning",
    "Nutrition Planning",
    "Contest Preparation",
    "Group Fitness Training",
    "Online Coaching",
    "Injury Prevention & Recovery",
    "Lifestyle Coaching"
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", label: "LinkedIn" }
  ];

  return (
    <div className="pt-16 bg-material-50 dark:bg-material-950 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-material-900 dark:text-material-50">
                Transform Your Life<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                  With Expert Guidance
                </span>
              </h1>
              <div className="space-y-4 text-lg text-material-700 dark:text-material-300">
                <p>
                  With over a decade of experience in fitness and nutrition, I've helped thousands of clients transform their lives through sustainable lifestyle changes.
                </p>
                <p>
                  My approach combines evidence-based training methods with personalized nutrition guidance, ensuring each client receives a program tailored to their unique needs and goals.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <BookingButton />
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="p-2 rounded-full bg-material-100 dark:bg-dark-elevation-2 
                               text-material-900 dark:text-material-50
                               hover:bg-material-200 dark:hover:bg-dark-elevation-3 
                               transition-all duration-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl dark:shadow-black/30">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3"
                  alt="Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-material-50 dark:bg-dark-elevation-2 p-4 rounded-xl shadow-lg dark:shadow-black/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="font-medium text-material-900 dark:text-material-50">Available for Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                {stat.number}
              </p>
              <p className="text-material-600 dark:text-material-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties Section */}
      <div className="bg-material-100 dark:bg-dark-elevation-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-material-900 dark:text-material-50">
            Areas of Expertise
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-material-50 dark:bg-dark-elevation-3 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-primary-light dark:text-primary-dark flex-shrink-0" />
                <span className="text-material-900 dark:text-material-50">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-material-900 dark:text-material-50">
          Certifications & Achievements
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-material-50 dark:bg-dark-elevation-2 p-6 rounded-xl shadow-sm hover:shadow-md 
                       dark:shadow-black/20 dark:hover:shadow-black/30 transition-all duration-200
                       hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full 
                           flex items-center justify-center mb-4
                           group-hover:scale-110 transition-transform duration-200">
                <div className="text-primary-light dark:text-primary-dark">
                  {cert.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50">
                {cert.title}
              </h3>
              <p className="text-material-600 dark:text-material-400">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-material-100 dark:bg-dark-elevation-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-material-900 dark:text-material-50">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg text-material-700 dark:text-material-300 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your fitness goals. Book a consultation today and take the first step towards a healthier lifestyle.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}