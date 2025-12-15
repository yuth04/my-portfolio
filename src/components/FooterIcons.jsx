import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/share/16nUbygATd/?mibextid=wwXIfr",
    label: "Facebook",
    hover: "hover:bg-blue-600",
  },
  {
    icon: <FaTelegramPlane />,
    url: "https://t.me/yuth_04",
    label: "Telegram",
    hover: "hover:bg-sky-500",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/yuth_004?igsh=cHQ0Y3N2NjZhbHZi&utm_source=qr",
    label: "Instagram",
    hover: "hover:bg-pink-500",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/yuth04",
    label: "GitHub",
    hover: "hover:bg-gray-800",
  },
];

const FooterIcons = () => {
  return (
    <>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`w-10 h-10 flex items-center justify-center
                      rounded-full bg-gray-700 text-white
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-lg
                      ${item.hover}`}
        >
          {item.icon}
        </a>
      ))}
    </>
  );
};

export default FooterIcons;
