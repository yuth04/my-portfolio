import React from "react";
import { FaGithub, FaGitAlt, FaFigma, FaChrome, FaCode } from "react-icons/fa";
import { SiPostman,  SiVercel,  SiIntellijidea, } from "react-icons/si";

const tools = [
{ name: "VS Code", icon: <FaCode className="text-blue-500" /> },
{ name: "Figma", icon: <FaFigma className="text-pink-500" /> },
{ name: "Git", icon: <FaGitAlt className="text-red-500" /> },
{ name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
{ name: "Chrome DevTools", icon: <FaChrome className="text-yellow-400" /> },
{ name: "Postman", icon: <SiPostman className="text-orange-500" /> },
{ name: "Vercel", icon: <SiVercel className="text-black" /> },
{ name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-700" /> },
// { name: "Power BI", icon: <SiPowerbi className="text-yellow-600" /> },
,
];

const Tools = () => {
  return (
    <div className="my-8">
       <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                Tools
              </h3>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, index) => (
          <span
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                       text-white
                       backdrop-blur-md
                       transition-all duration-300
                       bg-purple-400
                       hover:shadow-xl"
          >
            {tool.icon}
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tools;
