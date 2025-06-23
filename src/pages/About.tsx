
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              I'm a passionate full-stack developer who loves creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I bring ideas to life through code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 space-y-8 w-full overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                As a software engineer with a passion for innovation, I specialize in creating dynamic web applications and interactive user experiences. My journey began with curiosity about how websites work, and it has evolved into a deep expertise in modern development frameworks.
              </p>
              <p className="text-base sm:text-lg">
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 lg:p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-white/10 w-full overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">
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
