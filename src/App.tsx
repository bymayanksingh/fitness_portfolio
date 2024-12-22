import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetail from './pages/ProgramDetail';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/programs/:programId" element={<ProgramDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;