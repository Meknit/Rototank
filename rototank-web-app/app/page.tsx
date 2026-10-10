import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import {
  site,
  stats,
  categories,
  industries,
  features,
  products,
} from "@/lib/site";

export default function HomePage() {
  const quote = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Rototank Stores, I'd like a free quote."
  )}`;

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="border-b border-steel-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
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

      {/* Categories */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              What we make
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Storage solutions for every need
            </h2>
            <p className="mt-4 text-ink-soft">
              From a single home tank to bulk industrial storage — engineered
              tough, built to last.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-steel-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-700/10">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our range — real photography */}
      <section className="bg-brand-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-accent-400">
              Our range
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              Every size, in green or black
            </h2>
            <p className="mt-4 max-w-lg text-slate-300">
              From 1,000L garden tanks to 24,000L industrial giants — moulded
              from UV-stabilised, food-grade polyethylene and built to take a
              beating. See the full family lined up at our yard.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { src: "/media/tank-green.jpg", alt: "Green Roto Tank closeup" },
                { src: "/media/tank-black.jpg", alt: "Black Roto Tank closeup" },
                { src: "/media/tank-cluster.jpg", alt: "Rototank Stores lineup" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 30vw, 160px"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Browse all sizes
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/media/range-lineup.jpg"
                alt="The full Rototank Stores range lined up at the yard"
                width={1800}
                height={1005}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-steel-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
                Our tanks & prices
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
                Honest prices, serious strength
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 8).map((p, i) => (
              <Reveal key={p.capacity} delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Who we serve
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Trusted across industries
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <Marquee className="py-2">
            {[...industries, ...industries].map((ind, i) => (
              <div
                key={`${ind.title}-${i}`}
                className="flex w-72 shrink-0 items-center gap-4 rounded-2xl border border-steel-100 bg-white px-5 py-4 shadow-sm"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-ink">{ind.title}</p>
                  <p className="text-xs leading-snug text-ink-soft">{ind.description}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Features / why us */}
      <section className="bg-brand-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent-400">
              Why Rototank Stores
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              Strength you can store on
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/10">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-14 text-center text-white sm:px-12">
              <div className="grid-texture absolute inset-0 opacity-40" aria-hidden />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
                  Ready to secure your water supply?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-200">
                  Get a free, no-obligation quote today. Custom sizes and bulk
                  orders welcome.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={quote}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 font-bold text-ink shadow-lg shadow-accent-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-400"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Get Free Quote on WhatsApp
                  </a>
                  <a
                    href={site.phones[0].href}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" aria-hidden />
                    Call {site.phones[0].label}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
