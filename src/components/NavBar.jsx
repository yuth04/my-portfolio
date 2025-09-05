import React, { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import SittingButton from './SittingButton'
const NavBar = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "auto";
  }, [isOpen, isMobile]);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "service", "project", "contact"];
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

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
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      handleClose();
    }
  };
  useEffect(()=>{
    if(activeSection){
      const sectionTitle = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
      document.title = `${sectionTitle} | My Portfolio`;
    }else{
       document.title = "My Portfolio";
    }
  }, [activeSection])
  return (
    <>
      <nav className=" flex justify-between items-center px-8 py-4 fixed top-0 right-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md backdrop-blur-sm">
        <a href="" className="text-orange-500 font-semibold text-3xl">
          YuTh.
        </a>
        {/* Desktop view */}
        {!isMobile && (
          <ul className="flex space-x-5 text-lg">
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "home"
                  ? "text-orange-400"
                  : "hover:text-orange-400"
              }`}
              onClick={() => handleScrollTo("home")}
            >
              {t('nav.home')}
            </li>
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "about"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("about")}
            >
              {t('nav.about')}
            </li>
            <li
              className={`font-semibold cursor-pointer ${
                activeSection === "service"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("service")}
            >
              {t('nav.service')}
            </li>
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "project"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("project")}
            >
              {t('nav.project') }
            </li>
            <li
              className={`font-semibold cursor-pointer ${
                activeSection === "contact"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("contact")}
            >
              {t('nav.contact')}
            </li>
          </ul>
        )}
        {/* toggle-btn desktop view */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <span className="text-white">🌐</span>
            <select
              className="px-3 py-1.5 rounded-md bg-gray-700 text-white border border-gray-500 hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="kh">ខ្មែរ</option>
            </select>
          </div>

          <button
            onClick={toggleTheme}
            className="text-yellow-400 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>
          {isMobile && !isOpen && (
            <button
              onClick={handleToggle}
              className="text-orange-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <FiMenu size={28} />
            </button>
          )}
        </div>
          {/* toggle-btn mobile view */}
        <div className="flex md:hidden items-center space-x-4">
          <SittingButton theme={theme} toggleTheme={toggleTheme}/>
          {isMobile && (
            <button aria-label="Open Menu" onClick={handleToggle}  className="hover:text-orange-500 focus:outline-none">
              <FiMenu size={28}/>
            </button>
          )}
        </div>
      </nav>

      {/* mobile view */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-800 dark:bg-gray-900 bg-opacity-95  transform transition-transform duration-500 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" absolute top-4 left-7 flex justify-between w-[90%] items-center ">
            <a href="" className="text-orange-400 text-3xl font-semibold">
              YuTh.
            </a>
            <button
              onClick={handleClose}
              className="hover:text-orange-500 text-white"
              aria-label="Close Menu"
            >
              <FiX size={28} />
            </button>
          </div>
          <ul className="flex flex-col items-center text-xl text-white mt-24 space-y-6">
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "home"
                  ? "text-orange-400"
                  : "hover:text-orange-400"
              }`}
              onClick={() => handleScrollTo("home")}
            >
              {t("nav.home")}
            </li>
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "about"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("about")}
            >
              {t("nav.about")}
            </li>
            <li
              className={`font-semibold cursor-pointer ${
                activeSection === "service"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("service")}
            >
              {t("nav.service")}
            </li>
            <li
              className={`cursor-pointer font-semibold ${
                activeSection === "project"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("project")}
            >
              {t("nav.project")}
            </li>
            <li
              className={`font-semibold cursor-pointer ${
                activeSection === "contact"
                  ? "text-orange-400"
                  : "hover:text-orange-500"
              }`}
              onClick={() => handleScrollTo("contact")}
            >
              {t("nav.contact")}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
