'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use a short timeout to run after browser's default scroll restore
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // 50ms delay, you can tweak this if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
