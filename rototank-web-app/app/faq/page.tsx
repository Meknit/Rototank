import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Rototank Stores",
  description:
    "Answers about Rototank Stores water storage — sizes, prices, delivery, installation, warranty, materials and bulk orders.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="grid-texture bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-400">
              <MessageCircleQuestion className="h-4 w-4" /> Help Centre
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Everything you need to know about our tanks, pricing, delivery and
              installation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <FaqAccordion />
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-col items-center gap-5 rounded-3xl bg-steel-50 p-8 text-center ring-1 ring-steel-100">
              <h2 className="font-heading text-2xl font-bold text-ink">
                Still have questions?
              </h2>
              <p className="max-w-md text-ink-soft">
                Our team is ready to help you choose the right tank and arrange
                delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={site.phones[0].href}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-200 px-6 py-3.5 font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50"
                >
                  Call {site.phones[0].label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
