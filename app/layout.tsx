import type { Metadata } from 'next';
import { ReactNode } from "react";
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HashCleaner from './components/HashCleaner';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from "./components/PageWrapper";
import AnimatedBackground from './components/AnimatedBackground'; // import client component
import { portfolioConfig } from './portfolio.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = portfolioConfig.metadata;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Background grid + mask + blur */}
        <div className="fixed inset-0 -z-10">
          <AnimatedBackground />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to top, white, transparent 40%, transparent 60%, white), linear-gradient(to right, white, transparent 40%, transparent 60%, white)",
              WebkitMaskImage:
                "linear-gradient(to top, white, transparent 40%, transparent 60%, white), linear-gradient(to right, white, transparent 40%, transparent 60%, white)",
              backgroundColor: "#1a1a1a",
            }}
          />
        </div>

        <main className="min-h-screen flex flex-col justify-center">
          <HashCleaner />
          <PageWrapper>{children}</PageWrapper>
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}