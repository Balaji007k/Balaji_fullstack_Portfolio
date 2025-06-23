
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed", icon: Award, color: "from-blue-500 to-cyan-500" },
    { number: "3+", label: "Years Experience", icon: Clock, color: "from-purple-500 to-pink-500" },
    { number: "100%", label: "Client Satisfaction", icon: Users, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Support Available", icon: Shield, color: "from-orange-500 to-red-500" },
  ];

  return (
    <PageTransition>
      <ResponsiveSection className="pt-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        <div className="space-y-12 lg:space-y-16 relative z-10">
          {/* Enhanced title section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative"
              style={{
                filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 max-w-4xl mx-auto backdrop-blur-xl rounded-2xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed px-4">
                I'm a passionate full-stack developer who loves creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I bring ideas to life through code.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced journey section with glass morphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <motion.div
              className="relative p-6 sm:p-8 lg:p-12 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 35px 70px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
                My Journey
              </h2>
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <motion.p 
                  className="text-base sm:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  As a software engineer with a passion for innovation, I specialize in creating dynamic web applications and interactive user experiences. My journey began with curiosity about how websites work, and it has evolved into a deep expertise in modern development frameworks.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  I believe in the power of clean code, thoughtful design, and continuous learning. Whether it's building scalable applications, optimizing performance, or creating stunning visual effects, I approach every project with dedication and creativity.
                </motion.p>
              </div>

              {/* Floating background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-200"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced achievements grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                className="group relative text-center p-4 lg:p-6 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Icon with floating animation */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="mb-4 flex justify-center"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Number with glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 relative"
                  style={{
                    background: `linear-gradient(135deg, ${achievement.color.split(' ')[1]}, ${achievement.color.split(' ')[3]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
                  }}
                >
                  {achievement.number}
                </motion.div>

                <div className="text-gray-400 text-xs sm:text-sm lg:text-base group-hover:text-gray-300 transition-colors">
                  {achievement.label}
                </div>

                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white/20 rounded-full group-hover:animate-ping delay-200"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ResponsiveSection>
    </PageTransition>
  );
};

export default About;
