import { ShoppingCart, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Biotin Growth Serum",
    type: "Serum",
    price: "₹849",
    doctor: "Dr. Priya Sharma",
    tag: "Doctor Recommended",
  },
  {
    name: "Anti-Hair Fall Shampoo",
    type: "Shampoo",
    price: "₹599",
    doctor: "Dr. Rajesh Kapoor",
    tag: "Doctor Recommended",
  },
  {
    name: "Hair Growth Supplements",
    type: "Supplement",
    price: "₹1,299",
    doctor: null,
    tag: "Bestseller",
  },
  {
    name: "Scalp Nourish Oil",
    type: "Oil",
    price: "₹449",
    doctor: "Dr. Anita Desai",
    tag: "Doctor Recommended",
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-surface via-surface-elevated to-surface">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Recommended Products
            </h2>
            <p className="text-muted-foreground">
              Curated by our hair specialists
            </p>
          </div>
          <Button
            variant="ghost"
            className="animate-fade-up text-primary hidden sm:flex hover:bg-primary/10"
          >
            View all products →
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((prod, i) => (
            <div
              key={prod.name}
              className={`animate-scale-in stagger-${Math.min(i + 1, 5)} group relative overflow-hidden card-surface hover-lift transition-all duration-300 hover:border-border/60`}
            >
              {/* Product image with gradient overlay */}
              <div className="relative aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {prod.type[0]}
                  </div>
                </div>
                {/* Floating effect */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              </div>

              <div className="p-4 space-y-3">
                {prod.doctor ? (
                  <div className="flex items-center gap-2 text-xs text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <UserCheck className="w-3.5 h-3.5" />
                    <span className="truncate font-medium">{prod.doctor}</span>
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {prod.tag}
                  </span>
                )}

                <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                  {prod.name}
                </h3>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg font-bold text-foreground">
                    {prod.price}
                  </span>
                  <Button
                    variant="default"
                    size="icon"
                    className="h-10 w-10 rounded-lg group-hover:scale-105 transition-all duration-300 hover:bg-primary"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-accent/5 rounded-full blur-2xl -z-10" />
      </div>
    </section>
  );
};

export default ProductsSection;
