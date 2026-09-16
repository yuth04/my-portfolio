import { useState } from "react";
import i18n from "i18next";
import { FaCheck } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const SwitchLang = ({ isHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language || "en";

  const languages = [
    { code: "en", label: "EN" },
    { code: "kh", label: "KH" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex items-center gap-2 h-9 px-4 rounded-xl border
                    text-[15px] font-semibold
                    backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(124,58,237,0.25)]
                    transition-all duration-200
                    focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-violet-400
                    ${
                      isHero
                        ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                        : "border-violet-200 bg-white/70 text-slate-800 hover:border-violet-400 hover:bg-white"
                    }`}
      >
        {languages.find((lang) => lang.code === currentLang)?.label ?? "EN"}
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0  mt-1 w-[80px] rounded-xl border border-violet-100
                     bg-white text-slate-800 shadow-lg overflow-hidden z-10"
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={currentLang === lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-medium
                         cursor-pointer hover:bg-violet-50"
            >
              {lang.label}
              {currentLang === lang.code && (
                <FaCheck className="text-violet-600 text-xs" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
