import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Rototank Stores",
  description:
    "Get in touch with Rototank Stores for tanks, prices, custom sizes and bulk orders. Call, WhatsApp or email — fast, friendly service across the region.",
};

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Call us", value: site.phones[0].label, href: site.phones[0].href },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <section className="grid-texture bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              Contact Us
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              Let&apos;s get you sorted
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Questions, quotes, custom sizes or bulk orders — reach out and
              we&apos;ll respond fast.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Details */}
          <Reveal>
            <div className="space-y-4">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-steel-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <it.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {it.label}
                    </p>
                    <p className="font-heading text-lg font-bold text-ink">{it.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-steel-100 bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <MapPin className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Location
                  </p>
                  <p className="font-heading text-lg font-bold text-ink">{site.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-steel-100 bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Clock className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Hours
                  </p>
                  <p className="font-heading text-lg font-bold text-ink">
                    Mon–Sat, 8:00am – 6:00pm
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-steel-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-1 text-sm text-ink-soft">
                Fill in the details and we&apos;ll pick it up on WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
