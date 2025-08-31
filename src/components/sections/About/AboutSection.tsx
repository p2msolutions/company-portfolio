import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award } from "lucide-react";
import { useInView } from "../../../hooks/useInView";

const AboutSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to solve complex problems and deliver exceptional results.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: Award,
      title: "Quality Driven",
      description:
        "We maintain the highest standards in code quality, security, and performance optimization.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      event: "Company Founded",
      description: "Started with a vision to democratize AI technology",
    },
    {
      year: "2021",
      event: "50+ Projects",
      description: "Delivered solutions for startups to enterprise clients",
    },
    {
      year: "2023",
      event: "AI Integration",
      description: "Pioneered ML-powered automation solutions",
    },
    {
      year: "2025",
      event: "Global Reach",
      description: "Expanded to serve clients across 3 continents",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* About Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">About</span>
            <span className="gradient-text dark:dark-gradient-text">
              {" "}
              P2M Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're a team of passionate engineers, designers, and innovators
            dedicated to building software solutions that drive business
            transformation.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="glass-card rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-neon-blue dark:text-electric-green mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To be the catalyst that transforms how businesses leverage
              technology, making advanced software solutions accessible and
              impactful for organizations of all sizes.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-3xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-electric-green dark:text-neon-blue mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower businesses with innovative software solutions that
              drive growth, efficiency, and competitive advantage through
              thoughtful design and cutting-edge technology.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 border border-neon-blue/30 dark:border-purple-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-neon-blue dark:text-electric-green" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-0.5 bg-gradient-to-b from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-full" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-start md:items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div
                    className={`pl-16 md:pl-0 w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-white dark:bg-dark-surface rounded-xl p-6 border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200">
                      <div className="text-2xl font-bold text-neon-blue dark:text-electric-green mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-full border-4 border-light-bg dark:border-dark-bg" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
