
import { motion } from "framer-motion";

export const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full aspect-square max-w-lg mx-auto"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
          backgroundSize: "400% 400%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Profile image placeholder */}
        <motion.div
          className="absolute inset-2 rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          BK
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl opacity-30"
        style={{
          background: "radial-gradient(circle, #3b82f6, #8b5cf6, transparent)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};
