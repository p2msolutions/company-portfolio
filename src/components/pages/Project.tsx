import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { projects } from "../../data/project";
import { Link } from "react-router-dom";

const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, isInView } = useInView({ threshold: 0.09 });

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    /* increased top spacing responsively (keeps layout intact) */
    <section
      id="portfolio"
      ref={ref}
      className="pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-16 bg-light-surface dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight">
            <span className="block text-gray-900 dark:text-white">Our</span>
            <span className="block mt-1 gradient-text dark:dark-gradient-text">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Carefully crafted products and solutions — interactive previews,
            case studies and technologies we used.
          </p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-neon-blue to-electric-green text-white shadow-lg"
                    : "bg-white dark:bg-dark-surface text-gray-700 dark:text-gray-300 border border-light-border dark:border-dark-border hover:shadow-sm"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
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
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isInView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const ry = ((x - cx) / cx) * 6; // rotateY
    const rx = -((y - cy) / cy) * 6; // rotateX
    setTilt({ rx, ry });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: index * 0.06 },
            }
          : {}
      }
      exit={{ opacity: 0, scale: 0.95 }}
      className="group relative bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-light-border dark:border-dark-border transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        willChange: "transform",
      }}
    >
      {/* Project Image (larger visual, responsive heights) */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
          animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.45 }}
        />

        {/* overlay with CTA icons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/35 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                    aria-label="Open live project"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                    aria-label="Open github"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                )}
                <Link to={`/projects/${project.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue to-electric-green text-white text-sm font-medium shadow"
                  >
                    View Case Study
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="px-3 py-1 text-xs font-semibold bg-neon-blue/10 dark:bg-electric-green/10 text-neon-blue dark:text-electric-green rounded-full">
            {project.category}
          </span>
          
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* tech chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-lg border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        
      </div>

      {/* glow accent */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.04), rgba(16,185,129,0.04))",
        }}
      />
    </motion.div>
  );
};

export default Project;
