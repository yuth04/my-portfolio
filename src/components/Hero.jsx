import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import logo from "../assets/hero/coder.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -28 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SOCIALS = [
  {
    href: "https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://t.me/yuth_04",
    label: "Telegram",
    icon: <FaTelegramPlane />,
  },
  {
    href: "https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://github.com/yuth04",
    label: "GitHub",
    icon: <FaGithub />,
  },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="px-4 pt-20 md:pt-10 min-h-screen h-auto flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* ── original background — untouched ── */}
      <div className="wrapper">
        <div className="box">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>

      {/* ── main content ── */}
      <div className="relative z-10 w-full md:p-10 max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* ── LEFT: text ── */}
        <div className="flex flex-col max-w-xl">

          {/* available badge */}
          <motion.div {...fadeRight(0.1)}
            className="mb-8 self-start flex items-center gap-2
                       px-4 py-1.5 rounded-full
                       bg-slate-900/30 border border-purple-500/40
                       backdrop-blur-sm shadow-lg shadow-purple-900/20"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-purple-300">
              Welcome to my Portfolio
            </span>
          </motion.div>

          {/* greeting */}
          <motion.p {...fadeRight(0.2)}
            className="text-shine mb-3 text-2xl md:text-3xl text-slate-300 font-medium"
          >
            {t("hero.des_name")}
          </motion.p>

          {/* name */}
          <motion.h1 {...fadeRight(0.3)}
            className="typing mb-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
                       bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500
                       text-transparent bg-clip-text drop-shadow-lg"
          >
            &nbsp;&nbsp;{t("hero.name")}
          </motion.h1>

          {/* career */}
          <motion.p {...fadeRight(0.4)}
            className="mb-8 text-base sm:text-lg text-gray-400 font-medium leading-relaxed"
          >
            {t("hero.carrer")}
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeRight(0.5)} className="flex items-center gap-4 mb-10 flex-wrap">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white
                         bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
                         shadow-lg shadow-purple-900/40
                         transition-all duration-300
                         hover:from-purple-600 hover:to-purple-800
                         hover:-translate-y-1 hover:scale-105 hover:shadow-purple-700/50"
            >
              {t("hero.btn_know")}
              <HiArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold
                         text-purple-300 border border-purple-500/50
                         backdrop-blur-sm bg-purple-900/10
                         transition-all duration-300
                         hover:bg-purple-500/20 hover:border-purple-400
                         hover:-translate-y-1"
            >
              Hire me
            </a>
          </motion.div>

          {/* divider */}
          <motion.div {...fadeUp(0.55)}
            className="mb-6 h-px w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full"
          />

          {/* socials */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3">
            {/* <span className="text-xs uppercase tracking-widest text-gray-600 mr-1">Follow</span> */}
            {SOCIALS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full text-base
                           text-gray-400 border border-gray-700/60
                           bg-gray-900/30 backdrop-blur-sm
                           transition-all duration-300
                           hover:text-white hover:border-purple-500
                           hover:bg-purple-600/20 hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: profile image ── */}
        <motion.div
          {...fadeUp(0.5)}
          className="relative flex-shrink-0"
        >
          {/* outer glow ring */}
          <div className="absolute inset-0 rounded-full
                          bg-gradient-to-tr from-purple-600/30 via-transparent to-purple-400/20
                          blur-2xl scale-110 animate-pulse" />

          {/* spinning dashed ring */}
          <div className="absolute inset-[-12px] rounded-full border border-dashed border-purple-500/30
                          animate-spin" style={{ animationDuration: "18s" }} />

          {/* static ring */}
          <div className="absolute inset-[-6px] rounded-full border border-purple-500/20" />

          {/* image */}
          <div className="pulse-wrapper relative w-[280px] md:w-[360px] h-[280px] md:h-[360px]">
            <div className="border-ring" />
            <img
              className="rounded-full w-full h-full object-cover
                         ring-4 ring-purple-600/30 ring-offset-4 ring-offset-transparent"
              src={logo}
              alt="Yuth"
            />
          </div>

          {/* floating stat chips */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -right-4 top-8 flex items-center gap-2
                       bg-gray-900/80 border border-purple-500/30 backdrop-blur-sm
                       px-3 py-2 rounded-2xl shadow-xl"
          >
            <span className="text-lg">🚀</span>
            <div>
              <p className="text-[10px] text-gray-400 leading-none">Projects</p>
              <p className="text-sm font-bold text-white leading-tight">20+</p>
            </div>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute -left-4 bottom-10 flex items-center gap-2
                       bg-gray-900/80 border border-purple-500/30 backdrop-blur-sm
                       px-3 py-2 rounded-2xl shadow-xl"
          >
            <span className="text-lg">✨</span>
            <div>
              <p className="text-[10px] text-gray-400 leading-none">Experience</p>
              <p className="text-sm font-bold text-white leading-tight">2+ yrs</p>
            </div>
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;