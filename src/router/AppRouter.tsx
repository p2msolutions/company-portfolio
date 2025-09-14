import { useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "../contexts/ThemeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEOHead from "../components/layout/SEOHead";
import CursorTrail from "../components/ui/CursorTrail";

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
import ProjectDetails from "../components/pages/ProjectDetails";
import About from "../components/pages/About";
import Pricing from "../components/pages/Pricing";
import Service from "../components/pages/Service";
import Project from "../components/pages/Project";
import Contact from "../components/pages/Contact";
import Refund from "../components/pages/Refund";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import TermsCondition from "../components/pages/TermsCondition";

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.cursor = "none";
    return () => {
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

      <Router>
        <ScrollToTop />
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

                {/* Projects page */}
                <Route
                  path="/projects"
                  element={
                    <>
                      <SEOHead
                        title="Our Projects - P2M Solutions"
                        description="Explore our portfolio of innovative software projects including AI-powered platforms, e-commerce solutions, and cloud-native applications."
                        keywords="portfolio, projects, software development, AI projects, cloud applications, case studies"
                        type="website"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "Projects",
                            url: "https://p2msolutions.com/projects",
                          },
                        ]}
                      />
                      <Project />
                    </>
                  }
                />

                {/* Project details page */}
                <Route
                  path="/projects/:slug"
                  element={
                    <>
                      <SEOHead
                        title="Project Details - P2M Solutions"
                        description="Detailed case study of our software development project showcasing innovative solutions and technical excellence."
                        keywords="project case study, software development, technical implementation, project details"
                        type="project"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "Projects",
                            url: "https://p2msolutions.com/projects",
                          },
                          {
                            name: "Project Details",
                            url: "https://p2msolutions.com/projects/details",
                          },
                        ]}
                      />
                      <ProjectDetails />
                    </>
                  }
                />

                {/* About page */}
                <Route
                  path="/about"
                  element={
                    <>
                      <SEOHead
                        title="About Us - P2M Solutions"
                        description="Learn about P2M Solutions - from college dreams to professional reality. Meet our team of passionate developers transforming ideas into innovative software solutions."
                        keywords="about us, team, company history, software developers, P2M Solutions story"
                        type="website"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "About",
                            url: "https://p2msolutions.com/about",
                          },
                        ]}
                      />
                      <About />
                    </>
                  }
                />

                {/* Pricing page */}
                <Route
                  path="/pricing"
                  element={
                    <>
                      <SEOHead
                        title="Pricing Plans - P2M Solutions"
                        description="Simple, transparent pricing for software development services. Choose from Starter, Business, or Enterprise plans to fit your project needs."
                        keywords="pricing, software development cost, project pricing, development packages, affordable software solutions"
                        type="website"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "Pricing",
                            url: "https://p2msolutions.com/pricing",
                          },
                        ]}
                      />
                      <Pricing />
                    </>
                  }
                />

                {/* Service pages */}
                <Route
                  path="/service/:slug"
                  element={
                    <>
                      <SEOHead
                        title="Our Services - P2M Solutions"
                        description="Professional software development services including web development, AI/ML integration, cloud solutions, and workflow automation."
                        keywords="software services, web development, AI integration, cloud solutions, automation services"
                        type="service"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "Services",
                            url: "https://p2msolutions.com/service",
                          },
                        ]}
                      />
                      <Service />
                    </>
                  }
                />

                {/* Contact page */}
                <Route
                  path="/contact"
                  element={
                    <>
                      <SEOHead
                        title="Contact Us - P2M Solutions"
                        description="Get in touch with P2M Solutions for your software development needs. Contact our team for custom solutions, AI integration, and cloud services."
                        keywords="contact us, get in touch, software development inquiry, project consultation, P2M Solutions contact"
                        type="website"
                        breadcrumbs={[
                          { name: "Home", url: "https://p2msolutions.com" },
                          {
                            name: "Contact",
                            url: "https://p2msolutions.com/contact",
                          },
                        ]}
                      />
                      <Contact />
                    </>
                  }
                />

                {/* Legal pages */}
                <Route
                  path="/privacy-policy"
                  element={
                    <>
                      <SEOHead
                        title="Privacy Policy - P2M Solutions"
                        description="P2M Solutions privacy policy outlining how we collect, use, and protect your personal information."
                        keywords="privacy policy, data protection, personal information, GDPR compliance"
                        type="website"
                      />
                      <PrivacyPolicy />
                    </>
                  }
                />

                <Route
                  path="/terms-conditions"
                  element={
                    <>
                      <SEOHead
                        title="Terms & Conditions - P2M Solutions"
                        description="Terms and conditions for using P2M Solutions services and website."
                        keywords="terms and conditions, service terms, legal agreement"
                        type="website"
                      />
                      <TermsCondition />
                    </>
                  }
                />

                <Route
                  path="/refund-policy"
                  element={
                    <>
                      <SEOHead
                        title="Refund Policy - P2M Solutions"
                        description="P2M Solutions refund policy for software development services and project cancellations."
                        keywords="refund policy, cancellation policy, money back guarantee"
                        type="website"
                      />
                      <Refund />
                    </>
                  }
                />
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
