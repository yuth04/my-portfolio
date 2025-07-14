import React, { useState } from "react";
import {
  FaCode,
  FaTasks,
  FaLaptop,
  FaQuestionCircle,
  FaUserAlt,
  FaWrench,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaPlug,
  FaHandshake,
  FaComments,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "Basic Web Development",
      icon: <FaCode className="text-2xl text-orange-400" />,
      description:
        "Assist in creating and maintaining simple websites using HTML, CSS, and JavaScript.",
    },
    {
      title: "Task Management",
      icon: <FaTasks className="text-2xl text-orange-400" />,
      description:
        "Follow assigned tasks, document progress, and collaborate with senior developers.",
    },
    {
      title: "Version Control (Git)",
      icon: <FaLaptop className="text-2xl text-orange-400" />,
      description:
        "Learn and use Git & GitHub for tracking code changes and team collaboration.",
    },
    {
      title: "Learning New Tools",
      icon: <FaQuestionCircle className="text-2xl text-orange-400" />,
      description:
        "Explore frameworks like React or Bootstrap under mentorship guidance.",
    },
    {
      title: "Professional Communication",
      icon: <FaUserAlt className="text-2xl text-orange-400" />,
      description:
        "Develop soft skills by communicating with mentors and team members clearly.",
    },
    {
      title: "Bug Reporting & Feedback",
      icon: <FaWrench className="text-2xl text-orange-400" />,
      description:
        "Help identify UI issues, test features, and provide feedback to the development team.",
    },

    {
      title: "Technical Support",
      icon: <FaTools className="text-2xl text-orange-400" />,
      description:
        "Quick and reliable technical assistance to keep your project running smoothly.",
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-2xl text-orange-400" />,
      description:
        "Build dynamic, responsive, and high-performing websites using modern tech.",
    },
    {
      title: "Basic Back-End",
      icon: <FaServer className="text-2xl text-orange-400" />,
      description:
        "Connect front-end with robust server-side logic and databases efficiently.",
    },
    {
      title: "Basic Rest-API",
      icon: <FaPlug className="text-2xl text-orange-400" />,
      description:
        "Design and build scalable APIs to power your applications and integrations.",
    },
    {
      title: "Team Collaboration",
      icon: <FaHandshake className="text-2xl text-blue-500" />,
      description:
        "Work effectively within teams, ensuring smooth communication and shared goals.",
    },
    {
      title: "Communication",
      icon: <FaComments className="text-2xl text-blue-500" />,
      description:
        "Convey ideas clearly to both technical and non-technical audiences, enhancing teamwork.",
    },
    {
      title: "Problem Solving",
      icon: <FaLightbulb className="text-2xl text-blue-500" />,
      description:
        "Apply creative and logical thinking to resolve challenges and improve solutions.",
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleService = isExpanded ? services : services.slice(0, 6);

  const ServiceToggle = () => setIsExpanded((prev) => !prev);
  return (
    <section
      id="service"
      className=" dark:bg-gray-900 px-12 py-20 text-black dark:text-white transition-colors duration-300"
    >
      <div
        className="flex items-center mb-2 justify-center"
        data-aos="zoom-in-up"
      >
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">
          MY SERVICES
        </h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h3
        data-aos="zoom-in-up"
        className="text-3xl font-bold mb-10 text-center"
      >
        What Can I Do
      </h3>

      {/* Card Grid */}
      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleService.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group relative bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center items-center text-4xl text-orange-400 mb-4">
              {service.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>

            <p className="absolute inset-0 bg-black bg-opacity-80 text-gray-200 dark:text-white opacity-0 group-hover:opacity-100 flex items-center justify-center p-6 text-sm rounded-lg transition-opacity duration-500">
              {service.description}
            </p>
          </div>
        ))}
       
      </div>
       <div className="flex justify-center items-center py-6">
          <button
            data-aos="zoom-out"
            onClick={ServiceToggle}
            className=" group flex items-center gap-2 px-8 py-3 text-black bg-white shadow-lg rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            {isExpanded ? "See Less" : "Show More"}
            <FaArrowRight
              size={14}
              className={`transition-transform duration-300 ${
                isExpanded ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>
    </section>
  );
};

export default Service;
