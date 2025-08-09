"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          });
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(el);

    // Fallback: If element is already in viewport (rare), trigger immediately
    if (el.getBoundingClientRect().top < window.innerHeight && !hasAnimated) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
      setHasAnimated(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
