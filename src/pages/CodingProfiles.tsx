
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Github } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      username: "@yourusername",
      description: "Open source projects and code repositories",
      stats: { repositories: "50+", stars: "200+", followers: "150+" },
      color: "from-gray-700 to-gray-900",
      icon: <Github size={32} />,
      url: "https://github.com"
    },
    {
      name: "LeetCode",
      username: "@yourusername",
      description: "Algorithm challenges and competitive programming",
      stats: { solved: "300+", ranking: "Top 15%", streak: "45 days" },
      color: "from-orange-500 to-red-500",
      icon: "🧩",
      url: "https://leetcode.com"
    },
    {
      name: "SkillRack",
      username: "@yourusername",
      description: "Programming practice and skill development",
      stats: { points: "2500+", level: "Expert", badges: "25+" },
      color: "from-green-500 to-emerald-500",
      icon: "🏆",
      url: "https://skillrack.com"
    },
    {
      name: "CodePen",
      username: "@yourusername",
      description: "Frontend experiments and creative coding",
      stats: { pens: "80+", hearts: "500+", views: "10K+" },
      color: "from-purple-500 to-pink-500",
      icon: "🎨",
      url: "https://codepen.io"
    },
    {
      name: "Stack Overflow",
      username: "@yourusername",
      description: "Community contributions and knowledge sharing",
      stats: { reputation: "1200+", answers: "45+", badges: "12+" },
      color: "from-orange-600 to-yellow-500",
      icon: "📚",
      url: "https://stackoverflow.com"
    },
    {
      name: "Dev.to",
      username: "@yourusername",
      description: "Technical articles and community engagement",
      stats: { articles: "25+", reactions: "800+", followers: "120+" },
      color: "from-blue-600 to-cyan-500",
      icon: "✍️",
      url: "https://dev.to"
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
            Coding Profiles
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore my presence across various coding platforms, from open-source contributions to competitive programming achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group block"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative space-y-6">
                  {/* Icon and Name */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="text-3xl"
                    >
                      {typeof profile.icon === 'string' ? profile.icon : profile.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {profile.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{profile.username}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {Object.entries(profile.stats).map(([key, value], statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + statIndex * 0.1 + 0.5 }}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-center pt-4"
                  >
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      Visit Profile →
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow me on these platforms to stay updated with my latest projects, solutions, and contributions to the developer community.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
