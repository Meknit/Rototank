import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import type { Product } from "@/lib/site";
import { site } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const enquiry = encodeURIComponent(
    `Hello Rototank Stores, I'm interested in the ${product.capacity} tank (${product.price}). Please share more details.`
  );
  const href = `https://wa.me/${site.whatsapp}?text=${enquiry}`;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-700/10 ${
        product.popular ? "border-accent-400 ring-1 ring-accent-400" : "border-steel-100 hover:border-brand-200"
      }`}
    >
      {product.popular && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 overflow-hidden rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-ink shadow">
          <Star className="h-3 w-3 fill-ink" aria-hidden /> Popular
          <span className="shimmer pointer-events-none absolute inset-0" aria-hidden />
        </span>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
        <Image
          src={product.image}
          alt={`Roto Tank ${product.capacity} water storage tank`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-700 px-3 py-1 text-xs font-bold text-white shadow">
          {product.capacity}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-heading text-xl font-bold text-ink">{product.capacity}</h3>
          <span className="font-heading text-lg font-bold text-brand-700">{product.price}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
        >
          Order on WhatsApp
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
