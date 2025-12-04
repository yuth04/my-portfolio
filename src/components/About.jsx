import React from "react";
import profile from "../assets/hero/hero.jpg";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  const skills = [
    { name: "HTML, CSS", rating: 4 },
    { name: "Java", rating: 2 },
    { name: "JavaScript", rating: 3 },
    { name: "jQuery", rating: 2 },
    { name: "PHP", rating: 3 },
    { name: "MySQL", rating: 3 },
    { name: "PostgreSQL", rating: 3 },
    { name: "Laravel", rating: 3.5 },
    { name: "React", rating: 3.5 },
    { name: "Express", rating: 3.5 },
  ];
  return (
    <section className="px-6 md:px-12 py-20 bg-gray-200 min-h-screen dark:bg-gray-800 text-black dark:text-white transition-colors duration-300 overflow-hidden">
      <div
        data-aos="zoom-in-up"
        className="flex items-center justify-center mb-2"
      >
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">
          {t("about.about_me")}
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h2
        data-aos="zoom-in-up"
        className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-700 dark:text-white"
      >
        {t("about.Who_am_i")}
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-10 ">
        <img
          className="w-72 rounded-lg border shadow-lg"
          data-aos="zoom-in-up"
          src={profile}
          alt="Nheung Phearakyuth"
        />

        <div data-aos="zoom-in-up">
          <p className="text-gray- 700 dark:text-gray-300 mb-4">
            {t("about.greeting")}{" "}
            <span className="text-orange-400 font-semibold">
              {t("about.name")}
            </span>
            {t("about.des_1")}
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t("about.des_2")}
          </p>

          {/* SKills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(skill.rating)
                          ? "text-orange-400"
                          : "text-gray-400 dark:text-gray-600"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CV */}
          {/* <a
            href="https://drive.google.com/file/d/1GLHtxuIGvGX40uqiJHvsr-hForVfdklo/view?usp=drive_link"
            download
            target="_blank"
            className="inline-block px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white rounded-full hover:bg-orange-600 transition"
          >
            {t("about.cv")}
          </a> */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1GLHtxuIGvGX40uqiJHvsr-hForVfdklo/view?usp=drive_link"
            data-aos="zoom-in-up"
            class="cursor-pointer flex justify-between bg-gradient-to-r bg-slate-900 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
