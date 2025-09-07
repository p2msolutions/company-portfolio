import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  isInView?: boolean;
  variant?: 'default' | 'elevated' | 'minimal';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = '',
  index = 0,
  isInView = true,
  variant = 'default',
  hoverEffect = 'lift',
  onClick,
  onMouseEnter,
  onMouseLeave,
  href,
  target,
  rel,
}) => {
  const baseClasses = {
    default: 'bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border',
    elevated: 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-lg',
    minimal: 'bg-transparent border border-light-border/50 dark:border-dark-border/50',
  };

  const hoverEffects = {
    lift: {
      y: -4
    },
    glow: {
      // No specific properties for glow effect
    },
    scale: {
      scale: 1.02
    },
    none: {},
  };

  const cardContent = (
    <motion.div
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300 cursor-pointer group',
        'hover:border-neon-blue dark:hover:border-electric-green',
        baseClasses[variant],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
              },
            }
          : {}
      }
      whileHover={hoverEffect !== 'none' ? hoverEffects[hoverEffect] : {}}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-electric-green/5 dark:from-purple-accent/5 dark:to-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default BaseCard;