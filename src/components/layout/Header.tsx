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
        <div className="relative rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo - Updated animation */}
              <Link to="/" className="flex items-center" tabIndex={0}>
                {/* Light mode logo (black) */}
                <img
                  className="h-12 flex items-center justify-center relative rounded-md overflow-hidden dark:hidden"
                  src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1757441494/black_P2M_Logo_t5snsq.png"
                  alt="P2msolutions.com logo"
                />
                {/* Dark mode logo (white) */}
                <img
                  className="h-12 flex items-center justify-center relative rounded-md overflow-hidden hidden dark:block"
                  src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1757441496/White_P2M_Logo_lrojvg.png"
                  alt="P2msolutions.com logo"
                />
              </Link>

              {/* Desktop Navigation - Updated styling */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onClick={handleNavClick(item.href)}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-light-text dark:bg-dark-text rounded-full"
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
                  className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200 border border-light-border dark:border-dark-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  <CurrentThemeIcon className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                </motion.button>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200 border border-light-border dark:border-dark-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                  ) : (
                    <Menu className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
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
                  className="lg:hidden mt-4 pt-4 border-t border-light-border dark:border-dark-border"
                >
                  <div className="grid grid-cols-2 gap-2 pb-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200 font-medium text-center border border-transparent hover:border-light-border dark:hover:border-dark-border"
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
