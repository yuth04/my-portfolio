import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./data";
import { useTranslation } from "react-i18next";
import { ChevronsDown } from "lucide-react";
// import { containerVariants, itemVariants } from "./motion";
import { motion } from "framer-motion";
const Project = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProjects = isExpanded ? projects : projects.slice(0, 6);
  const toggleProjects = () => setIsExpanded((prev) => !prev);

  return (
    <section
      id="project"
      className="bg-gray-100 dark:bg-gray-800 min-h-screen px-6 md:px-12 py-20 transition-colors duration-300"
    >
      {/* header */}
      <div className="text-center mb-10" data-aos="fade-up">
        <div className="flex items-center justify-center mb-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[2px] bg-purple-500 mr-3 rounded"
          ></motion.div>
          <h3 className="text-sm font-medium uppercase tracking-widest">
            {t("project.my_project")}
          </h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[2px] bg-purple-500 ml-3 rounded"
          ></motion.div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-white">
          {t("project.frontend_title")}
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleProjects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/60
                 rounded-2xl overflow-hidden
                 transition-all duration-300 hover:-translate-y-1
                 hover:border-gray-300 dark:hover:border-gray-600"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-36">
              <img
                src={project.image}
                alt={project.key}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Badge */}
              <div
                className="absolute bottom-2.5 left-3 flex items-center gap-1.5
                        bg-black/40 backdrop-blur-sm border border-white/15
                        px-2.5 py-1 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-medium text-white tracking-wide">
                  {t(`project.items.${project.key}.status`)}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white leading-tight">
                  {project.key}
                </h4>
              </div>

              <p
                className="w-full overflow-hidden whitespace-nowrap text-sm
                      text-gray-500 dark:text-gray-400 mb-3"
              >
                <span className="marquee">
                  {t(`project.items.${project.key}.description`)}
                </span>
              </p>

              <div className="border-t border-gray-100 dark:border-gray-800 my-2.5" />

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={i}
                      title={tech.name}
                      className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400
                           bg-gray-100 dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           px-2 py-0.5 rounded-md"
                    >
                      <Icon size={11} />
                      {tech.name}
                    </span>
                  );
                })}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400
                       hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={13} /> {t("project.github")}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold
                       text-purple-500 hover:underline"
                >
                  {t("project.live_demo")} <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More / Less */}
      {projects.length > 6 && (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="flex justify-center items-center py-6"
        >
          <motion.button
            onClick={toggleProjects}
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
                y: {
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
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

export default Project;
