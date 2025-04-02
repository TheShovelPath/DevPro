
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [animatedText, setAnimatedText] = useState("");
  const fullText = t("hero_title");
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-light-bg opacity-80 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-yellow-accent/10 blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-dark/10 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-text-slide">
            {animatedText}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            {t("hero_subtitle")}
          </p>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cta-button group">
            <span className="flex items-center">
              {t("hero_cta")}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          {/* Tech stack icons */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 opacity-70">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 md:h-10" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-8 md:h-10" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-8 md:h-10" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 md:h-10" />
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
