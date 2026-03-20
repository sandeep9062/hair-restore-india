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
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            What brings you here?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Select your concern and we'll match you with the right specialist
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} card-surface hover-lift p-6 flex flex-col items-center gap-3 text-center group cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
              </div>
              <span className="text-sm font-medium text-foreground">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
