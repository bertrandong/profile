import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const portfolioItems = [
    {
      title: "Coder's Digest",
      description: "Built with Wix.",
      imageUrl: require('../images/codersdigest.png'),
      link: 'https://bertrandong.wixsite.com/codersdigest',
      overlay: "A blog to share my experiences, reflections and what I've learned as a student or as an engineer.",
    },
    {
      title: "PocketPlanner",
      description: "Built with MongoDB, ExpressJS, ReactJS and NodeJS.",
      imageUrl: require('../images/pocketplanner.png'),
      link: 'https://github.com/bertrandong/pocketplan',
      overlay: "A fullstack web app focused to help people better organise their day. This was my very first project as part of NUS's Orbital Programme in the Summer of 2023.",
    },
    {
      title: "Volunteer Management System",
      description: "Built with MongoDB, ExpressJS, ReactJS and NodeJS.",
      imageUrl: require('../images/h4g.png'),
      link: 'https://github.com/sopa301/h4g',
      overlay: "This was my final product for the Hack4Good Hackathon 2024, a fullstack web application to help the beneficiary (Big At Heart) track event participants and their attendance.",
    },
    {
      title: "Strack.io",
      description: "Built with Java, JavaFX, JUnit5.",
      imageUrl: require('../images/strack.png'),
      link: 'https://github.com/AY2324S2-CS2103T-T08-2/tp',
      overlay:"Strack.io is a desktop application for managing customer information and orders. While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface). Strack.io is designed to cater to all home bakers' needs, be it creating your menu, recording of customer information, or even tracking of orders.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <div 
          key={index} 
          className="relative bg-indigo-100 rounded-xl p-10 mt-10 overflow-hidden hover:bg-indigo-200 duration-500 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-800" 
          onMouseEnter={() => handleMouseEnter(index)} 
          onMouseLeave={handleMouseLeave}
          onClick={() => window.open(item.link, '_blank')}
        >
          <FadeInWhenVisible>
            <img src={item.imageUrl} className="rounded-xl mx-auto" alt={item.title} />
            <h4 className="text-xl mt-5 font-semibold dark:text-white">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-gray-700 bg-opacity-90 flex items-center justify-center text-white rounded-xl p-4"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mx-10 text-center">{item.overlay}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeInWhenVisible>
        </div>
      ))}
    </div>
  );
};
