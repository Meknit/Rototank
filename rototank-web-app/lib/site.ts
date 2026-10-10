// Central content + config for the Rototank Stores site.
// Everything (contacts, products, copy) reads from this file — edit here.

// Public base URL — the live custom domain.
export const siteUrl = "https://www.rototanks.com.ng";

export const site = {
  name: "Rototank Stores",
  tagline: "Industrial-Grade Water Storage Built for Strength",
  subtagline: "Trusted across Africa for over 25 years",
  location: "Enterprise Road, Industrial Area, Nairobi",
  email: "niceen28@gmail.com",
  phones: [{ label: "0753 273 248", href: "tel:+254753273248" }],
  // WhatsApp: international format, no +, spaces or dashes
  whatsapp: "254753273248",
  footerBlurb:
    "Delivering high-quality, industrial-grade water storage solutions across Africa for over 25 years. Strength you can store on.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Product = {
  capacity: string;
  liters: number;
  price: string;
  description: string;
  image: string;
  popular?: boolean;
};

// Real tank photos: a=green 10,000L, b=black 15,000L, c=green 2,000L, d=black 1,500L
export const products: Product[] = [
  { capacity: "1,000L", liters: 1000, price: "KSh 6,500", image: "/media/tank-d.jpg", description: "Compact storage for small homes, kiosks and rainwater harvesting." },
  { capacity: "2,000L", liters: 2000, price: "KSh 10,500", image: "/media/tank-c.jpg", description: "A reliable everyday tank for medium households and small shops." },
  { capacity: "3,000L", liters: 3000, price: "KSh 14,500", image: "/media/tank-a.jpg", description: "Extra headroom for larger families and light commercial use." },
  { capacity: "4,000L", liters: 4000, price: "KSh 18,500", image: "/media/tank-b.jpg", description: "Strong mid-range capacity for homes, farms and workshops." },
  { capacity: "5,000L", liters: 5000, price: "KSh 24,500", image: "/media/tank-c.jpg", description: "Our most popular size — the sweet spot for homes and businesses.", popular: true },
  { capacity: "6,000L", liters: 6000, price: "KSh 27,500", image: "/media/tank-d.jpg", description: "Serious storage for busy households, schools and clinics." },
  { capacity: "8,000L", liters: 8000, price: "KSh 32,500", image: "/media/tank-a.jpg", description: "High-capacity supply for institutions and small industry." },
  { capacity: "10,000L", liters: 10000, price: "KSh 45,500", image: "/media/tank-a.jpg", description: "Bulk storage engineered for commercial reliability." },
  { capacity: "16,000L", liters: 16000, price: "KSh 67,500", image: "/media/tank-b.jpg", description: "Industrial-scale water security for demanding operations." },
  { capacity: "20,000L", liters: 20000, price: "KSh 98,500", image: "/media/tank-b.jpg", description: "Large-volume storage for agriculture and manufacturing." },
  { capacity: "24,000L", liters: 24000, price: "KSh 135,000", image: "/media/tank-a.jpg", description: "Maximum capacity for the largest industrial and estate needs." },
];

export type Category = {
  icon: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  { icon: "Waves", title: "Residential Water Tanks", description: "Durable, UV-stable tanks for homes and rainwater harvesting." },
  { icon: "Factory", title: "Industrial Storage", description: "Heavy-duty tanks built to withstand tough industrial conditions." },
  { icon: "ArrowDownToLine", title: "Underground Tanks", description: "Discreet below-ground storage that saves space and stays cool." },
  { icon: "Container", title: "IBC Containers", description: "Stackable bulk containers for liquids, chemicals and transport." },
  { icon: "HardHat", title: "Construction Site Tanks", description: "Rugged, portable water supply for busy build sites." },
  { icon: "Cylinder", title: "HDPE Drums", description: "Food-grade drums for storage, brewing and bulk handling." },
];

export type Industry = {
  icon: string;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  { icon: "Home", title: "Residential", description: "Home storage and rainwater harvesting for reliable daily supply." },
  { icon: "Sprout", title: "Agriculture", description: "Irrigation and livestock watering that keeps farms running." },
  { icon: "Building2", title: "Commercial", description: "Hotels, schools and hospitals that can't afford to run dry." },
  { icon: "Factory", title: "Industrial", description: "Manufacturing and chemical storage at scale, built to last." },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Products" },
  { value: 25, suffix: "+", label: "Year Warranty" },
  { value: 25, suffix: "+", label: "Years Experience" },
];

export const features = [
  { icon: "Truck", title: "Fast Delivery", description: "Quick turnaround with delivery across major African cities." },
  { icon: "Wrench", title: "Installation Support", description: "Professional guidance and expert consultation, every step." },
  { icon: "ShieldCheck", title: "Warranty Protection", description: "Comprehensive warranty coverage on all of our products." },
  { icon: "BadgeCheck", title: "25+ Years Trusted", description: "A quarter-century of quality water storage across the region." },
];

export const aboutParagraphs = [
  "Rototank Stores has been delivering high-quality, industrial-grade water storage solutions across Africa for over 25 years. From a single home tank to bulk industrial storage, we build strength you can store on.",
  "Every tank is engineered from durable, UV-stabilised, food-grade material and backed by comprehensive warranty coverage. Our team supports you from selection through delivery and installation — with honest advice and no obligation.",
];

export const aboutHighlights = [
  "Over 25 years of industry experience",
  "Food-grade, UV-stabilised materials",
  "Comprehensive warranty on every tank",
  "Delivery & installation across the region",
];

export const faqs = [
  {
    q: "What tank sizes do you offer?",
    a: "We stock eleven sizes from 1,000L up to 24,000L, plus custom sizes on request — covering homes, farms, commercial properties and heavy industry.",
  },
  {
    q: "How much do your water tanks cost?",
    a: "Prices start at KSh 6,500 for the 1,000L tank and scale up to KSh 135,000 for the 24,000L. See the Products page for the full price list, and message us for bulk or trade pricing.",
  },
  {
    q: "Do you deliver and install?",
    a: "Yes. We offer fast delivery across major cities and provide professional installation support so your tank is set up correctly the first time.",
  },
  {
    q: "Is there a warranty?",
    a: "Every product carries comprehensive warranty coverage — up to 25 years on select tanks. We stand firmly behind the strength and durability of what we sell.",
  },
  {
    q: "What are the tanks made of?",
    a: "Our tanks are moulded from durable, UV-stabilised, food-grade polyethylene built to withstand harsh sun and demanding conditions for years.",
  },
  {
    q: "How do I place an order?",
    a: "Tap the WhatsApp button, call us on 0753 273 248, or send a request through the Contact page. We'll confirm availability, pricing and delivery straight away.",
  },
  {
    q: "Do you handle bulk and custom orders?",
    a: "Absolutely. We offer custom sizes and dedicated bulk-order consultations for contractors, institutions and industrial clients. Reach out with your requirements.",
  },
  {
    q: "Which industries do you serve?",
    a: "Residential, agriculture, commercial and industrial — from home rainwater harvesting to irrigation, hotels and schools, and large-scale manufacturing and chemical storage.",
  },
];
