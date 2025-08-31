import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEOHead from "../components/layout/SEOHead";
import CursorTrail from "../components/ui/CursorTrail";
import LoadingAnimation from "../components/ui/LoadingAnimation";

// Sections
import HeroSection from "../components/sections/HeroSection";
import FeatureFlow from "../components/sections/FeatureFlow";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ClientsSection from "../components/sections/ClientsSection";
import TeamSection from "../components/sections/TeamSection";
import ContactSection from "../components/sections/ContactSection";

// Pages
import ProjectDetails from "../components/pages/Project";
import About from "../components/pages/About";
import Pricing from "../components/pages/Pricing";
import Service from "../components/pages/Service";

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const timer = setTimeout(() => setIsLoading(false), 800);
    document.body.style.cursor = "none";
    return () => {
      clearTimeout(timer);
      document.body.style.cursor = "auto";
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    duration: 0.5,
  };

  return (
    <ThemeProvider>
      <SEOHead />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      <Router>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white">
          <CursorTrail />
          <Header />

          <motion.div
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <main className="relative">
              <Routes>
                {/* Home page */}
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <FeatureFlow />
                      <ServicesSection />
                      <PortfolioSection />
                      <ClientsSection />
                      <TestimonialsSection />
                      <TeamSection />
                      <ContactSection />
                    </>
                  }
                />

                {/* Example project details page */}
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/service/:id" element={<Service />} />
              </Routes>
            </main>
          </motion.div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
