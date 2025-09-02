import { motion } from "framer-motion";
import { LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const terms = [
	{
		title: "1. Acceptance of Terms",
		content:
			"By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our site.",
	},
	{
		title: "2. Services",
		content:
			"We provide software development and consulting services as described on our website. All services are subject to availability and may change without notice.",
	},
	{
		title: "3. User Responsibilities",
		content:
			"You agree to provide accurate information and to use our services in compliance with all applicable laws. You are responsible for maintaining the confidentiality of your account details.",
	},
	{
		title: "4. Intellectual Property",
		content:
			"All content, trademarks, and intellectual property on this site are owned by P2M Solutions unless otherwise stated. You may not reproduce or distribute any content without permission.",
	},
	{
		title: "5. Limitation of Liability",
		content:
			"We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.",
	},
	{
		title: "6. Privacy Policy",
		content:
			"Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
	},
	{
		title: "7. Changes to Terms",
		content:
			"We may update these Terms & Conditions at any time. Changes will be posted on this page and are effective immediately.",
	},
	{
		title: "8. Contact Us",
		content:
			"For any questions regarding these Terms & Conditions, please contact us at info.p2msolutions@gmail.com.",
	},
];

const TermsCondition = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen bg-gradient-to-b from-light-surface to-gray-50 dark:from-dark-surface dark:to-gray-900 pt-28 pb-20"
		>
			{/* Header Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="flex justify-center mb-6"
					>
						<div className="p-3 rounded-full bg-neon-blue/10 dark:bg-electric-green/10">
							<ShieldCheckIcon className="w-8 h-8 text-neon-blue dark:text-electric-green" />
						</div>
					</motion.div>
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent"
					>
						Terms & Conditions
					</motion.h1>
					<motion.p
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="text-lg text-gray-600 dark:text-gray-400"
					>
						Please read these terms carefully before using our website or
						services.
					</motion.p>
				</div>

				{/* Terms Content */}
				<div className="max-w-4xl mx-auto">
					<div className="grid gap-8">
						{terms.map((term, idx) => (
							<motion.div
								key={term.title}
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
											{term.title.split(". ")[1]}
										</h2>
										<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
											{term.content}
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
							<LockClosedIcon className="w-4 h-4" />
							<span>Last updated: September 2025</span>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default TermsCondition;