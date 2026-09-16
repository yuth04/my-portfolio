import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound"; // Import 404 Component

const VALID_SECTIONS = ["home", "about", "service", "project", "contact"];

const Home = () => {
  const { section } = useParams();

  const isValidSection =
    !section || VALID_SECTIONS.includes(section.toLowerCase());

  useEffect(() => {
    if (section && isValidSection) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [section, isValidSection]);

  if (!isValidSection) {
    return <NotFound />;
  }

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
