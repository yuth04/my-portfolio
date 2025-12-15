import React from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import logo from "../assets/hero/download (1).jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="px-4 pt-20 md:pt-10 min-h-screen h-auto flex items-center justify-center p-4 relative overflow-hidden"
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

      {/* main content */}
      <div className="w-full md:p-10 max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* text content */}
        <div className="flex flex-col ">
          {/* badge */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="mb-10 md:mb-12 flex justify-center items-center w-[100%] md:w-[60%] gap-2 bg-slate-900/20 px-4 py-1.5 rounded-full border border-emerald-400 shadow-md"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-400">
              Welcome to my Portfolio
            </span>
          </div>
          {/* greeting  */}
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-shine mb-4 md:mb-8 text-3xl md:text-5xl text-slate-300 font-semibold"
          >
            {t("hero.des_name")}
          </p>

          {/* Name */}
          {/* Name */}
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            className="typing py-2 mb-4 md:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600
             text-transparent bg-clip-text drop-shadow-lg"
          >
            &nbsp;&nbsp;{t("hero.name")}
          </h2>

          {/* carrer */}
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-base mb-4 md:mb-6 sm:text-lg text-gray-400  font-semibold"
          >
            {t("hero.carrer")}
          </p>
         <a
  data-aos="fade-right"
  data-aos-delay="500"
  href="#about"
  className="inline-block w-[50%] md:w-[30%] mb-4 py-3 text-sm md:text-md text-center 
             rounded-full font-bold text-white 
             bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
             shadow-lg transition-all duration-500 transform
             hover:from-purple-600 hover:via-purple-700 hover:to-purple-800
             hover:shadow-2xl hover:-translate-y-1.5 hover:scale-105
             hover:text-purple-100"
>
  {t("hero.btn_know")}
</a>

          {/* social media links */}

          <div className="flex space-x-6 text-xl sm:text-2xl">
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              href="https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 
               text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              data-aos="fade-up"
              data-aos-delay="600"
              href="https://t.me/console_log01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 
               text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-300"
            >
              <FaTelegramPlane />
            </a>

            <a
              data-aos="fade-up"
              data-aos-delay="700"
              href="https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 
               text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* profile image */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="pulse-wrapper  w-[320px]  md:w-[380px] h-[320px]  md:h-[380px] mt-10 md:mt-0 "
        >
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="border-ring"
          ></div>

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
