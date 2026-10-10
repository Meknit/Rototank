import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { aboutParagraphs, aboutHighlights, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Rototank Stores",
  description:
    "Rototank Stores has delivered industrial-grade water storage across Africa for over 25 years — durable, warrantied tanks for homes, farms, business and industry.",
};

export default function AboutPage() {
  return (
    <>
      <section className="grid-texture bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              About Rototank Stores
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold sm:text-5xl">
              25+ years of strength you can store on
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-5">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                {aboutHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Talk to our team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-500/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-steel-100 shadow-xl">
                <Image
                  src="/media/tank-green.jpg"
                  alt="Rototank Stores 10,000L green water storage tank"
                  width={700}
                  height={620}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-4xl font-bold text-brand-700 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm font-medium text-ink-soft">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
