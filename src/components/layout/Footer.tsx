import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@p2msolutions.com", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/service/web-app-development" },
        { name: "AI/ML Integration", href: "/service/ai-ml-integration" },
        { name: "Cloud Solutions", href: "/service/cloud-devops" },
        { name: "Automation", href: "/service/workflow-automation" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "#team" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Terms & Condition", href: "/terms-conditions" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="h-12 rounded-md flex items-center justify-center relative overflow-hidden"
                src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1757271735/Logo_3_jtnmsq.png"
                alt="P2msolutions.com logo"
              />
              <span className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                Solutions
              </span>
            </motion.div>

            <motion.p className="text-gray-600 dark:text-gray-400 mb-6">
              Innovating software solutions that empower businesses to thrive in
              the digital age.
            </motion.p>

            <div className="space-y-4">
              <motion.div className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  New Delhi, India
                </span>
              </motion.div>

              <motion.div className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  +91 7369900185, +91 7205384589
                </span>
              </motion.div>
            </div>
          </div>

          {/* Links Columns - Three in a row */}
          <div className="col-span-1 lg:col-span-3">
            <div className="grid grid-cols-3 gap-8">
              {footerLinks.map((column, columnIndex) => (
                <motion.div
                  key={column.title}
                  className="col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm sm:text-base">
                    {column.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {column.links.map((link) => (
                      <motion.li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-electric-green transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-light-border dark:border-dark-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
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
