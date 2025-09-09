import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonLoader from "../ui/SkeletonLoader";

// Define type based on your API response
interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category?: string;
  technologies?: string[];
  github?: string;
  live?: string;
  image?: string;
  problemsSolved?: string[];
  caseStudy?: {
    overview?: string;
    challenges?: {
      problem: string;
      solution: string;
      impact?: string;
    }[];
  };
}

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (!slug) return;

        const headers = { accept: "text/plain" };

        let data: Project | null = null;

        // If the slug looks like a numeric ID, try fetching by ID first
        if (/^\d+$/.test(slug)) {
          const resById = await fetch(
            `https://email.p2msolutions.com/api/Projects/${slug}`,
            { headers }
          );
          if (resById.ok) {
            data = await resById.json();
          }
        }

        // If not found by ID or slug is not numeric, fetch all and match by slug
        if (!data) {
          const listRes = await fetch(
            "https://email.p2msolutions.com/api/Projects",
            { headers }
          );
          if (!listRes.ok) throw new Error("Failed to fetch projects");
          const list: Project[] = await listRes.json();
          data = list.find((p) => p.slug === slug) || null;
        }

        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-surface dark:bg-dark-bg pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <SkeletonLoader variant="text" count={1} className="mb-4" />
              <SkeletonLoader variant="text" count={3} className="mb-6" />
              <div className="flex gap-4">
                <SkeletonLoader variant="card" count={2} className="flex-1" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <SkeletonLoader variant="image" count={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      className="min-h-screen bg-light-surface dark:bg-dark-bg pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-24 w-72 h-72 rounded-full bg-accent-primary/3 dark:bg-accent-primary-light/3 blur-3xl transform -translate-x-1/3" />
        <div className="absolute right-0 bottom-10 w-80 h-80 rounded-full bg-accent-primary/3 dark:bg-accent-primary-light/3 blur-3xl transform translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl font-extrabold text-light-text dark:text-dark-text leading-tight"
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
              className="mt-6 text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl"
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
                  className="btn-primary inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Image */}
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
                  />
                  <div className="absolute left-4 bottom-4 bg-white/80 dark:bg-black/60 rounded-full px-3 py-1 text-xs font-medium">
                    {project.category ?? "Project"}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-72 md:h-80 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-light-text dark:text-dark-text">
                      {project.title.split(" ")[0]}
                    </div>
                    <div className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      No preview available
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Challenges */}
        {project.problemsSolved && project.problemsSolved.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
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
                  className="p-6 rounded-2xl bg-light-bg dark:bg-dark-surface border border-light-border dark:border-dark-border glass-card transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[44px] h-11 rounded-lg bg-light-surface dark:bg-dark-surface flex items-center justify-center font-semibold text-light-text dark:text-dark-text border border-light-border dark:border-dark-border">
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

        {/* Case Study */}
        {project.caseStudy && (
          <section className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-light-bg dark:bg-dark-surface border shadow-sm max-w-7xl mx-auto border-light-border dark:border-dark-border glass-card transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Case Study
              </h2>

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

              {(project.caseStudy.challenges ?? []).length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Challenges & Solutions
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {(project.caseStudy.challenges ?? []).map((c, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-600"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 rounded-lg bg-light-surface dark:bg-dark-surface flex items-center justify-center border border-light-border dark:border-dark-border">
                              <span className="text-light-text dark:text-dark-text font-semibold">
                                {i + 1}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold mb-2 text-light-text dark:text-dark-text">
                              {c.problem}
                            </h4>
                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">
                              <strong className="text-light-text-secondary dark:text-dark-text-secondary">
                                Solution:
                              </strong>{" "}
                              {c.solution}
                            </p>
                            {c.impact && (
                              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                <strong>Impact:</strong> {c.impact}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </section>
        )}
      </div>
    </motion.main>
  );
}
