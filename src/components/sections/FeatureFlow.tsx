import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Zap, CheckCircle } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { features } from '../../data/content';

const iconMap = {
  'Web & App Development': Code,
  'AI/ML Integrations': Brain,
  'Cloud & DevOps Solutions': Cloud,
  'Workflow Automation': Zap,
};

const FeatureFlow: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">How We</span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">Transform</span>
            <span className="text-gray-900 dark:text-white"> Ideas</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we guide your vision through every stage with cutting-edge technology and proven methodologies.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.title as keyof typeof iconMap];
            const isEven = index % 2 === 0;

            return (
              <FeatureBlock
                key={feature.title}
                feature={feature}
                icon={IconComponent}
                isEven={isEven}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface FeatureBlockProps {
  feature: typeof features[0];
  icon: React.ComponentType<any>;
  isEven: boolean;
  index: number;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ feature, icon: Icon, isEven, index }) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        isEven ? '' : 'lg:grid-flow-col-dense'
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Content */}
      <div className={`${isEven ? '' : 'lg:col-start-2'} space-y-6`}>
        <motion.div
          className="flex items-center space-x-4 mb-6"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 border border-neon-blue/30 dark:border-purple-accent/30">
            <Icon className="w-6 h-6 text-neon-blue dark:text-electric-green" />
          </div>
          <span className="text-sm font-semibold text-neon-blue dark:text-electric-green uppercase tracking-wider">
            0{index + 1}
          </span>
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {feature.description}
        </motion.p>

        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {feature.benefits.map((benefit, benefitIndex) => (
            <motion.li
              key={benefit}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + benefitIndex * 0.1 }}
            >
              <CheckCircle className="w-5 h-5 text-neon-blue dark:text-electric-green flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="mt-8 px-6 py-3 border-2 border-neon-blue dark:border-electric-green text-neon-blue dark:text-electric-green font-semibold rounded-lg hover:bg-neon-blue dark:hover:bg-electric-green hover:text-white transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Visual */}
      <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} relative`}>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8, x: isEven ? 30 : -30 }}
          animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 rounded-3xl blur-3xl transform scale-110" />
          
          {/* Content container */}
          <div className="relative bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-3xl p-8 h-80 flex items-center justify-center">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-20 h-20 text-neon-blue dark:text-electric-green mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-full mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureFlow;
