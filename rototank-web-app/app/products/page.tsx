import type { Metadata } from "next";
import Image from "next/image";
import { Package } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Tank Prices in Kenya (1,000L–24,000L) | Rototank Stores",
  description:
    "Current water tank prices in Kenya — from KSh 6,500 (1,000L) to KSh 135,000 (24,000L). Plastic, underground, industrial tanks, IBC containers & HDPE drums. Order on WhatsApp with delivery across Kenya.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 py-24 text-white">
        <Image
          src="/media/range-lineup.jpg"
          alt="Rototank Stores range lined up at the yard"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-400">
              <Package className="h-4 w-4" /> Our Products
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              Tanks &amp; prices
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Eleven sizes from 1,000L to 24,000L, plus custom and bulk orders.
              All prices in Kenyan Shillings — tap any tank to order on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.capacity} delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Beyond standard tanks
            </h2>
            <p className="mt-4 text-ink-soft">
              We also supply specialist storage for industry, agriculture and
              construction.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-steel-100 bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
