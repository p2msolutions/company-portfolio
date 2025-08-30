import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { clients } from '../../data/content';

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
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: 'calc(200% + 48px)' }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${client.name}`}
                className="flex-shrink-0 w-32 h-16 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border flex items-center justify-center group hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}

              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-neon-blue dark:group-hover:text-electric-green transition-colors duration-200">
                  {client.name}
                </span>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`second-${client.name}`}
                className="flex-shrink-0 w-32 h-16 bg-white dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border flex items-center justify-center group hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-neon-blue dark:group-hover:text-electric-green transition-colors duration-200">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent pointer-events-none" />
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '25+', label: 'Happy Clients' },
            { number: '99%', label: 'Success Rate' },
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
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text dark:dark-gradient-text mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
              >
                {stat.number}
              </motion.div>
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
