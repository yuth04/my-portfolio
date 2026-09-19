import React from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import ToggleDarkmode from "./ToggleDarkmode";
import SwitchLang from "./SwitchLang";
import useNavBar from "../hooks/useNavBar";
import { motion, useReducedMotion } from "framer-motion";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    isOpen,
    setIsOpen,
    isMobile,
    activeSection,
    isHero,
    setIsHero,
    sections,
    scrollTo,
  } = useNavBar();

  const isFloating = activeSection === "home" || activeSection === "about";
  const reduce = useReducedMotion();

  // Smart Navigation Handler
  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    // 1. Force the React Router URL to update
    if (sectionId === "home") {
      navigate("/");
    } else {
      navigate(`/${sectionId}`);
    }

    // 2. Perform the smooth scroll
    scrollTo(sectionId);
  };

  const handleLogoClick = () => {
    setIsOpen(false);

    // Directly assigning the URL navigates home AND performs a clean full refresh
    window.location.href = "/";
  };

  return (
    <>
      <nav
        className={`fixed  top-0 left-4 right-4 md:left-10 md:right-10 z-50 px-6 md:px-8 py-2.5 md:py-3 flex justify-between items-center
          transition-all duration-300 backdrop-blur-md rounded-xl
          ${
            isFloating
              ? `
          top-2
          left-2
          right-2
          md:top-1
          md:left-6
          md:right-6
          rounded-xl
        `
              : `
          top-0
          left-0
          right-0
          rounded-xl
        `
          }
          ${
            isHero
              ? "bg-transparent text-white"
              : "dark:bg-[#150C27] text-slate-900 dark:text-white shadow-md"
          }
        `}
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className={`flex items-center gap-2.5 font-bold text-xl transition-colors
              opacity-90 hover:opacity-100
              ${isHero ? "text-violet-600" : "text-violet-600"}`}
        >
          <span className="relative grid h-8 w-8 place-items-center">
            {/* Drawn Border */}
            <svg
              viewBox="0 0 32 32"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <motion.rect
                x="1"
                y="1"
                width="30"
                height="30"
                rx="10"
                stroke="currentColor"
                strokeWidth="1.6"
                className="text-violet-600"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>

            {/* Glyph */}
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : 0.7 }}
              className="relative text-[13px] font-semibold text-violet-600"
            >
              {"</>"}
            </motion.span>
          </span>
          YuTh.
        </button>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="hidden md:flex space-x-6 text-md">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className={`group relative cursor-pointer px-2 py-2 font-semibold
      text-slate-800 dark:text-purple-500
      transition-colors duration-300
      hover:text-purple-500
      ${activeSection === item ? "text-purple-500" : "text-white-300"}
    `}
              >
                {t(`nav.${item}`)}

                {/* Animated underline */}
                <span
                  className={`absolute left-1/2 bottom-0 h-[2px] rounded-full
        bg-purple-500
        transition-all duration-300 ease-out
        -translate-x-1/2
        ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}
      `}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <SwitchLang />
          <ToggleDarkmode />
        </div>

        {/* Mobile Control */}
        <div
          className={`flex md:hidden items-center gap-3 ${
            isHero ? "text-purple-500" : "text-purple-500"
          }`}
        >
          <ToggleDarkmode hero={isHero} setIshero={setIsHero} />
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`overflow-y-auto fixed top-0 right-0 h-full w-[55%] bg-[#F8FAFC] text-slate-700 dark:bg-[#150C27] dark:text-white z-50 transition-transform duration-500
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <button className="text-purple-500 hover:text-purple-400 text-3xl font-bold">
              Menu.
            </button>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-purple-500" size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-6 mt-10">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className={`group relative cursor-pointer px-2 py-2 font-semibold
      text-slate-800 dark:text-white
      transition-colors duration-300
      hover:text-purple-500
      ${activeSection === item ? "text-purple-500" : ""}
    `}
              >
                {t(`nav.${item}`)}

                {/* Animated underline */}
                <span
                  className={`absolute left-1/2 bottom-0 h-[2px] rounded-full
        bg-purple-500
        transition-all duration-300 ease-out
        -translate-x-1/2
        ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}
      `}
                />
              </li>
            ))}
          </ul>

          <ul className="flex flex-col items-center space-y-6 mt-8">
            <li>
              <SwitchLang />
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
