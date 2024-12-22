import React from 'react';

export default function Newsletter() {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-material-500 dark:text-material-400 tracking-wider uppercase mb-4">
        Subscribe to our newsletter
      </h3>
      <p className="text-base text-material-600 dark:text-material-300 mb-4">
        Get fitness tips, success stories, and exclusive offers delivered to your inbox.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="min-w-0 flex-auto rounded-md 
                   border border-material-200 dark:border-material-800 
                   bg-white dark:bg-dark-elevation-2
                   px-3.5 py-2 
                   text-material-900 dark:text-material-50
                   shadow-sm dark:shadow-none
                   ring-1 ring-inset ring-material-300 dark:ring-material-800
                   focus:ring-2 focus:ring-inset focus:ring-primary-light dark:focus:ring-primary-dark
                   placeholder:text-material-400 dark:placeholder:text-material-500
                   transition-colors duration-200
                   sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex-none rounded-md 
                   bg-primary-light dark:bg-primary-dark
                   px-3.5 py-2.5 
                   text-sm font-semibold 
                   text-white dark:text-material-900
                   shadow-sm 
                   hover:bg-blue-700 dark:hover:bg-blue-300
                   focus-visible:outline focus-visible:outline-2 
                   focus-visible:outline-offset-2 
                   focus-visible:outline-primary-light dark:focus-visible:outline-primary-dark
                   transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}