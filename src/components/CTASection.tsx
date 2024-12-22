import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingButton from './BookingButton';

export default function CTASection() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/programs');
  };

  return (
    <div className="bg-material-50 dark:bg-material-950 py-12 sm:py-16 md:py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 p-6 sm:p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-material-900 dark:text-material-50 text-center sm:text-left">
              Ready to Transform Your Life?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-material-700 dark:text-material-300 mb-6 sm:mb-8 max-w-2xl text-center sm:text-left">
              Join our fitness community today and get a personalized program designed to help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <BookingButton />
              <button 
                onClick={handleLearnMore}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 
                         border-material-900 dark:border-material-50 
                         text-material-900 dark:text-material-50 font-medium
                         hover:bg-material-900 hover:text-material-50 
                         dark:hover:bg-material-50 dark:hover:text-material-900 
                         transition-all duration-200
                         active:scale-[0.98]
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-material-900 dark:focus:ring-material-50"
              >
                Learn More
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">24/7</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-400">Support</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">100%</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-400">Satisfaction</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">1-on-1</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-400">Coaching</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-material-900 dark:text-material-50">30-Day</p>
                <p className="text-sm sm:text-base text-material-600 dark:text-material-400">Money Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}