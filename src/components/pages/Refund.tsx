import { motion } from "framer-motion";

const refundPolicies = [
  {
    title: "1. Refund Eligibility",
    content:
      "Refunds are available within 30 days of purchase for our digital products and services, subject to certain conditions and review.",
  },
  {
    title: "2. Service Cancellation",
    content:
      "For ongoing services, you may cancel your subscription at any time. Refunds will be prorated based on the unused portion of the service period.",
  },
  {
    title: "3. Refund Process",
    content:
      "To request a refund, please contact our support team at info.p2msolutions@gmail.com with your order details and reason for the refund.",
  },
  {
    title: "4. Non-Refundable Items",
    content:
      "Custom development projects, consultation sessions that have been delivered, and services that have been fully rendered are non-refundable.",
  },
  {
    title: "5. Refund Method",
    content:
      "Refunds will be processed using the original payment method. Processing time may vary depending on your payment provider (typically 5-10 business days).",
  },
  {
    title: "6. Dispute Resolution",
    content:
      "If you're unsatisfied with our services, we encourage you to contact us first to resolve any issues before initiating a refund request.",
  },
  {
    title: "7. Documentation",
    content:
      "For refund requests, we may require relevant documentation or information to process your request effectively.",
  },
  {
    title: "8. Policy Updates",
    content:
      "We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to our website.",
  },
];

const Refund = () => {
  return (
    <section className="relative min-h-screen bg-light-surface dark:bg-dark-surface pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-br from-neon-blue/10 to-electric-green/10 dark:from-purple-accent/10 dark:to-blue-accent/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-gradient-to-br from-electric-green/10 to-neon-blue/10 dark:from-blue-accent/10 dark:to-purple-accent/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 0.95, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 rounded-full bg-neon-blue/10 dark:bg-electric-green/10">
              <span className="text-2xl">💰</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent"
          >
            Refund Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Your satisfaction is our priority. Learn about our refund process.
          </motion.p>
        </div>

        {/* Policies Content */}
        <div className="grid gap-8">
          {refundPolicies.map((policy, idx) => (
            <motion.div
              key={policy.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card dark:glass-card rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-blue/10 dark:bg-electric-green/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-neon-blue dark:text-electric-green">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {policy.title.split(". ")[1]}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-sm">🔒</span>
            <span>Last updated: September 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Refund;
