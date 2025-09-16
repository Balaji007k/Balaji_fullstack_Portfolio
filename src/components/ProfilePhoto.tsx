
import { motion } from "framer-motion";

export const ProfilePhoto = () => {
  return (
    <motion.div
      className="relative w-full aspect-square max-w-lg mx-auto"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute overflow-hidden inset-0 w-full h-full rounded-full"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
        }}
      >
        {/* Profile image placeholder */}
        <motion.div
          className="absolute flex justify-center overflow-hidden h-100 w-100 inset-2 rounded-full bg-slate-800 text-6xl font-bold text-white"
        >
          <img className="h-full w-75" src="assets/Profile_photo.jpg" alt="Loading" />
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
    </motion.div>
  );
};
