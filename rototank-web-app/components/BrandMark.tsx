import Link from "next/link";

export default function BrandMark({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="Rototank Stores home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 font-heading text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        RS
      </span>
      <span className={`font-heading text-xl font-bold tracking-tight ${textColor}`}>
        Rototank<span className="text-brand-500"> Stores</span>
      </span>
    </Link>
  );
}
