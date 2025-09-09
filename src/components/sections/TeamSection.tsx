import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { teamMembers, sectionContent } from "../../data/content";
import BaseCard from '../ui/BaseCard';

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="team"
      ref={ref}
      className="section-padding-large bg-light-bg dark:bg-dark-bg"
    >
      <div className="max-container container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">{sectionContent.team.title.line1}</span>
            <span className="gradient-text dark:dark-gradient-text"> {sectionContent.team.title.line2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {sectionContent.team.description}
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
    <BaseCard
      index={index}
      isInView={isInView}
      variant="elevated"
      hoverEffect="lift"
      className="flex flex-col items-center justify-start p-6"
    >
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent-primary dark:border-accent-primary-light shadow-lg mb-6 mx-auto">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-accent-primary dark:text-accent-primary-light mb-3 text-center">
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center mb-6 line-clamp-3 flex-grow">
        {member.bio}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-auto">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-accent-primary dark:hover:border-accent-primary-light transition-colors duration-200 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-5 h-5 text-accent-primary dark:text-accent-primary-light" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-accent-primary dark:hover:border-accent-primary-light transition-colors duration-200 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        )}
        {member.website && (
          <a
            href={
              member.website.startsWith("http://") ||
              member.website.startsWith("https://")
                ? member.website
                : `https://${member.website.replace(/^\/+/, "")}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-accent-primary dark:hover:border-accent-primary-light transition-colors duration-200 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-5 h-5 text-accent-primary dark:text-accent-primary-light" />
          </a>
        )}
      </div>
    </BaseCard>
  );
};

export default TeamSection;
