import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Monitor, Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const CurrentThemeIcon = themeIcons[theme];

  // Helper to handle navigation and scroll with proper offset
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        // Wait for navigation, then scroll with offset
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) {
            const headerHeight = 120; // Account for header height + padding
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const headerHeight = 120; // Account for header height + padding
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <motion.header
        className="mx-auto max-w-[95%] lg:max-w-5xl pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="relative rounded-2xl bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border border-light-border dark:border-dark-border border-[1.5px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo - Updated animation */}
              <Link to="/" className="flex items-center space-x-3" tabIndex={0}>
                <img
                  className="h-12 flex items-center justify-center relative rounded-md overflow-hidden"
                  src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1757271735/Logo_3_jtnmsq.png"
                  alt="P2msolutions.com logo"
                />
                <span className="text-lg font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Solutions
                </span>
              </Link>

              {/* Desktop Navigation - Updated styling */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-electric-green transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onClick={handleNavClick(item.href)}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Theme Toggle & Mobile Menu - Updated styling */}
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={() => setTheme(nextTheme)}
                  className="p-2 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  <CurrentThemeIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu - Updated styling */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50"
                >
                  <div className="grid grid-cols-2 gap-2 pb-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200 font-medium text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={handleNavClick(item.href)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
