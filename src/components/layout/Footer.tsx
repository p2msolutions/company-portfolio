import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@p2msolutions.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'AI/ML Integration', href: '#services' },
        { name: 'Cloud Solutions', href: '#services' },
        { name: 'Automation', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Careers', href: '#careers' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P2M</span>
              </div>
              <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                P2M Solutions
              </span>
            </motion.div>
            
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Innovating software solutions that empower businesses to thrive in the digital age.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
            </motion.div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <motion.li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-electric-green transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-light-border dark:border-dark-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 P2M Solutions. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-electric-green" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
