import { useState } from "react";
import { MapPin, Search, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useState("Mumbai");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="HairRestoreIndia" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground hidden sm:block">
            HairRestore<span className="text-primary">India</span>
          </span>
        </a>

        {/* Center: Location + Search (desktop) */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-8">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg bg-secondary">
            <MapPin className="w-4 h-4 text-primary" />
            {location}
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search doctors, clinics, treatments..."
              className="w-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground rounded-lg pl-10 pr-4 py-2.5 border-none outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="accent" size="sm">
            <Phone className="w-3.5 h-3.5" />
            Online Consultation
          </Button>
          <Button variant="gold" size="sm">
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search..."
              className="w-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground rounded-lg pl-10 pr-4 py-2.5 border-none outline-none"
            />
          </div>
          <Button variant="accent" className="w-full" size="sm">
            <Phone className="w-3.5 h-3.5" />
            Online Consultation
          </Button>
          <Button variant="gold" className="w-full" size="sm">
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
