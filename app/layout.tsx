import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
		description: 'Passionate roblox developer producing modular and clean code and designing user interfaces.',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Grid background */}
        <div
          className="fixed inset-0 -z-10 bg-[url('/pattern.svg')] bg-center bg-repeat opacity-10"
            style={{
              backgroundSize: '5% 5%',
              backgroundRepeat: 'repeat',
              maskImage: 'radial-gradient(circle at center, white 0%, white 40%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, white 0%, white 40%, transparent 70%)',
            }}
        />

        {/* Center page content vertically */}
        <main className="min-h-screen flex flex-col justify-center">
          {children}
        </main>

        {/* Bottom border line */}
        <div className="w-full border-t border-white-700 mt-5" />
      </body>
    </html>
  );
}
