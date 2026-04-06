import { Droplets, Scissors, Pill, Microscope, Leaf, Zap } from "lucide-react";

const categories = [
  { icon: Droplets, label: "Hair Fall", color: "text-red-400" },
  { icon: Scissors, label: "Hair Transplant", color: "text-primary" },
  { icon: Pill, label: "Alopecia", color: "text-blue-400" },
  { icon: Microscope, label: "Scalp Analysis", color: "text-emerald-400" },
  { icon: Leaf, label: "Natural Therapy", color: "text-green-400" },
  { icon: Zap, label: "PRP / GFC", color: "text-amber-400" },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-surface via-surface-elevated to-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            What brings you here?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Select your concern and we'll match you with the right specialist
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className={`animate-scale-in stagger-${Math.min(i + 1, 5)} group relative overflow-hidden card-surface hover-lift p-6 flex flex-col items-center gap-4 text-center cursor-pointer transition-all duration-300 hover:border-border/60`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative w-16 h-16 rounded-2xl bg-secondary/80 border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <cat.icon className={`w-7 h-7 ${cat.color} drop-shadow-sm`} />
              </div>

              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cat.label}
              </span>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl -z-10" />
      </div>
    </section>
  );
};

export default CategorySection;
