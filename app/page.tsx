'use client';

import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Skills from './components/SkillMetrics';
import Contact from './components/ContactSection';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar'; // ✅ Import Navbar

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen text-white overflow-x-hidden scroll-smooth">
			<Navbar />
			<section id="Hero">
				<HeroSection />
			</section>
			<section id="Experience">
				<Experience />
			</section>
			<section id="Skills">
				<Skills />
			</section>
			<section id="Gallery">
				<Gallery />
			</section>
			<section id="Contact">
				<Contact />
			</section>
		</main>
	);
}
