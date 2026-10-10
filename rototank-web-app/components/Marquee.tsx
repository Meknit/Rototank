"use client";

import type { ReactNode } from "react";

// Seamless horizontal marquee. Duplicates its children so the loop is gapless.
export default function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      role="presentation"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
