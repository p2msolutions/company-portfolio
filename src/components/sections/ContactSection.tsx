import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { send } from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  "Web Development",
  "Mobile App",
  "AI/ML Integration",
  "Cloud Infrastructure",
  "Automation",
  "Other",
];

const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // Toast state
  const [toast, setToast] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({
    visible: false,
    type: "success",
    message: "",
  });
  const toastTimer = useRef<number | null>(null);

  const showToast = (type: "success" | "error", message: string, ms = 4000) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    setToast({ visible: true, type, message });
    toastTimer.current = window.setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
      toastTimer.current = null;
    }, ms);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const templateParams = {
      name: data.name,
      email: data.email,
      company: data.company,
      projectType: data.projectType,
      message: data.message,
    };

    try {
      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      showToast("success", "Message sent — we will get back soon.");
      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS send error:", err);
      showToast("error", "Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();

      // Reset submitted state after 3s (keeps button state UX)
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Noida Sector 63", "New Delhi, India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7369900185, +91 7205384589, ", "Mon-Fri 9AM-6PM PST"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info.p2msolutions@gmail.com", "Response within 24 hours"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM PST"],
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-light-surface dark:bg-dark-surface relative"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Let's Build</span>
            <br />
            <span className="gradient-text dark:dark-gradient-text">
              Something Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's
            discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-light-border dark:border-dark-border"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-neon-blue dark:focus:border-electric-green focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-neon-blue dark:focus:border-electric-green focus:outline-none transition-colors duration-200"
                    placeholder="john@company.com"
                    whileFocus={{ scale: 1.02 }}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </label>
                <motion.input
                  {...register("company")}
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-neon-blue dark:focus:border-electric-green focus:outline-none transition-colors duration-200"
                  placeholder="Your Company Name"
                  whileFocus={{ scale: 1.02 }}
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <motion.select
                  {...register("projectType", {
                    required: "Please select a project type",
                  })}
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-neon-blue dark:focus:border-electric-green focus:outline-none transition-colors duration-200"
                  whileFocus={{ scale: 1.02 }}
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </motion.select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <motion.textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full px-4 py-3 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-neon-blue dark:focus:border-electric-green focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                  whileFocus={{ scale: 1.02 }}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 dark:hover:shadow-electric-green/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={isSubmitted ? { backgroundColor: "#10b981" } : {}}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <span>Message Sent!</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* removed inline status messages - using toast instead */}
                <div className="flex-1" aria-hidden>
                  {/* placeholder to keep layout consistent */}
                </div>
              </div>

              {/* Justified and bottom-aligned paragraphs */}
              <div className="mt-6 flex flex-col justify-end h-32 text-justify text-gray-600 dark:text-gray-400 text-base leading-relaxed text-center">
                <p className="text-center">
                  Our team typically replies within{" "}
                  <span className="font-semibold text-neon-blue dark:text-electric-green">
                    24 hours
                  </span>
                  . Don't worry we are here for you.
                </p>
                <p className="mt-2 text-center">
                  Your details are safe with us and used only for this inquiry.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border hover:border-neon-blue dark:hover:border-electric-green transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-electric-green/20 dark:from-purple-accent/20 dark:to-blue-accent/20 border border-neon-blue/30 dark:border-purple-accent/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neon-blue dark:text-electric-green" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div
              className="bg-gradient-to-br from-neon-blue/10 to-electric-green/10 dark:from-purple-accent/10 dark:to-blue-accent/10 rounded-2xl p-8 border border-neon-blue/20 dark:border-purple-accent/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a free consultation to discuss your project
                requirements and get a detailed proposal.
              </p>
              <motion.button
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white font-semibold rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          role="status"
          aria-live="polite"
          className={`fixed z-50 right-6 bottom-6 max-w-xs w-full rounded-lg shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-start gap-3 ${
            toast.type === "success"
              ? "bg-white dark:bg-emerald-900/90 text-emerald-700 dark:text-emerald-100"
              : "bg-white dark:bg-rose-900/90 text-rose-700 dark:text-rose-100"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
              toast.type === "success"
                ? "bg-emerald-100 dark:bg-emerald-700/20"
                : "bg-rose-100 dark:bg-rose-700/20"
            }`}
          >
            {toast.type === "success" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>

          <div className="flex-1">
            <p className="font-medium">
              {toast.type === "success" ? "Success" : "Error"}
            </p>
            <p className="text-sm opacity-90 mt-1">{toast.message}</p>
          </div>

          <button
            onClick={() => setToast((t) => ({ ...t, visible: false }))}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-300 ml-2"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection;
