"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site, products } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Rototank Stores, I'd like to make an enquiry.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      size && `Tank size: ${size}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const field =
    "w-full rounded-xl border border-steel-100 bg-steel-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand-400 focus:bg-white";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="cf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Phone
          </label>
          <input
            id="cf-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07xx xxx xxx"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-size" className="mb-1.5 block text-sm font-semibold text-ink">
          Tank size
        </label>
        <select
          id="cf-size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={field}
        >
          <option value="">Select a size (optional)</option>
          {products.map((p) => (
            <option key={p.capacity} value={`${p.capacity} — ${p.price}`}>
              {p.capacity} — {p.price}
            </option>
          ))}
          <option value="Custom / bulk order">Custom / bulk order</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tell us what you need…"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Send via WhatsApp
      </button>
      <p className="text-xs text-ink-soft">
        This opens WhatsApp with your details pre-filled — no data is stored on this site.
      </p>
    </form>
  );
}
