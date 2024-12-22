import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import BookingButton from './BookingButton';
import Logo from './Logo'; // Assuming the Logo component is in a file named Logo.tsx

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-material-900 dark:text-material-50 font-semibold" 
      : "text-material-600 dark:text-material-400 hover:text-material-900 dark:hover:text-material-50 transition-colors duration-200";
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-material-50/95 dark:bg-material-950/95 backdrop-blur-sm z-50 shadow-sm dark:shadow-black/20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" onClick={handleLinkClick} className="flex-shrink-0 flex items-center gap-2 group">
            <Logo className="transform transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-bold text-xl text-material-900 dark:text-material-50">
              Apex Fitness
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive("/")}>Home</Link>
            <Link to="/programs" className={isActive("/programs")}>Programs</Link>
            <Link to="/about" className={isActive("/about")}>About</Link>
            <Link to="/blog" className={isActive("/blog")}>Blog</Link>
            <Link to="/testimonials" className={isActive("/testimonials")}>Testimonials</Link>
            <ThemeToggle />
            <BookingButton variant="navbar" />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-material-900 dark:text-material-50"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-material-50 dark:bg-dark-elevation-2 transition-colors duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleLinkClick} className={`block px-3 py-2 ${isActive("/")}`}>Home</Link>
            <Link to="/programs" onClick={handleLinkClick} className={`block px-3 py-2 ${isActive("/programs")}`}>Programs</Link>
            <Link to="/about" onClick={handleLinkClick} className={`block px-3 py-2 ${isActive("/about")}`}>About</Link>
            <Link to="/blog" onClick={handleLinkClick} className={`block px-3 py-2 ${isActive("/blog")}`}>Blog</Link>
            <Link to="/testimonials" onClick={handleLinkClick} className={`block px-3 py-2 ${isActive("/testimonials")}`}>Testimonials</Link>
            <div className="px-3 py-2" onClick={handleLinkClick}>
              <BookingButton variant="navbar" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}