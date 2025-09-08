import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { sectionContent } from "../../data/content";
import { Link } from "react-router-dom";
import BaseCard from "../ui/BaseCard";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  live?: string;
  github?: string;
}

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://email.p2msolutions.com/api/Projects", {
          headers: {
            accept: "text/plain",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="section-padding bg-light-surface dark:bg-dark-bg"
    >
      <div className="max-container container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              {sectionContent.portfolio.title.line1}
            </span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">
              {sectionContent.portfolio.title.line2}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {sectionContent.portfolio.description}
          </p>

          {/* Category Filter */}
          {projects.length > 0 && (
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
                      ? "bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white"
                      : "bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading projects...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
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
        )}

        <div className="flex justify-center mt-6">
          <Link to="/projects" className="group w-full max-w-xs">
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 dark:from-purple-500 dark:via-indigo-500 dark:to-blue-500 text-white font-semibold rounded-xl shadow-lg opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See More Projects →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isInView,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BaseCard
      index={index}
      isInView={isInView}
      variant="default"
      hoverEffect="lift"
      className="p-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

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
              {/* Project Live Link */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
              {/* GitHub Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
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
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-lg border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link to={`/projects/${project.slug}`} className="block">
          <motion.button
            className="w-full py-3 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Case Study
          </motion.button>
        </Link>
      </div>
    </BaseCard>
  );
};

export default PortfolioSection;
