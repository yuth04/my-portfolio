import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }; 
  useEffect(()=>{
      AOS.init({duration:800, once:true})
    },[])
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Home />
    </div>
  );
};

export default App;
