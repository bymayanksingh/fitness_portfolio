import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your goals",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3",
    link: "/programs#personal"
  },
  {
    title: "Group Classes",
    description: "High-energy workouts with like-minded people",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3",
    link: "/programs#group"
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase strength",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3",
    link: "/programs#strength"
  },
  {
    title: "HIIT Workouts",
    description: "Intense cardio and strength combinations",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3",
    link: "/programs#hiit"
  }
];

export default function TrainingCategories() {
  return (
    <section className="py-20 px-4 bg-material-100 dark:bg-dark-elevation-1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-material-900 dark:text-material-50">
            Welcome to Apex Fitness
          </h2>
          <p className="text-xl text-material-600 dark:text-material-400 max-w-2xl mx-auto">
            Choose from our diverse range of training programs designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl
                       dark:shadow-black/20 dark:hover:shadow-black/30
                       transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-material-200 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-white gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
