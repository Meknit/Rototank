"use client";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.06-3.63zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4 1.05 1.07-3.9-.25-.4a10.55 10.55 0 0 1-1.62-5.63c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.11 7.5 3.12a10.54 10.54 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.62 10.62zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.67.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

export default function WhatsAppFloat({ phone }: { phone: string }) {
  const message = encodeURIComponent(
    "Hello Rototank Stores, I'd like to enquire about your water storage tanks."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-110 hover:bg-[#20bd5a] focus-visible:scale-110"
    >
      <WhatsAppIcon />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40" />
    </a>
  );
}
