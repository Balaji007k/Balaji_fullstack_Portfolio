
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const articles = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the web development landscape in 2024 and beyond.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      author: "John Doe",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Best practices for optimizing React applications, from code splitting to memory management and beyond.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "React",
      author: "Jane Smith",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      title: "The Art of CSS Animations",
      excerpt: "Creating smooth, engaging animations that enhance user experience without compromising performance.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "CSS",
      author: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
      title: "JavaScript Performance Tips",
      excerpt: "Practical techniques to write faster, more efficient JavaScript code for modern web applications.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "JavaScript",
      author: "Sarah Wilson",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
    },
    {
      title: "Modern UI/UX Design Principles",
      excerpt: "Essential design principles and patterns that create intuitive and engaging user experiences.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Design",
      author: "Alex Chen",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
    },
    {
      title: "API Design Best Practices",
      excerpt: "Guidelines for creating robust, scalable APIs that developers love to work with.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Backend",
      author: "David Brown",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", ...Array.from(new Set(articles.map(article => article.category)))];
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Articles
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and the latest technologies shaping our digital world.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Tag className="inline w-4 h-4 mr-2" />
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <motion.div
                    className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Articles;
