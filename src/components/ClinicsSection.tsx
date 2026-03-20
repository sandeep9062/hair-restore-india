import { MapPin, Star, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clinics = [
  {
    name: "Advanced Hair Studio",
    location: "Andheri West, Mumbai",
    rating: 4.8,
    reviews: 214,
    treatments: ["Hair Transplant", "PRP", "GFC"],
    nextSlot: "Today, 3:00 PM",
    fee: "₹300",
  },
  {
    name: "Kaya Hair Clinic",
    location: "Koramangala, Bangalore",
    rating: 4.6,
    reviews: 187,
    treatments: ["Scalp Analysis", "PRP"],
    nextSlot: "Tomorrow, 10:00 AM",
    fee: "₹500",
  },
  {
    name: "Richfeel Trichology",
    location: "Connaught Place, Delhi",
    rating: 4.9,
    reviews: 356,
    treatments: ["Hair Transplant", "Mesotherapy", "PRP"],
    nextSlot: "Today, 5:30 PM",
    fee: "₹400",
  },
];

const ClinicsSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Visit a Clinic Near You
            </h2>
            <p className="text-muted-foreground">Verified clinics with transparent pricing</p>
          </div>
          <Button variant="ghost" className="animate-fade-up text-primary hidden sm:flex">
            View all clinics →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic, i) => (
            <div
              key={clinic.name}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} card-surface hover-lift p-6 space-y-4`}
            >
              <div>
                <h3 className="font-semibold text-lg text-foreground">{clinic.name}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {clinic.location}
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-semibold text-foreground">{clinic.rating}</span>
                  <span className="text-muted-foreground">({clinic.reviews})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {clinic.treatments.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {clinic.nextSlot}
                </div>
                <span className="font-bold text-foreground">{clinic.fee}</span>
              </div>

              <Button variant="default" className="w-full">
                Book Slot
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;
