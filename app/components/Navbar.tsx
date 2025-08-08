'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HashCleaner from './HashCleaner';

const navItems = [
  { name: 'Home', href: '#Hero' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Contact', href: '#Contact' },
];

export default function Navbar() {
  const router = useRouter();

  // Function to scroll and clean hash after scrolling
  const handleClick = (e, href) => {
    e.preventDefault();

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Update the URL hash without jumping immediately
      history.pushState(null, '', href);

      // After scrolling finishes (approximate), run HashCleaner
      setTimeout(() => {
        HashCleaner(); // Call your hash cleaner function here
        // Optionally remove the hash if needed:
        // history.pushState(null, '', window.location.pathname);
      }, 600); // 600ms for smooth scroll (adjust if needed)
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          [Dinker&apos;s Portfolio For Roblox Development]
        </div>
        <div className="space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
