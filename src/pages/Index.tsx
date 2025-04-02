
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhySection from "@/components/WhySection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-light-bg">
        <Header />
        <HeroSection />
        <ServiceSection />
        <PortfolioSection />
        <WhySection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
