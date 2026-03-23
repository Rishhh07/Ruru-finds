import ProductCard from "./ProductCard";
import { getTrendingProducts } from "@/data/products";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  const trending = getTrendingProducts();

  return (
    <section id="trending" className="py-20">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Hot right now</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          You <span className="text-gradient-pink">NEED</span> This 😍
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md">
          The viral picks everyone's adding to their cart. Don't miss out!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trending.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
