import React, { useState } from 'react';
import { Play, Star, Quote, Clock, Target, Trophy, Users, Scale, Timer, Fire, Award, X } from 'lucide-react';

const testimonials = {
  featured: [
    {
      id: 1,
      type: 'video',
      orientation: 'portrait',
      thumbnail: 'https://images.unsplash.com/photo-1609942072337-c3370e820005?ixlib=rb-4.0.3',
      videoUrl: 'https://your-video-url.com/1',
      name: 'Sarah Johnson',
      title: 'Lost 30kg in 6 months',
      quote: 'The personalized approach and expert guidance helped me achieve results I never thought possible.',
      achievement: '-30kg weight loss',
      duration: '6 months',
      beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3',
      rating: 5,
      category: 'Weight Loss'
    },
    {
      id: 2,
      type: 'video',
      orientation: 'landscape',
      thumbnail: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3',
      videoUrl: 'https://your-video-url.com/2',
      name: 'Michael Chen',
      title: 'Strength Training Success',
      quote: 'Gained significant muscle mass and strength through the specialized program.',
      achievement: '+15kg muscle gain',
      duration: '8 months',
      beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3',
      rating: 5,
      category: 'Muscle Gain'
    },
    {
      id: 3,
      type: 'video',
      orientation: 'portrait',
      thumbnail: 'https://images.unsplash.com/photo-1609942072337-c3370e820005?ixlib=rb-4.0.3',
      videoUrl: 'https://your-video-url.com/3',
      name: 'Emily Davis',
      title: 'Marathon Achievement',
      quote: 'From couch to marathon - the structured training made it possible.',
      achievement: 'Completed first marathon',
      duration: '12 months',
      beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3',
      rating: 5,
      category: 'Endurance'
    }
  ],
  categories: ['All', 'Weight Loss', 'Muscle Gain', 'Endurance', 'Transformation'],
  stats: {
    successStories: {
      value: "500+",
      label: "Success Stories",
      icon: <Trophy className="w-6 h-6" />,
      description: "Transformations achieved",
      increment: {
        value: "+50",
        period: "this month"
      }
    },
    weightLost: {
      value: "2,500kg",
      label: "Total Weight Lost",
      icon: <Scale className="w-6 h-6" />,
      description: "Combined weight loss",
      increment: {
        value: "+200kg",
        period: "this month"
      }
    },
    transformationTime: {
      value: "6",
      label: "Avg. Transformation Time",
      suffix: "months",
      icon: <Timer className="w-6 h-6" />,
      description: "To reach goals",
      increment: {
        value: "-0.5",
        period: "vs last year"
      }
    },
    activeClients: {
      value: "200+",
      label: "Active Clients",
      icon: <Users className="w-6 h-6" />,
      description: "Currently training",
      increment: {
        value: "+25",
        period: "this quarter"
      }
    }
  }
};

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredTestimonials = testimonials.featured.filter(
    t => selectedCategory === 'All' || t.category === selectedCategory
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-16 bg-[#121212] dark:bg-[#121212] min-h-screen transition-colors duration-200">
      {/* Hero Section with Video Background */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3"
          >
            <source src="your-background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl opacity-0 translate-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real People, Real Results
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of successful transformations. Your journey starts here.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-[#03a9f4] dark:bg-[#03a9f4] text-white rounded-full font-medium hover:bg-[#03a9f4]/90 dark:hover:bg-[#03a9f4]/90 transition-all duration-200 hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-200 hover:scale-105">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Object.entries(testimonials.stats).map(([key, stat], index) => (
              <div
                key={key}
                className="relative bg-[#1e1e1e] rounded-2xl p-6 
                         shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/30 
                         transform hover:-translate-y-1 transition-all duration-300 
                         opacity-0 translate-y-4 animate-fade-in-up
                         border border-[#2d2d2d]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2d2d2d]
                               flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#e0e0e0]">
                      {stat.icon}
                    </div>
                  </div>
                  {stat.increment && (
                    <div className={`px-2 py-1 rounded-full text-xs font-medium 
                                 ${stat.increment.value.startsWith('+') 
                                   ? 'bg-[#1b3a27] text-green-300' 
                                   : 'bg-[#1b2b3a] text-blue-300'}`}>
                      {stat.increment.value}
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <div className="text-3xl font-bold text-[#e0e0e0]">
                      {stat.value}
                    </div>
                    {stat.suffix && (
                      <div className="text-lg text-[#a0a0a0]">
                        {stat.suffix}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-[#e0e0e0] font-medium">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-[#a0a0a0]">
                    {stat.description}
                    {stat.increment && (
                      <span className="ml-1 text-xs opacity-75">
                        ({stat.increment.period})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {testimonials.categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105
                ${selectedCategory === category
                  ? 'bg-[#03a9f4] text-white'
                  : 'bg-[#2d2d2d] text-[#e0e0e0] hover:bg-[#2d2d2d]/90'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Transformations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/30 transition-all duration-300 transform hover:scale-[1.02] opacity-0 translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Before/After Comparison */}
              <div className="relative h-[300px] group cursor-pointer" onClick={() => setSelectedVideo(testimonial)}>
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full overflow-hidden">
                    <img
                      src={testimonial.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden">
                    <img
                      src={testimonial.afterImage}
                      alt="After"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-[#03a9f4] text-white px-3 py-1 rounded-full text-sm">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#03a9f4] flex items-center justify-center transform transition-transform duration-200 hover:scale-110">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  {testimonial.achievement}
                </div>
              </div>

              <div className="p-6">
                {/* Client Info */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#e0e0e0]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#a0a0a0]">
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#03a9f4]/20" />
                  <p className="text-[#a0a0a0] italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Timeline and Category */}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-[#a0a0a0]">
                    <Clock className="w-4 h-4" />
                    {testimonial.duration}
                  </div>
                  <span className="bg-[#03a9f4]/10 text-[#03a9f4] px-3 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#1e1e1e] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video w-full">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#e0e0e0]">
                    {selectedVideo.name}
                  </h3>
                  <p className="text-[#a0a0a0]">
                    {selectedVideo.title}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(selectedVideo.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-[#a0a0a0]">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>{selectedVideo.achievement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{selectedVideo.duration}</span>
                </div>
              </div>
              
              <blockquote className="mt-6 text-lg italic text-[#a0a0a0]">
                "{selectedVideo.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}