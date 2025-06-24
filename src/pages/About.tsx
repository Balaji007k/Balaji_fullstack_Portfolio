
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <PageTransition>
      <ResponsiveSection className="pt-20">
        <div className="space-y-12 lg:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold relative">
                <span 
                  className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent blur-sm"
                  style={{ transform: 'translate(2px, 2px)' }}
                >
                  About Me
                </span>
                <span className="relative bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </motion.div>
            <p 
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              I'm a passionate full-stack developer who loves creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I bring ideas to life through code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl p-6 sm:p-8 lg:p-12 space-y-8 w-full overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #1e293b, #0f172a)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div 
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(148, 163, 184, 0.1), transparent 50%)'
              }}
            ></div>
            <h2 
              className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              My Journey
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed relative z-10">
              <p 
                className="text-base sm:text-lg"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                As a software engineer with a passion for innovation, I specialize in creating dynamic web applications and interactive user experiences. My journey began with curiosity about how websites work, and it has evolved into a deep expertise in modern development frameworks.
              </p>
              <p 
                className="text-base sm:text-lg"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                I believe in the power of clean code, thoughtful design, and continuous learning. Whether it's building scalable applications, optimizing performance, or creating stunning visual effects, I approach every project with dedication and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                className="text-center p-4 lg:p-6 rounded-2xl w-full overflow-hidden relative group cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #334155, #1e293b)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(148, 163, 184, 0.3), transparent 70%)'
                  }}
                ></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 relative z-10"
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
                  className="text-slate-400 text-xs sm:text-sm lg:text-base relative z-10"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
                >
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default About;
