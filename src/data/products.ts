export interface Product {
  id: string;
  name: string;
  caption: string;
  price?: string;
  image: string;
  affiliateLink: string;
  category: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Bodycon Dresses",
    slug: "bodycon-dresses",
    emoji: "👗",
    description: "Slay every occasion with figure-hugging perfection",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
  },
  {
    id: "2",
    name: "Summer Tops",
    slug: "summer-tops",
    emoji: "🌸",
    description: "Breezy, cute, and effortlessly chic",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    emoji: "✨",
    description: "The finishing touches that make the look",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
  },
  {
    id: "4",
    name: "Daily Essentials",
    slug: "daily-essentials",
    emoji: "💖",
    description: "Everyday must-haves you'll reach for on repeat",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Open Back Slip Dress - Green",
    caption: "Obsessed with this one 🖤 Fits like a dream and the satin feel is *chef's kiss*",
    price: "₹1690",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
    affiliateLink: "#",
    category: "bodycon-dresses",
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "Red Bodycon Dress",
    caption: "Date night sorted 💕 So flattering on every body type!",
    price: "₹1100",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80",
    affiliateLink: "#",
    category: "bodycon-dresses",
    featured: true,
  },
  {
    id: "3",
    name: "Black Crop Top",
    caption: "The cutest summer top ever 🌺 Pairs with literally everything",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80",
    affiliateLink: "#",
    category: "summer-tops",
    trending: true,
  },
  {
    id: "4",
    name: "Open back halter neck bodysuit - Brown",
    caption: "Basic but make it fashion ✨ The quality is unreal for the price",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec515c7?w=400&q=80",
    affiliateLink: "#",
    category: "summer-tops",
  },
  {
    id: "5",
    name: "Flower Clothing Adjuster",
    caption: "Adjust your clothes your way 💛 !",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    affiliateLink: "#",
    category: "accessories",
    featured: true,
    trending: true,
  },
  {
    id: "6",
    name: "Halloween Animal Hair Clip",
    caption: "Instant hair glow-up 🤍 So Pinterest-worthy",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80",
    affiliateLink: "#",
    category: "accessories",
  },
  {
    id: "7",
    name: "Lace Trimmed Freedom Bra",
    caption: "Perfect to spice things up 👑 ",
    price: "₹390",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&q=80",
    affiliateLink: "#",
    category: "daily-essentials",
    trending: true,
  },
  {
    id: "8",
    name: "Twist A-Line Skirt",
    caption: "Be 'That Girl' effortlesly ",
    price: "₹790",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    affiliateLink: "#",
    category: "summer-tops",
  },
];

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const getTrendingProducts = () =>
  products.filter((p) => p.trending);
