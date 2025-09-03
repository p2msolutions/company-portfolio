import { motion } from "framer-motion";
import { teamMembers } from "../../data/content";
import { Github, Linkedin, Globe } from "lucide-react";

// Add interfaces
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  align: "left" | "right";
}

interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
}

interface SocialLinkProps {
  href: string;
  type: "linkedin" | "github" | "website";
}

export default function About() {
  return (
    <section className="relative bg-light-surface dark:bg-dark-surface pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 -left-32 w-[40rem] h-[40rem] bg-neon-blue/10 dark:bg-purple-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 -right-32 w-[35rem] h-[35rem] bg-electric-green/10 dark:bg-blue-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Hero Section with Journey Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">
              From College Dreams to
            </span>
            <span className="gradient-text dark:dark-gradient-text">
              Professional Reality
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three passionate developers, one shared vision. We've transformed
            from college friends into a professional powerhouse, delivering
            solutions that scale from{" "}
            <span className="font-semibold text-neon-blue dark:text-electric-green">
              100 to 100,000+ users
            </span>
            .
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-24"
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Timeline Items */}
            <TimelineItem
              year="2019"
              title="The Beginning"
              description="Started our journey as Computer Science students, bonding over hackathons and coding challenges."
              align="right"
            />
            <TimelineItem
              year="2021"
              title="Industry Experience"
              description="Gained valuable experience at top tech companies, working on enterprise-scale applications."
              align="left"
            />
            <TimelineItem
              year="2022"
              title="First Major Project"
              description="Successfully delivered our first large-scale project, handling 100,000+ users."
              align="right"
            />
            <TimelineItem
              year="2023"
              title="P2M Solutions"
              description="Founded our company, combining our expertise to deliver cutting-edge solutions."
              align="left"
            />
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="flex justify-center align-middle">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold gradient-text dark:dark-gradient-text mb-16"
            >
              Meet Our Team
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card dark:glass-card p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="relative mb-6 group">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-xl mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text dark:dark-gradient-text">
                  {member.name}
                </h3>
                <p className="text-sm text-neon-blue dark:text-electric-green mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <SocialLink href={member.linkedin} type="linkedin" />
                  <SocialLink href={member.github} type="github" />
                  <SocialLink href={member.website} type="website" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
        >
          <StatItem number="2+" suffix="Years" label="Experience" />
          <StatItem number="50+" suffix="" label="Projects Delivered" />
          <StatItem number="100K+" suffix="" label="Users Served" />
          <StatItem number="99%" suffix="" label="Client Satisfaction" />
        </motion.div>

        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 py-16 text-center leading-relaxed"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
            About Us – <span className="text-gradient">P2msolutions</span>
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-lg">
              At <span className="font-semibold">NeuraNext</span>, we believe
              that
              <span className="text-gradient font-semibold">
                {" "}
                innovation is the true driving force behind business growth.
              </span>
              Our mission is simple yet powerful – to build next-generation
              software solutions that empower businesses and transform bold
              ideas into reality.
            </p>

            <p>
              We specialize in crafting intelligent, scalable, and future-ready
              digital solutions. From{" "}
              <span className="font-medium">AI-powered applications</span>
              that optimize workflows to
              <span className="font-medium">
                {" "}
                robust cloud infrastructures
              </span>{" "}
              that scale with your business, our team of experts is dedicated to
              delivering technology that makes a real impact.
            </p>

            <p>
              With a focus on creativity, precision, and performance, we partner
              with startups, enterprises, and organizations worldwide to bring
              visions to life. Every project we take on is guided by our core
              values:
              <span className="font-medium">
                {" "}
                innovation, reliability, and excellence.
              </span>
            </p>
          </div>

          <div className=" border border-gray-600 glass-card dark:glass-card p-8 rounded-2xl shadow-md mt-10 mb-8 text-left sm:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold gradient-text dark:dark-gradient-text mb-8"
            >
              Our Promis
            </motion.h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✅ Cutting-edge software tailored to your needs</li>
              <li>✅ Scalable, secure, and future-proof solutions</li>
              <li>✅ A collaborative approach focused on your success</li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
            🚀 Let’s build the future together.
          </p>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-lg"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Helper Components
const TimelineItem = ({
  year,
  title,
  description,
  align,
}: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className={`relative ${
      align === "left" ? "md:ml-auto" : "md:mr-auto"
    } max-w-md`}
  >
    <div className="glass-card dark:glass-card p-6 rounded-xl">
      <span className="text-sm font-bold text-neon-blue dark:text-electric-green">
        {year}
      </span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const StatItem = ({ number, suffix, label }: StatItemProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="glass-card dark:glass-card p-4 rounded-xl text-center"
  >
    <span className="block text-3xl font-bold gradient-text dark:dark-gradient-text">
      {number}
      {suffix}
    </span>
    <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
  </motion.div>
);

const SocialLink = ({ href, type }: SocialLinkProps) => {
  const iconProps = {
    className: "w-5 h-5",
  };

  const icons = {
    linkedin: <Linkedin {...iconProps} />,
    github: <Github {...iconProps} />,
    website: <Globe {...iconProps} />,
  } as const;

  // Fix website link protocol
  const getHref = () => {
    if (type === "website") {
      return href.startsWith("http://") || href.startsWith("https://")
        ? href
        : `https://${href.replace(/^\/+/, "")}`;
    }
    return href;
  };

  return (
    <motion.a
      href={getHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-electric-green transition-colors p-2 hover:scale-110 transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icons[type]}
    </motion.a>
  );
};
