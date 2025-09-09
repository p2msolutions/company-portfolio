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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">{sectionContent.services.title.line1}</span>
            <br />
            <span className="gradient-text">{sectionContent.services.title.line2}</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
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
        <div className="w-12 h-12 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border flex items-center justify-center transition-colors duration-200">
          <IconComponent className="w-6 h-6 text-light-text dark:text-dark-text" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4 transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {service.description}
        </p>

        <Link
          to={`/service/${service.slug}`}
          className="flex items-center text-light-text dark:text-dark-text font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
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
