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

  // Apply dark mode to <html>
//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
        className="sr-only peer"
      />

      {/* Toggle Background */}
      <div className="w-[100px] h-[40px]  rounded-full relative after:absolute after:content-[''] after:w-[36px] after:h-[36px] after:top-[2px] after:left-[2px] after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500 dark:after:from-zinc-800 dark:after:to-black after:rounded-full after:transition-all after:duration-300 peer-checked:after:translate-x-[60px] shadow-md" />

      {/* SUN */}
      <FiSun
        size={18}
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
