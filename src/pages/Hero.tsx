
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { Scene3D } from "../components/Scene3D";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <ResponsiveSection 
        fullHeight 
        className="pt-0 flex items-center justify-center min-h-screen max-h-screen overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="relative inline-block">
                  <span 
                    className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent blur-sm"
                    style={{ transform: 'translate(2px, 2px)' }}
                  >
                    Creative
                  </span>
                  <span className="relative bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent shadow-2xl">
                    Creative
                  </span>
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span 
                    className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent blur-sm"
                    style={{ transform: 'translate(2px, 2px)' }}
                  >
                    Developer
                  </span>
                  <span className="relative bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-transparent">
                    Developer
                  </span>
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl relative"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Crafting digital experiences with cutting-edge technology and creative design. 
              Specializing in React, TypeScript, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.4)" 
                  }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto px-8 py-4 relative overflow-hidden rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group"
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
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
                  }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
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
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-center sm:justify-start space-x-4 lg:space-x-6 pt-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
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
                className="p-4 rounded-2xl text-white transition-all duration-300 relative overflow-hidden group"
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
                  className="flex items-center px-6 py-3 rounded-2xl text-white font-medium transition-all duration-300 relative overflow-hidden group"
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-64 sm:h-80 lg:h-96 xl:h-[500px] relative order-1 lg:order-2 w-full flex items-center justify-center"
          >
            <div 
              className="absolute inset-4 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                filter: 'blur(20px)'
              }}
            ></div>
            <div 
              className="w-full h-full rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
