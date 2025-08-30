import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { teamMembers } from '../../data/content';

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="team" ref={ref} className="py-20 bg-light-surface dark:bg-dark-surface">
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
            The talented individuals behind P2M Solutions, bringing diverse expertise and shared passion for innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  member: typeof teamMembers[0];
  index: number;
  isInView: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, isInView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-80 cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -10 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border group-hover:border-neon-blue dark:group-hover:border-electric-green transition-colors duration-300 p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent p-0.5 mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {member.name}
          </h3>
          <p className="text-neon-blue dark:text-electric-green font-semibold mb-4 text-center">
            {member.role}
          </p>

          {/* Skills Preview */}
          <div className="flex flex-wrap gap-2 justify-center">
            {member.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-lg border border-light-border dark:border-dark-border"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 2 && (
              <span className="px-3 py-1 text-xs text-neon-blue dark:text-electric-green">
                +{member.skills.length - 2} more
              </span>
            )}
          </div>

          <motion.div
            className="mt-4 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Click to learn more
          </motion.div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-white dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border p-6 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            {member.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {member.bio}
          </p>

          {/* All Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-gradient-to-r from-neon-blue/10 to-electric-green/10 dark:from-purple-accent/10 dark:to-blue-accent/10 text-neon-blue dark:text-electric-green rounded border border-neon-blue/20 dark:border-electric-green/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            <motion.button
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button
              className="p-2 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-electric-green/5 dark:from-purple-accent/5 dark:to-blue-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          layoutId={`team-glow-${member.id}`}
        />
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;
