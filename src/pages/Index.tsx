import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import FaqSection from "@/components/FaqSection";
import CitiesSection from "@/components/CitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import FloatingPhone from "@/components/FloatingPhone";

const Index = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const handleBannerClose = () => {
    setBannerVisible(false);
    setBannerDismissed(true);
  };

  // Scroll to top on mount when banner is visible, ignoring URL hash
  useEffect(() => {
    if (bannerVisible) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="scroll-smooth">
      <PromoBanner visible={bannerVisible} onClose={handleBannerClose} />
      <Navbar />
      <HeroSection autoplay={!bannerVisible} />
      <AboutSection />
      <OfferSection />
      <GallerySection />
      <WhyUsSection />
      <FaqSection />
      <CitiesSection />
      <ContactSection />
      <Footer />
      <FloatingPhone />
    </main>
  );
};

export default Index;
