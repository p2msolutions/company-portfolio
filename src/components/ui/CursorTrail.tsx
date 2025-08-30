import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let trailId = 0;
    let animationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      animationFrame = requestAnimationFrame(() => {
        const newPosition = { x: e.clientX, y: e.clientY };
        setMousePosition(newPosition);
        setIsVisible(true);

        // Add to trail with throttling
        setTrail(prev => {
          const newTrail = [
            { x: newPosition.x, y: newPosition.y, id: trailId++ },
            ...prev.slice(0, 6) // Keep only 6 trail points for performance
          ];
          return newTrail;
        });
      });
    };

    const handleMouseLeave = () => {
      setTrail([]);
      setIsVisible(false);
    };

    // Check if device supports hover (not touch device)
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    
    if (supportsHover) {
      document.addEventListener('mousemove', updateMousePosition, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 w-3 h-3 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.1,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-40 w-6 h-6 border border-neon-blue/40 dark:border-electric-green/40 rounded-full"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.3,
        }}
      />

      {/* Trail dots */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-30 w-2 h-2 bg-neon-blue/60 dark:bg-electric-green/60 rounded-full"
          initial={{
            x: point.x - 4,
            y: point.y - 4,
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
