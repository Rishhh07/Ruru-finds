import { Link } from "react-router-dom";
import type { Category } from "@/data/products";

interface CategoryTileProps {
  category: Category;
  index?: number;
}

const CategoryTile = ({ category, index = 0 }: CategoryTileProps) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative rounded-xl overflow-hidden aspect-[4/5] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 border border-border rounded-xl group-hover:border-primary/50 transition-colors duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
        <span className="text-2xl">{category.emoji}</span>
        <h3 className="font-display text-lg font-semibold text-foreground">{category.name}</h3>
        <p className="text-xs text-muted-foreground">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryTile;
