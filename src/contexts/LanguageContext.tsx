
import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "../utils/translations";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultValue: LanguageContextType = {
  language: "fr",
  setLanguage: () => {},
  t: () => "",
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("fr");

  const t = (key: string): string => {
    if (!translations[language]) return key;
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
