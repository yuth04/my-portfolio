import React from "react";
import { useTranslation } from "react-i18next";
import { containerVariants, itemVariants } from "./motion";
import { motion } from "framer-motion";
const Education = () => {
  const { t } = useTranslation();

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1.9,
      transition: { duration: 5, ease: "easeInOut" },
    },
  };
  const svgPath =
    "M0 100 C 200 0, 300 150, 500 100 C 700 50, 800 200, 1000 100";

  return (
    <section className="relative w-full py-10 px-6 overflow-hidden bg-transparent">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-20 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-800">
          {t("education.our_education")}
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden md:block w-full h-[400px]">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d={svgPath}
            fill="none"
            stroke="#A855F7"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            // style={{ width: "100%", height: "100%" }}
          />
        </motion.svg>

        {/* Primary School */}
        <div
          className="absolute -translate-x-1/2 top-[24%] left-[10%]"
          data-aos="zoom-in"
        >
          <p className="text-sm font-semibold text-purple-500 text-center mb-2">
            2010-2016
          </p>
          <div className="w-4 h-4 mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
          <div className="w-48 p-4 mt-8 rounded-xl backdrop-blur-md bg-white/10 border border-purple-500/30">
            <h5 className="text-sm font-bold text-purple-500">
              {t("education.primary_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.primary_info")}
            </p>
          </div>
        </div>

        {/* Secondary School */}
        <div
          className="absolute -translate-x-1/2 top-[44%] left-[30%]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <p className="text-sm font-semibold text-purple-500 text-center mb-2">
            2016-2019
          </p>
          <div className="w-4 h-4 mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
          <div className="w-48 p-4 mt-8 rounded-xl backdrop-blur-md bg-white/10 border border-purple-500/30 -translate-y-[200px]">
            <h5 className="text-sm font-bold text-purple-500">
              {t("education.secondary_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.secondary_info")}
            </p>
          </div>
        </div>

        {/* High School */}
        <div
          className="absolute -translate-x-1/2 top-[37%] left-[55%]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <p className="text-sm font-semibold text-purple-500 text-center mb-2">
            2019-2022
          </p>
          <div className="w-4 h-4 mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
          <div className="w-48 p-4 rounded-xl backdrop-blur-md bg-white/10 border border-purple-500/30 -translate-y-[-40px]">
            <h5 className="text-sm font-bold text-purple-500">
              {t("education.high_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.high_school_info")}
            </p>
          </div>
        </div>

        {/* Bachelor Degree */}
        <div
          className="absolute -translate-x-1/2 top-[59%] left-[80%]"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <p className="text-sm font-semibold text-purple-500 text-center mb-2">
            2022-2026
          </p>
          <div className="w-4 h-4 mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
          <div className="w-48 p-4 mt-8 rounded-xl backdrop-blur-md bg-white/10 border border-purple-500/30 -translate-y-[220px]">
            <h5 className="text-sm font-bold text-purple-500">
              {t("education.bachelor_degree")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.bachelor_info")}
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative px-6">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 410 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          className="absolute left-6 top-0 bottom-0 w-[2px] bg-purple-500/40"
        />
        <div className="pl-10 space-y-12">
          {/* Primary */}
          <div data-aos="fade-up">
            <div className="absolute -left-[26px] top-1 w-3 h-3  mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
            {/* <div className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-purple-500 hover:bg-purple-400" /> */}
            <p className="text-xs font-semibold text-purple-600">2010-2016</p>
            <h5 className="text-sm font-bold dark:text-white">
              {t("education.primary_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.primary_info")}
            </p>
          </div>

          {/* Secondary */}
          <div data-aos="fade-up" data-aos-delay="150">
            <div className="absolute -left-[26px] top-1 w-3 h-3  mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
            {/* <div className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-purple-500" /> */}
            <p className="text-xs font-semibold text-purple-600">2016-2019</p>
            <h5 className="text-sm font-bold dark:text-white">
              {t("education.secondary_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.secondary_info")}
            </p>
          </div>

          {/* High School */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="absolute -left-[26px] top-1 w-3 h-3  mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />

            {/* <div className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-purple-500" /> */}
            <p className="text-xs font-semibold text-purple-600">2019-2022</p>
            <h5 className="text-sm font-bold dark:text-white">
              {t("education.high_school")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.high_school_info")}
            </p>
          </div>

          {/* Bachelor */}
          <div data-aos="fade-up" data-aos-delay="450">
            <div className="absolute -left-[26px] top-1 w-3 h-3  mx-auto rounded-full bg-purple-500 shadow-[0_0_14px_6px_rgba(168,85,247,0.9)]" />
            {/* <div className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-purple-500" /> */}
            <p className="text-xs font-semibold text-purple-600">2022-2026</p>
            <h5 className="text-sm font-bold dark:text-white">
              {t("education.bachelor_degree")}
            </h5>
            <p className="text-xs text-slate-400">
              {t("education.bachelor_info")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
