import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/project";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-light-surface dark:bg-dark-surface px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light-surface dark:bg-dark-surface pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Problems Solved */}
        {project.problemsSolved?.length > 0 && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Challenges Solved
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.problemsSolved.map((problem, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm"
                >
                  <p className="text-gray-600 dark:text-gray-300">{problem}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Case Study */}
        {project.caseStudy && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg dark:prose-invert mx-auto">
              {project.caseStudy.overview && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Overview</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.caseStudy.overview}
                  </p>
                </div>
              )}

              {project.caseStudy.challenges && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Technical Challenges</h2>
                  {project.caseStudy.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50"
                    >
                      <h3 className="text-xl font-semibold mb-3">
                        {c.problem}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Links Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mt-16"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-transform"
            >
              View Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:scale-105 transition-transform"
            >
              Visit Project
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
