'use client';

import { motion } from 'framer-motion';
import { portfolioConfig } from '../portfolio.config';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mb-4">
            <div className="relative z-8 max-w-4xl w-full mx-4 backdrop-blur-lg rounded-lg border border-gray-800 bg-gradient-to-r from-green-500/5 to-blue-500/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="font-mono">
                        <p className="text-green-500">$ whoami</p>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{portfolioConfig.hero.title}</h1>
                        <p className="text-gray-400 mb-4">{portfolioConfig.hero.subtitle}</p>
                        <p className="text-green-500">$ skills</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {portfolioConfig.hero.skills.map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}