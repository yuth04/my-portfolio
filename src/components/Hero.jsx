import React from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import logo from "../assets/hero/hero.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="px-4 md:px-12 pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* keep your background exactly as is */}
      <div className="wrapper">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* badge */}
      <div data-aos="zoom-in"  className="absolute top-[60px] md:top-[70px] left-[15px] md:left-[100px] flex items-center gap-2 bg-slate-900/20 px-4 py-1.5 rounded-full border border-emerald-400 shadow-md">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        <span className="text-sm text-emerald-400">
          Welcome to my Portfolio
        </span>
      </div>

      {/* content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-2">
        {/* text content */}
        <div className="max-w-full  md:text-left">
          <p
            data-aos="fade-right"
            className="text-shine text-lg sm:text-xl md:text-3xl  text-slate-300 font-semibold"
          >
            {t("hero.des_name")}
          </p>
          <h2
            data-aos="fade-right"
            className="typing py-3 mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500"
          >
            &nbsp;&nbsp;{t("hero.name")}
          </h2>
          <p
            data-aos="fade-left"
            className="text-base sm:text-lg mt-4 text-gray-300 animate-pulse font-semibold"
          >
            {t("hero.carrer")}
          </p>
          <a
            data-aos="fade-left"
            href="#about"
            className="inline-block mt-6 text-sm sm:text-base px-6 md:px-7 py-2.5 md:py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
          >
            {t("hero.btn_know")}
          </a>

          {/* social media links */}

          <div
            data-aos="fade-up"
            className="mt-6 flex  space-x-6 text-xl sm:text-2xl"
          >
            <a
              href="https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-orange-600  transition duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://t.me/console_log01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-white hover:text-orange-600 dark:hover:text-blue-500 transition duration-300 hover:-translate-y-1"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className=" text-white hover:text-orange-600 dark:hover:text-blue-500 transition duration-300 hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* profile image */}
        <div
           data-aos="fade-up"
  
          className="pulse-wrapper  w-[220px]  md:w-[300px] h-[220px]  md:h-[300px] mt-10 md:mt-0 "
        >
          <div className="border-ring"></div>
          <img
            className="rounded-full w-full h-full object-cover"
            src={logo}
            alt="Yuth"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
