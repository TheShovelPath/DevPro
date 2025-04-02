
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  viewText: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, category, viewText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden aspect-video cursor-pointer bg-blue-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'scale-110 opacity-30' : 'opacity-80'}`}
      />
      
      <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div>
          <span className="inline-block px-3 py-1 bg-yellow-accent text-blue-dark rounded-full text-sm font-medium mb-2">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center space-x-1 bg-white text-blue-dark font-medium px-3 py-2 rounded-lg hover:bg-yellow-accent transition-colors">
            <span>{viewText}</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "E-commerce Platform",
      category: "Next.js + Shopify",
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Corporate Website",
      category: "React + Tailwind",
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "SaaS Dashboard",
      category: "TypeScript + React",
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Mobile App",
      category: "React Native",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("portfolio_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("portfolio_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              viewText={t("portfolio_view")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
