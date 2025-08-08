'use client';

import { motion } from 'framer-motion';

export default function SkillMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Practices, Achievements & Skills
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Code Infrastructure</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Organization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Cleaner & Readable Code</li>
									<li>• Modular Code That Can Be Built Upon</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Performance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Pre Loading</li>
									<li>• Better Instancing (culling)</li>
									<li>• Optimized Code</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Game Infrastructure</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Organization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Better Organized Workspaces</li>
									<li>• Better Named & Split Code Bases</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Performance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Faster Loading</li>
									<li>• Better Collisions</li>
									<li>• Culling</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">User Interface</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Organization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Nicely Named & Organized UI Elements</li>
									<li>• Easy To Edit UI Elements</li>
									<li>• All Made With Modern Practices</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Performance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Slick Gui With Custom Visuals</li>
									<li>• Smooth Animations and Sfx</li>
									<li>• Functional & Coded</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Support And Communication</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Support</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Free Bug-Fixes After Delivery</li>
									<li>• Free Explanaiton & Tutorials After Delivery</li>
									<li>• Understandable Work Flow And Constant Updates</li>
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
									<li>• I Know How To Do Transtactions Safely</li>
									<li>• C2 English Certificate</li>
									<li>• More Than 50 Customers That Appreciate My Work</li>
									<li>• Good With Communication And Community Management</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
