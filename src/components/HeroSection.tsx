import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield } from "lucide-react";
import heroImg from "@/assets/hero-hair.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl space-y-8">
          {/* Trust badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-secondary/60 backdrop-blur-sm border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5 text-primary" />
            Trusted by 50,000+ patients across India
          </div>

          <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-balance text-foreground">
            Restore Your Hair,{" "}
            <span className="text-primary">Restore Your Confidence</span>
          </h1>

          <p className="animate-fade-up stagger-2 text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Connect with India's top hair specialists for personalized treatments — from PRP therapy to advanced transplants.
          </p>

          <div className="animate-fade-up stagger-3 flex flex-wrap items-center gap-4">
            <Button variant="gold" size="lg">
              Book Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Treatments
            </Button>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up stagger-4 flex items-center gap-8 pt-4">
            {[
              { value: "200+", label: "Expert Doctors" },
              { value: "85+", label: "Partner Clinics" },
              { value: "4.8", label: "Avg Rating", icon: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  {stat.icon && <Star className="w-4 h-4 text-primary fill-primary" />}
                </div>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
