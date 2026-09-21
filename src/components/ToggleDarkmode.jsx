import React from "react";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkmode = ({ isHero }) => {
  const { theme, setTheme } = useDarkMode();

  const options = [
    { mode: "light", icon: <FiSun size={14} />, label: "Light mode" },
    { mode: "dark", icon: <FiMoon size={14} />, label: "Dark mode" },
    { mode: "system", icon: <FiMonitor size={14} />, label: "System theme" },
  ];

  return (
    <div
      className={`flex items-center gap-1 p-1 rounded-xl border backdrop-blur-sm transition-all ${
        isHero
          ? "border-white/25 bg-white/10 text-white"
          : "border-violet-200 bg-white/70 text-slate-800 dark:border-zinc-800 dark:bg-zinc-900/80"
      }`}
    >
      {options.map(({ mode, icon, label }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            onClick={() => setTheme(mode)}
            aria-label={label}
            title={label}
            className={`p-1.5 rounded-lg transition-all ${
              isActive
                ? "bg-violet-600 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleDarkmode;