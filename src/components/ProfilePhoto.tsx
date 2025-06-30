
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* 3D Container with glassmorphism */}
      <div 
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), rgba(6, 182, 212, 0.1))',
          backdropFilter: 'blur(25px) saturate(200%)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'
        }}
      >
        {/* Animated rotating border */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1"
          style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)', padding: '2px' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className="w-full h-full rounded-2xl sm:rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
            }}
          />
        </motion.div>

        {/* Profile Image Container */}
        <motion.div
          className="absolute inset-4 sm:inset-6 lg:inset-8 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Avatar className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-44 lg:h-44 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 border-2 sm:border-4 border-white/20 shadow-2xl">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Balaji K" 
              className="object-cover"
            />
            <AvatarFallback className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              BK
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Floating particles around the image */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Central glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent 70%)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};
