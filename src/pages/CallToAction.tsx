
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <PageTransition>
      <div className="container pt-20 pb-10 mx-auto max-w-4xl text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Work
            </span>
            <br />
            <span className="text-white">Together?</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Let's bring your vision to life with cutting-edge technology and creative solutions. I'm available for new projects and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-blue-500 lg:to-purple-500 rounded-full lg:blur-3xl lg:opacity-30 scale-150"></div>
          <motion.div
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Hire Me Now</span>
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "Fast Delivery",
              description: "Quick turnaround times without compromising quality",
              icon: "⚡"
            },
            {
              title: "Modern Tech",
              description: "Latest frameworks and best practices for optimal performance",
              icon: "🚀"
            },
            {
              title: "24/7 Support",
              description: "Ongoing maintenance and support for your projects",
              icon: "💎"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CallToAction;
