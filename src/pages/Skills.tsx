
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        // { name: "TypeScript", level: 85 },
        { name: "CSS", level: 88 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Java", level: 50 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        { name: "Figma", level: 85 },
        // { name: "Three.js", level: 80 },
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="container pt-20 pb-10 mx-auto max-w-6xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.3 }}
                className="text-2xl font-bold text-white mb-8"
              >
                {category.title}
              </motion.h2>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                    }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8 
                        }}
                        className="text-blue-400 font-semibold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                          ease: "easeOut"
                        }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ 
                          duration: 2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                          repeat: 2
                        }}
                        style={{ width: `${skill.level}%` }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technology never stops evolving, and neither do I. I'm constantly exploring new frameworks, tools, and best practices to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
