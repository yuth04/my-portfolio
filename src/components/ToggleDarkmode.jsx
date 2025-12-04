import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleDarkmode = () => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? true : false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
        className="sr-only peer"
      />

      {/* Toggle Background */}
      <div className="w-[90px] h-[37px]  rounded-full relative after:absolute after:content-[''] after:w-[32px] after:h-[32px] after:top-[2px] after:left-[4px] after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500 dark:after:from-zinc-800 dark:after:to-black after:rounded-full after:transition-all after:duration-300 peer-checked:after:translate-x-[50px] shadow-md" />

      {/* SUN */}
      <FiSun
        size={16}
        className="absolute left-[12px] text-white transition-all peer-checked:opacity-60"
      />

      {/* MOON */}
      <FiMoon
        size={18}
        className="absolute right-[12px] text-black dark:text-white opacity-60 peer-checked:opacity-100 transition-all"
      />
    </label>
  );
};

export default ToggleDarkmode;
