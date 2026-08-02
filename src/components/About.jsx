import React from "react";
import profile from "../assets/hero/yuth.jpg";
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
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500", bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500", bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", bg: "bg-yellow-400/10 hover:bg-yellow-400/20 border-yellow-400/20" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20" },
  { name: "React.js", icon: <SiReact />, color: "text-cyan-400", bg: "bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/20" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", bg: "bg-white/10 hover:bg-white/20 border-white/20" },
  { name: "Laravel", icon: <SiLaravel />, color: "text-red-500", bg: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20" },
  { name: "PHP", icon: <SiPhp />, color: "text-indigo-400", bg: "bg-indigo-400/10 hover:bg-indigo-400/20 border-indigo-400/20" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", bg: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600", bg: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-500", bg: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", bg: "bg-green-400/10 hover:bg-green-400/20 border-green-400/20" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400", bg: "bg-teal-400/10 hover:bg-teal-400/20 border-teal-400/20" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-400", bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-purple-500 mr-3 rounded"
            />
            <h3 className="text-sm font-medium uppercase tracking-widest text-purple-500">
              {t("about.about_me")}
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-purple-500 ml-3 rounded"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            {t("about.Who_am_i")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-transparent rounded-[2rem] blur-3xl" />

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 border border-purple-500/20">
              <img
                src={profile}
                alt="Nheung Phearakyuth"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
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

            {/* Stats — single glass panel instead of two separate boxes */}
            <div className="grid grid-cols-2 mt-4 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <div className="p-4 text-center border-r border-gray-200 dark:border-slate-700">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  10+
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Projects Done
                </p>
              </div>
              <div className="p-4 text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  14+
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-10"
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
                viewport={{ once: true, amount: 0.3 }}
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
          </motion.div>
        </div>
      </div>

      {/* Education */}
      <Education />
    </section>
  );
};

export default About;