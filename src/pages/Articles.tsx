
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

const Articles = () => {
  const articles = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the web development landscape in 2024 and beyond.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Best practices for optimizing React applications, from code splitting to memory management and beyond.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "React"
    },
    {
      title: "The Art of CSS Animations",
      excerpt: "Creating smooth, engaging animations that enhance user experience without compromising performance.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "CSS"
    },
    {
      title: "JavaScript Performance Tips",
      excerpt: "Practical techniques to write faster, more efficient JavaScript code for modern web applications.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "JavaScript"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto max-w-6xl space-y-16">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                  >
                    {article.category}
                  </motion.span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
                >
                  {article.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="text-gray-400 leading-relaxed"
                >
                  {article.excerpt}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="flex items-center justify-between pt-4 border-t border-white/10"
                >
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <motion.span
                    className="text-blue-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read more →
                  </motion.span>
                </motion.div>
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
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Articles;
