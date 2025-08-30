import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SEOHead from './components/layout/SEOHead';
import CursorTrail from './components/ui/CursorTrail';
import LoadingAnimation from './components/ui/LoadingAnimation';
import HeroSection from './components/sections/HeroSection';
import FeatureFlow from './components/sections/FeatureFlow';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ClientsSection from './components/sections/ClientsSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Add custom cursor class to body
    document.body.style.cursor = 'none';

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'auto';
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
      
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white">
        <CursorTrail />
        
        <motion.div
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Header />
          
          <main className="relative">
            <HeroSection />
            <FeatureFlow />
            <ServicesSection />
            <PortfolioSection />
            <ClientsSection />
            <TestimonialsSection />
            <AboutSection />
            <TeamSection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>


      </div>
    </ThemeProvider>
  );
}

export default App;
