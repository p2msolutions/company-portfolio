import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Simple Logo */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <img
            className="h-12 flex items-center justify-center relative overflow-hidden"
            src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1757271735/Logo_3_jtnmsq.png"
            alt="P2msolutions.com logo"
          />
        </motion.div>

        {/* Simple loading dots */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-neon-blue rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Simple loading text */}
        <p className="text-white font-medium">Loading...</p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
