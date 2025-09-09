import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorTrail: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  
    let animationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      animationFrame = requestAnimationFrame(() => {
        const newPosition = { x: e.clientX, y: e.clientY };
        setMousePosition(newPosition);
        setIsVisible(true);

        // Trail functionality removed for cleaner performance
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Check if device supports hover (not touch device)
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {
      document.addEventListener("mousemove", updateMousePosition, {
        passive: true,
      });
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-accent-primary dark:bg-accent-primary-light rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] w-4 h-4 border border-accent-primary/50 dark:border-accent-primary-light/50 rounded-full"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CursorTrail;
