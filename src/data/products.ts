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
    name: "Dresses",
    slug: "dresses",
    emoji: "👗",
    description: "From casual to glam — dress up for every moment",
    image: "https://i.ibb.co/fdQTK85m/Screenshot-2026-05-10-195921.png",
  },
  {
    id: "2",
    name: "Tops",
    slug: "tops",
    emoji: "👚",
    description: "Cute tops for every vibe and occasion",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/shirt/w/d/4/s-line-shirt-1-swaggish-original-imahcy4chmvf6zbu.jpeg?q=90",
  },
  {
    id: "3",
    name: "Kurtis",
    slug: "kurtis",
    emoji: "🪷",
    description: "Elegant and comfy ethnic wear for every day",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/kurta/e/m/g/3xl-kurta-106789-jsimar-original-imahfr2gd4n9by3z.jpeg?q=90",
  },
  {
    id: "4",
    name: "Bottoms",
    slug: "bottoms",
    emoji: "👖",
    description: "Jeans, skirts, trousers — bottom half sorted!",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/jean/9/l/a/24-1011-shrutika-original-imahkvh3nxwj9bza.jpeg?q=90",
  },
  {
    id: "5",
    name: "Co-ords",
    slug: "co-ords",
    emoji: "🤍",
    description: "Matching sets that make getting dressed effortless",
    image: "https://i.ibb.co/j9DW8N4n/Screenshot-2026-05-10-202907.png",
  },
  {
    id: "6",
    name: "Accessories",
    slug: "accessories",
    emoji: "✨",
    description: "Bags, hair clips, jewellery & everything extra",
    image: "https://i.ibb.co/dnfbKWf/Screenshot-2026-05-11-135143.png",
  },
  {
    id: "7",
    name: "Home Decor",
    slug: "home-decor",
    emoji: "🏠",
    description: "Aesthetic finds to make your space *chef's kiss*",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/table-lamp/a/e/j/sunset-lamp-projection-lamp-night-lamp-night-light-sunset-original-imahh2gnytymthfn.jpeg?q=90",
  },
];

export const products: Product[] = [
  // DRESSES
  {
    id: "1",
    name: "Vishudh Ethnic Motifs Printed Tiered Maxi Ethnic Dress",
    caption: "77% off and it looks THIS good?! Your ethnic wardrobe needs this 🌸",
    price: "₹781",
    image: "https://i.ibb.co/fdQTK85m/Screenshot-2026-05-10-195921.png",
    affiliateLink: "https://myntr.it/S5c4gUS",
    category: "dresses",
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "StyleCast Off-Shoulder Bodycon Maxi Dress",
    caption: "67% off on THIS?! Bodycon dreams come true 🖤",
    price: "₹956",
    image: "https://i.ibb.co/6R0409zW/Screenshot-2026-05-10-203507.png",
    affiliateLink: "https://myntr.it/VKaYQ5C",
    category: "dresses",
    featured: true,
    trending: true,
  },
  {
    id: "3",
    name: "Tokyo Talkies Black & Red Floral Layered Maxi Dress",
    caption: "74% off and absolutely stunning 🌺 Floral era unlocked!",
    price: "₹675",
    image: "https://i.ibb.co/yn5cYX8y/Screenshot-2026-05-10-204254.png",
    affiliateLink: "https://myntr.it/rOfXQKz",
    category: "dresses",
    featured: true,
    trending: false,
  },
  {
    id: "4",
    name: "LEIA Women Fit & Flare Dress",
    caption: "76% off and twirl-worthy 💃 The perfect flare dress!",
    price: "₹359",
    image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260106/7i0b/695d16c4cbfa0d560851d4b9/-473Wx593H-702720736-wine-MODEL.jpg",
    affiliateLink: "https://ajiio.in/4xRWvbn",
    category: "dresses",
    trending: true,
  },
  {
    id: "5",
    name: "CAJUNI Women Bodycon Multicolor Midi Dress",
    caption: "79% off on this gorgeous midi? Add to cart immediately 🛒",
    price: "₹492",
    image: "https://rukminim2.flixcart.com/image/1860/1860/xif0q/dress/8/1/7/m-cj-cream-venila-cajuni-original-imahm9kgyzgxfh6t.jpeg?q=90",
    affiliateLink: "https://fktr.in/fwWQmIO",
    category: "dresses",
    featured: false,
  },
  // TOPS
  {
    id: "6",
    name: "Istyle Can Women Maroon Cowl Neck Crepe Regular Top",
    caption: "80% off?! This cowl neck top is everything 😍",
    price: "₹196",
    image: "https://i.ibb.co/F4sP3Nwt/Screenshot-2026-05-10-204631.png",
    affiliateLink: "https://myntr.it/o08loSD",
    category: "tops",
    featured: true,
    trending: true,
  },
  {
    id: "7",
    name: "Istyle Can Bell Sleeve Net Crop Top",
    caption: "Bell sleeves are back and this one is perfection 🤍",
    price: "₹237",
    image: "https://i.ibb.co/ZpDMJCJt/Screenshot-2026-05-10-204856.png",
    affiliateLink: "https://myntr.it/0c0WOWg",
    category: "tops",
    trending: true,
  },
  {
    id: "8",
    name: "BNS Women Regular Fit Striped Spread Collar Casual Shirt",
    caption: "86% off on a shirt this clean?! Casual cool unlocked 😎",
    price: "₹304",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/shirt/w/d/4/s-line-shirt-1-swaggish-original-imahcy4chmvf6zbu.jpeg?q=90",
    affiliateLink: "https://fktr.in/jAye5Gb",
    category: "tops",
    featured: false,
  },
  // KURTIS
  {
    id: "9",
    name: "Fyunl Women Printed Viscose Rayon Straight Kurta",
    caption: "77% off on this beauty 🪷 Ethnic done right!",
    price: "₹298",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/kurta/e/m/g/3xl-kurta-106789-jsimar-original-imahfr2gd4n9by3z.jpeg?q=90",
    affiliateLink: "https://fktr.in/bvS1Hio",
    category: "kurtis",
    featured: true,
    trending: true,
  },
  // BOTTOMS
  {
    id: "10",
    name: "Shrutika Women Regular High Rise Black Jeans",
    caption: "80% off on high rise jeans?! Your wardrobe called 🖤",
    price: "₹494",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/jean/9/l/a/24-1011-shrutika-original-imahkvh3nxwj9bza.jpeg?q=90",
    affiliateLink: "https://fktr.in/0dxrzUw",
    category: "bottoms",
    featured: false,
    trending: false,
  },
  {
    id: "11",
    name: "Bene Kleed Women Straight Fit Mid Rise Black Jeans",
    caption: "Straight fit, mid rise, and 72% off 😭 Grab these NOW!",
    price: "₹840",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/jean/1/z/r/28-bowdt138il52-663a-a305-bene-kleed-original-imah6wg8w3xfmfyz.jpeg?q=90",
    affiliateLink: "https://fktr.in/9LoN4J2",
    category: "bottoms",
    trending: true,
  },
  // CO-ORDS
  {
    id: "12",
    name: "SZN Round Neck Top & Trousers Co-Ords",
    caption: "Matching sets that just *get* you 🤍 Effortlessly put together in seconds!",
    price: "₹845",
    image: "https://i.ibb.co/j9DW8N4n/Screenshot-2026-05-10-202907.png",
    affiliateLink: "https://myntr.it/iPzK4A1",
    category: "co-ords",
    featured: true,
    trending: true,
  },
  // ACCESSORIES
  {
    id: "13",
    name: "Bagvillaa Printed Shoulder Bag With Applique",
    caption: "52% off and so Pinterest-worthy 🎀 Your next fav bag!",
    price: "₹334",
    image: "https://i.ibb.co/dnfbKWf/Screenshot-2026-05-11-135143.png",
    affiliateLink: "https://myntr.it/jPt082K",
    category: "accessories",
    featured: true,
    trending: false,
  },
  {
    id: "14",
    name: "RUBICORN Women Black Tote Bag",
    caption: "77% off on a tote this sleek 🖤 Office to outing sorted!",
    price: "₹226",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/hand-messenger-bag/v/2/u/office-use-black-flap-tote-bag-15-198-tote-rubicorn-10-original-imahkzzsapmehgzx.jpeg?q=90",
    affiliateLink: "https://fktr.in/FIErqYM",
    category: "accessories",
    trending: false,
  },
  {
    id: "15",
    name: "DECENT BAG Women Beige Tote",
    caption: "88% off?! This beige tote is giving everything 🤍",
    price: "₹159",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/hand-messenger-bag/p/u/i/women-white-tote-16-pocket0tote-tote-decent-bag-16-original-imah36b2nhrcrghh.jpeg?q=90",
    affiliateLink: "https://fktr.in/d2KVE2L",
    category: "accessories",
    featured: false,
  },
  // HOME DECOR
  {
    id: "16",
    name: "Wisdom Residential Window Film White",
    caption: "Frosted privacy + aesthetic vibes = yes please 🏠",
    price: "₹288",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/window-film/s/v/y/24x96-inches-frosted-window-privacy-film-decorative-non-adhesive-original-imagrzgafjsz5bcn.jpeg?q=90",
    affiliateLink: "https://fktr.in/10yyawj",
    category: "home-decor",
    trending: false,
  },
  {
    id: "17",
    name: "ECOO Sunset Lamp Projection Night Light",
    caption: "Your room will never look the same 🌅 So dreamy!",
    price: "₹254",
    image: "https://rukminim2.flixcart.com/image/1488/1488/xif0q/table-lamp/a/e/j/sunset-lamp-projection-lamp-night-lamp-night-light-sunset-original-imahh2gnytymthfn.jpeg?q=90",
    affiliateLink: "https://fktr.in/sa7jJWr",
    category: "home-decor",
    featured: true,
    trending: true,
  },
  {
    id: "18",
    name: "Soveris Cute Panda Silicone Night Light Table Lamp",
    caption: "The cutest lamp to ever exist 🐼 Room goals unlocked!",
    price: "₹357",
    image: "https://rukminim2.flixcart.com/image/1860/1860/xif0q/shopsy-table-lamp/p/x/n/cute-panda-night-light-for-kids-nursery-silicone-night-light-7-original-imah6wj7pb7axfhz.jpeg?q=90",
    affiliateLink: "https://fktr.in/QYNrk1L",
    category: "home-decor",
    featured: false,
  },
  {
    id: "19",
    name: "Omita Red Aesthetic Vintage Girl Stickers (Pack of 45)",
    caption: "82% off on the most aesthetic sticker pack 🎨 Journal girls, this is for you!",
    price: "₹141",
    image: "https://rukminim2.flixcart.com/image/1860/1860/xif0q/sticker/t/f/r/small-red-aesthetic-vintage-girl-stickers-for-laptop-journal-and-original-imahgtaax9aj5wmq.jpeg?q=90",
    affiliateLink: "https://fktr.in/npmeYgH",
    category: "home-decor",
    trending: true,
  },
  {
    id: "20",
    name: "MJ PrintLab Pretty Pink Vibes Stickers",
    caption: "Pink aesthetic stickers that go on everything 🩷 So cute!",
    price: "₹183",
    image: "https://rukminim2.flixcart.com/image/1860/1860/xif0q/sticker/h/d/l/medium-pretty-pink-vibes-stickers-laptop-mobile-bottle-cute-girl-original-imahgran8pkqnqpa.jpeg?q=90",
    affiliateLink: "https://fktr.in/Veer0Fn",
    category: "home-decor",
    featured: false,
  },
];

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const getTrendingProducts = () =>
  products.filter((p) => p.trending);
