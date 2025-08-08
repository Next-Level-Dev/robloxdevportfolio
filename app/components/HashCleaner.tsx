'use client';

import { useEffect } from 'react';

export default function HashCleaner() {
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
