'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Game Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Better Collisions</li>
									<li>• Better Instancing and Loading</li>
									<li>• Optimized Code</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Rework</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Cleaner and readable code</li>
									<li>• Modular code that can be built upon</li>
									<li>• Organization freak</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Cdoe and Game Infrastructure</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Better organized workspaces</li>
									<li>• Better named and split code bases</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Communication</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• C2 English Certificate</li>
									<li>• Adapting to professional and friendly environments</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Support</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Free bug-fixes after delivery</li>
									<li>• Free explanaiton & tutorials after delivery</li>
									<li>• Understandable work flow and constant updates</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Been in the sector for 7+ years</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• I know how to do transtactions safe</li>
									<li>• More than 50 customers that appreciate my work</li>
									<li>• Good with communication and community management</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
