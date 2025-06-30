
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Hero" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
  { path: "/social", label: "Social" },
  { path: "/cta", label: "Hire Me" },
  { path: "/resume", label: "Resume" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4 lg:py-5"
        style={{
          backdropFilter: 'blur(20px)',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex justify-between items-center max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
            }}
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-poppins relative cursor-pointer flex-shrink-0"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent relative z-10">
              Balaji K
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 xl:space-x-3 overflow-x-auto overflow-y-hidden">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-5 xl:px-6 py-3 rounded-2xl transition-all duration-500 whitespace-nowrap text-base xl:text-lg font-poppins font-medium group overflow-hidden ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))'
                      : 'transparent',
                    textShadow: location.pathname === item.path 
                      ? '0 2px 8px rgba(59, 130, 246, 0.4)' 
                      : 'none'
                  }}
                >
                  {/* Enhanced hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                  
                  {/* 3D depth shadow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated underline with gradient */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500 rounded-full shadow-lg shadow-blue-400/50"></div>
                  
                  {/* Text with enhanced effects */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_2px_12px_rgba(59,130,246,0.8)] group-hover:scale-105 transition-all duration-300 tracking-wide">
                    {item.label}
                  </span>
                  
                  {/* Active indicator with enhanced styling */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-2xl border border-blue-400/30"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Subtle shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 sm:p-3 rounded-xl sm:rounded-2xl relative overflow-hidden group flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 sm:mt-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl mx-auto relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 max-h-80 sm:max-h-96 overflow-y-auto relative z-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl text-center transition-all duration-500 text-xs sm:text-sm font-poppins font-medium relative overflow-hidden group ${
                        location.pathname === item.path
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      style={{
                        background: location.pathname === item.path 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textShadow: location.pathname === item.path 
                          ? '0 2px 8px rgba(59, 130, 246, 0.4)' 
                          : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg sm:rounded-xl scale-95 group-hover:scale-100"></div>
                      <span className="relative z-10 group-hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-all duration-300 tracking-wide">
                        {item.label}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg sm:rounded-xl"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Custom scrollbar hide utility */}
      <style global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};
