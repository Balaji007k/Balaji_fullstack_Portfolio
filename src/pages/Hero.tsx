
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { Scene3D } from "../components/Scene3D";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <PageTransition>
      <ResponsiveSection fullHeight className="pt-20 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-white">Developer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
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
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
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
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </motion.a>
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-64 sm:h-80 lg:h-96 xl:h-[500px] relative order-1 lg:order-2 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="w-full h-full overflow-hidden rounded-3xl">
              <Scene3D />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-white/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default Hero;
