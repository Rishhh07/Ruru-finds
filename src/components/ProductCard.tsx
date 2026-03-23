import { ExternalLink, Heart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <div
      className="group relative bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
          aria-label="Save for later"
        >
          <Heart className="w-4 h-4 text-primary" />
        </button>

        {product.trending && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
            🔥 Trending
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-display text-sm font-medium text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {product.caption}
        </p>
        <div className="flex items-center justify-between pt-1">
          {product.price && (
            <span className="text-sm font-semibold text-gradient-gold">{product.price}</span>
          )}
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:glow-pink hover:scale-105"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            Shop Now
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
