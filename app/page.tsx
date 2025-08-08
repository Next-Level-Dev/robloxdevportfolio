'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar'; // ✅ Import Navbar

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden scroll-smooth">
			<Navbar /> {/* ✅ Add the Navbar */}
			<section id="hero">
				<HeroSection />
			</section>
			<section id="architecture">
				<SystemArchitecture />
			</section>
			<section id="metrics">
				<TechnicalMetrics />
			</section>
			<section id="gallery">
				<Gallery />
			</section>
			<section id="contact">
				<ContactSection />
			</section>
		</main>
	);
}
