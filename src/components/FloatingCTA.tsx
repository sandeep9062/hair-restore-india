import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 gold-gradient text-primary-foreground px-5 py-3.5 rounded-full shadow-2xl shadow-primary/30 animate-pulse-gold hover:opacity-90 active:scale-95 transition-all duration-200 font-semibold text-sm">
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Talk to Hair Expert — ₹199</span>
      <span className="sm:hidden">₹199</span>
    </button>
  );
};

export default FloatingCTA;
