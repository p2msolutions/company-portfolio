import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'image' | 'project';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'card', 
  count = 1, 
  className = '' 
}) => {
  const shimmerAnimation = {
    initial: { x: '-100%' },
    animate: { x: '100%' },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear' as const
    }
  };

  const SkeletonElement = ({ children, className: elementClassName }: { children?: React.ReactNode, className?: string }) => (
    <div className={`relative overflow-hidden bg-light-surface dark:bg-dark-surface rounded-lg ${elementClassName}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-light-border dark:via-dark-border to-transparent opacity-50"
        {...shimmerAnimation}
      />
      {children}
    </div>
  );

  const renderSkeleton = () => {
    switch (variant) {
      case 'project':
        return (
          <div className="space-y-6">
            {/* Project Image */}
            <SkeletonElement className="h-64 w-full" />
            
            {/* Project Category */}
            <div className="flex items-center justify-between">
              <SkeletonElement className="h-6 w-24" />
            </div>
            
            {/* Project Title */}
            <SkeletonElement className="h-8 w-3/4" />
            
            {/* Project Description */}
            <div className="space-y-2">
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-5/6" />
              <SkeletonElement className="h-4 w-4/6" />
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonElement key={i} className="h-6 w-16" />
              ))}
            </div>
          </div>
        );
        
      case 'card':
        return (
          <div className="p-6 space-y-4">
            <SkeletonElement className="h-6 w-3/4" />
            <div className="space-y-2">
              <SkeletonElement className="h-4 w-full" />
              <SkeletonElement className="h-4 w-5/6" />
            </div>
            <SkeletonElement className="h-10 w-1/3" />
          </div>
        );
        
      case 'text':
        return (
          <div className="space-y-2">
            <SkeletonElement className="h-4 w-full" />
            <SkeletonElement className="h-4 w-5/6" />
            <SkeletonElement className="h-4 w-4/6" />
          </div>
        );
        
      case 'image':
        return <SkeletonElement className="h-48 w-full" />;
        
      default:
        return <SkeletonElement className="h-20 w-full" />;
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mb-6 last:mb-0"
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </div>
  );
};

export default SkeletonLoader;