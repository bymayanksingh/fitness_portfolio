import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BookingButtonProps {
  variant?: 'default' | 'navbar';
}

export default function BookingButton({ variant = 'default' }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClasses = variant === 'navbar'
    ? "inline-flex justify-center items-center px-4 py-1.5 text-sm font-medium"
    : "inline-flex justify-center items-center px-6 py-2.5 text-base font-medium";

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`${buttonClasses}
                 bg-primary-light dark:bg-primary-dark 
                 text-white dark:text-material-900 
                 hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-primary-light dark:focus:ring-primary-dark
                 shadow-sm hover:shadow-md
                 transition-all duration-200
                 rounded-full`}
      >
        Book Consultation
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white dark:bg-dark-elevation-2 rounded-xl shadow-xl max-w-md w-full p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-material-500 hover:text-material-700
                         dark:text-material-400 dark:hover:text-material-200
                         transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Form Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-material-900 dark:text-material-50">
                  Book Your Consultation
                </h3>
                <p className="text-material-600 dark:text-material-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
                setIsModalOpen(false);
              }}>
                <div className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-medium text-material-900 dark:text-material-50 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg
                               bg-material-100 dark:bg-dark-elevation-3
                               text-material-900 dark:text-material-50
                               border border-material-200 dark:border-dark-elevation-4
                               focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-medium text-material-900 dark:text-material-50 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg
                               bg-material-100 dark:bg-dark-elevation-3
                               text-material-900 dark:text-material-50
                               border border-material-200 dark:border-dark-elevation-4
                               focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="phone"
                      className="block text-sm font-medium text-material-900 dark:text-material-50 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 rounded-lg
                               bg-material-100 dark:bg-dark-elevation-3
                               text-material-900 dark:text-material-50
                               border border-material-200 dark:border-dark-elevation-4
                               focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm font-medium text-material-900 dark:text-material-50 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-lg
                               bg-material-100 dark:bg-dark-elevation-3
                               text-material-900 dark:text-material-50
                               border border-material-200 dark:border-dark-elevation-4
                               focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                               resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg
                             bg-primary-light dark:bg-primary-dark
                             text-white font-medium
                             hover:bg-primary-light/90 dark:hover:bg-primary-dark/90
                             focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                             transform hover:-translate-y-0.5
                             transition-all duration-200"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}