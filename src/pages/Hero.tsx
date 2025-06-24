
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <ResponsiveSection 
        fullHeight 
        className="pt-0 flex items-center justify-center min-h-screen max-h-screen overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full h-full py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center px-2 sm:px-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center lg:text-left">
                <motion.span 
                  className="relative inline-block animate-shimmer-text mb-2 lg:mb-4"
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
                  className="relative inline-block animate-shimmer-text"
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
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl text-center lg:text-left px-2 sm:px-0"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              Crafting digital experiences with cutting-edge technology and creative design. 
              Specializing in React, TypeScript, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start px-2 sm:px-0"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 relative overflow-hidden rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group"
                  style={{
                    background: 'linear-gradient(145deg, #334155, #1e293b)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <span className="relative z-10 text-sm lg:text-base">View My Work</span>
                  <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg] relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Mail className="mr-2 w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm lg:text-base">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4 pt-2 lg:pt-4 px-2 sm:px-0"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 lg:p-4 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #374151, #1f2937)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Github className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 lg:p-4 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #374151, #1f2937)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 lg:px-6 py-2.5 lg:py-3 rounded-2xl text-white font-medium transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(145deg, #059669, #047857)',
                    boxShadow: '0 8px 25px rgba(5,150,105,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Download className="mr-2 w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm lg:text-base">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-48 sm:h-64 lg:h-80 xl:h-96 relative order-1 lg:order-2 w-full flex items-center justify-center mx-auto max-w-md lg:max-w-none"
          >
            {/* Main glassy background container */}
            <div 
              className="w-full h-full rounded-3xl relative overflow-hidden glass-morphism"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {/* Floating 3D orbs */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute rounded-full opacity-60"
                  style={{
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    background: `radial-gradient(circle, ${
                      ['rgba(59, 130, 246, 0.6)', 'rgba(147, 51, 234, 0.6)', 'rgba(6, 182, 212, 0.6)', 'rgba(16, 185, 129, 0.6)'][i % 4]
                    }, transparent 70%)`,
                    filter: 'blur(1px)',
                    boxShadow: `0 0 20px ${
                      ['rgba(59, 130, 246, 0.4)', 'rgba(147, 51, 234, 0.4)', 'rgba(6, 182, 212, 0.4)', 'rgba(16, 185, 129, 0.4)'][i % 4]
                    }`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Rotating geometric shapes */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute border opacity-30"
                  style={{
                    width: `${15 + i * 10}px`,
                    height: `${15 + i * 10}px`,
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 15}%`,
                    borderColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][i],
                    borderWidth: '1px',
                    borderRadius: i % 2 === 0 ? '0' : '50%',
                    transform: `rotate(${i * 45}deg)`
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}

              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              
              {/* Center glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent 70%)'
                }}
              />

              {/* Subtle pulsing light */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1), transparent 50%)'
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
