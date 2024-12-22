import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const coaches = [
  {
    name: "Sarah Mitchell",
    role: "Head Trainer",
    specialties: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Nutrition Expert",
    specialties: "Weight Management",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Emma Rodriguez",
    role: "HIIT Specialist",
    specialties: "Cardio & Core",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export default function Coaches() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-material-900 dark:text-material-50">
            Meet Our Expert Coaches
          </h2>
          <p className="text-xl text-material-600 dark:text-material-400 max-w-2xl mx-auto">
            Train with the best. Our certified coaches are here to guide you on your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-dark-elevation-2 rounded-xl overflow-hidden
                       shadow-sm hover:shadow-md
                       dark:shadow-black/20 dark:hover:shadow-black/30
                       transform hover:-translate-y-1
                       transition-all duration-300"
            >
              {/* Coach Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                             flex items-center justify-center gap-4
                             transition-opacity duration-300">
                  <a
                    href={coach.social.instagram}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white
                             transform hover:scale-110 transition-all duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={coach.social.twitter}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white
                             transform hover:scale-110 transition-all duration-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={coach.social.linkedin}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white
                             transform hover:scale-110 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Coach Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-material-900 dark:text-material-50">
                  {coach.name}
                </h3>
                <p className="text-primary-light dark:text-primary-dark font-medium mb-2">
                  {coach.role}
                </p>
                <p className="text-material-600 dark:text-material-400">
                  {coach.specialties}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
