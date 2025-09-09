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
    default: 'bg-light-bg dark:bg-dark-surface border border-light-border dark:border-dark-border',
    elevated: 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border',
    minimal: 'bg-transparent border border-light-border/50 dark:border-dark-border/50',
  };

  const hoverEffects = {
    lift: {
      y: -2
    },
    glow: {
      // No specific properties for glow effect
    },
    scale: {
      scale: 1.01
    },
    none: {},
  };

  const cardContent = (
    <motion.div
      className={cn(
        'relative rounded-lg p-6 transition-all duration-200 cursor-pointer group',
        'glossy-hover',
        baseClasses[variant],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: index * 0.05,
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
      {/* Content */}
      <div className="relative">
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