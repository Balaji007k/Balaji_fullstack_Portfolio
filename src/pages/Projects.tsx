
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with animated backgrounds",
      image: "/placeholder.svg",
      tags: ["React", "API", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with 3D animations",
      image: "/placeholder.svg",
      tags: ["Three.js", "Framer Motion", "React"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto max-w-6xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development technologies and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 flex space-x-2"
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

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + tagIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
