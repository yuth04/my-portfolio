import portfolio from "../assets/projects/portfolio.png";
import phone from "../assets/projects/phone_store.png";
import ten_11 from "../assets/projects/ten11.png";
import crud from "../assets/projects/crud.png";
import weather from "../assets/projects/weather.png";
import dashboard from "../assets/projects/dashboard.png";
import vendo from "../assets/projects/vendo.png";

import { FaReact, FaServer, FaDatabase, } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiNextdotjs, SiPostgresql, SiLaravel,SiCloudflare } from "react-icons/si";

export const projects = [
  {
    key: "Dashboard",
    image: dashboard,
    github: "https://github.com/yuth04/Vendo-api",
    demo: "https://dashboard-app-three-olive.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },

  {
    key: "Weather App",
    image: weather,
    github: "https://github.com/yuth04",
    demo: "https://weather-app-gamma-one-15.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "REST API", icon: FaServer }
    ]
  },

  {
    key: "E-commerce Website",
    image: ten_11,
    github: "https://github.com/yuth04",
    demo: "https://ten-11.vercel.app/",
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "CSS", icon: SiCss3 }
    ]
  },

  {
    key: "Full-Stack E-commerce Web Application",
    image: vendo,
    github: "https://github.com/yuth04",
    demo: "https://vendo-ecommerce-two.vercel.app/",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Laravel API", icon: SiLaravel },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "CSS", icon: SiCss3 },
      { name: "Cloud Service (SaaS)", icon: SiCloudflare },
      { name: "PostgreSQL", icon: SiPostgresql }
    ]
  },

  {
    key: "Product Filter App",
    image: phone,
    github: "https://github.com/yuth04",
    demo: "https://test-du1s.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "CSS", icon: SiCss3 }
    ]
  },

  {
    key: "CRUD Application (static)",
    image: crud,
    github: "https://github.com/yuth04",
    demo: "http://react-crud-eta-eight.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MySQL", icon: FaDatabase }
    ]
  },

  {
    key: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/yuth04",
    demo: "https://portfolio-phi-ten-qfj8ctdnfn.vercel.app",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  }
];