import { useParams, useNavigate } from "react-router-dom";
import { services, serviceFAQs } from "../../data/content";
import {
  Code,
  Brain,
  Cloud,
  Zap,
  Shield,
  Database,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Code,
  Brain,
  Cloud,
  Zap,
  Shield,
  Database,
  Smartphone,
};

const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const navigate = useNavigate();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-accent-primary dark:text-accent-primary-light">
        Service not found.
      </div>
    );
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  // Add type check for FAQs
  const serviceFAQList = service.id
    ? serviceFAQs[service.id as keyof typeof serviceFAQs]
    : null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-light-surface dark:bg-dark-surface page-padding-top pb-16 container-padding min-h-screen"
    >
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-0 w-96 h-96 bg-accent-primary/5 dark:bg-accent-primary-light/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-primary/5 dark:bg-accent-primary-light/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-28 h-28 rounded-2xl bg-light-surface dark:bg-dark-surface border-2 border-accent-primary dark:border-accent-primary-light flex items-center justify-center mb-8 shadow-lg"
          >
            <IconComponent className="w-16 h-16 text-accent-primary dark:text-accent-primary-light" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold gradient-text text-center mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary text-center max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Service Image */}
            {service.image && (
              <div className="relative group">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </div>
            )}

            {/* Technologies Section */}
            {service.technologies && (
              <div className="glass-card dark:glass-card p-6 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 gradient-text dark:dark-gradient-text">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-light-surface dark:bg-dark-surface text-accent-primary dark:text-accent-primary-light text-sm font-medium border border-light-border dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Service Description */}
            <div className="glass-card dark:glass-card p-6 lg:p-8 rounded-3xl shadow-xl backdrop-blur-sm">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text dark:dark-gradient-text">
                About This Service
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
            </div>

            {/* Key Features - Adjusted Grid */}
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold gradient-text dark:dark-gradient-text">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.features?.map((feature, index) => {
                  const FeatureIcon =
                    iconMap[feature.icon as keyof typeof iconMap] ||
                    IconComponent;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-lg h-full"
                    >
                      <FeatureIcon className="w-6 h-6 text-accent-primary dark:text-accent-primary-light mb-2" />
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold gradient-text dark:dark-gradient-text">
                Our Process
              </h3>
              <div className="grid gap-3">
                {service.processSteps?.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-light-surface dark:bg-dark-bg flex items-center justify-center text-accent-primary dark:text-accent-primary-light font-bold border border-light-border dark:border-dark-border">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        {serviceFAQList && serviceFAQList.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold gradient-text dark:dark-gradient-text text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {serviceFAQList.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="p-6 rounded-xl bg-white/5 dark:bg-dark-bg/20"
                >
                  <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h3 className="text-3xl font-bold gradient-text dark:dark-gradient-text">
            Interested in our {service.title} service?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-12 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
            onClick={() => {
                navigate("/contact");
              }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Service;
