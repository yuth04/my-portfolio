import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import { projects } from "./data";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProjects = isExpanded ? projects : projects.slice(0, 3);
  const toggleProjects = () => setIsExpanded((prev) => !prev);

  return (
    <section
      id="project"
      className="bg-gray-100 dark:bg-gray-800 min-h-screen px-12 py-20 transition-colors duration-300"
    >
      {/* Section Title */}
      <div className="flex items-center justify-center mb-2">
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">
          {t("project.my_project")}
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h2 className="text-3xl  font-bold mb-10 text-center text-slate-700 dark:text-white dark:text-white">
        {t("project.frontend_title")}
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.key}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content */}
            <div className="p-5 bg-white dark:bg-gray-800 rounded-b-2xl">
              <div className="flex justify-between">
                <h4 className="text-ll uppercase font-bold text-emerald-600 dark:text-white">
                  {project.key}
                </h4>

                <div className="flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full mt-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Completed
                  </span>
                </div>
              </div>
              <p className=" w-[100%] overflow-hidden whitespace-nowrap text-gray-600 dark:text-gray-300 text-sm mt-2">
               <span className="marquee"> {t(`project.items.${project.key}.description`)}</span>
              </p>
              {/* Tech Icons */}
              <div className="flex justify-between gap-3 mt-3 text-xl">
                <div className="flex gap-5">
                  {project.tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <Icon
                        key={i}
                        className="hover:scale-125 transition-transform duration-300"
                        title={t.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-orange-500 transition"
                >
                  <FaGithub /> {t("project.github")}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-orange-500 hover:underline"
                >
                  {t("project.live_demo")} <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      <div className="flex justify-center items-center py-6">
        <button
          onClick={toggleProjects}
          className="group flex items-center gap-2 px-8 py-3 text-black dark:text-white font-semibold transition-colors duration-300"
        >
          {isExpanded ? t("project.see_less") : t("project.show_more")}
          <FaArrowRight
            size={14}
            className={`transition-transform duration-300 ${
              isExpanded ? "-rotate-90" : "group-hover:translate-x-1"
            }`}
          />
        </button>
      </div>
    </section>
  );
};

export default Project;
