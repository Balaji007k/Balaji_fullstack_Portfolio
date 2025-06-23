
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
  { path: "/articles", label: "Articles" },
  { path: "/coding-profiles", label: "Profiles" },
  { path: "/social", label: "Social" },
  { path: "/cta", label: "Hire Me" },
  { path: "/resume", label: "Resume" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-blue-500/20 text-blue-400"
                      : "hover:bg-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 p-6 bg-black/50 backdrop-blur-lg rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-4">
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
                      className={`block px-4 py-3 rounded-lg text-center transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-blue-500/20 text-blue-400"
                          : "hover:bg-white/10 text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
