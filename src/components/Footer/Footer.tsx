import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-material-50 dark:bg-material-950 text-material-900 dark:text-material-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold">Apex Fitness</Link>
            <p className="mt-4 text-material-600 dark:text-material-300 max-w-md">
              Transform your life through expert-led fitness coaching and a supportive community dedicated to your success.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              <FooterLinks />
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-material-200 dark:border-material-800">
          <p className="text-material-500 dark:text-material-400 text-sm text-center">
            {new Date().getFullYear()} Apex Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}