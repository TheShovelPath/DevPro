
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleOpen}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-xl font-medium text-blue-dark">{question}</h3>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
    { question: t("faq_q4"), answer: t("faq_a4") },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t("faq_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("faq_subtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
