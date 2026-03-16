import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import PricingSection from "@/components/portfolio/PricingSection";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div id="pricing-page" className="min-h-screen bg-background">
      <Navbar />
      <PricingSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
