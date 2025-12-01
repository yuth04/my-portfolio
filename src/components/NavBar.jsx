import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import ToggleDarkmode from "./ToggleDarkmode";
import SittingButton from "./SittingButton";

const Navbar = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState("home");
  const [isHero, setIsHero] = useState(true);

  const sections = ["home", "about", "service", "project", "contact"];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Detect if inside Hero section
  useEffect(() => {
    const handleHeroCheck = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPos = window.scrollY + 80;
      setIsHero(scrollPos < heroBottom);
    };

    window.addEventListener("scroll", handleHeroCheck);
    handleHeroCheck();

    return () => window.removeEventListener("scroll", handleHeroCheck);
  }, []);

  // Detect active section
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Change document title
  useEffect(() => {
    document.title = activeSection
      ? `${activeSection[0].toUpperCase() + activeSection.slice(1)} | My Portfolio`
      : "My Portfolio";
  }, [activeSection]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center
          transition-all duration-300 backdrop-blur-md
          ${isHero ? "bg-transparent text-white" : "bg-transparent text-slate-900 dark:text-white"}
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className={`text-3xl font-bold transition-colors ${
            isHero ? "text-orange-400" : "text-orange-600"
          }`}
        >
          YuTh.
        </a>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="flex space-x-6 text-lg">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className={`cursor-pointer font-semibold transition-colors duration-300 ${
                  activeSection === item
                    ? "text-orange-500"
                    : isHero
                    ? "text-white hover:text-orange-400"
                    : "text-slate-800 dark:text-gray-200 hover:text-orange-500"
                }`}
              >
                {t(`nav.${item}`)}
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <select
            className="cursor-pointer px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="kh">ខ្មែរ</option>
          </select>

          <ToggleDarkmode />
        </div>

        {/* Mobile control */}
        <div className={`md:hidden  flex items-center gap-3 ${isHero ? "text-white" : "text-orange-600"}`}>
          {/* <SittingButton /> */}
          <ToggleDarkmode />
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-gray-900 text-white z-50 transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <a href="/" className="text-orange-500 text-3xl font-bold">
              YuTh.
            </a>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-6 mt-20 text-xl">
            {sections.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className={`cursor-pointer font-semibold transition-colors ${
                  activeSection === item
                    ? "text-orange-400"
                    : "hover:text-orange-300"
                }`}
              >
                {t(`nav.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
