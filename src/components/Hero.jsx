import React from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import logo from "../assets/hero/hero.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="px-4 md:px-12 py-20 w-full flex md:flex-row flex-col items-center justify-center md:gap-[250px] min-h-screen text-gray-500 duration-300 overflow-hidden relative"
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

      {/* text content */}
      <div className="max-w-full  md:text-left">
        <p
          data-aos="fade-right"
          className="text-2xl sm:text-3xl text-slate-300 font-semibold"
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
          className="inline-block mt-6 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
        >
          {t("hero.btn_know")}
        </a>

        {/* social media links */}
        <div
          data-aos="zoom-in-up"
          className="mt-6 flex justify-center md:justify-start space-x-6 text-2xl"
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
            className="text-white hover:text-orange-600 dark:hover:text-blue-500 transition duration-300 hover:-translate-y-1"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* profile image */}
      <div
        data-aos="zoom-out"
        className="pulse-wrapper w-[250px]  md:w-[310px] h-[250px]  md:h-[310px] mt-10 md:mt-0 ">
        <div className="border-ring"></div>
        <img
          className="rounded-full w-full h-full object-cover"
          src={logo}
          alt="Yuth"
        />
      </div>
    </section>
  );
};

export default Hero;
