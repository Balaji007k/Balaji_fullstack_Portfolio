
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      username: "@Balaji K",
      description: "Professional network and career updates",
      // followers: "2.5K",
      icon: <Linkedin size={32} />,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:shadow-blue-500/30",
      url: "https://www.linkedin.com/in/balaji-k-596057297"
    },
    {
      name: "GitHub",
      username: "@Balaji007k",
      description: "Open source projects and code repositories",
      // followers: "1.2K",
      icon: <Github size={32} />,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-500/30",
      url: "https://github.com/Balaji007k"
    },
    {
      name: "Instagram",
      username: "@___balaji.k_007__",
      description: "Behind the scenes and life updates",
      // followers: "1.8K",
      icon: "📸",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:shadow-pink-500/30",
      url: "https://www.instagram.com/___balaji.k_007__"
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
            Social Links
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Connect with me across various social platforms. Let's build a community of developers and share knowledge together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`group block bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 ${platform.hoverColor} hover:shadow-2xl`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${platform.color} text-white`}
                  >
                    {typeof platform.icon === 'string' ? (
                      <span className="text-2xl">{platform.icon}</span>
                    ) : (
                      platform.icon
                    )}
                  </motion.div>
                  
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-right"
                  >
                    <div className="text-2xl font-bold text-white">{platform.followers}</div>
                    <div className="text-sm text-gray-400">followers</div>
                  </motion.div> */}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400">{platform.username}</p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                      Follow me
                    </span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-blue-400 group-hover:text-blue-300 transition-all duration-300"
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Background Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-3xl`}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Join me on this journey of continuous learning and development. Share your thoughts, ask questions, and let's grow together as a community.
            </p>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Follow All Platforms
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SocialLinks;
