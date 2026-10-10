"use client";

import { motion } from "motion/react";

/**
 * Vector water-tank illustration with a gently animated water surface.
 * Used in place of product photos so there are no third-party brand marks.
 */
export default function TankIllustration({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  const uid = label ? label.replace(/[^a-z0-9]/gi, "") : "tank";
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={label ? `${label} water tank` : "Water tank"}
    >
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#155e75" />
          <stop offset="1" stopColor="#083344" />
        </linearGradient>
        <linearGradient id={`water-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <clipPath id={`clip-${uid}`}>
          <path d="M52 60 h96 a10 10 0 0 1 10 10 v78 a14 14 0 0 1 -14 14 h-88 a14 14 0 0 1 -14 -14 v-78 a10 10 0 0 1 10 -10 z" />
        </clipPath>
      </defs>

      {/* Tank body */}
      <path
        d="M52 60 h96 a10 10 0 0 1 10 10 v78 a14 14 0 0 1 -14 14 h-88 a14 14 0 0 1 -14 -14 v-78 a10 10 0 0 1 10 -10 z"
        fill={`url(#body-${uid})`}
      />

      {/* Animated water inside the tank */}
      <g clipPath={`url(#clip-${uid})`}>
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: -40 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <path
            d="M20 108 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 v100 h-240 z"
            fill={`url(#water-${uid})`}
            opacity="0.95"
          />
          <path
            d="M20 116 q20 10 40 0 t40 0 t40 0 t40 0 t40 0 v100 h-240 z"
            fill="#22d3ee"
            opacity="0.5"
          />
        </motion.g>
      </g>

      {/* Rib lines */}
      {[74, 88, 102, 116, 130, 144].map((y) => (
        <line
          key={y}
          x1="46"
          x2="154"
          y1={y}
          y2={y}
          stroke="#083344"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      ))}

      {/* Lid */}
      <ellipse cx="100" cy="56" rx="42" ry="12" fill="#0e7490" />
      <ellipse cx="100" cy="52" rx="42" ry="12" fill="#155e75" />
      <rect x="86" y="40" width="28" height="10" rx="4" fill="#0e7490" />

      {/* Amber brand tick */}
      <circle cx="100" cy="120" r="12" fill="#fbbf24" />
      <path
        d="M94 120 l4 4 l8 -9"
        fill="none"
        stroke="#083344"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
