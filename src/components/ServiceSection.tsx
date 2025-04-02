
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Code, Palette, BarChart2, ShoppingCart, RefreshCcw } from "lucide-react";

const ServiceItem = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover-scale">
      <div className="bg-blue-dark/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <div className="text-blue-dark">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t("services_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("services_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceItem 
            title={t("services_web_dev")} 
            description={t("services_web_dev_desc")} 
            icon={<Code size={32} />}
          />
          <ServiceItem 
            title={t("services_ui_design")} 
            description={t("services_ui_design_desc")} 
            icon={<Palette size={32} />}
          />
          <ServiceItem 
            title={t("services_seo")} 
            description={t("services_seo_desc")} 
            icon={<BarChart2 size={32} />}
          />
          <ServiceItem 
            title={t("services_ecommerce")} 
            description={t("services_ecommerce_desc")} 
            icon={<ShoppingCart size={32} />}
          />
          <ServiceItem 
            title={t("services_maintenance")} 
            description={t("services_maintenance_desc")} 
            icon={<RefreshCcw size={32} />}
          />
          <div className="bg-gradient-to-br from-blue-dark to-blue-600 p-6 rounded-xl shadow-lg text-white hover-scale">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <div className="text-yellow-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{t("contact_title")}</h3>
            <p className="mb-4">{t("contact_subtitle")}</p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-yellow-accent text-blue-dark font-semibold py-2 px-4 rounded-lg mt-2 transition-transform hover:scale-105"
            >
              {t("hero_cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
