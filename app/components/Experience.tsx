'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experience & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'A Cancelled Project That I Was Commissioned For',
							description: '%90 of the full development work was on me.',
							details: [
								'Coded interaction and physics based items',
								'Implemented custom physical currency systems',
								'Designed and coded simple user interfaces',
								'Added ragdoll mechanics',
								'Cleaned and bug-fixed previous code',
							],
							tech: ['Luau', 'UI'],
						},
						{
							title: 'Another Recent Project',
							description: 'I was hired for bug-fixes and improvements.',
							details: [
								'Implemented data based global leaderboards that update realtime',
								'Edited some animations for speed changes and ownership issues',
								'Created awesome guis for the leaderboards',
								'Fixed bugs with the combat system',
							],
							tech: ['Luau', 'UI', 'Animation'],
						},
									{
							title: 'Experience Timeline',
							description: 'older experience that hasnt been documented',
							details: [
								'1st year - Spent trying game engines and learning roblox',
								'2nd year - Spent learning luau',
								'3rd year - Spent with solo projects and self teaching',
								'4th year - Spent taking various small commissions',
								'5th year - Spent taking full commisions (also gave luau courses)',
								'6th year - burn out',
								'7th year - Spent taking full commissions (still going on)',
							],
							tech: ['Luau', 'UI', 'Animation', 'Learning', 'Tutor', 'Game Testing'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
