import React from "react";
import { useTranslation } from "react-i18next";
import FooterIcons from "./FooterIcons";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Make sure to: npm install framer-motion
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import  {containerVariants, itemVariants}  from "./motion";
const linkIcons = {
  home: <Home size={16} />,
  about: <User size={16} />,
  service: <Briefcase size={16} />,
  project: <FolderOpen size={16} />,
  contact: <Mail size={16} />,
};

const Footer = () => {
  const { t } = useTranslation();

  const lists = [
    { key: "home", label: t("footer.links.home") },
    { key: "about", label: t("footer.links.about") },
    { key: "service", label: t("footer.links.service") },
    { key: "project", label: t("footer.links.project") },
    { key: "contact", label: t("footer.links.contact") },
  ];


  // const containerVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       staggerChildren: 0.15, 
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animates when 20% of footer is visible
        variants={containerVariants}
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="flex-1">
          <h2 className="text-3xl font-extrabold text-purple-500">
            {t("footer.name")}
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            {t("footer.tagline")}
          </p>
          <div className="mt-6 flex gap-3">
            <FooterIcons />
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={itemVariants} className="flex-1">
          <div className="flex items-center mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-purple-500 ml-3 rounded" 
            />
          </div>

          <nav className="flex flex-col gap-4 text-sm font-medium">
            {lists.map((item) => (
              <motion.a
                key={item.key}
                href={`#${item.key}`}
                whileHover={{ x: 5 }} // Small nudge on hover
                className="group flex items-center w-fit gap-3 text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <span className="text-purple-400/70 group-hover:text-purple-500 transition-colors">
                  {linkIcons[item.key]}
                </span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className="flex-1">
          <div className="flex items-center mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Get In Touch
            </h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-purple-500 ml-3 rounded" 
            />
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:youremail@example.com"
              className="group flex items-center w-fit gap-3 hover:text-purple-500 transition-colors"
            >
              <Mail size={16} className="text-purple-400/70 group-hover:text-purple-500" />
              <span>youremail@example.com</span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+85512345678"
              className="group flex items-center w-fit gap-3 hover:text-purple-500 transition-colors"
            >
              <Phone size={16} className="text-purple-400/70 group-hover:text-purple-500" />
              <span>+855 12 345 678</span>
            </motion.a>

            <div className="flex items-center gap-3 w-fit">
              <MapPin size={16} className="text-purple-500" />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-t border-gray-800 mt-16 pt-8 relative max-w-7xl mx-auto px-6 text-center"
      >
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Phearak YuTh. {t("footer.copyright")}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;