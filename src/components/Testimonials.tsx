import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Weight Loss Journey",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
      quote: "The personalized approach and constant support helped me achieve results I never thought possible. Lost 30 pounds and gained confidence!",
      rating: 5,
      stats: {
        weightLost: "30 lbs",
        timeFrame: "6 months",
        maintained: "1+ year"
      }
    },
    {
      name: "Michael Chen",
      role: "Strength Training",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      quote: "The structured program and expert guidance helped me build strength and muscle mass effectively. Best investment in myself!",
      rating: 5,
      stats: {
        strengthGain: "+40%",
        muscleGain: "12 lbs",
        maintained: "8+ months"
      }
    },
    {
      name: "Emily Davis",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      quote: "The holistic approach to fitness and nutrition has transformed not just my body, but my entire lifestyle. Feeling amazing!",
      rating: 5,
      stats: {
        energyLevel: "+80%",
        consistency: "95%",
        maintained: "1+ year"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-material-50 dark:bg-material-950 py-12 sm:py-16 md:py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-material-900 dark:text-material-50">
            Client Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-material-600 dark:text-material-300 max-w-2xl mx-auto px-4">
            Read what our clients have to say about their transformation journeys
          </p>
        </div>

        <div className="relative px-4 sm:px-0">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-material-50 dark:bg-dark-elevation-2 shadow-sm dark:shadow-black/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5"></div>
            
            <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Image Section */}
              <div className="relative h-[300px] sm:h-[400px] md:h-full">
                <div className="absolute inset-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Client Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {testimonials[currentIndex].role}
                      </p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col">
                <div className="flex-1">
                  <Quote className="w-10 h-10 text-primary-light/20 dark:text-primary-dark/20 mb-4" />
                  <blockquote className="text-lg sm:text-xl text-material-700 dark:text-material-300 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(testimonials[currentIndex].stats).map(([key, value]) => (
                      <div key={key} className="bg-material-100/50 dark:bg-dark-elevation-3/50 rounded-lg p-3 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-primary-light dark:text-primary-dark">
                          {value}
                        </p>
                        <p className="text-sm text-material-600 dark:text-material-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-primary-light dark:bg-primary-dark w-6'
                            : 'bg-material-300 dark:bg-material-700'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-material-100 dark:bg-dark-elevation-3 
                               text-material-900 dark:text-material-50
                               hover:bg-material-200 dark:hover:bg-dark-elevation-4
                               transition-all duration-200 active:scale-95"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-material-100 dark:bg-dark-elevation-3 
                               text-material-900 dark:text-material-50
                               hover:bg-material-200 dark:hover:bg-dark-elevation-4
                               transition-all duration-200 active:scale-95"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <Link 
            to="/testimonials"
            className="inline-flex items-center gap-2 mt-8 text-material-50 bg-primary-light dark:bg-primary-dark
                     px-6 py-3 rounded-full font-medium
                     hover:bg-primary-light/90 dark:hover:bg-primary-dark/90
                     transform hover:translate-y-[-2px]
                     shadow-md hover:shadow-lg
                     transition-all duration-200 group mx-auto"
          >
            <span>View All Success Stories</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}