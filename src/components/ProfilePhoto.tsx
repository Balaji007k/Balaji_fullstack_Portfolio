
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative flex items-center justify-center"
    >
      {/* Animated glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
          padding: '4px',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full bg-gray-900" />
      </motion.div>

      {/* Profile photo */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-white/20 shadow-2xl">
          <AvatarImage 
            src="/placeholder.svg" 
            alt="Developer Profile"
            className="object-cover"
          />
          <AvatarFallback className="text-4xl lg:text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            BK
          </AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Floating particles around photo */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Subtle pulsing background */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
