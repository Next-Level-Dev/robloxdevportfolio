"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 bg-[url('/grid2.svg')] bg-repeat opacity-40"
      animate={{ backgroundPosition: ["0 0", "-3000px 3000px"] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
  );
}
