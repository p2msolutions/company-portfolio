import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Zap, Shield, Database, ExternalLink } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { services, sectionContent } from '../../data/content';
import { Link } from "react-router-dom";
import BaseCard from '../ui/BaseCard';

const iconMap = {
  Code,
  Brain,
  Cloud,
  Zap,
  Shield,
  Database,
};

const ServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="max-container container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">{sectionContent.services.title.line1}</span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">{sectionContent.services.title.line2}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {sectionContent.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isInView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isInView }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <BaseCard
      index={index}
      isInView={isInView}
      variant="default"
      hoverEffect="lift"
      className="p-8"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 border border-neon-blue/30 dark:border-purple-accent/30 flex items-center justify-center group-hover:border-neon-blue dark:group-hover:border-electric-green transition-colors duration-300">
          <IconComponent className="w-8 h-8 text-neon-blue dark:text-electric-green" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-neon-blue dark:group-hover:text-electric-green transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {service.description}
        </p>

        <Link
          to={`/service/${service.slug}`}
          className="flex items-center text-neon-blue dark:text-electric-green font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          onClick={e => e.stopPropagation()}
        >
          <span>Learn More</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </BaseCard>
  );
};

export default ServicesSection;
