"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel-100 overflow-hidden rounded-2xl border border-steel-100 bg-white">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-steel-50"
              >
                <span className="font-heading text-base font-semibold text-ink sm:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
