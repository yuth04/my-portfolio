import React from "react";
import profile from "../assets/hero/profile.jpg";
import { useTranslation } from "react-i18next";
import Education from "./Education";
import Tools from "./Tools";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-500",
    bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "text-blue-500",
    bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 hover:bg-yellow-400/20 border-yellow-400/20",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-400",
    bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20",
  },
  {
    name: "React.js",
    icon: <SiReact />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/20",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
    bg: "bg-white/10 hover:bg-white/20 border-white/20",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-500",
    bg: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20",
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10 hover:bg-indigo-400/20 border-indigo-400/20",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-500",
    bg: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-600",
    bg: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-500",
    bg: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    bg: "bg-green-400/10 hover:bg-green-400/20 border-green-400/20",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-teal-400",
    bg: "bg-teal-400/10 hover:bg-teal-400/20 border-teal-400/20",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    color: "text-blue-400",
    bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-gray-100 dark:bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center mb-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-purple-500 mr-3 rounded"
            />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-500">
              {t("about.about_me")}
            </h3>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-purple-500 ml-3 rounded"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            {t("about.Who_am_i")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-3xl" />

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20">
              <img
                src={profile}
                alt="Nheung Phearakyuth"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                  <p className="text-white font-bold text-sm">
                    Nheung Phearakyuth
                  </p>
                  <p className="text-purple-300 text-xs">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                <p className="text-2xl font-bold text-purple-500">10+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Projects Done
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                <p className="text-2xl font-bold text-purple-500">14+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("about.greeting")}{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {t("about.name")}
                </span>
                {t("about.des_1")}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.des_2")}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Technologies I work with
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium
                      border backdrop-blur-sm cursor-default
                      transition-all duration-300 hover:scale-105 hover:shadow-lg
                      ${skill.bg}`}
                  >
                    <span className={`text-base ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Tools */}
            <Tools />

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <a
                href="https://drive.google.com/file/d/1Dsgi7ogE4ATSw429ZmLRRYXMx8y2UxZx/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5
                           rounded-full bg-gradient-to-r from-purple-600 to-pink-600
                           text-white font-semibold shadow-xl shadow-purple-500/25
                           hover:scale-105 hover:shadow-purple-500/40
                           transition-all duration-300"
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Education */}
      <Education />
    </section>
  );
};

export default About;
