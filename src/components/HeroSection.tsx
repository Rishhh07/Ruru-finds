import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Elegant lifestyle flatlay"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating decorations */}
      <div className="absolute top-1/4 left-10 floating-icon text-gold opacity-40">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-1/3 right-12 floating-icon-delayed text-primary opacity-30">
        <Sparkles className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-8">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up">
          Cute Finds You'll
          <br />
          <span className="text-gradient-pink">Obsess Over</span> ✨
        </h1>
        <p
          className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          Personally picked, tested & loved. Discover my favorite fashion, accessories & daily essentials.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            Shop My Picks
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#trending"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-border rounded-full text-foreground font-medium transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Trending Now 🔥
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
