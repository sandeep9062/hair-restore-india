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
            <p className="text-muted-foreground">Top-rated hair specialists available now</p>
          </div>
          <Button variant="ghost" className="animate-fade-up text-primary hidden sm:flex">
            View all doctors →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} card-surface hover-lift p-6 space-y-4`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                  {doc.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground">{doc.specialty}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{doc.experience}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-semibold text-foreground">{doc.rating}</span>
                  <span className="text-muted-foreground">({doc.reviews})</span>
                </div>
                <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${doc.available ? "bg-emerald-500/15 text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                  {doc.available ? "Available" : "Next slot 2pm"}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Video className="w-4 h-4 text-muted-foreground" />
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="ml-auto text-lg font-bold text-foreground">{doc.fee}</span>
              </div>

              <Button variant="accent" className="w-full">
                Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
