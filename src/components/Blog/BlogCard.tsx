import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

type BlogCardProps = {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
  };
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/30 overflow-hidden hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200">
      <Link to={`/blog/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {post.date}
        </div>
      </div>
    </article>
  );
}