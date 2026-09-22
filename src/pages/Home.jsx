import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import AboutPage from "./About";
import ServicePage from "./Service";
import ProjectPage from "./Project";
import ContactPage from "./Contact";
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
        <AboutPage />
      </section>
      <section id="service">
        <ServicePage />
      </section>
      <section id="project">
        <ProjectPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>

    </>
  );
};

export default Home;
