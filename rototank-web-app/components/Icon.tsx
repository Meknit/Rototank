import {
  Waves,
  Factory,
  ArrowDownToLine,
  Container,
  HardHat,
  Cylinder,
  Home,
  Sprout,
  Building2,
  Truck,
  Wrench,
  ShieldCheck,
  BadgeCheck,
  type LucideProps,
} from "lucide-react";

const map = {
  Waves,
  Factory,
  ArrowDownToLine,
  Container,
  HardHat,
  Cylinder,
  Home,
  Sprout,
  Building2,
  Truck,
  Wrench,
  ShieldCheck,
  BadgeCheck,
} as const;

export type IconName = keyof typeof map;

// Renders a lucide icon by name (used for data-driven categories/features).
export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = map[name as IconName] ?? Waves;
  return <Cmp {...props} />;
}
