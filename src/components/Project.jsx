import React, {useState} from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects}  from "./data";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
 const [isExpanded, setIsExpanded] = useState(false);

const visibleProjects = isExpanded ? projects : projects.slice(0, 3);

const toggleProjects = () => setIsExpanded((prev) => !prev);
  return (
    <section id="project" className="bg-gray-200 dark:bg-gray-800 min-h-screen px-12 py-20 transition-colors duration-300">
      {/* Section Title */}
      <div data-aos="fade-right" className="flex items-center justify-center mb-2">
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">{t("project.my_project")}</h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h2
        data-aos="fade-right"
        className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
          {t("project.frontend_title")}
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-gray-500/50 cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out"
            data-aos="zoom-out"
            data-aos-delay={index * 100}>
            <img
              src={project.image}
              alt={t(`project.items.${project.key}.name`)}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"/>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {t(`project.items.${project.key}.name`)}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {t(`project.items.${project.key}.description`)}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-sm rounded-md transition text-black dark:text-white">
                  <FaGithub /> {t("project.github")}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-sm rounded-md transition text-white"
                >
                  <FaExternalLinkAlt /> {t("project.live_demo")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    <div className="flex justify-center items-center py-6">
      <button data-aos="zoom-out" onClick={toggleProjects} className=" group flex items-center gap-2 px-8 py-3 text-black bg-white shadow-lg rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
       {isExpanded ? t("project.see_less") : t("project.show_more")}
        <FaArrowRight size={14} className={`transition-transform duration-300 ${isExpanded ? "-rotate-90" : "group-hover:translate-x-1"}`} />
      </button>
    </div>

    </section>
  );
};

export default Project;
