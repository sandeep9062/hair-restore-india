import { useState } from "react";
import { MapPin, Search, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useState("Mumbai");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logo} alt="HairRestoreIndia" className="h-10 w-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground hidden sm:block group-hover:text-primary transition-colors">
            HairRestore<span className="text-primary">India</span>
          </span>
        </a>

        {/* Center: Location + Search (desktop) */}
        <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 group">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">{location}</span>
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search doctors, clinics, treatments..."
              className="w-full bg-secondary/50 text-sm text-foreground placeholder:text-muted-foreground rounded-lg pl-12 pr-4 py-2.5 border border-border/50 focus:border-primary/40 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="accent"
            size="sm"
            className="group hover:bg-accent/90 transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
            Online Consultation
          </Button>
          <Button
            variant="gold"
            size="sm"
            className="group hover:scale-105 transition-transform duration-300"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/60 px-4 py-4 space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              {location}
            </span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search doctors, clinics, treatments..."
              className="w-full bg-secondary/50 text-sm text-foreground placeholder:text-muted-foreground rounded-lg pl-10 pr-4 py-3 border border-border/50 outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="accent" className="w-full" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Online Consultation
            </Button>
            <Button variant="gold" className="w-full" size="sm">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
