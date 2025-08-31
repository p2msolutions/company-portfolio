import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-light-surface dark:bg-dark-surface py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-neon-blue/20 dark:bg-purple-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-electric-green/20 dark:bg-blue-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-tight mb-4"
        >
          <span className="block text-gray-900 dark:text-white">
            Empowering Businesses
          </span>
          <span className="gradient-text dark:dark-gradient-text block">
            with Digital Solutions
          </span>
        </motion.h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We are a team of passionate software engineers helping businesses go
          online with{" "}
          <strong>websites, apps, AI/ML, and cloud solutions</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-lg"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl font-semibold bg-white dark:bg-dark-bg text-gray-900 dark:text-white border border-light-border dark:border-dark-border shadow"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <img
            src="https://illustrations.popsy.co/gray/team-idea.svg"
            alt="Digital Solutions"
            className="w-full max-w-3xl mx-auto"
          />
        </motion.div>
      </div>

      {/* About Us Section */}
      <section className="relative bg-light-surface dark:bg-dark-surface py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text dark:dark-gradient-text mb-8">
            About Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
            At{" "}
            <span className="font-semibold dark:text-neon-blue text-electric-green">
              P2M Solutions
            </span>
            , we are a team of passionate developers who have been working
            together for over{" "}
            <span className="font-semibold dark:text-neon-blue text-electric-green">
              4+ years
            </span>
            , solving real-world problems with the power of code. With a strong
            foundation in{" "}
            <span className="font-semibold dark:text-neon-blue text-electric-green">
              Computer Science (B.Tech graduates)
            </span>{" "}
            and hands-on industry experience, we’ve helped{" "}
            <span className="font-semibold dark:text-neon-blue text-electric-green">
              startups, small businesses, and even medium-to-large enterprises
            </span>{" "}
            take off and grow digitally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Who We Are */}
          <div className="glass-card dark:glass-card p-8 text-center">
            <h3 className="text-xl font-semibold gradient-text dark:dark-gradient-text mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We’re not just coders—we’re{" "}
              <span className="font-semibold dark:text-neon-blue text-electric-green">
                problem solvers, innovators, and creators
              </span>
              . Our expertise spans across{" "}
              <span className="font-semibold dark:text-neon-blue text-electric-green">
                web development, mobile apps, and scalable software solutions
              </span>{" "}
              that bring measurable impact.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card dark:glass-card p-8 text-center">
            <h3 className="text-xl font-semibold gradient-text dark:dark-gradient-text mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower businesses and individuals by building{" "}
              <span className="font-semibold dark:text-neon-blue text-electric-green">
                simple, scalable, and smart digital solutions
              </span>{" "}
              that solve real problems and create lasting value.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card dark:glass-card p-8 text-center">
            <h3 className="text-xl font-semibold gradient-text dark:dark-gradient-text mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To become a{" "}
              <span className="font-semibold dark:text-neon-blue text-electric-green">
                trusted global tech partner
              </span>
              , enabling innovation and growth through technology, while making
              the digital world more accessible and impactful for everyone.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
