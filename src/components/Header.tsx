
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-dark">Dev<span className="text-yellow-accent">Pro</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection("hero")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_home")}
          </a>
          <a onClick={() => scrollToSection("services")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_services")}
          </a>
          <a onClick={() => scrollToSection("portfolio")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_portfolio")}
          </a>
          <a onClick={() => scrollToSection("why")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_why")}
          </a>
          <a onClick={() => scrollToSection("faq")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_faq")}
          </a>
          <a onClick={() => scrollToSection("contact")} className="nav-link cursor-pointer hover:text-blue-dark font-medium transition-colors">
            {t("nav_contact")}
          </a>
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-blue-dark hover:bg-blue-800 text-white py-1 px-3 rounded-md text-sm font-medium transition-colors"
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="mr-4 bg-blue-dark hover:bg-blue-800 text-white py-1 px-3 rounded-md text-sm font-medium transition-colors"
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={toggleMenu}
            className="text-blue-dark focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a onClick={() => scrollToSection("hero")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_home")}</a>
            <a onClick={() => scrollToSection("services")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_services")}</a>
            <a onClick={() => scrollToSection("portfolio")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_portfolio")}</a>
            <a onClick={() => scrollToSection("why")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_why")}</a>
            <a onClick={() => scrollToSection("faq")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_faq")}</a>
            <a onClick={() => scrollToSection("contact")} className="nav-link font-medium cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">{t("nav_contact")}</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
