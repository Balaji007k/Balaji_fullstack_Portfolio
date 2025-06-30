
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <ResponsiveSection 
        fullHeight 
        className="pt-16 sm:pt-20 lg:pt-24 xl:pt-28 flex items-center justify-center min-h-full w-full overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full h-full pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center lg:text-left font-poppins">
                <motion.span 
                  className="relative inline-block mb-2 lg:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}
                >
                  Creative
                </motion.span>
                <br />
                <motion.span 
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s ease-in-out infinite'
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
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed text-center lg:text-left font-outfit max-w-2xl"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              Crafting digital experiences with cutting-edge technology and creative design. 
              Specializing in React, TypeScript, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center group font-poppins text-sm sm:text-base"
                  style={{
                    background: 'linear-gradient(145deg, #334155, #1e293b)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg] relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden font-poppins text-sm sm:text-base"
                  style={{
                    background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Mail className="mr-2 w-4 h-4 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-2 sm:pt-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #374151, #1f2937)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #374151, #1f2937)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white font-medium transition-all duration-300 relative overflow-hidden group font-poppins text-sm sm:text-base"
                  style={{
                    background: 'linear-gradient(145deg, #059669, #047857)',
                    boxShadow: '0 8px 25px rgba(5,150,105,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Download className="mr-2 w-4 h-4 relative z-10" />
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Profile Photo */}
          <div className="order-1 lg:order-2 flex items-center justify-center w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md aspect-square">
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
