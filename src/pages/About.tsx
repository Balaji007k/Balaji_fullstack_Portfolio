
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { useState, useEffect } from "react";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm a passionate full-stack developer who loves creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I bring ideas to life through code.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <PageTransition>
      {/* <ResponsiveSection className="pt-16 lg:pt-20 pb-8 lg:pb-12"> */}
        <div className="space-y-8 lg:space-y-16 px-8 pt-20 pb-10 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 lg:space-y-6"
          >
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 lg:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
          </motion.div>
            
            <motion.div 
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              <span className="inline-block min-h-[3em]">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-blue-400 ml-1"
                />
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="relative rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 space-y-6 lg:space-y-8 w-full overflow-hidden mx-auto max-w-6xl"
            style={{
              background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1), transparent 50%)'
              }}
            />
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white relative z-10 px-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              My Journey
            </motion.h2>
            
            <div className="space-y-4 lg:space-y-6 text-slate-300 leading-relaxed relative z-10 px-2">
              <motion.p 
                className="text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                As a software engineer with a passion for innovation, I specialize in creating dynamic web applications and interactive user experiences. My journey began with curiosity about how websites work, and it has evolved into a deep expertise in modern development frameworks.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.3 }}
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                I believe in the power of clean code, thoughtful design, and continuous learning. Whether it's building scalable applications, optimizing performance, or creating stunning visual effects, I approach every project with dedication and creativity.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 max-w-6xl mx-auto px-1 sm:px-2"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                className="text-center p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl w-full overflow-hidden relative group cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, rgba(51, 65, 85, 0.8), rgba(30, 41, 59, 0.9))',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 70%)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3.0 + index * 0.1 }}
                  className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  {achievement.number}
                </motion.div>
                <div 
                  className="text-slate-400 text-xs sm:text-sm lg:text-base relative z-10 leading-tight"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
                >
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      {/* </ResponsiveSection> */}
    </PageTransition>
  );
};

export default About;
