import portfolio from '../assets/projects/portfolio.png';
import phone from '../assets/projects/phone_store.png';
import ten_11 from '../assets/projects/ten11.png';
import crud from '../assets/projects/crud.png';
import weather from '../assets/projects/weather.png';
import dashboard from '../assets/projects/dashboard.png';

import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiCss3, SiBootstrap } from "react-icons/si";

export const projects = [
  {
    key: "Dashboard",
    image: dashboard,
    github: "https://github.com/yuth04",
    demo: "https://dashboard-app-three-olive.vercel.app/",
    tech: [
      { name: "React", icon:FaReact },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    key: "ecommerce",
    image: ten_11,
    github: "https://github.com/yuth04",
    demo: "https://ten-11.vercel.app/",
    tech: [
      { name: "Html", icon: SiHtml5 },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Css", icon: SiCss3 }
    ]
  },
  {
    key: "phone",
    image: phone,
    github: "https://github.com/yuth04",
    demo: "https://test-du1s.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Css", icon: SiCss3}
    ]
  },
  {
    key: "crud",
    image: crud,
    github: "https://github.com/yuth04",
    demo: "http://react-crud-eta-eight.vercel.app/",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Mysql", icon: FaDatabase  }
    ]
  },
  {
    key: "weather app",
    image: weather,
    github: "https://github.com/yuth04",
    demo: "https://weather-app-gamma-one-15.vercel.app/",
    tech: [
      { name: "React", icon: FaReact  },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "API", icon: FaServer }
    ]
  },
  {
    key: "portfolio",
    image: portfolio,
    github: "https://github.com/yuth04",
    demo: "https://portfolio-phi-ten-qfj8ctdnfn.vercel.app",
    tech: [
      { name: "React", icon: FaReact},
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
];
