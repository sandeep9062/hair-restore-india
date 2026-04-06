import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 gold-gradient text-primary-foreground px-6 py-4 rounded-full shadow-2xl shadow-primary/30 animate-pulse-gold hover:opacity-95 active:scale-95 transition-all duration-300 font-semibold text-sm border border-primary/40 hover:border-primary/60">
      <div className="relative">
        <MessageCircle className="w-5 h-5" />
        <div className="absolute -inset-1 bg-primary/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="hidden sm:inline group-hover:translate-x-1 transition-transform duration-300">
        Talk to Hair Expert — ₹199
      </span>
      <span className="sm:hidden group-hover:scale-105 transition-transform duration-300">
        ₹199
      </span>
      <div className="w-2 h-2 bg-white rounded-full animate-pulse ml-2" />
    </button>
  );
};

export default FloatingCTA;
