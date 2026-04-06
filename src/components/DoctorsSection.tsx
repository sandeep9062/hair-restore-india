import { Star, Video, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Trichologist",
    experience: "14 yrs exp",
    rating: 4.9,
    reviews: 342,
    fee: "₹499",
    available: true,
    initials: "PS",
  },
  {
    name: "Dr. Rajesh Kapoor",
    specialty: "Hair Transplant Surgeon",
    experience: "18 yrs exp",
    rating: 4.8,
    reviews: 518,
    fee: "₹699",
    available: true,
    initials: "RK",
  },
  {
    name: "Dr. Anita Desai",
    specialty: "Dermatologist",
    experience: "11 yrs exp",
    rating: 4.7,
    reviews: 276,
    fee: "₹399",
    available: false,
    initials: "AD",
  },
];

const DoctorsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Consult Online
            </h2>
            <p className="text-muted-foreground">
              Top-rated hair specialists available now
            </p>
          </div>
          <Button
            variant="ghost"
            className="animate-fade-up text-primary hidden sm:flex hover:bg-primary/10"
          >
            View all doctors →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} group relative overflow-hidden card-surface hover-lift p-6 space-y-4 transition-all duration-300 hover:border-border/60`}
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                  {doc.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-lg truncate group-hover:text-primary transition-colors">
                      {doc.name}
                    </h3>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {doc.specialty}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {doc.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <Star className="w-4 h-4 text-primary/50 fill-primary/50" />
                  </div>
                  <span className="font-semibold text-foreground">
                    {doc.rating}
                  </span>
                  <span className="text-muted-foreground">({doc.reviews})</span>
                </div>
                <div
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    doc.available
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-muted text-muted-foreground border border-border/50"
                  }`}
                >
                  {doc.available ? (
                    <span className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Available Now
                    </span>
                  ) : (
                    "Next slot 2pm"
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex gap-1.5 text-muted-foreground">
                  <Video className="w-4 h-4" />
                  <MessageSquare className="w-4 h-4" />
                  <Phone className="w-4 h-4" />
                </div>
                <span className="ml-auto text-xl font-bold text-foreground">
                  {doc.fee}
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="accent"
                  className="flex-1 group-hover:bg-accent/90 transition-colors"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/50 hover:border-primary/40"
                >
                  View Profile
                </Button>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
