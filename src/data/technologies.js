import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const tech = [
  {
    label: "Basics",
    skills: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-orange-500",
        bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20",
      },
      {
        name: "CSS3",
        icon: SiCss3,
        color: "text-blue-500",
        bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10 hover:bg-yellow-400/20 border-yellow-400/20",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
        bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20",
      },
    ],
  },

  {
    label: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/20",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-700 dark:text-white",
        bg: "bg-gray-500/10 hover:bg-gray-500/20 border-gray-500/20",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-teal-400",
        bg: "bg-teal-400/10 hover:bg-teal-400/20 border-teal-400/20",
      },
    ],
  },

  {
    label: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "text-red-500",
        bg: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10 hover:bg-indigo-400/20 border-indigo-400/20",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-500",
        bg: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-300",
        bg: "bg-gray-500/10 hover:bg-gray-500/20 border-gray-500/20",
      },
    ],
  },

  {
    label: "Database",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-600",
        bg: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-sky-500",
        bg: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
        bg: "bg-green-400/10 hover:bg-green-400/20 border-green-400/20",
      },
    ],
  },

  {
    label: "Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
        bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-700 dark:text-white",
        bg: "bg-gray-500/10 hover:bg-gray-500/20 border-gray-500/20",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "text-blue-500",
        bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
        bg: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20",
      },
      // {
      //   name: "Figma",
      //   icon: SiFigma,
      //   color: "text-pink-500",
      //   bg: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/20",
      // },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-purple-500",
        bg: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "text-blue-400",
        bg: "bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20",
      },
    ],
  },
];

export default tech;