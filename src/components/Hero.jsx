import { useMemo } from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import logo from "../assets/hero/coder.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

/* ------------------------------------------------------------------ */
/*  data                                                              */
/* ------------------------------------------------------------------ */

const SOCIALS = [
  { href: "https://github.com/yuth04", label: "GitHub", icon: <FaGithub /> },
  {
    href: "https://t.me/yuth_04",
    label: "Telegram",
    icon: <FaTelegramPlane />,
  },
  {
    href: "https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

const STACK_MAIN = ["React", "Laravel", "Node", "Express", "Postgres"];
const STACK_ALSO = ["TypeScript", "Tailwind", "Docker"];

/* ------------------------------------------------------------------ */
/*  component                                                         */
/* ------------------------------------------------------------------ */

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
          <motion.figure
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative m-0 w-full max-w-[290px] justify-self-center lg:justify-self-end group cursor-pointer"
          >
            {/* Animated background ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-x-6 -inset-y-4 rounded-full
                         bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-violet-600/30
                         opacity-70 blur-3xl animate-pulse"
            />

            {/* Main glassmorphism image container */}
            <div
              className="relative overflow-hidden rounded-[32px]
                         border border-white/20 dark:border-white/10
                         bg-white/10 dark:bg-[#0c0a18]/40 backdrop-blur-md
                         shadow-[0_22px_70px_-10px_rgba(124,58,237,0.25)]
                         dark:shadow-[0_22px_70px_-10px_rgba(0,0,0,0.7)]
                         transition-all duration-500 ease-out
                         group-hover:border-violet-500/40
                         group-hover:shadow-[0_25px_80px_-10px_rgba(124,58,237,0.4)]"
            >
              <img
                src={logo}
                alt="Phearak Yuth at his laptop"
                className="block w-full h-auto object-cover aspect-[4/5]
                           transition-transform duration-700 ease-out
                           group-hover:scale-105"
              />

              {/* Internal subtle lighting overlay */}
              <div
                className="absolute inset-0 rounded-[32px]
                           bg-gradient-to-t from-[#0C0A18]/60 via-transparent to-white/10
                           pointer-events-none"
              />
            </div>
          </motion.figure>
        </div>

        {/* ============ bottom rail ============ */}
        <motion.dl
          {...m(0.4)}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3
                     border-t border-slate-200 dark:border-white/10 m-0 md:text-center"
        >
          <div className="py-7 pr-6 sm:border-r border-slate-200 dark:border-white/10">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-2">
              Main stack
            </dt>
            <dd className="m-0 font-semibold text-slate-900 dark:text-white">
              {STACK_MAIN.join(", ")}
            </dd>
          </div>
          <div className="py-7 sm:border-r border-slate-200 dark:border-white/10">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-2">
              Also comfortable with
            </dt>
            <dd className="m-0 font-semibold text-slate-900 dark:text-white">
              {STACK_ALSO.join(", ")}
            </dd>
          </div>
          <div className="py-7">
            <dt className="text-sm text-slate-500 dark:text-slate-500 mb-3">
              Find me
            </dt>
            <dd className="m-0 flex md:justify-center gap-3">
              {SOCIALS.map(({ href, label, icon }) => (
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
                  {icon}
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
