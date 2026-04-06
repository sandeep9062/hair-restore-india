import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    title: "PRP Therapy",
    description:
      "Platelet-Rich Plasma injections stimulate hair follicles using your own blood cells for natural regrowth.",
    price: "From ₹4,500/session",
    tag: "Most Popular",
  },
  {
    title: "GFC Treatment",
    description:
      "Growth Factor Concentrate — a next-gen alternative to PRP with higher growth factor concentration.",
    price: "From ₹6,000/session",
    tag: "Advanced",
  },
  {
    title: "Hair Transplant",
    description:
      "FUE & FUT techniques for permanent hair restoration. Natural-looking results with minimal downtime.",
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
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} group relative overflow-hidden card-surface hover-lift transition-all duration-300 hover:border-border/60`}
            >
              {/* Decorative gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Subtle pattern overlay */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tx.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Hair Restoration
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-semibold border border-primary/30">
                    {tx.tag}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tx.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-lg font-bold text-foreground">
                    {tx.price}
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs text-muted-foreground">
                      Starting at
                    </span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:border-primary/40 transition-all duration-300 hover:bg-primary/5"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="gold"
                    size="sm"
                    className="group-hover:scale-105 transition-transform duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full blur-xl -z-10" />
      </div>
    </section>
  );
};

export default TreatmentsSection;
