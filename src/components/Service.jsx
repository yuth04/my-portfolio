import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLaptop,
  FaPlug,
  FaQuestionCircle,
  FaHandshake,
  FaTasks,
  FaComments,
  FaLightbulb,
  FaArrowRight,
  FaDatabase,
} from "react-icons/fa";

const items = {
  frontend_development: <FaLaptopCode className="text-2xl text-orange-400" />,
  responsive_design: <FaCode className="text-2xl text-orange-400" />,
  mysql_knowledge: <FaServer className="text-2xl text-orange-400" />,
  version_control: <FaLaptop className="text-2xl text-orange-400" />,
  php_laravel_api: <FaPlug className="text-2xl text-orange-400" />,
  react_knowledge: <FaQuestionCircle className="text-2xl text-orange-400" />,
  teamwork: <FaHandshake className="text-2xl text-blue-500" />,
  time_management: <FaTasks className="text-2xl text-orange-400" />,
  communication: <FaComments className="text-2xl text-blue-500" />,
  problem_solving: <FaLightbulb className="text-2xl text-blue-500" />,
  postgres: <FaDatabase className="text-2xl text-orange-400" />,
};

const Service = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const serviceItems = t("service.items", { returnObjects: true });

  const serviceArray = Object.entries(serviceItems);

  const visibleServices = isExpanded ? serviceArray : serviceArray.slice(0, 6);

  return (
    <section
      id="service"
      className="dark:bg-gray-900 px-12 py-20 text-black dark:text-white transition-colors duration-300"
    >
      <div
        className="flex items-center mb-2 justify-center"
        data-aos="zoom-in-up"
      >
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">
          {t("service.my_service")}
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h3
        data-aos="zoom-in-up"
        className="text-3xl font-bold mb-10 text-center"
      >
        {t("service.what_can_i_do")}
      </h3>

      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleServices.map(([key, service], index) => (
          <div
            key={key}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group relative bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center items-center text-4xl text-orange-400 mb-4">
              {items[key]}
            </div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>

            <p className="absolute inset-0 bg-black bg-opacity-80 text-gray-200 dark:text-white opacity-0 group-hover:opacity-100 flex items-center justify-center p-6 text-sm rounded-lg transition-opacity duration-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-6">
        <button
          data-aos="zoom-out"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="group flex items-center gap-2 px-8 py-3 font-semibold text-gray-700 dark:text-white transition-colors duration-300"
        >
          {isExpanded ? t("service.see_less") : t("service.show_more")}
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

export default Service;
