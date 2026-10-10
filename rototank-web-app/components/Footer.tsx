import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { nav, site, categories } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grid-texture bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <span className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 font-heading text-sm font-bold text-white">
              RS
            </span>
            <span className="font-heading text-xl font-bold tracking-tight text-white">
              Rototank<span className="text-brand-400"> Stores</span>
            </span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {site.footerBlurb}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 transition-colors hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 5).map((c) => (
              <li key={c.title}>
                <Link
                  href="/products"
                  className="text-slate-400 transition-colors hover:text-brand-300"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <span className="text-slate-400">{site.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <a href={site.phones[0].href} className="text-slate-400 hover:text-brand-300">
                {site.phones[0].label}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="text-slate-400 hover:text-brand-300">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 font-semibold text-ink transition-colors hover:bg-accent-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <span className="hover:text-slate-300">Privacy Policy</span>
            <span className="hover:text-slate-300">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
