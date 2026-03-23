import CategoryTile from "./CategoryTile";
import { categories } from "@/data/products";

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto">
        <span className="text-xs font-medium uppercase tracking-widest text-gold mb-2 block">
          Browse by vibe
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
          Explore <span className="text-gradient-gold">Categories</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <CategoryTile key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
