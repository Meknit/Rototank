"use client";

import { Phone } from "lucide-react";

export default function CallFloat({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="Call Rototank Stores"
      className="fixed bottom-[5.5rem] right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-110 hover:bg-brand-700 focus-visible:scale-110"
    >
      <Phone className="h-6 w-6" aria-hidden />
    </a>
  );
}
