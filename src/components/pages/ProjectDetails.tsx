import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/project";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-light-surface dark:bg-dark-surface px-6 pt-28 pb-28">
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

  const Tag = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 mr-2">
      {children}
    </span>
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-light-surface dark:bg-dark-surface pt-28 pb-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-24 w-72 h-72 rounded-full bg-neon-blue/8 dark:bg-purple-accent/8 blur-3xl transform -translate-x-1/3" />
        <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-electric-green/8 dark:bg-blue-accent/8 blur-3xl transform translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/project"
            className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
          >
            ← Back to projects
          </Link>
        </div>

        {/* Hero split - adjusted to 6/6 so image is larger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
              {project.title}
            </motion.h1>

            <div className="mt-4 flex flex-wrap items-center">
              {project.technologies?.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </div>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
            >
              {project.description}
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium shadow-md hover:shadow-lg transition"
                >
                  View Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-neon-blue to-electric-green text-white font-medium shadow-md hover:shadow-lg transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Image / media card - enlarged */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-transparent dark:to-transparent"
            >
              {project.image ? (
                <div className="relative w-full h-[28rem] md:h-[32rem] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ display: "block", margin: 0, padding: 0 }}
                  />
                  <div className="absolute left-4 bottom-4 bg-white/80 dark:bg-black/60 rounded-full px-3 py-1 text-xs font-medium">
                    {project.category ?? "Project"}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-72 md:h-80 bg-gradient-to-br from-neon-blue/10 to-electric-green/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">
                      {project.title.split(" ")[0]}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      No preview available
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Problems Solved - keep only 2 */}
        {project.problemsSolved && project.problemsSolved.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Key Challenges Solved
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.problemsSolved.slice(0, 2).map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 6, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[44px] h-11 rounded-lg bg-neon-blue/10 dark:bg-electric-green/10 flex items-center justify-center font-semibold text-neon-blue dark:text-electric-green">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {p}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Case Study - clearer layout with overview + challenge/solution pairs */}
        {project.caseStudy && (
          <section className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm max-w-7xl mx-auto"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Case Study
              </h2>

              <div className="space-y-8">
                {/* Overview */}
                {project.caseStudy.overview && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Overview
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.caseStudy.overview}
                    </p>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {project.caseStudy.challenges?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Challenges & Solutions
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {project.caseStudy.challenges.map(
                        (
                          c: {
                            problem: string;
                            solution: string;
                            impact?: string;
                          },
                          i: number
                        ) => (
                          <div
                            key={i}
                            className="p-5 rounded-xl bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-600"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-9 h-9 rounded-lg bg-neon-blue/10 dark:bg-electric-green/10 flex items-center justify-center">
                                  <span className="text-neon-blue dark:text-electric-green font-semibold">
                                    {i + 1}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">
                                  {c.problem}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                  <strong className="text-gray-600 dark:text-gray-400">
                                    Solution:
                                  </strong>{" "}
                                  {c.solution}
                                </p>
                                {c.impact && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Impact:</strong> {c.impact}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </section>
        )}

        {/* Footer actions - removed Source & Live buttons per request */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Interested in a similar project?
            </p>
            <p className="text-sm text-gray-900 dark:text-white font-medium">
              Let's talk —{" "}
              <Link to="/contact" className="underline">
                Contact us
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Intentionally left blank (Source & Live removed) */}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
