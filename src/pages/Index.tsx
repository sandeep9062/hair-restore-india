import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import DoctorsSection from "@/components/DoctorsSection";
import ClinicsSection from "@/components/ClinicsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <DoctorsSection />
      <ClinicsSection />
      <TreatmentsSection />
      <ProductsSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
