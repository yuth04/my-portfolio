import React, { useState } from "react";
import profile from "../assets/hero/yuth.jpg";
import { useTranslation } from "react-i18next";
import Education from "./Education";
import { motion, AnimatePresence } from "framer-motion";
import SKILL_GROUPS from "../data/technologies";

const TOTAL_SKILLS = SKILL_GROUPS.reduce(
  (sum, group) => sum + group.skills.length,
  0,
);
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const { t } = useTranslation();

  const [activeGroup, setActiveGroup] = useState("All");

  const visibleGroups =
    activeGroup === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.label === activeGroup);

  return (
    <section className="relative py-24 bg-gray-100 dark:bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-[2px] bg-purple-500 mr-3 rounded"
            />
            <h3 className="text-sm font-medium text-slate-800 dark:text-white uppercase tracking-widest">
              {t("about.about_me")}
            </h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-[2px] bg-purple-500 ml-3 rounded"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-white">
            {t("service.what_can_i_do")}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
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

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* Projects */}
              <div className="group rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-lg">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  10+
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Projects Done
                </p>
              </div>

              {/* Technologies */}
              <div className="group rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-lg">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {TOTAL_SKILLS}+
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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

            {/* Technologies */}
            <div className="space-y-6">
              {/* Filter Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Technologies I work with
                </h3>

                {/* Filter Buttons - sliding pill indicator, ported from AboutSection */}
                <div className="flex flex-wrap gap-2">
                  {["All", ...SKILL_GROUPS.map((group) => group.label)].map(
                    (label) => {
                      const isActive = activeGroup === label;

                      return (
                        <button
                          key={label}
                          onClick={() => setActiveGroup(label)}
                          className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-500 ease-out ${
                            isActive
                              ? "text-white border-transparent"
                              : "border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:border-purple-400 hover:text-purple-500"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="active-skill-filter"
                              className="absolute inset-0 bg-purple-800 rounded-full shadow-sm -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 28,
                                mass: 0.9,
                              }}
                            />
                          )}
                          {label}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Skill Groups - AnimatePresence swap, ported from AboutSection */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeGroup}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  {visibleGroups.map((group) => (
                    <div key={group.label}>
                      {/* Category Label */}
                      {activeGroup === "All" && (
                        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-purple-500/80 dark:text-purple-400/80">
                          {group.label}
                        </p>
                      )}

                      {/* Skills */}
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2"
                      >
                        {group.skills.map((skill) => {
                          const Icon = skill.icon;

                          return (
                            <motion.span
                              key={skill.name}
                              variants={itemVariants}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border backdrop-blur-sm cursor-default transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg ${skill.bg}`}
                            >
                              {/* Icon */}
                              <span className={`text-base ${skill.color}`}>
                                <Icon />
                              </span>

                              {/* Name */}
                              <span className="text-gray-700 dark:text-gray-200">
                                {skill.name}
                              </span>
                            </motion.span>
                          );
                        })}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education */}
      <Education />
    </section>
  );
};

export default About;
