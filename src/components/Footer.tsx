import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="HairRestoreIndia" className="h-8 w-8" />
              <span className="font-display text-lg font-semibold text-foreground">
                HairRestore<span className="text-primary">India</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India's trusted platform for hair restoration consultations and treatments.
            </p>
          </div>

          {[
            {
              title: "For Patients",
              links: ["Find a Doctor", "Book Appointment", "Online Consultation", "Treatments"],
            },
            {
              title: "For Clinics",
              links: ["Register Clinic", "Partner Program", "Verification Process", "Dashboard"],
            },
            {
              title: "Support",
              links: ["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 HairRestoreIndia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
