import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const latestPosts = [
  {
    title: "The Science Behind Effective Strength Training",
    excerpt: "Discover the latest research on muscle growth and strength development.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3",
    category: "Training",
    date: "Dec 20, 2023",
    readTime: "5 min read"
  },
  {
    title: "Nutrition Myths Debunked",
    excerpt: "Separating fact from fiction in the world of nutrition and dieting.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3",
    category: "Nutrition",
    date: "Dec 18, 2023",
    readTime: "4 min read"
  },
  {
    title: "Ultimate Guide to Recovery",
    excerpt: "Learn the best practices for optimal post-workout recovery.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3",
    category: "Wellness",
    date: "Dec 15, 2023",
    readTime: "6 min read"
  }
];

export default function LatestBlog() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-material-900 dark:text-material-50">
              Latest Articles
            </h2>
            <p className="text-xl text-material-600 dark:text-material-400">
              Stay updated with the latest fitness trends and tips
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 text-primary-light dark:text-primary-dark
                     hover:gap-3 transition-all duration-200"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white dark:bg-dark-elevation-2 rounded-xl overflow-hidden
                       shadow-sm hover:shadow-md
                       dark:shadow-black/20 dark:hover:shadow-black/30
                       transform hover:-translate-y-1
                       transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium
                                bg-white/90 dark:bg-black/90
                                text-primary-light dark:text-primary-dark">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-material-500 dark:text-material-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50
                             group-hover:text-primary-light dark:group-hover:text-primary-dark
                             transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-material-600 dark:text-material-400">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark
                     hover:gap-3 transition-all duration-200"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
