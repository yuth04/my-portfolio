import { useState, useEffect } from "react";

const useNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState("home");
  const [isHero, setIsHero] = useState(true);

  const sections = ["home", "about", "service", "project", "contact"];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Detect Hero section
  useEffect(() => {
    const handleHeroCheck = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollPos = window.scrollY + 80;

      setIsHero(scrollPos < heroBottom);
    };

    window.addEventListener("scroll", handleHeroCheck);
    handleHeroCheck();

    return () => window.removeEventListener("scroll", handleHeroCheck);
  }, []);

  // Detect active section
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Change document title
  // useEffect(() => {
  //   document.title = activeSection
  //     ? `${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} | My Portfolio`
  //     : "My Portfolio";
  // }, [activeSection]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    isMobile,
    activeSection,
    isHero,
    scrollTo,
    sections,
  };
};

export default useNavBar;
