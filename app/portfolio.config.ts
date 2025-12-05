import type { Metadata } from 'next';

export const portfolioConfig = {
  metadata: {
    title: '[Next Level] - Roblox Developer',
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
    authors: [{ name: '[Next Level]' }],
    creator: '[Next Level]',
    openGraph: {
      title: '[Next Level] - Roblox Developer Portfolio',
      description: 'Roblox developer for the past 7 years.',
      url: 'https://nextleveldev.vercel.app/',
      siteName: '[Next Level] - Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 1024,
          alt: '[Next Level] - Roblox Developer Portfolio',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '[Next Level] - Roblox Developer',
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
  } as Metadata,
  ui: {
    sectionTitles: {
      experience: "Experience & Projects",
      skills: "Practices, Achievements & Skills",
      gallery: "Image Gallery",
      contact: "Let's Connect",
    },
    labels: {
      keyAchievements: "Key Achievements:",
      resumeButton: "PRIVATE FOR NOW",
    },
    commands: {
      heroWhoami: "$ whoami",
      heroSkills: "$ skills",
      contactInfo: "$ contact --info",
      contactLocation: "$ location --current",
      contactEmail: "$ contact --email",
      contactResume: "$ cat resume.pdf",
      contactSocials: "$ ls ./social-links",
    },
    assets: {
      gridBackground: "/grid2.svg",
    }
  },
  navbar: {
    title: "[Next Level's Portfolio For Roblox Development]",
    items: [
      { name: 'Home', href: '#Hero' },
      { name: 'Experience', href: '#Experience' },
      { name: 'Skills', href: '#Skills' },
      { name: 'Gallery', href: '#Gallery' },
      { name: 'Contact', href: '#Contact' },
    ],
  },
  hero: {
    title: 'Next Level',
    subtitle: 'Experienced Luau Scripter and Roblox User Interface Designer',
    skills: [
      'Luau/Lua Professional Programming',
      'Python Intermediate Programming',
      'Roblox GUI Design',
      'Game Testing And Profiling',
      'Content Analysis And Planning',
    ],
  },
  experience: [
    {
      title: 'A Cancelled Project That I Was Commissioned For',
      description: '%90 of the full development work was on me.',
      details: [
        'Coded interaction and physics based items',
        'Implemented custom physical currency systems',
        'Designed and coded simple user interfaces',
        'Added ragdoll mechanics',
        'Cleaned and bug-fixed previous code',
      ],
      tech: ['Luau', 'UI'],
    },
    {
      title: 'Another Recent Project',
      description: 'I was hired for bug-fixes and improvements.',
      details: [
        'Implemented data based global leaderboards that update realtime',
        'Edited some animations for speed changes and ownership issues',
        'Created awesome guis for the leaderboards',
        'Fixed bugs with the combat system',
      ],
      tech: ['Luau', 'UI', 'Animation'],
    },
    {
      title: 'Experience Timeline',
      description: 'older experience that hasnt been documented',
      details: [
        '1st year - Spent trying game engines and learning roblox',
        '2nd year - Spent learning luau',
        '3rd year - Spent with solo projects and self teaching',
        '4th year - Spent taking various small commissions',
        '5th year - Spent taking full commisions (also gave luau courses)',
        '6th year - burn out',
        '7th year - Spent taking full commissions (still going on)',
      ],
      tech: ['Luau', 'UI', 'Animation', 'Learning', 'Tutor', 'Game Testing'],
    },
  ],
  skills: [
    {
      category: 'Code Infrastructure',
      items: [
        {
          title: 'Organization',
          points: [
            'Cleaner & Readable Code',
            'Modular Code That Can Be Built Upon',
          ],
        },
        {
          title: 'Performance',
          points: [
            'Pre Loading',
            'Better Instancing (culling)',
            'Optimized Code',
          ],
        },
      ],
    },
    {
      category: 'Game Infrastructure',
      items: [
        {
          title: 'Organization',
          points: [
            'Better Organized Workspaces',
            'Better Named & Split Code Bases',
          ],
        },
        {
          title: 'Performance',
          points: ['Faster Loading', 'Better Collisions', 'Culling'],
        },
      ],
    },
    {
      category: 'User Interface',
      items: [
        {
          title: 'Organization',
          points: [
            'Nicely Named & Organized UI Elements',
            'Easy To Edit UI Elements',
            'All Made With Modern Practices',
          ],
        },
        {
          title: 'Performance',
          points: [
            'Slick Gui With Custom Visuals',
            'Smooth Animations and Sfx',
            'Functional & Coded',
          ],
        },
      ],
    },
    {
      category: 'Support And Communication',
      items: [
        {
          title: 'Support',
          points: [
            'Free Bug-Fixes After Delivery',
            'Free Explanation & Tutorials After Delivery',
            'Understandable Work Flow And Constant Updates',
          ],
        },
        {
          title: 'Been in the sector for 7+ years',
          points: [
            'I Know How To Do Transtactions Safely',
            'C2 English Certificate',
            'More Than 50 Customers That Appreciate My Work',
            'Good With Communication And Community Management',
          ],
        },
      ],
    },
  ],
  contact: {
    location: 'Turkiye',
    email: 'utku.businessemail@gmail.com',
    emailSubject: 'Project Inquiry',
    emailBody: 'Hi, I would like to discuss a project with you.',
    resumeUrl: '/dinker-resume.pdf',
    socials: {
      roblox: {
        name: 'Roblox',
        handle: 'NextLevel_Dev',
        url: 'https://www.roblox.com/users/5078913285/profile',
      },
      linkedin: {
        name: 'LinkedIn',
        handle: 'Utku Ünal',
        url: 'https://www.linkedin.com/in/utku-%C3%BCnal-686851320/',
      },
      discord: {
        name: 'Discord',
        handle: 'nextlevel.dev',
        url: 'https://discord.gg/SYXNqPahv5',
      },
    },
  },
  gallery: {
    altText: "Gallery image",
    videos: [
      'https://www.youtube-nocookie.com/embed/VH4wPgpYTZ0?si=lYG6xx8jnhbUD0id',
      'https://www.youtube.com/embed/TLdXhgJaGBI?si=gGVJhUDWvCxLl84k',
      'https://www.youtube.com/embed/-UMbxMkiah8?si=YUFy3nW4qFEp53N7',
      'https://www.youtube.com/embed/799tIKoIsEg?si=PRmu4E2vQIbrW-iU',
      'https://www.youtube.com/embed/AodhHwG8K4Y?si=Fju7JhOlOL1LyRbf',
      'https://www.youtube.com/embed/9L7PjkNgnB4?si=ZmBK4T4F7YfbFSCI',
    ],
    images: [
      'https://i.postimg.cc/jdMBC0FF/0FEYrPF.webp',
      'https://i.postimg.cc/3RQczKkd/1isriyN.webp',
      'https://i.postimg.cc/65WD95YZ/3Ctbn64.webp',
      'https://i.postimg.cc/Vk5pCZyL/J6DfRVj.webp',
      'https://i.postimg.cc/Pqw76Lrg/lMISKLq.webp',
      'https://i.postimg.cc/RZ88Q191/TCSTL0E.webp',
      'https://i.postimg.cc/gJKN539T/SidKKh6.webp',
      'https://i.postimg.cc/PqWHyxx6/image.png',
      'https://i.postimg.cc/3wXB42wx/image.png',
    ],
  },
};