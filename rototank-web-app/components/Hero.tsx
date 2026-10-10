"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const trust = ["Free consultation", "No-obligation quotes", "Expert guidance"];

export default function Hero() {
  const quote = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Rototank Stores, I'd like a free quote."
  )}`;

  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="grid-texture absolute inset-0 opacity-70" aria-hidden />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200"
          >
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            25+ years · Trusted across Africa
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Industrial-grade{" "}
            <span className="text-gradient-brand">water storage</span> built for
            strength
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Safe, reliable tanks from 1,000L to 24,000L — for homes, farms,
            business and heavy industry. Delivered, installed and warrantied
            across the region.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 font-bold text-ink shadow-lg shadow-accent-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Shop Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Get Free Quote
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-brand-400" aria-hidden />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Tank visual — real product photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <Image
              src="/media/tanks-hero.jpg"
              alt="Rototank Stores industrial water storage tanks in the yard"
              width={1200}
              height={1080}
              priority
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
          </div>
          {/* Floating warranty badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500 text-ink">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div className="pr-2">
              <p className="font-heading text-lg font-bold leading-none text-ink">25+ yrs</p>
              <p className="text-xs font-medium text-ink-soft">warranty coverage</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
