
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Monitor, Clock, Headphones, DollarSign } from "lucide-react";

const WhyItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-scale">
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <div className="text-blue-dark">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t("why_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("why_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyItem 
            icon={<Monitor size={32} />}
            title={t("why_responsive")}
            description={t("why_responsive_desc")}
          />
          <WhyItem 
            icon={<Clock size={32} />}
            title={t("why_deadlines")}
            description={t("why_deadlines_desc")}
          />
          <WhyItem 
            icon={<Headphones size={32} />}
            title={t("why_support")}
            description={t("why_support_desc")}
          />
          <WhyItem 
            icon={<DollarSign size={32} />}
            title={t("why_pricing")}
            description={t("why_pricing_desc")}
          />
        </div>

        {/* Stats counter section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-blue-dark text-white rounded-xl p-8 shadow-xl">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-yellow-accent">150+</div>
            <div className="text-sm opacity-80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-yellow-accent">99%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-yellow-accent">12+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-yellow-accent">24/7</div>
            <div className="text-sm opacity-80">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
