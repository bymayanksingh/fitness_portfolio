import React from 'react';
import {
  Utensils, Battery, Target, LineChart, Brain, 
  Clock, Users, Medal, Heart, Dumbbell, 
  Clipboard, ShoppingBag, MessageSquare, 
  Calendar, BarChart, Coffee, Zap, 
  Scale, Book, CheckCircle, Smartphone
} from 'lucide-react';
import BookingButton from '../components/BookingButton';
import Programs from '../components/Programs';
import CTASection from '../components/CTASection';

export default function ProgramsPage() {
  const programBenefits = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Science-Based Nutrition",
      description: "Custom meal plans based on your metabolism, preferences, and goals",
      highlight: "92% success rate"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Optimized Energy Levels",
      description: "Feel energized throughout the day with balanced nutrition timing",
      highlight: "3x more energy"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mindset Transformation",
      description: "Develop a healthy relationship with food and sustainable habits",
      highlight: "Lifetime results"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Focused Approach",
      description: "Structured progression with clear milestones and achievements",
      highlight: "Weekly wins"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Measurable Progress",
      description: "Track your transformation with advanced metrics and analytics",
      highlight: "Data-driven"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Improved Health Markers",
      description: "Enhance overall health, sleep quality, and stress management",
      highlight: "Holistic health"
    }
  ];

  const programFeatures = [
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Personalized Nutrition Blueprint",
      description: "Custom meal plans adapted to your lifestyle and preferences",
      features: [
        "Calorie and macro calculations",
        "Dietary restriction accommodations",
        "Meal timing strategies",
        "Portion control guidance"
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Progress Tracking System",
      description: "Comprehensive tracking tools for optimal results",
      features: [
        "Body composition analysis",
        "Progress photo comparisons",
        "Measurement tracking",
        "Performance metrics"
      ]
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Educational Resources",
      description: "Learn the science behind nutrition and healthy eating",
      features: [
        "Video tutorials library",
        "Nutrition workshops",
        "Cooking demonstrations",
        "Scientific articles"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Regular guidance and accountability check-ins",
      features: [
        "Weekly coaching calls",
        "24/7 chat support",
        "Progress reviews",
        "Goal adjustments"
      ]
    }
  ];

  const additionalPerks = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Access",
      description: "Track progress and access resources on the go"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join our private community of like-minded individuals"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Restaurant Guide",
      description: "Learn how to make healthy choices while dining out"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick-Start Guide",
      description: "Get started immediately with our easy onboarding process"
    }
  ];

  return (
    <div className="min-h-screen bg-material-50 dark:bg-material-950 pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-material-900 dark:text-material-50">
              Transform Your Nutrition,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Transform Your Life
              </span>
            </h1>
            <p className="text-xl text-material-700 dark:text-material-300 mb-8">
              Expert-designed nutrition programs tailored to your unique goals, preferences, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingButton />
              <button className="px-8 py-3 rounded-full border-2 border-material-900 dark:border-material-50 
                             text-material-900 dark:text-material-50 font-medium
                             hover:bg-material-900 hover:text-material-50 
                             dark:hover:bg-material-50 dark:hover:text-material-900 
                             transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-material-900 dark:text-material-50">
            Program Benefits
          </h2>
          <p className="text-lg text-material-600 dark:text-material-400 max-w-2xl mx-auto">
            Experience transformative results with our comprehensive nutrition program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-material-50 dark:bg-dark-elevation-2 p-6 rounded-xl
                       shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/30
                       transform hover:-translate-y-1 transition-all duration-300
                       border border-material-100 dark:border-dark-elevation-3"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light/20 to-secondary-light/20 
                             dark:from-primary-dark/20 dark:to-secondary-dark/20
                             flex items-center justify-center flex-shrink-0">
                  <div className="text-primary-light dark:text-primary-dark">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50">
                    {benefit.title}
                  </h3>
                  <p className="text-material-600 dark:text-material-400 mb-3">
                    {benefit.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 
                               rounded-full text-sm font-medium text-primary-light dark:text-primary-dark">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-material-100 dark:bg-dark-elevation-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-material-900 dark:text-material-50">
              What's Included
            </h2>
            <p className="text-lg text-material-600 dark:text-material-400 max-w-2xl mx-auto">
              Everything you need for a successful nutrition transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-material-50 dark:bg-dark-elevation-3 p-8 rounded-xl
                         shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/30
                         transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light/20 to-secondary-light/20 
                               dark:from-primary-dark/20 dark:to-secondary-dark/20
                               flex items-center justify-center flex-shrink-0">
                    <div className="text-primary-light dark:text-primary-dark">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50">
                      {feature.title}
                    </h3>
                    <p className="text-material-600 dark:text-material-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 ml-18">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-light dark:text-primary-dark flex-shrink-0" />
                      <span className="text-material-700 dark:text-material-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Perks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-material-900 dark:text-material-50">
            Bonus Features
          </h2>
          <p className="text-lg text-material-600 dark:text-material-400 max-w-2xl mx-auto">
            Extra perks to enhance your transformation journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalPerks.map((perk, index) => (
            <div
              key={index}
              className="bg-material-50 dark:bg-dark-elevation-2 p-6 rounded-xl
                       text-center group hover:bg-gradient-to-br 
                       from-primary-light/5 to-secondary-light/5 
                       dark:from-primary-dark/5 dark:to-secondary-dark/5
                       transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br 
                           from-primary-light/20 to-secondary-light/20 
                           dark:from-primary-dark/20 dark:to-secondary-dark/20
                           flex items-center justify-center mb-4
                           group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary-light dark:text-primary-dark">
                  {perk.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-material-900 dark:text-material-50">
                {perk.title}
              </h3>
              <p className="text-material-600 dark:text-material-400">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-material-100 dark:bg-dark-elevation-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-material-900 dark:text-material-50">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="text-lg text-material-600 dark:text-material-400 mb-8 max-w-2xl mx-auto">
            Join our program today and start your journey towards a healthier, more energetic life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton />
            <button className="px-8 py-3 rounded-full bg-material-200 dark:bg-dark-elevation-3 
                           text-material-900 dark:text-material-50 font-medium
                           hover:bg-material-300 dark:hover:bg-dark-elevation-4 
                           transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </div>
      <Programs />
      <CTASection />
    </div>
  );
}