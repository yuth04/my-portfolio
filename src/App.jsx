import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import CustomCursor from "./components/CustomeCursor";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}
    >
      <CustomCursor />
      <Toaster position="top-right" />
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </div>
  );
};

export default App;
