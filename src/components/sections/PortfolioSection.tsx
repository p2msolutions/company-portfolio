import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { projects } from '../../data/content';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" ref={ref} className="py-12 lg:py-16 bg-light-surface dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our</span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions we've built for forward-thinking companies
          </p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white'
                    : 'bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1
        }
      } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -4,
        boxShadow: "0 10px 25px rgba(0, 212, 255, 0.1)",
        transition: {
          duration: 0.2
        }
      }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-6xl font-bold text-neon-blue dark:text-electric-green opacity-20">
            {project.category}
          </div>
        </motion.div>

        {/* Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <motion.div
          className="mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="px-3 py-1 text-xs font-semibold bg-neon-blue/10 dark:bg-electric-green/10 text-neon-blue dark:text-electric-green rounded-full">
            {project.category}
          </span>
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue dark:group-hover:text-electric-green transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-lg border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className="w-full py-3 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Case Study
        </motion.button>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-electric-green/5 dark:from-purple-accent/5 dark:to-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        layoutId={`project-glow-${project.id}`}
      />
    </motion.div>
  );
};

export default PortfolioSection;
