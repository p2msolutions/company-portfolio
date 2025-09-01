import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { teamMembers } from "../../data/content";

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 bg-light-surface dark:bg-dark-surface"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Meet Our</span>
            <span className="gradient-text dark:dark-gradient-text"> Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind P2M Solutions, bringing diverse
            expertise and shared passion for innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: {
    id: number;
    name: string;
    bio: string;
    role: string;
    avatar: string;
    linkedin: string;
    github: string;
    website: string;
  };
  index: number;
  isInView: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  index,
  isInView,
}) => {
  return (
    <motion.div
      className="relative h-80 cursor-pointer group flex flex-col items-center justify-center 
        bg-white/30 dark:bg-dark-surface/30 
        rounded-2xl border border-light-border dark:border-dark-border 
        p-6 transition-colors duration-300 
        hover:border-neon-blue dark:hover:border-electric-green 
        backdrop-blur-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      style={{ perspective: "1000px" }}
    >
      <img
        src={member.avatar}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-electric-green dark:border-neon-blue"
      />
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
        {member.name}
      </h3>
      <p className="text-sm font-bold text-gray-700 dark:text-gray-400 mb-2 text-center">
        {member.role}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center mb-4">
        {member.bio}
      </p>
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-2">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200 shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-5 h-5 text-neon-blue dark:text-electric-green" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200 shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        )}
        {member.website && (
          <a
            href={
              member.website.startsWith("http://") || member.website.startsWith("https://")
                ? member.website
                : `https://${member.website.replace(/^\/+/, "")}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200 shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-5 h-5 text-electric-green dark:text-neon-blue" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamSection;
