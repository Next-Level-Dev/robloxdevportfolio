'use client';

import { motion } from 'framer-motion';
import { portfolioConfig } from '../portfolio.config';

export default function SkillMetrics() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-center">
					{portfolioConfig.ui.sectionTitles.skills}
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{portfolioConfig.skills.map((category, index) => (
						<div key={index}>
							<h3 className="text-xl font-semibold mb-6 text-green-400">{category.category}</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{category.items.map((item, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										className="bg-blue-500/10 rounded-lg p-6 border border-gray-700 backdrop-blur-sm"
									>
										<h4 className="text-lg font-semibold text-gray-300">{item.title}</h4>
										<ul className="mt-2 space-y-2 text-gray-400">
											{item.points.map((point, ptIndex) => (
												<li key={ptIndex}>• {point}</li>
											))}
										</ul>
									</motion.div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
