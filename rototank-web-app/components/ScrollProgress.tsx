"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Thin reading-progress bar pinned to the very top of the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-400 via-brand-500 to-accent-400"
      aria-hidden
    />
  );
}
