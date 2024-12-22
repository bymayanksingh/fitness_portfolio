import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Scale, Clock, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    change: "+50",
    number: "500+",
    label: "Success Stories",
    sublabel: "Transformations achieved(this month)"
  },
  {
    icon: Scale,
    change: "+200kg",
    number: "2,500kg",
    label: "Total Weight Lost",
    sublabel: "Combined weight loss(this month)"
  },
  {
    icon: Clock,
    change: "-0.5",
    number: "6",
    label: "months",
    sublabel: "Avg. Transformation Time"
  },
  {
    icon: Users,
    change: "+25",
    number: "200+",
    label: "Active Clients",
    sublabel: "Currently training(this quarter)"
  }
];

export default function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-elevation-2 rounded-xl p-6
                       shadow-sm hover:shadow-md
                       dark:shadow-black/20 dark:hover:shadow-black/30
                       transform hover:-translate-y-1
                       transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 
                             flex items-center justify-center
                             text-primary-light dark:text-primary-dark">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-primary-light dark:text-primary-dark">
                  {stat.change}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-material-900 dark:text-material-50">
                    {stat.number}
                  </span>
                  <span className="text-lg text-material-600 dark:text-material-400">
                    {stat.label}
                  </span>
                </div>
                <p className="text-sm text-material-500 dark:text-material-400">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
