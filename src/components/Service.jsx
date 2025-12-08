import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Code,
  Monitor,
  Server,
  Laptop,
  Plug,
  HelpCircle,
  Users,
  ListChecks,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  Database,
} from "lucide-react";

const items = {
  frontend_development: <Monitor size={26} />,
  responsive_design: <Code size={26} />,
  mysql_knowledge: <Server size={26} />,
  version_control: <Laptop size={26} />,
  php_laravel_api: <Plug size={26} />,
  react_knowledge: <HelpCircle size={26} />,
  teamwork: <Users size={26} />,
  time_management: <ListChecks size={26} />,
  communication: <MessageCircle size={26} />,
  problem_solving: <Lightbulb size={26} />,
  postgres: <Database size={26} />,
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
      className="dark:bg-gray-900 px-6 md:px-12 py-20 text-black dark:text-white transition-colors duration-300"
    >
      {/* Heading */}
      <div
        className="flex items-center justify-center mb-2"
        data-aos="zoom-in-up"
      >
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-sm font-medium text-center">
          {t("service.my_service")}
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h3
        data-aos="zoom-in-up"
        className="text-xl md:text-2xl font-bold mb-10 text-center text-slate-700 dark:text-white"
      >
        {t("service.what_can_i_do")}
      </h3>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleServices.map(([key, service], index) => (
          <div
            key={key}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className=" group relative p-8 rounded-lg text-center shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center items-center text-4xl mb-4 transition-transform group-hover:rotate-12">
              {items[key]}
            </div>
            <h4 className="text-md text-slate-600 dark:text-slate-400 font-semibold mb-2">
              {service.title}
            </h4>
             <span className="absolute bottom-0 left-0 w-full h-[1px] group-hover:h-[2px] bg-orange-500 rounded-t-full"></span>
          </div>
        ))}
      </div>

      {/* Show More / See Less Button */}
      <div className="flex justify-center items-center py-6">
        <button
          data-aos="zoom-out"
          onClick={() => setIsExpanded((prev) => !prev)}
          className=" group flex items-center gap-2 px-8 py-3 text-black dark:text-white font-semibold transition-colors duration-300"
        >
          {isExpanded ? t("service.see_less") : t("service.show_more")}
          <ArrowRight
            size={16}
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
