
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Phone, Mail, Calendar, User, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t("contact_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("contact_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">{t("contact_name")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-blue-dark focus:border-blue-dark"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">{t("contact_email")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-blue-dark focus:border-blue-dark"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">{t("contact_message")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-blue-dark focus:border-blue-dark"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    {t("contact_send")}...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    {t("contact_send")}
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-blue-dark text-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-yellow-accent">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-yellow-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:contact@devpro.com" className="text-gray-300 hover:text-yellow-accent transition-colors">
                      contact@devpro.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-yellow-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+33612345678" className="text-gray-300 hover:text-yellow-accent transition-colors">
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-yellow-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t("contact_schedule")}</p>
                    <a href="#" className="text-gray-300 hover:text-yellow-accent transition-colors flex items-center">
                      Calendly
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-800">
                <p className="font-medium mb-4">Connect with me:</p>
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-800 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-800 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-blue-800 transition-colors">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
