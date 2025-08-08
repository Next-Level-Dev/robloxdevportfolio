'use client';
import { useState } from 'react';
import Link from 'next/link';
import HashCleaner from './HashCleaner';

const navItems = [
  { name: 'Home', href: '#Hero' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Contact', href: '#Contact' },
];

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            [Dinker&apos;s Portfolio For Roblox Development]
          </div>
          <div className="space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} scroll={true}>
                <span
                  onClick={handleClick}
                  className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Render HashCleaner only after click */}
      {clicked && <HashCleaner />}
    </>
  );
}
