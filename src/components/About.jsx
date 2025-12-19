import React from "react";
import profile from "../assets/hero/profile.jpg";
import { useTranslation } from "react-i18next";
import Education from "./Education";
import Tools from "./Tools";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    {
      name: "HTML & CSS",
      icon: (
        <>
          <SiHtml5 className="text-orange-500" />{" "}
          <SiCss3 className="text-blue-600" />
        </>
      ),
    },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800" /> },
    { name: "Next", icon: <SiNextdotjs className="text-gray-800" /> },
  ];

  return (
    <section className="relative py-20 bg-gray-100 dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center mb-4">
            <span className="w-16 h-[2px] bg-purple-500 mr-3"></span>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-500">
              {t("about.about_me")}
            </h3>
            <span className="w-16 h-[2px] bg-purple-500 ml-3"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            {t("about.Who_am_i")}
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Profile Image */}
          <div
            className="relative lg:sticky lg:top-28"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20">
              <img
                src={profile}
                alt="Nheung Phearakyuth"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className="lg:col-span-2 space-y-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.greeting")}{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                {t("about.name")}
              </span>
              {t("about.des_1")}
            </p>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              {t("about.des_2")}
            </p>

            {/* Skills */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
               text-white
               backdrop-blur-md
               transition-all duration-300
               bg-purple-400
               hover:shadow-xl"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>

              <Tools />
            </div>

            {/* Resume Button */}
            <div className="pt-6" data-aos="fade-up" data-aos-delay="500">
              <a
                href="https://drive.google.com/file/d/1Tae3FOFu2PAG8qqYGcwpPlHu0tpSp6Ju/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3
                           rounded-full bg-gradient-to-r from-slate-800 to-slate-900
                           text-white font-semibold shadow-xl
                           hover:scale-105 transition-all duration-300"
              >
                Resume
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
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <Education />
    </section>
  );
};

export default About;
