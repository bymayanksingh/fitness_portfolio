import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// This would typically come from an API or database
const blogPostsData = {
  "1": {
    title: "The Science of Strength Training",
    content: `
      Understanding the science behind strength training is crucial for achieving optimal results. Let's dive deep into the key principles that govern muscle growth and strength development.

      The Biology of Muscle Growth
      - Mechanical tension
      - Metabolic stress
      - Muscle damage and repair
      - Protein synthesis activation

      Neural Adaptations
      - Motor unit recruitment
      - Rate coding
      - Intermuscular coordination
      - Intramuscular coordination

      Optimal Training Frequency
      - Training volume considerations
      - Recovery requirements
      - Individual response factors
      - Progressive overload principles

      Recovery and Supercompensation
      - The supercompensation cycle
      - Recovery windows
      - Adaptation timing
      - Nutrition's role in recovery

      Evidence-Based Training Protocols
      - Compound vs. isolation exercises
      - Rep ranges for different goals
      - Rest periods optimization
      - Training splits design

      Remember: Strength training is both an art and a science. While these principles provide a foundation, individual response and adaptation will vary.
    `,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3",
    date: "December 22, 2023",
    author: "Dr. Sarah Mitchell",
    readTime: "8 min read",
    category: "Training"
  },
  "2": {
    title: "Nutrition Fundamentals for Peak Performance",
    content: `
      Proper nutrition is the foundation of athletic performance and body composition goals. Let's explore the scientific principles that should guide your nutritional choices.

      Macronutrient Ratios
      - Protein requirements for different goals
      - Carbohydrate timing and types
      - Essential fatty acids
      - Caloric balance principles

      Micronutrients in Performance
      - Key vitamins for athletes
      - Mineral requirements
      - Antioxidant roles
      - Hydration electrolytes

      Meal Timing Strategies
      - Pre-workout nutrition
      - Intra-workout fueling
      - Post-workout recovery
      - Daily meal distribution

      Hydration Protocols
      - Daily water requirements
      - Electrolyte balance
      - Performance hydration
      - Hydration monitoring

      Evidence-Based Supplementation
      - Essential supplements
      - Performance enhancers
      - Recovery aids
      - Timing protocols

      Apply these principles while remembering that individual needs vary based on goals, activity level, and body composition.
    `,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3",
    date: "December 29, 2023",
    author: "Dr. Michael Chen",
    readTime: "10 min read",
    category: "Nutrition"
  }
  // Add more blog posts here
};

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-material-50 dark:bg-material-950 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-material-900 dark:text-material-50 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-material-600 dark:text-material-400 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-primary-light dark:bg-primary-dark text-white
                       hover:bg-primary-light/90 dark:hover:bg-primary-dark/90
                       transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-material-50 dark:bg-material-950 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 mb-8 text-material-600 dark:text-material-400
                   hover:text-material-900 dark:hover:text-material-50
                   transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        {/* Header Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-primary-light/10 dark:bg-primary-dark/10 
                         text-primary-light dark:text-primary-dark 
                         px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
            <span className="text-material-600 dark:text-material-400 text-sm">
              {post.date}
            </span>
            <span className="text-material-600 dark:text-material-400 text-sm">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-material-900 dark:text-material-50 mb-4">
            {post.title}
          </h1>
          <p className="text-material-600 dark:text-material-400">
            By {post.author}
          </p>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-material-600 dark:text-material-300 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}