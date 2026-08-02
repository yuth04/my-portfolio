import React, { useState, useEffect } from "react";
import { Menu, X, FileCode } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import ToggleDarkmode from "./ToggleDarkmode";
import SwitchLang from "./SwitchLang";
import useNavBar from "../hooks/useNavBar";
import { motion } from "framer-motion";
const Navbar = () => {
  const { t } = useTranslation();
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
  return (
    <>
      <nav
        className={`fixed top-0 left-2 right-2 z-50 px-6 md:px-8 py-2.5 md:py-4 flex justify-between items-center
          transition-all duration-300 backdrop-blur-md rounded-xl
          ${
            isFloating
              ? `
          top-2
          left-2
          right-2
          md:top-1
          md:left-4
          md:right-4
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
              : "bg-white  text-slate-900 dark:text-white shadow-md"
          }
        `}
      >
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`text-3xl flex justify-center opacity-75 hover:opacity-90 items-center gap-2 font-bold transition-colors ${
            isHero ? "text-purple-600" : "text-purple-800"
          }`}
        >
          <FileCode className="mt-[6px]" /> YuTh.
        </button>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="hidden md:flex space-x-6 text-md">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className={`cursor-pointer font-semibold transition-colors duration-300 ${
                  activeSection === item
                    ? "text-purple-500 hover:text-purple-400"
                    : isHero
                      ? "text-purple-500 hover:text-purple-400 top-2"
                      : "text-slate-800  hover:text-purple-400"
                }`}
              >
                {t(`nav.${item}`)}
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <SwitchLang />
          <ToggleDarkmode />
        </div>

        {/* Mobile control */}
        <div
          className={`flex md:hidden   items-center gap-3 ${
            isHero ? "text-white" : "text-purple-500"
          }`}
        >
          {/* <SittingButton /> */}
          <ToggleDarkmode hero={isHero} setIshero={setIsHero} />
          <button onClick={() => setIsOpen(true)}>
            {/* {!isOpen && <Menu size={28} />} */}
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`overflow-y-auto fixed top-0 right-0 h-full w-[60%] bg-[#F8FAFC] text-slate-700 dark:bg-slate-900 dark:text-white z-50 transition-transform duration-500
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <a
              href="/"
              className="text-purple-500 hover:text-purple-400 text-3xl font-bold"
            >
              Menu.
            </a>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-purple-500" size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-6 mt-10">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition-colors duration-300
        ${
          activeSection === item
            ? "text-white bg-purple-500 opacity-90"
            : "text-slate-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500"
        }
      `}
              >
                {t(`nav.${item}`)}
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900 bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
