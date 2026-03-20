import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    title: "PRP Therapy",
    description: "Platelet-Rich Plasma injections stimulate hair follicles using your own blood cells for natural regrowth.",
    price: "From ₹4,500/session",
    tag: "Most Popular",
  },
  {
    title: "GFC Treatment",
    description: "Growth Factor Concentrate — a next-gen alternative to PRP with higher growth factor concentration.",
    price: "From ₹6,000/session",
    tag: "Advanced",
  },
  {
    title: "Hair Transplant",
    description: "FUE & FUT techniques for permanent hair restoration. Natural-looking results with minimal downtime.",
    price: "From ₹35,000",
    tag: "Permanent Solution",
  },
];

const TreatmentsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Treatments That Work
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Clinically proven procedures tailored to your hair loss stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((tx, i) => (
            <div
              key={tx.title}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} group relative card-surface hover-lift overflow-hidden`}
            >
              {/* Top accent line */}
              <div className="h-1 gold-gradient" />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-foreground">{tx.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {tx.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tx.description}</p>
                <p className="text-lg font-bold text-foreground">{tx.price}</p>
                <Button variant="outline" className="w-full group-hover:border-primary/40 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
