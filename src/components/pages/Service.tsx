import { useParams, useNavigate } from "react-router-dom";
import { services } from "../../data/content";
import { Code, Brain, Cloud, Zap, Shield, Database } from "lucide-react";

const iconMap = {
  Code,
  Brain,
  Cloud,
  Zap,
  Shield,
  Database,
};

const Service = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => String(s.id) === id);
  const navigate = useNavigate();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-neon-blue dark:text-electric-green">
        Service not found.
      </div>
    );
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <section className="relative bg-light-surface dark:bg-dark-surface py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon-blue/20 dark:bg-purple-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-electric-green/20 dark:bg-blue-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Icon and Title */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 border-2 border-neon-blue dark:border-electric-green flex items-center justify-center mb-4 shadow-lg">
            <IconComponent className="w-12 h-12 text-neon-blue dark:text-electric-green" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text dark:dark-gradient-text text-center mb-2">
            {service.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* Logo/Image */}
        {service.image && (
          <div className="flex justify-center mb-10">
            <img
              src={service.image}
              alt={service.title}
              className="w-48 h-48 object-contain rounded-2xl shadow-xl bg-white dark:bg-dark-bg p-4"
            />
          </div>
        )}

        {/* Long Description */}
        <div className="glass-card dark:glass-card p-8 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 gradient-text dark:dark-gradient-text">
            What We Offer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {service.longDescription ||
              `Our ${service.title} service is designed to deliver exceptional results for your business. We combine industry best practices, modern technologies, and a client-focused approach to ensure your goals are met with precision and creativity.`}
          </p>
          {/* Example: Add more details, features, or process steps */}
          
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-lg hover:scale-105 transition"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;