import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-gold transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-display text-xl font-semibold text-gradient-gold">
            Ruru Finds
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Home
          </Link>
          <a href="#categories" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Categories
          </a>
          <a href="#trending" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Trending
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            About Me
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-secondary transition-colors duration-300" aria-label="Search">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in-up">
          <div className="container mx-auto flex flex-col gap-4 py-6">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Home</Link>
            <a href="#categories" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Categories</a>
            <a href="#trending" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">Trending</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">About Me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
