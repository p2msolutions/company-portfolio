import { motion } from "framer-motion";

const privacyPolicies = [
  {
    title: "1. Information Collection",
    content:
      "We collect information you provide directly to us, including name, email, and other details necessary for our services.",
  },
  {
    title: "2. Use of Information",
    content:
      "We use collected information to provide and improve our services, communicate with you, and ensure security of our platform.",
  },
  {
    title: "3. Data Protection",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.",
  },
  {
    title: "4. Information Sharing",
    content:
      "We do not sell or share your personal information with third parties except as described in this privacy policy.",
  },
  {
    title: "5. Cookie Policy",
    content:
      "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.",
  },
  {
    title: "6. User Rights",
    content:
      "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your information for as long as necessary to provide our services and comply with legal obligations.",
  },
  {
    title: "8. Contact Information",
    content:
      "For privacy-related inquiries, please contact us at info.p2msolutions@gmail.com.",
  },
];

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light-surface dark:bg-dark-surface pt-28 pb-20"
    >
      {/* Background Elements */}
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 rounded-full bg-neon-blue/10 dark:bg-electric-green/10">
              <span className="text-2xl">🔐</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            We value your privacy and are committed to protecting your personal
            information.
          </motion.p>
        </div>

        {/* Policies Content */}
        <div className="grid gap-8">
          {privacyPolicies.map((policy, idx) => (
            <motion.div
              key={policy.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card dark:glass-card rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center">
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">
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
    </motion.div>
  );
};

export default PrivacyPolicy;
