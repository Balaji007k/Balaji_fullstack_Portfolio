
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
// import { ResponsiveSection } from "../components/ResponsiveSection";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "assets/E-commerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Balaji007k/Teabuff.git",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with 3D animations",
      image: "assets/Portfolio.png",
      tags: ["Three.js", "Framer Motion", "React"],
      github: "https://github.com/Balaji007k/Balaji_fullstack_Portfolio.git",
      live: "#"
    },
    {
      title: "ChatBot",
      description: "React.js ChatBot with Gemini-api",
      image: "assets/ChatBot.jpg",
      tags: ["React", "tailwind css"],
      github: "https://github.com/Balaji007k/Chatbot-AI",
      live: "https://balaji007k.github.io/Chatbot-AI/"
    },
    {
      title: "Google clone",
      description: "Responsive Google clone with 3D animations",
      image: "assets/Comming soon.jpg",
      tags: ["Three.js", "Framer Motion", "React"],
      github: "https://github.com/Balaji007k",
      live: "#"
    }
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-2">
              A showcase of my recent work, demonstrating expertise in modern web development technologies and creative problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group w-full rounded-2xl lg:rounded-3xl overflow-hidden border transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={index===3&&'Google clone'}
                    className="w-full h-48 sm:h-56 lg:h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute p-2 top-4 right-4 flex space-x-2"
                  >
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <ArrowUp size={16} className="rotate-45" />
                    </a>
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6 lg:p-6 space-y-3 lg:space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    <a href={project.github}>{project.title} <span className={`${index===3&&'text-white/50'}`}>{index==3&&'Comming soon'}</span></a>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + tagIndex * 0.1 }}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm text-blue-300 border"
                        style={{
                          background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                          borderColor: 'rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-white font-semibold transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(145deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <span className="relative z-10 text-sm sm:text-base">View More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div> */}
        </div>
      {/* </ResponsiveSection> */}
    </PageTransition>
  );
};

export default Projects;
