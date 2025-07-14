import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const lists = [
    { key: "home", label: t("footer.links.home") },
    { key: "about", label: t("footer.links.about") },
    { key: "service", label: t("footer.links.service") },
    { key: "project", label: t("footer.links.project") },
    { key: "contact", label: t("footer.links.contact") },
  ];

  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div
        data-aos="zoom-in-up"
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
      >
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white">{t("footer.name")}</h2>
          <p className="mt-2 text-sm text-gray-400">{t("footer.tagline")}</p>
        </div>

        {/* Navigation Links */}
        <nav
          data-aos="zoom-in-up"
          className="flex flex-wrap justify-center gap-6 text-base font-medium"
          aria-label="Footer navigation"
        >
          {lists.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="hover:text-orange-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3
            data-aos="zoom-in-up"
            className="text-lg text-center font-semibold text-white mb-3"
          >
            {t("footer.social")}
          </h3>
          <div className="flex justify-center md:justify-end gap-5">
            <a
              data-aos="zoom-in-up"
              href="https://github.com/yuth04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full"
            >
              <FaGithub size={24} />
            </a>
            <a
              data-aos="zoom-in-up"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              data-aos="zoom-in-up"
              href="mailto:rakp0833@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-white transition-colors duration-300 p-2 rounded-full"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-10 text-center text-xs text-gray-500 max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Phearak YuTh. {t("footer.copyright")}</p>

        <a
          href="#top"
          aria-label="Back to top"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-orange-400 hover:text-white transition-colors duration-300 p-2 rounded-full"
          title={t("footer.back_to_top")}
        >
          <FaArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
