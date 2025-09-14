import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sectionContent } from "../../data/content";
import { BackgroundLines } from "../ui/background-lines";
import { Spotlight } from "../ui/spotlight";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home">
      <BackgroundLines className="relative min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg">
        {/* Spotlight Layer */}
        <Spotlight
          className="absolute -top-60 left-0 md:-top-50 md:left-60 hidden dark:block"
          fill="white"
        />

        {/* Black spotlight in light mode */}
        <Spotlight
          className="absolute -top-60 left-0 md:-top-50 md:left-60 block dark:hidden"
          fill="gray"
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border mb-6">
              <Sparkles className="w-4 h-4 text-accent-primary dark:text-accent-primary-light" />
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                {sectionContent.hero.badge.text}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-light-text dark:text-dark-text">
              {sectionContent.hero.title.line1}
            </span>
            <br />
            <span className="gradient-text">
              {sectionContent.hero.title.line2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {sectionContent.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              className="btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {sectionContent.hero.buttons.primary}
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/projects")}
              className="btn-secondary px-6 py-3 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {sectionContent.hero.buttons.secondary}
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default HeroSection;
