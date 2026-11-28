import { useMemo } from "react";

import logo from "../assets/hero/coder.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { SOCIALS, STACK_MAIN, STACK_ALSO } from "../data/hero";
import HeroGalaxy from "./HeroGalaxy";
const Hero = () => {
  const { t } = useTranslation();
  const rawNames = t("hero.name", { returnObjects: true });

  // Memoize array to prevent resetting on every render
  const namesArray = useMemo(() => {
    return Array.isArray(rawNames) ? rawNames : [];
  }, [rawNames]);

  const typedText = useTypewriter(namesArray);

  const m = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F6F3FE] dark:bg-[#150C27]
                  min-h-screen px-4 pt-24 pb-0 md:pt-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ============ text + portrait ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
          {/* ---------- left ---------- */}
          <div>
            <motion.p
              {...m(0.05)}
              className="flex items-center gap-2.5 mb-5 text-[15px] font-medium
                         text-slate-500 dark:text-slate-400"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work — Phnom Penh or remote
            </motion.p>

            <motion.p
              {...m(0.1)}
              className="mb-2 text-2xl md:text-3xl font-medium text-violet-500"
            >
              {t("hero.des_name")}
            </motion.p>

            <motion.h1
              {...m(0.16)}
              className="text font-extrabold tracking-[-0.045em] leading-[0.9] p-2
                 text-3xl md:text-[clamp(3rem,3vw,4.6rem)]
                 bg-gradient-to-br from-slate-900 to-violet-600
                 dark:from-white dark:to-violet-400
                 bg-clip-text text-transparent"
            >
              {typedText}
              <span className="cursor animate-pulse text-violet-600 dark:text-violet-400"></span>
            </motion.h1>

            <motion.p
              {...m(0.24)}
              className="mt-7 max-w-[54ch] text-[17px] leading-relaxed
                         text-slate-600 dark:text-slate-400"
            >
              <span className="font-semibold text-slate-900 dark:text-white">
                {t("hero.carrer")}
              </span>{" "}
              {t("hero.des")}
            </motion.p>

            <motion.div {...m(0.32)} className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl
                           bg-violet-600 px-7 py-3.5 text-[15px] font-bold text-white
                           shadow-[0_16px_34px_-16px_rgba(124,58,237,0.9)]
                           transition-transform duration-200 hover:-translate-y-0.5
                           hover:bg-violet-500
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {t("hero.btn_know")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl
                           border border-slate-300 dark:border-white/15
                           px-7 py-3.5 text-[15px] font-bold
                           text-slate-800 dark:text-white
                           transition-all duration-200 hover:-translate-y-0.5
                           hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {t("hero.hire_me")}
              </a>
            </motion.div>
          </div>

          {/* ---------- right: modern portrait section ---------- */}
          <HeroGalaxy />
        </div>

        {/* ============ bottom rail ============ */}
        <motion.dl
          {...m(0.4)}
          className="mt-5 md:mt-20 grid grid-cols-1 sm:grid-cols-3
                     border-t border-slate-200 dark:border-white/10 m-0 md:text-center"
        >
          <div className="py-4 pr-6 sm:border-r border-slate-200 dark:border-white/10">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-2">
              Main stack
            </dt>
            <dd className="m-0 font-semibold text-slate-900 dark:text-white">
              {STACK_MAIN.join(", ")}
            </dd>
          </div>
          <div className="py-4 sm:border-r border-slate-200 dark:border-white/10">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-2">
              Also comfortable with
            </dt>
            <dd className="m-0 font-semibold text-slate-900 dark:text-white">
              {STACK_ALSO.join(", ")}
            </dd>
          </div>
          <div className="py-4">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-3">
              Find me
            </dt>
            <dd className="m-0 flex md:justify-center gap-3">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full
                             text-slate-500 dark:text-slate-400
                             transition-all duration-200
                             hover:-translate-y-1 hover:text-violet-600 dark:hover:text-violet-400
                             focus-visible:outline focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
