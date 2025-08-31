import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
		<section className="relative bg-light-surface dark:bg-dark-surface pt-36 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
			{/* Enhanced Background Elements */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 90, 0],
				}}
				transition={{ duration: 20, repeat: Infinity }}
				className="absolute top-0 -left-32 w-[40rem] h-[40rem] bg-neon-blue/10 dark:bg-purple-accent/10 rounded-full blur-3xl pointer-events-none"
			/>
			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, -90, 0],
				}}
				transition={{ duration: 25, repeat: Infinity }}
				className="absolute bottom-0 -right-32 w-[35rem] h-[35rem] bg-electric-green/10 dark:bg-blue-accent/10 rounded-full blur-3xl pointer-events-none"
			/>

			<div className="relative max-w-7xl mx-auto z-10">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
						<span className="block text-gray-900 dark:text-white">Simple,</span>
						<span className="gradient-text dark:dark-gradient-text">
							Transparent Pricing
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Choose the perfect plan for your business. Start small and scale as you
						grow.
					</p>
				</motion.div>

				{/* Pricing Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan, i) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							viewport={{ once: true }}
							className={`relative glass-card dark:glass-card p-8 rounded-2xl shadow-xl flex flex-col h-full ${
								plan.recommended ? "scale-105 md:scale-110 z-10" : ""
							}`}
						>
							{/* Plan Header */}
							<div className="text-center mb-8">
								{plan.recommended && (
									<motion.span
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-lg"
									>
										Most Popular
									</motion.span>
								)}
								<h2 className="text-2xl font-bold mb-2 gradient-text dark:dark-gradient-text">
									{plan.name}
								</h2>
								<div
									className={`text-4xl font-extrabold mb-2 bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent`}
								>
									{plan.price}
								</div>
								<p className="text-sm text-gray-500">
									{plan.period === "one-time"
										? "One-time payment"
										: "Custom project"}
								</p>
							</div>

							{/* Features List */}
							<ul className="space-y-4 mb-8 flex-grow">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<Check className="w-5 h-5 text-neon-blue dark:text-electric-green flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300 text-left">
											{feature}
										</span>
									</li>
								))}
							</ul>

							{/* CTA Button */}
							<motion.a
								href="#contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 text-center ${
									plan.recommended
										? "bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-lg"
										: "bg-white/10 dark:bg-dark-bg/20 text-gray-900 dark:text-white border border-light-border dark:border-dark-border backdrop-blur-sm"
								}`}
							>
								{plan.price === "Custom" ? "Get a Quote" : "Get Started"}
							</motion.a>
						</motion.div>
					))}
				</div>

				{/* Updated FAQ Teaser - More Seamless */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center mt-32 max-w-3xl mx-auto"
				>
					<h3 className="text-3xl lg:text-4xl font-bold gradient-text dark:dark-gradient-text mb-6">
						Need More Information?
					</h3>
					<p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10">
						Our team is ready to help you choose the perfect plan and craft a
						solution that matches your vision perfectly.
					</p>
					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center px-12 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-neon-blue to-electric-green dark:from-purple-accent dark:to-blue-accent text-white shadow-xl hover:shadow-2xl transition-all duration-300"
						onClick={(e) => {
							e.preventDefault();
							document.querySelector("#contact")?.scrollIntoView({
								behavior: "smooth",
							});
						}}
					>
						Get Started Now
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}