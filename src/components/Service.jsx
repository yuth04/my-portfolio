import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronsDown } from "lucide-react";
import { containerVariants, itemVariants } from "./motion";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Database,
  GitBranch,
  Server,
  Atom,
  Users,
  Clock,
  MessageSquare,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/* Skill Icons Map */
const items = {
  frontend_development: <Monitor size={28} className="text-orange-500" />,
  responsive_design: <Smartphone size={28} className="text-indigo-500" />,
  mysql_knowledge: <Database size={28} className="text-green-500" />,
  version_control: <GitBranch size={28} className="text-purple-500" />,
  php_laravel_api: <Server size={28} className="text-red-500" />,
  react_knowledge: <Atom size={28} className="text-blue-500" />,
  teamwork: <Users size={28} className="text-yellow-500" />,
  time_management: <Clock size={28} className="text-pink-500" />,
  communication: <MessageSquare size={28} className="text-teal-500" />,
  problem_solving: <Lightbulb size={28} className="text-orange-400" />,
  postgres: <ShieldCheck size={28} className="text-cyan-500" />,
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
      className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <div className="flex items-center justify-center mb-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[2px] bg-purple-500 mr-3 rounded"
          />
          <h3 className="text-sm font-medium uppercase tracking-widest">
            {t("service.my_service")}
          </h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[2px] bg-purple-500 ml-3 rounded"
          />
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
            className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex justify-center mb-5">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform duration-300">
                {items[key]}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-center mb-2">
              {service.title}
            </h4>

            <p className="text-sm text-center text-gray-500 dark:text-gray-300">
              {service.description}
            </p>

            {/* Bottom Hover Line */}
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Show More / See Less */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex justify-center items-center py-6"
      >
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="group p-3 rounded-full
                    text-gray-700 dark:text-gray-200
                    
                    transition-all duration-300 ease-out"
        >
          <ChevronsDown
            size={22}
            className={`
             transition-all duration-300 ease-out
             group-hover:translate-y-1
             group-hover:scale-110
             ${isExpanded ? "rotate-180" : ""}
           `}
          />
        </button>
      </div>
    </section>
  );
};

export default Service;
