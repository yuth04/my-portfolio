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
  frontend_development: <Monitor size={28} className="text-orange-500" />,
  responsive_design: <Code size={28} className="text-indigo-500" />,
  mysql_knowledge: <Server size={28} className="text-green-500" />,
  version_control: <Laptop size={28} className="text-purple-500" />,
  php_laravel_api: <Plug size={28} className="text-red-500" />,
  react_knowledge: <HelpCircle size={28} className="text-blue-500" />,
  teamwork: <Users size={28} className="text-yellow-500" />,
  time_management: <ListChecks size={28} className="text-pink-500" />,
  communication: <MessageCircle size={28} className="text-teal-500" />,
  problem_solving: <Lightbulb size={28} className="text-orange-400" />,
  postgres: <Database size={28} className="text-cyan-500" />,
};

const Service = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const serviceItems = t("service.items", { returnObjects: true });
  const serviceArray = Object.entries(serviceItems);
  const visibleServices = isExpanded ? serviceArray : serviceArray.slice(0, 8);

  return (
    <section
      id="service"
      className="dark:bg-gray-900 px-6 md:px-16 py-20 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-10" data-aos="fade-up">
        <div className="flex items-center justify-center mb-3">
          <div className="w-20 h-[2px] bg-purple-500 mr-3 rounded"></div>
          <h3 className="text-sm font-medium uppercase tracking-widest">
            {t("service.my_service")}
          </h3>
          <div className="w-20 h-[2px] bg-purple-500 ml-3 rounded"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-white">
          {t("service.what_can_i_do")}
        </h2>
       
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleServices.map(([key, service], index) => (
          <div
            key={key}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="flex justify-center mb-5">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform duration-300">
                {items[key]}
              </div>
            </div>
            <h4 className="text-lg text-center font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {service.description}
            </p>
           <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300"></span>

          </div>
        ))}
      </div>

      {/* Show More / See Less Button */}
      <div  data-aos="fade-up"
            data-aos-delay="600"
           className="flex justify-center items-center py-6">
        <button
          
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
