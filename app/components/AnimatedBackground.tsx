"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 bg-[url('/grid2.svg')] bg-repeat opacity-40"
      animate={{ backgroundPosition: ["0 0", "-100px 100px"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}
