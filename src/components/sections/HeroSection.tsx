import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const heroSection = document.getElementById("home");

    const updateMousePosition = (e: MouseEvent) => {
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Only update if mouse is within the hero section
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          // Store absolute position for accurate cursor following
          setMousePosition({ x: e.clientX, y: e.clientY });
          setIsMouseInside(true);
        } else {
          setIsMouseInside(false);
        }
      }
    };

    const handleSectionMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleSectionMouseLeave = () => {
      setIsMouseInside(false);
    };

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });

    if (heroSection) {
      heroSection.addEventListener("mouseenter", handleSectionMouseEnter);
      heroSection.addEventListener("mouseleave", handleSectionMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (heroSection) {
        heroSection.removeEventListener("mouseenter", handleSectionMouseEnter);
        heroSection.removeEventListener("mouseleave", handleSectionMouseLeave);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Handler for "Start Your Project"
  const handleStartProject = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation completes
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Smooth Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/15 dark:to-blue-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-electric-green/20 to-neon-blue/20 dark:from-blue-accent/15 dark:to-purple-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Precise Cursor Glow */}
      {isMouseInside && (
        <motion.div
          className="pointer-events-none absolute w-48 h-48 rounded-full bg-gradient-to-r from-neon-blue/25 to-electric-green/25 blur-2xl"
          style={{
            left: mousePosition.x - 96,
            top: mousePosition.y - 96,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            className="flex items-center space-x-3 px-6 py-3 rounded-full glass-morphism-strong glow-effect"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-neon-blue dark:text-electric-green" />
            </motion.div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
              AI-Powered Software Solutions
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight max-w-4xl mx-auto text-center"
        >
          <span className="text-gray-900 dark:text-white">
            Innovating Software
          </span>
          <br className="hidden md:block p-2" />
          <span className="gradient-text dark:dark-gradient-text">
            Empowering Businesses
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          We build next-generation software solutions that transform ideas into
          reality. From AI-powered applications to scalable cloud
          infrastructure.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white font-bold rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
              mass: 0.8,
            }}
            onClick={handleStartProject}
          >
            <span className="relative z-10 flex items-center space-x-2 text-base font-semibold">
              <span>Start Your Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-green to-neon-blue dark:from-blue-accent dark:to-purple-accent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
            />
          </motion.button>

          <motion.button
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-2xl hover:border-neon-blue dark:hover:border-electric-green transition-all duration-300 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(0, 212, 255, 0.8)",
              boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)",
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            onClick={() => navigate("/project")}
          >
            <span className="relative z-10 text-base font-semibold">
              View Our Work
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-electric-green/10 dark:from-purple-accent/10 dark:to-blue-accent/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
