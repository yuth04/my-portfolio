import React, { useState, useRef, useEffect } from "react";
import i18n from "i18next";
import { FaCheck } from "react-icons/fa6";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SwitchLang = ({ isHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLang = i18n.language || "en";

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "kh", label: "KH", name: "ភាសាខ្មែរ" },
  ];

  const selectedLang =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`group flex items-center gap-2 h-10 px-3.5 rounded-full border text-sm font-semibold
                    backdrop-blur-md transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50
                    ${
                      isHero
                        ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 shadow-lg shadow-purple-900/10"
                        : "border-gray-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-gray-100 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md"
                    }`}
      >
        <Globe
          size={16}
          className={`transition-colors duration-300 ${
            isHero
              ? "text-purple-200 group-hover:text-white"
              : "text-purple-600 dark:text-purple-400"
          }`}
        />

        <span>{selectedLang.label}</span>

        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } ${isHero ? "text-white/70" : "text-gray-400"}`}
        />
      </motion.button>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-2 w-36 p-1.5 rounded-2xl border
                       border-gray-200/80 dark:border-slate-700/80
                       bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
                       text-gray-800 dark:text-gray-200 shadow-xl shadow-purple-500/10 z-50"
          >
            {languages.map((lang) => {
              const isSelected = currentLang === lang.code;

              return (
                <li
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold
                              cursor-pointer transition-all duration-200 ${
                                isSelected
                                  ? "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300"
                                  : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300"
                              }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{lang.label}</span>
                    <span className="text-[11px] opacity-60 font-normal">
                      {lang.name}
                    </span>
                  </div>

                  {isSelected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <FaCheck className="text-purple-600 dark:text-purple-400 text-xs" />
                    </motion.span>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwitchLang;
