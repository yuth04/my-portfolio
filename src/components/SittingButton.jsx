import React, { useState, useRef, useEffect } from "react";
import { FiSettings, FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import i18n from "../i18n";

const SettingsDropdown = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "kh" : "en";
    i18n.changeLanguage(newLang);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-orange-400 transition mt-1"
        aria-label="Settings"
      >
        <FiSettings size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg z-50 p-3">
          <button
            onClick={handleLanguageChange}
            className="flex items-center w-full px-3 py-2 hover:bg-gray-600 rounded-md text-sm"
          >
            <FiGlobe className="mr-2" />
            Language: {i18n.language === "en" ? "English" : "ខ្មែរ"}
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center w-full px-3 py-2 hover:bg-gray-600 rounded-md text-sm mt-1"
          >
            {theme === "dark" ? (
              <>
                <FiMoon className="mr-2" />
                Dark Mode
              </>
            ) : (
              <>
                <FiSun className="mr-2" />
                Light Mode
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
