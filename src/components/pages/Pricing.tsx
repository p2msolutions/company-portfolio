import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "one-time",
    features: [
      "1 Landing Page",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
      "Delivery in 5 days",
    ],
    accent: "from-neon-blue to-electric-green",
    recommended: false,
  },
  {
    name: "Business",
    price: "₹24,999",
    period: "one-time",
    features: [
      "Up to 5 Pages",
      "Custom Design",
      "Advanced SEO",
      "Blog/Portfolio Section",
      "Delivery in 10 days",
      "Priority Support",
    ],
    accent: "from-purple-accent to-blue-accent",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "project",
    features: [
      "Unlimited Pages",
      "Full Customization",
      "E-commerce/Integrations",
      "AI/ML & Cloud Solutions",
      "Dedicated Manager",
      "Ongoing Support",
    ],
    accent: "from-pink-500 to-orange-400",
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-light-surface dark:bg-dark-surface py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon-blue/20 dark:bg-purple-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-electric-green/20 dark:bg-blue-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-center mb-6"
        >
          <span className="gradient-text dark:dark-gradient-text">Pricing Plans</span>
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Choose the perfect plan for your business. Transparent pricing, no hidden fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card dark:glass-card p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border-2 ${
                plan.recommended
                  ? "border-neon-blue dark:border-electric-green"
                  : "border-light-border dark:border-dark-border"
              }`}
            >
              {plan.recommended && (
                <span className="px-4 py-1 mb-3 rounded-full bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white text-xs font-semibold shadow">
                  Most Popular
                </span>
              )}
              <h2
                className={`text-2xl font-bold mb-2 gradient-text dark:dark-gradient-text`}
              >
                {plan.name}
              </h2>
              <div
                className={`text-4xl font-extrabold mb-2 bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent`}
              >
                {plan.price}
              </div>
              <div className="text-sm text-gray-500 mb-6">
                {plan.period === "one-time" ? "One-time payment" : "Custom project"}
              </div>
              <ul className="mb-8 space-y-2 text-gray-700 dark:text-gray-300 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-neon-blue dark:text-electric-green font-bold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.recommended
                    ? "bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white"
                    : "bg-white dark:bg-dark-bg text-gray-900 dark:text-white border border-light-border dark:border-dark-border"
                }`}
              >
                {plan.price === "Custom" ? "Get a Quote" : "Get Started"}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}