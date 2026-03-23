import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-display text-lg font-semibold text-gradient-gold">CuteFinds</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Pinterest
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 CuteFinds. All rights reserved.
          </p>
        </div>

        <p className="text-xs text-muted-foreground/60 text-center mt-8 max-w-lg mx-auto">
          This site contains affiliate links. I may earn a small commission at no extra cost to you. Thank you for supporting! 💖
        </p>
      </div>
    </footer>
  );
};

export default Footer;
