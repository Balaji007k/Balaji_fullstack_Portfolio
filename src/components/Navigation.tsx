
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
        className="fixed top-0 left-0 right-0 z-50 p-6 lg:p-8"
        style={{
          backdropFilter: 'blur(25px)',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.7))',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 25px rgba(59, 130, 246, 0.9)"
            }}
            className="text-2xl lg:text-3xl font-bold relative cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent relative z-10">
              Balaji K
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 to-purple-400/25 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-3 xl:space-x-4 overflow-x-auto overflow-y-hidden">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-6 xl:px-7 py-3.5 xl:py-4 rounded-2xl transition-all duration-300 whitespace-nowrap text-base xl:text-lg font-medium group overflow-hidden ${
                    location.pathname === item.path
                      ? "text-blue-300"
                      : "text-gray-200 hover:text-white"
                  }`}
                  style={{
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))'
                      : 'transparent'
                  }}
                >
                  {/* Enhanced hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced animated underline */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></div>
                  
                  {/* Text with enhanced glow on hover */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-all duration-300">
                    {item.label}
                  </span>
                  
                  {/* Enhanced active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                        boxShadow: '0 0 25px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-4 rounded-2xl relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="lg:hidden mt-6 p-8 rounded-3xl max-w-7xl mx-auto relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
                backdropFilter: 'blur(25px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8"></div>
              <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto relative z-10">
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
                      className={`block px-6 py-4 rounded-2xl text-center transition-all duration-300 text-base font-medium relative overflow-hidden group ${
                        location.pathname === item.path
                          ? "text-blue-300"
                          : "text-gray-200 hover:text-white"
                      }`}
                      style={{
                        background: location.pathname === item.path 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))'
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-all duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
