import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Features from '../components/Features';
import TrainingCategories from '../components/TrainingCategories';
import Coaches from '../components/Coaches';
import ContactForm from '../components/ContactForm';
import LatestBlog from '../components/Blog/LatestBlog';

export default function Home() {
  return (
    <div className="bg-material-50 dark:bg-material-950 transition-colors duration-200">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Welcome Section */}
      <TrainingCategories />

      {/* Programs Section */}
      <Programs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Expert Coaches Section */}
      <Coaches />

      {/* Latest Blog Posts */}
      <LatestBlog />

      {/* Contact Form */}
      <ContactForm />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}