
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      {/* Modern gradient background with abstract shapes */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        </div>

        <ResponsiveSection 
          fullHeight 
          className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-5 sm:pt-20"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile-first responsive grid */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
              
              {/* Profile Image - Top on mobile, right on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 w-full flex items-center justify-center"
              >
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <ProfilePhoto />
                </div>
              </motion.div>

              {/* Content - Bottom on mobile, left on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left w-full"
              >
                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white mb-2">
                      Creative
                    </span>
                    <span 
                      className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                    >
                      Developer
                    </span>
                  </h1>
                </motion.div>
                
                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
                >
                  Crafting digital experiences with cutting-edge technology and creative design. 
                  Specializing in React, TypeScript, and modern web development.
                </motion.p>

                {/* Call-to-Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0"
                >
                  <Link to="/projects" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-w-0 sm:min-w-[200px]"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </Link>
                  
                  <Link to="/about" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center min-w-0 sm:min-w-[200px] backdrop-blur-sm"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-4 px-4 sm:px-0"
                >
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </Link>
                  
                  <Link to="/resume">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-3 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-all duration-300 text-sm sm:text-base"
                    >
                      <Download className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      Resume
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </ResponsiveSection>
      </div>
    </PageTransition>
  );
};

export default Hero;
