import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { clients } from '../../data/content';

// Define props interface for CountUp component
interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  isInView: boolean;
  suffix?: string;
}

// CountUp Component with proper TypeScript typing
const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2, 
  delay = 0, 
  isInView, 
  suffix = "" 
}) => {
  const [count, setCount] = React.useState(0);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      // Start animation after delay
      const timeoutId = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay * 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [end, duration, delay, isInView]);
  
  return <span>{count}{suffix}</span>;
};

const ClientsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Trusted by</span>
            <span className="gradient-text dark:dark-gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join the companies that have transformed their business with our solutions
          </p>
        </motion.div>

        {/* Marquee Animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{
              x: [`0%`, `-${100 / 2}%`],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            style={{
              width: `${200}%`,
              gap: '3rem'
            }}
          >
            {/* First set of logos */}
            {clients.concat(clients).map((client, index) => (
              <motion.div
                key={`logo-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border flex items-center justify-center group glass-card transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index % clients.length) * 0.1 }}
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-200">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats with Counting Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: 50, label: 'Projects Delivered', suffix: '+' },
            { number: 25, label: 'Happy Clients', suffix: '+' },
            { number: 99, label: 'Success Rate', suffix: '%' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text dark:dark-gradient-text mb-2">
                {typeof stat.number === 'number' ? (
                  <CountUp 
                    end={stat.number} 
                    isInView={isInView} 
                    delay={0.6 + index * 0.2}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;