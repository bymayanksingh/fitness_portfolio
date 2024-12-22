import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import BookingButton from './BookingButton';

export default function Hero() {
  const navigate = useNavigate();

  const handleViewPrograms = () => {
    navigate('/programs');
  };

  return (
    <div id="home" className="pt-16 bg-material-50 dark:bg-material-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-material-900 dark:text-material-50">
              Transform Your Body,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Transform Your Life
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-material-600 dark:text-material-300 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Expert-led fitness coaching tailored to your goals. Join thousands who have already changed their lives through our proven programs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
              <BookingButton />
              <Link
                to="/programs"
                className="inline-flex justify-center items-center px-6 py-2.5 rounded-full 
                         bg-material-50 dark:bg-dark-elevation-2 
                         text-material-900 dark:text-material-50
                         hover:bg-material-100 dark:hover:bg-dark-elevation-3
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-primary-light dark:focus:ring-primary-dark
                         shadow-sm dark:shadow-black/20
                         transition-all duration-200
                         text-base font-medium
                         w-full sm:w-auto"
              >
                View Programs
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center md:justify-start gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">5k+</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-300">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">98%</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-300">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">10+</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-300">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Fitness Coach"
                className="rounded-2xl shadow-lg dark:shadow-black/20 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:-left-6 bg-material-50 dark:bg-dark-elevation-2 p-3 sm:p-4 rounded-xl shadow-lg dark:shadow-black/20 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm sm:text-base font-medium text-material-900 dark:text-material-50 whitespace-nowrap">
                  Currently taking new clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}