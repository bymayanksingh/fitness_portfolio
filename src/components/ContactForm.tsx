import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-material-100 dark:bg-dark-elevation-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-material-900 dark:text-material-50">
              Join Our Community
            </h2>
            <p className="text-xl text-material-600 dark:text-material-400 mb-8">
              Take the first step towards your fitness goals. Contact us today and let's create your success story together.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-material-900 dark:text-material-50 mb-2">
                  Location
                </h3>
                <p className="text-material-600 dark:text-material-400">
                  123 Fitness Street<br />
                  San Francisco, CA 94105
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-material-900 dark:text-material-50 mb-2">
                  Contact
                </h3>
                <p className="text-material-600 dark:text-material-400">
                  Phone: (555) 123-4567<br />
                  Email: info@apexfitness.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-material-900 dark:text-material-50 mb-2">
                  Hours
                </h3>
                <p className="text-material-600 dark:text-material-400">
                  Monday - Friday: 5:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 7:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-elevation-2 rounded-2xl p-8
                     shadow-sm dark:shadow-black/20"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-material-900 dark:text-material-50 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg
                           bg-material-100 dark:bg-dark-elevation-3
                           text-material-900 dark:text-material-50
                           border border-material-200 dark:border-dark-elevation-4
                           focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                           placeholder:text-material-500 dark:placeholder:text-material-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-material-900 dark:text-material-50 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg
                           bg-material-100 dark:bg-dark-elevation-3
                           text-material-900 dark:text-material-50
                           border border-material-200 dark:border-dark-elevation-4
                           focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                           placeholder:text-material-500 dark:placeholder:text-material-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-material-900 dark:text-material-50 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg
                           bg-material-100 dark:bg-dark-elevation-3
                           text-material-900 dark:text-material-50
                           border border-material-200 dark:border-dark-elevation-4
                           focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                           placeholder:text-material-500 dark:placeholder:text-material-400"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-material-900 dark:text-material-50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg
                           bg-material-100 dark:bg-dark-elevation-3
                           text-material-900 dark:text-material-50
                           border border-material-200 dark:border-dark-elevation-4
                           focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                           placeholder:text-material-500 dark:placeholder:text-material-400
                           resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg
                         bg-primary-light dark:bg-primary-dark
                         text-white font-medium
                         hover:bg-primary-light/90 dark:hover:bg-primary-dark/90
                         transform hover:-translate-y-0.5
                         transition-all duration-200
                         flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
