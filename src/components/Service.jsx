import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaLaptopCode,
  FaServer,
  FaPlug,
  FaShieldAlt,
  FaDatabase,
  FaMobileAlt,
  FaDocker,
  FaTools,
} from "react-icons/fa";

const items = {
  web_development: <FaGlobe size={28} className="text-violet-500" />,
  frontend_development: <FaLaptopCode size={28} className="text-orange-500" />,
  backend_development: <FaServer size={28} className="text-red-500" />,
  api_development: <FaPlug size={28} className="text-yellow-500" />,
  authentication: <FaShieldAlt size={28} className="text-pink-500" />,
  database_design: <FaDatabase size={28} className="text-green-500" />,
  responsive_design: <FaMobileAlt size={28} className="text-indigo-500" />,
  deployment: <FaDocker size={28} className="text-blue-500" />,
  maintenance: <FaTools size={28} className="text-gray-500" />,
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
      className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900
                 text-gray-800 dark:text-gray-100 transition-colors duration-300"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {visibleServices.map(([key, service], index) => (
          <div
            key={key}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-3xl border border-white/10
                       bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl
                       p-6 shadow-xl hover:shadow-2xl
                       transition-all duration-300 hover:-translate-y-2"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            {/* Hover border ring */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/30 transition-all duration-300 pointer-events-none" />

            {/* Icon */}
            <div className="relative z-10 flex justify-center mb-6">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-2xl
                             bg-gradient-to-br from-white/40 to-white/10
                             dark:from-slate-700 dark:to-slate-900
                             border border-white/20 shadow-lg
                             group-hover:scale-110 group-hover:rotate-3
                             transition-all duration-500"
              >
                {items[key] ?? <FaTools size={28} className="text-gray-400" />}
              </div>
            </div>

            {/* Text */}
            <div className="relative z-10 text-center">
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {visibleServices.length > 7 && (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="flex justify-center items-center py-6"
        >
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group p-3 rounded-full text-gray-700 dark:text-gray-200"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                rotate: isExpanded ? 180 : 0,
                y: [0, 6, 0],
              }}
              transition={{
                rotate: { duration: 0.3 },
                y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <ChevronsDown size={22} />
            </motion.div>
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Service;
