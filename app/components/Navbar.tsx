'use client';
import Link from 'next/link';

const navItems = [
	{ name: 'Home', href: '#hero' },
	{ name: 'Architecture', href: '#architecture' },
	{ name: 'Metrics', href: '#metrics' },
	{ name: 'Gallery', href: '#gallery' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-white/10">
			<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
				<div className="text-xl font-bold text-white">[Dinker]</div>
				<div className="space-x-6">
					{navItems.map((item) => (
						<Link key={item.href} href={item.href}>
							<span className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer">
								{item.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
