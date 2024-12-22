import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import BlogCard from '../../components/Blog/BlogCard';

const blogPosts = [
  {
    id: "1",
    title: "The Science of Strength Training",
    excerpt: "Discover the biology of muscle growth, neural adaptations, and evidence-based training protocols for optimal strength gains...",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3",
    date: "December 22, 2023",
    readTime: "8 min read",
    category: "Training"
  },
  {
    id: "2",
    title: "Nutrition Fundamentals for Peak Performance",
    excerpt: "Learn how to optimize your nutrition through scientific principles, including macro ratios, meal timing, and evidence-based supplementation...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3",
    date: "December 29, 2023",
    readTime: "10 min read",
    category: "Nutrition"
  },
  {
    id: "3",
    title: "The Art and Science of Recovery",
    excerpt: "Master the crucial aspects of recovery including sleep optimization, stress management, and preventing overtraining syndrome...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
    date: "January 5, 2024",
    readTime: "7 min read",
    category: "Recovery"
  },
  {
    id: "4",
    title: "Mobility Training: The Missing Link",
    excerpt: "Enhance your performance and prevent injuries through proper mobility training, including dynamic stretching and joint mobility protocols...",
    image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3",
    date: "January 12, 2024",
    readTime: "6 min read",
    category: "Mobility"
  },
  {
    id: "5",
    title: "High-Intensity Interval Training (HIIT) Mastery",
    excerpt: "Master the science of HIIT with optimal work-to-rest ratios, progressive programming, and sample workouts for all levels...",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3",
    date: "January 19, 2024",
    readTime: "9 min read",
    category: "Training"
  },
  {
    id: "6",
    title: "Mind-Muscle Connection",
    excerpt: "Develop stronger mind-muscle connection through neuromuscular activation techniques, visualization, and mental preparation strategies...",
    image: "https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3",
    date: "January 26, 2024",
    readTime: "7 min read",
    category: "Mental Training"
  },
  {
    id: "7",
    title: "Periodization: Programming for Success",
    excerpt: "Learn the art of program design through different periodization methods, volume manipulation, and progress tracking strategies...",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3",
    date: "February 2, 2024",
    readTime: "11 min read",
    category: "Training"
  },
  {
    id: "8",
    title: "Advanced Nutrition Strategies",
    excerpt: "Take your nutrition to the next level with carb cycling, intermittent fasting, and competition preparation strategies...",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3",
    date: "February 9, 2024",
    readTime: "10 min read",
    category: "Nutrition"
  },
  {
    id: "9",
    title: "The Science of Cardio Training",
    excerpt: "Master cardiovascular training through understanding heart rate zones, VO2 max improvement, and concurrent training optimization...",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3",
    date: "February 16, 2024",
    readTime: "8 min read",
    category: "Training"
  },
  {
    id: "10",
    title: "Lifestyle Integration: Sustainable Fitness",
    excerpt: "Create a sustainable fitness lifestyle through habit formation, work-life balance, and long-term motivation strategies...",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3",
    date: "February 23, 2024",
    readTime: "9 min read",
    category: "Lifestyle"
  }
];

const categories = ["All", "Workout", "Nutrition", "Lifestyle", "Mental Health", "Recovery", "Training", "Mobility", "Mental Training"];
const POSTS_PER_PAGE = 6;

export default function BlogList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCardClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-material-50 dark:bg-material-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-material-900 dark:text-material-50 mb-6 md:mb-0">
            Latest Blog Posts
          </h1>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 pl-10 rounded-xl
                         bg-material-100 dark:bg-dark-elevation-2
                         text-material-900 dark:text-material-50
                         placeholder:text-material-500 dark:placeholder:text-material-400
                         focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                         transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-material-500 dark:text-material-400" />
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 rounded-xl
                       bg-material-100 dark:bg-dark-elevation-2
                       text-material-900 dark:text-material-50
                       hover:bg-material-200 dark:hover:bg-dark-elevation-3
                       flex items-center gap-2
                       transition-all duration-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`mb-8 transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                         ${selectedCategory === category
                           ? 'bg-primary-light dark:bg-primary-dark text-white'
                           : 'bg-material-100 dark:bg-dark-elevation-2 text-material-900 dark:text-material-50 hover:bg-material-200 dark:hover:bg-dark-elevation-3'
                         }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => handleCardClick(post.id)}
                className="group cursor-pointer bg-material-50 dark:bg-dark-elevation-2 
                         rounded-xl overflow-hidden shadow-sm hover:shadow-md 
                         dark:shadow-black/20 dark:hover:shadow-black/30 
                         transition-all duration-200"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-2 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-material-600 dark:text-material-400 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-material-900 dark:text-material-50 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-material-600 dark:text-material-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-material-600 dark:text-material-400">
                      {post.readTime}
                    </span>
                    <div className="flex items-center gap-1 text-primary-light dark:text-primary-dark group-hover:gap-2 transition-all duration-200">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-material-600 dark:text-material-400">
              No posts found matching your criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > POSTS_PER_PAGE && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-material-100 dark:bg-dark-elevation-2
                       text-material-900 dark:text-material-50
                       hover:bg-material-200 dark:hover:bg-dark-elevation-3
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200
                         ${currentPage === page
                           ? 'bg-primary-light dark:bg-primary-dark text-white'
                           : 'bg-material-100 dark:bg-dark-elevation-2 text-material-900 dark:text-material-50 hover:bg-material-200 dark:hover:bg-dark-elevation-3'
                         }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-material-100 dark:bg-dark-elevation-2
                       text-material-900 dark:text-material-50
                       hover:bg-material-200 dark:hover:bg-dark-elevation-3
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}