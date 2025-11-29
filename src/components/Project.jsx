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
      className="bg-gray-100 dark:bg-gray-900 min-h-screen px-12 py-20 transition-colors duration-300"
    >
      {/* Section Title */}
      <div className="flex items-center justify-center mb-2">
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">
          {t("project.my_project")}
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
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
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {project.key}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {t(`project.items.${project.key}.description`)}
              </p>

              {/* Tech Icons */}
              <div className="flex gap-3 mt-3 text-xl">
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
