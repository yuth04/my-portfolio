import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import Navbar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import SmoothScrollProvider from "./providers/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <SmoothScrollProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </SmoothScrollProvider>
  );
};

export default App;
