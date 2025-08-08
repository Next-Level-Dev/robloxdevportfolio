import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HashCleaner from '@/components/HashCleaner'; // ✅ Import the new client component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '[Dinker] - Roblox Developer',
  description: 'Welcome to my portfolio! I am a passionate backend developer...',
  // ...rest of your metadata
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
          <div
            className="absolute inset-0 bg-[url('/grid2.svg')] bg-center opacity-40"
            style={{
              backgroundSize: '15% 15%',
              filter: 'blur(2px)',
            }}
          />
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

        <main className="min-h-screen flex flex-col justify-center">
          <HashCleaner /> {/* ✅ Called here */}
          {children}

          {/* Bottom border */}
          <div className="w-full border-t border-red-500 mt-5 h-0" />
        </main>
      </body>
    </html>
  );
}
