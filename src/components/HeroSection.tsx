import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield } from "lucide-react";
import heroImg from "@/assets/hero-hair.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hair restoration treatment"
          className="w-full h-full object-cover transition-transform duration-3000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        {/* Subtle animated pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.1),transparent_50%)]" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl space-y-8">
          {/* Trust badge with better styling */}
          <div className="animate-slide-in inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-xs text-muted-foreground shadow-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <Shield className="w-4 h-4 text-primary" />
            <span>Trusted by 50,000+ patients across India</span>
          </div>

          <h1 className="animate-fade-up stagger-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-balance text-foreground">
            Restore Your Hair,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Restore Your Confidence
            </span>
          </h1>

          <p className="animate-fade-up stagger-2 text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Connect with India's top hair specialists for personalized
            treatments — from PRP therapy to advanced transplants.
          </p>

          <div className="animate-fade-up stagger-3 flex flex-wrap items-center gap-4">
            <Button variant="gold" size="lg" className="group">
              Book Free Assessment
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/60"
            >
              Browse Treatments
            </Button>
          </div>

          {/* Enhanced stats row with better visual hierarchy */}
          <div className="animate-fade-up stagger-4 flex items-center gap-8 pt-6">
            {[
              { value: "200+", label: "Expert Doctors", icon: "👨‍⚕️" },
              { value: "85+", label: "Partner Clinics", icon: "🏥" },
              { value: "4.8", label: "Avg Rating", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-3xl" aria-hidden="true">
                    {stat.icon}
                  </span>
                  <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Social proof badges */}
          <div className="animate-fade-up stagger-5 flex items-center gap-6 pt-4 opacity-80">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Verified Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Secure Consultations</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Floating elements for depth */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-10 hidden lg:block">
          <div className="w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
