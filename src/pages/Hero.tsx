
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { Scene3D } from "../components/Scene3D";
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <ResponsiveSection fullHeight className="pt-20 flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Enhanced title with 3D effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative"
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative inline-block"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                  textShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Creative
                <Sparkles className="inline-block ml-2 w-8 h-8 lg:w-12 lg:h-12 text-yellow-400 animate-pulse" />
              </motion.span>
              <br />
              <motion.span 
                className="text-white relative"
                style={{
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)"
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Developer
              </motion.span>
            </motion.h1>
            
            {/* Enhanced description with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Crafting digital experiences with cutting-edge technology and creative design. 
                Specializing in React, TypeScript, and modern web development.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"></div>
            </motion.div>

            {/* Enhanced buttons with 3D effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)" 
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className="group relative w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View My Work
                    <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className="group relative w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 backdrop-blur-xl rounded-full text-white font-semibold border-2 border-white/20 transition-all duration-300 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Mail className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced social links with floating effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-center sm:justify-start space-x-4 lg:space-x-6 pt-4"
            >
              {[
                { icon: Github, href: "#", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-800" }
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 backdrop-blur-xl rounded-full border border-white/20 transition-all duration-300 group overflow-hidden`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </motion.a>
              ))}
              
              <Link to="/resume">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium transition-all duration-300 overflow-hidden group"
                  style={{
                    boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <Download className="mr-2 w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced 3D scene container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-64 sm:h-80 lg:h-96 xl:h-[500px] relative order-1 lg:order-2 w-full"
          >
            {/* Multiple layered glowing backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-3xl blur-xl animate-pulse delay-2000"></div>
            
            {/* 3D scene with enhanced styling */}
            <motion.div 
              className="w-full h-full overflow-hidden rounded-3xl relative backdrop-blur-sm border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Scene3D />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-white/60 group cursor-pointer"
          >
            <span className="text-sm group-hover:text-white transition-colors">Scroll to explore</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full backdrop-blur-xl border border-white/20"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
              }}
            >
              <ArrowDown size={20} className="group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
