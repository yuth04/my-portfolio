import React from "react";
import profile from "../assets/hero/profile.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Laravel",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Express.js",
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <div className="flex items-center justify-center mb-3">
            <div className="w-20 h-[2px] bg-purple-500 mr-3 rounded"></div>
            <h3 className="text-sm font-medium uppercase tracking-widest">
              {t("about.about_me")}
            </h3>
            <div className="w-20 h-[2px] bg-purple-500 ml-3 rounded"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-white">
            {t("about.Who_am_i")}
          </h2>
        </div>
        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-14 items-start">
          {/* Image */}
          <div
            className="lg:col-span-1 relative lg:sticky lg:top-24"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="1000" // animation duration
            data-aos-easing="ease-out-back" // easing effect
          >
            <div className="absolute inset-0 bg-orange-500/10 rounded-3xl blur-2xl"></div>
            <img
              src={profile}
              alt="Nheung Phearakyuth"
              className="relative w-full rounded-3xl object-cover shadow-xl max-h-screen transform transition-transform duration-1000"
            />
          </div>
          {/* Text */}
          <div
            className="lg:col-span-2 space-y-8"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t("about.greeting")}{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                {t("about.name")}
              </span>
              {t("about.des_1")}
            </p>

            <p className="text-gray-600 dark:text-gray-400  max-w-2xl">
              {t("about.des_2")}
            </p>

            {/* Skills */}
            <div data-aos="fade-up" data-aos-delay="450">
              <h3 className="text-start text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="px-4 py-2 rounded-full text-sm font-semibold
               bg-gradient-to-r from-purple-400 via-purple-400 to-purple-500
               text-white border border-purple-500/30
               backdrop-blur-md transition duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div
              className="flex gap-6 pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1GLHtxuIGvGX40uqiJHvsr-hForVfdklo/view"
                className="cursor-pointer flex justify-between bg-slate-900 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:scale-105 duration-300 font-mono w-[150px]"
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
    </section>
  );
};

export default About;
