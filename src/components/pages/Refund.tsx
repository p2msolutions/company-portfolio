import { motion } from "framer-motion";

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

const Refund = () => {
	return (
		<section className="relative min-h-screen bg-light-surface dark:bg-dark-surface pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Subtle animated background gradients */}
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

			<div className="relative max-w-3xl mx-auto z-10">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text dark:dark-gradient-text"
				>
					Refund Policy
				</motion.h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 mb-10 text-center">
					Please read these terms carefully before using our website or
					services.
				</p>
        <img className="mt-5 mb-5 rounded-2xl" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
				<div className="space-y-8 mt-10">
					{terms.map((term, idx) => (
						<motion.div
							key={term.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.05 }}
						>
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								{term.title}
							</h2>
							<p className="text-gray-700 dark:text-gray-300 text-justify">
								{term.content}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Refund;