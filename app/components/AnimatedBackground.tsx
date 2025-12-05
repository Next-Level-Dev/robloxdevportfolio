"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "../portfolio.config";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 bg-repeat opacity-40"
      style={{ backgroundImage: `url('${portfolioConfig.ui.assets.gridBackground}')` }}
      animate={{ backgroundPosition: ["0 0", "-3000px 3000px"] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
  );
}