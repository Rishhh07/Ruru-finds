import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const products = slug ? getProductsByCategory(slug) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Category not found</p>
          <Link to="/" className="text-primary hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.emoji}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold">{category.name}</h1>
          </div>
          <p className="text-muted-foreground max-w-md">{category.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="container mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-20">
              Products coming soon! ✨
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
