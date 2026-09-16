import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkmode = ({ isHero }) => {
  const { dark, setDark } = useDarkMode();

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`h-9 w-10 grid place-items-center rounded-xl border
                  backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(124,58,237,0.25)]
                  transition-all duration-200
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-violet-400
                  ${
                    isHero
                      ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                      : "border-violet-200 bg-white/70 text-slate-800 hover:border-violet-400 hover:bg-white"
                  }`}
    >
      {dark ? <FiMoon size={15} /> : <FiSun size={15} />}
    </button>
  );
};

export default ToggleDarkmode;
