import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">About Me</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            The Vibe <span className="text-gradient-pink">Behind Ruru Finds</span> ✨
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I find things you didn't know you needed. I'm a 4th year at IIT Kharagpur, mixing fashion, art, and tech into one curated space. Every piece here passes my personal vibe check. No random picks, no overhyped clutter — just things that feel right. If you're here, you get the vibe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
