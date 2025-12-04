import { useState } from "react";
import i18n from "i18next";
import { FaCheck } from "react-icons/fa";
import { ArrowDown } from 'lucide-react';
import egFlag from "../assets/flags/English.png"; 
import khFlag from "../assets/flags/khmer.png"; 

const SwitchLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language;

  const languages = [
    { code: "en",label: "EN",  flag: egFlag },
    { code: "kh",label:"KH",  flag: khFlag },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 shadow-md bg-white text-slate-800 rounded-md"
      >
        <img
          src={languages.find((lang) => lang.code === currentLang)?.flag}
          alt={currentLang}
          className="w-5 h-5"
        />
        <span className="text-sm flex gap-2 font-medium">Lang    <ArrowDown className={`transition-transform duration-300  ${isOpen ? "rotate-180" : "rotate-0"}`}  size={15}/></span>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-[110px] text-slate-800 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);

                setIsOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:text-white hover:bg-gray-400"
            >
              <div className="flex items-center gap-2">
                <img src={lang.flag} alt={lang.label} className="w-4 h-4" />
                <span>{lang.label}</span>
              </div>
              {currentLang === lang.code && (
                <FaCheck className="text-orange-500 text-xs" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
