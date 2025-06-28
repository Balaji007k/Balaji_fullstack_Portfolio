import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero3DBackground } from "../components/Hero3DBackground";
import { ProfilePhoto } from "../components/ProfilePhoto";

const Hero = () => {
  return (
    <PageTransition>
      {/* Full-screen 3D Background */}
      <Hero3DBackground />
      
      {/* Content overlay with improved contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/60 backdrop-blur-[1px]" />
      
      <ResponsiveSection 
        fullHeight 
        className="pt-0 flex items-center justify-center min-h-screen max-h-screen overflow-hidden relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full h-full py-16 lg:py-20">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center px-2 sm:px-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                <motion.span 
                  className="relative inline-block mb-2 lg:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s ease-in-out infinite',
                    textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                  }}
                >
                  Creative
                </motion.span>
                <br />
                <motion.span 
                  className="relative inline-block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.1)'
                  }}
                >
                  Developer
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl text-center lg:text-left px-2 sm:px-0"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Crafting digital experiences with cutting-edge technology and creative design. 
              Specializing in React, TypeScript, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start px-2 sm:px-0"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 relative overflow-hidden rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group"
                  style={{
                    background: 'linear-gradient(145deg, rgba(51, 65, 85, 0.8), rgba(30, 41, 59, 0.8))',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span className="relative z-10 text-base lg:text-lg">View My Work</span>
                  <ArrowDown className="ml-2 w-5 h-5 rotate-[-90deg] relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Mail className="mr-2 w-5 h-5 relative z-10" />
                  <span className="relative z-10 text-base lg:text-lg">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6 pt-4 lg:pt-6 px-2 sm:px-0"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 lg:p-5 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, rgba(55, 65, 81, 0.8), rgba(31, 41, 55, 0.8))',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Github className="w-6 h-6 lg:w-7 lg:h-7 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 lg:p-5 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, rgba(55, 65, 81, 0.8), rgba(31, 41, 55, 0.8))',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Linkedin className="w-6 h-6 lg:w-7 lg:h-7 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-white font-medium transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(145deg, rgba(5, 150, 105, 0.8), rgba(4, 120, 87, 0.8))',
                    boxShadow: '0 10px 30px rgba(5,150,105,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Download className="mr-2 w-5 h-5 relative z-10" />
                  <span className="relative z-10 text-base lg:text-lg">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo */}
          <div className="order-1 lg:order-2 w-full flex items-center justify-center">
            <ProfilePhoto />
          </div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
