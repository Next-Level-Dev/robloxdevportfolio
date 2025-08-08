'use client';

import HeroSection from './components/HeroSection';
import experience from './components/Experience';
import skills from './components/SkillMetrics';
import contact from './components/ContactSection';
import gallery from './components/Gallery';
import navbar from './components/Navbar'; // ✅ Import Navbar

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden scroll-smooth">
			<Navbar /> {/* ✅ Add the Navbar */}
			<section id="hero">
				<HeroSection />
			</section>
			<section id="experience">
				<experience />
			</section>
			<section id="skills">
				<skills />
			</section>
			<section id="gallery">
				<gallery />
			</section>
			<section id="contact">
				<contact />
			</section>
		</main>
	);
}
