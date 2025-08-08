import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function HashCleaner() {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;

      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        history.replaceState(null, '', window.location.pathname);
      }, 100);
    }
  }, []);

  return null;
}

export const metadata: Metadata = {
  title: '[Dinker] - Roblox Developer',
  description:
    'Welcome to my portfolio! I am a passionate backend developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.',
  keywords: [
    'Studio UI Designer',
    'Luau',
    'Lua',
    'Roblox Programming',
    'Development',
    'Roblox Developer',
    'Gui Designer',
    'Roblox Studio',
    '[Dinker]',
    'Node.js',
    'Python',
    'Roblox',
    'Systems',
    'Studio',
    'Programmer',
  ],
  authors: [{ name: '[Dinker]' }],
  creator: '[Dinker]',
  openGraph: {
    title: '[Dinker] - Roblox Developer Portfolio',
    description: 'Roblox developer for the past 7 years.',
    url: 'https://robloxdevportfolio.vercel.app/',
    siteName: '[Dinker] - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '[Dinker] - Roblox Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Dinker] - Roblox Developer',
    description:
      'Passionate roblox developer producing modular and clean code and designing user interfaces.',
    creator: '@[NO ACCOUNT]',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Background grid + mask + blur */}
        <div className="fixed inset-0 -z-10">
          {/* Grid background with blur */}
          <div
            className="absolute inset-0 bg-[url('/grid2.svg')] bg-center opacity-40"
            style={{
              backgroundSize: '15% 15%',
              filter: 'blur(2px)',
            }}
          />

          {/* Rectangular fade mask using two gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                'linear-gradient(to top, transparent, white 40%, white 60%, transparent), linear-gradient(to bottom, transparent, white 40%, white 60%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to top, transparent, white 40%, white 60%, transparent), linear-gradient(to bottom, transparent, white 40%, white 60%, transparent)',
              backgroundColor: '#1a1a1a',
            }}
          />
        </div>

        {/* Main content */}
        <main className="min-h-screen flex flex-col justify-center">
          <HashCleaner />
          {children}

          {/* Bottom border */}
          <div className="w-full border-t border-red-500 mt-5 h-0" />
        </main>
      </body>
    </html>
  );
}
