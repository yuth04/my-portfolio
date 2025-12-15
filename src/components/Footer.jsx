import React from "react";
import { useTranslation } from "react-i18next";
import FooterIcons from './FooterIcons';
import { FaArrowUp } from "react-icons/fa";

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
    <footer className="bg-gray-8s00 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-purple-500">{t("footer.name")}</h2>
          <p className="mt-2 text-sm text-gray-400">{t("footer.tagline")}</p>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-medium"
          aria-label="Footer navigation"
        >
          {lists.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="hover:text-purple-500 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-4">{t("footer.social")}</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <FooterIcons />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-16 text-center text-xs text-gray-500 max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Phearak YuTh. {t("footer.copyright")}</p>

        <a
          href="#top"
          aria-label="Back to top"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-purple-500 hover:text-white transition-colors duration-300 p-2 rounded-full"
          title={t("footer.back_to_top")}
        >
          <FaArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
