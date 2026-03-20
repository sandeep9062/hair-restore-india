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
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Recommended Products
            </h2>
            <p className="text-muted-foreground">Curated by our hair specialists</p>
          </div>
          <Button variant="ghost" className="animate-fade-up text-primary hidden sm:flex">
            View all products →
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((prod, i) => (
            <div
              key={prod.name}
              className={`animate-fade-up stagger-${Math.min(i + 1, 5)} card-surface hover-lift overflow-hidden`}
            >
              {/* Placeholder product image area */}
              <div className="aspect-square bg-secondary flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-muted-foreground/30">
                  {prod.type[0]}
                </span>
              </div>

              <div className="p-4 space-y-3">
                {prod.doctor ? (
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    <UserCheck className="w-3 h-3" />
                    <span className="truncate">{prod.doctor}</span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-primary">{prod.tag}</span>
                )}

                <h3 className="font-semibold text-sm text-foreground leading-snug">{prod.name}</h3>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{prod.price}</span>
                  <Button variant="default" size="icon" className="h-8 w-8 rounded-lg">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
