import React from 'react';
import {
  FaLaptopCode,
  FaDatabase,
  FaPenNib,
  FaTools,
  FaRegFileCode,
  FaServer,
  FaBug,
  FaCloud,
  FaPlug,
} from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      title: 'Debugging & Testing',
      icon: <FaBug className="text-2xl text-orange-400" />,
      description: 'Identify and fix issues to ensure smooth and bug-free performance.',
    },
    {
      title: 'Database Management',
      icon: <FaDatabase className="text-2xl text-orange-400" />,
      description: 'Design, manage, and optimize data systems for efficient storage and access.',
    },
    {
      title: 'UI Design',
      icon: <FaPenNib className="text-2xl text-orange-400" />,
      description: 'Craft visually engaging and user-friendly interfaces with modern design trends.',
    },
    {
      title: 'Technical Support',
      icon: <FaTools className="text-2xl text-orange-400" />,
      description: 'Quick and reliable technical assistance to keep your project running smoothly.',
    },
    {
      title: 'Custom Coding',
      icon: <FaRegFileCode className="text-2xl text-orange-400" />,
      description: 'Tailored code solutions to match unique project requirements and workflows.',
    },
    {
      title: 'Cloud Deployment',
      icon: <FaCloud className="text-2xl text-orange-400" />,
      description: 'Deploy and scale web applications seamlessly using modern cloud platforms.',
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-2xl text-orange-400" />,
      description: 'Build dynamic, responsive, and high-performing websites using modern tech.',
    },
    {
      title: 'Back-End',
      icon: <FaServer className="text-2xl text-orange-400" />,
      description: 'Connect front-end with robust server-side logic and databases efficiently.',
    },
    {
      title: 'API Development',
      icon: <FaPlug className="text-2xl text-orange-400" />,
      description: 'Design and build scalable APIs to power your applications and integrations.',
    },
  ];

  return (
    <section id='service' className=" dark:bg-gray-900 px-12 py-20 text-black dark:text-white transition-colors duration-300">
      
      <div className="flex items-center mb-2 justify-center" data-aos="zoom-in-up">
        <div className="w-16 h-px bg-orange-400 mr-3"></div>
        <h3 className="text-orange-400 text-sm font-medium text-center">MY SERVICES</h3>
        <div className="w-16 h-px bg-orange-400 ml-3"></div>
      </div>

      <h3 data-aos="zoom-in-up" className="text-3xl font-bold mb-10 text-center">What Can I Do</h3>

      {/* Card Grid */}
      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
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
    </section>
  );
};

export default Service;
