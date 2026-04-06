import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-card via-card to-surface">
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl -z-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={logo} alt="HairRestoreIndia" className="h-10 w-10" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-20" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-foreground">
                  HairRestore<span className="text-primary">India</span>
                </span>
                <p className="text-xs text-muted-foreground mt-1">
                  Your hair, your confidence
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              India's trusted platform for hair restoration consultations and
              treatments.
            </p>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              </div>
              <span className="text-xs text-muted-foreground">
                Secure • Verified • Trusted
              </span>
            </div>
          </div>

          {[
            {
              title: "For Patients",
              links: [
                "Find a Doctor",
                "Book Appointment",
                "Online Consultation",
                "Treatments",
              ],
            },
            {
              title: "For Clinics",
              links: [
                "Register Clinic",
                "Partner Program",
                "Verification Process",
                "Dashboard",
              ],
            },
            {
              title: "Support",
              links: [
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
                "Contact Us",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
                {col.title}
                <div className="w-1 h-1 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 group"
                    >
                      <span className="group-hover:text-primary transition-colors">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 HairRestoreIndia. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>Secure Payments</span>
              <span>24/7 Support</span>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
