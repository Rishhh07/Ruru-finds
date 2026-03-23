import { Heart, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">About Me</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Hey, I'm Your <span className="text-gradient-pink">Shopping Bestie</span> 💕
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I spend hours scrolling, testing, and curating so you don't have to.
            Every product you see here is something I've personally bought, tried, and genuinely loved.
            No random recommendations — only real finds that made me say "everyone needs this!"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            {[
              "Personally tested",
              "Honest reviews",
              "Budget-friendly",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
