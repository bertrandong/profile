import React, { useState } from "react";
import Lottie from "lottie-react";
import scrollAnimation from "./assets/Animation - 1701850459556.json";
import upAnimation from "./assets/upAnimation.json";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { SkillsSection } from "./components/SkillsSection";
import { WorkSection } from "./components/WorkSection";
import { FaBars } from "react-icons/fa";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { Tabs } from "./components/Tabs";
import { ContactSection } from "./components/ContactSection";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark' : '' }>
      <main className="px-8 bg-slate-100 dark:bg-gray-900">
        <header className="sticky top-0 z-50 bg-slate-100 dark:bg-gray-900">
          <nav className="py-3 mb-8 flex justify-between items-center">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <h1 className="text-3xl font-bold font-silkscreen dark:text-white"><a href="#">BERTRAND</a></h1>
                <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none dark:text-white"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <FaBars />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <Tabs />
                </div>
                <div
                  className={
                    "lg:flex max-lg:flex-grow items-center justify-center" +
                    (navbarOpen ? "flex" : " hidden")
                  }
                >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-5 text-center items-center">
                  <li className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 my-1 lg:hidden"><a href="#about">About</a></li>
                  <li className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 my-1 lg:hidden"><a href="#skills">Skills</a></li>
                  <li className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 my-1 lg:hidden"><a href="#portfolio">Portfolio</a></li>
                  <li className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 my-1 lg:hidden"><a href="#experience">Experience</a></li>
                  <li className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 my-1 lg:hidden"><a href="#contact">Contact</a></li>
                  <li className="my-1"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/></li>
                  <li className="my-3"><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href={require('./images/Ong Chang Heng Bertrand_CV.pdf')} rel="noreferrer" target="_blank">Resume</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section className="min-h-screen" id="home">
          <div className="text-center p-6">
            <motion.h2
              className="text-5xl py-2 text-teal-600 font-medium dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 }}}
              viewport={{ once: true, amount: 0.5 }}
            >
              Bertrand Ong
            </motion.h2>
            <motion.h3 className="text-2xl py-2 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 }}}
              viewport={{ once: true, amount: 0.5 }}
            >
              Computer Science Undergraduate
            </motion.h3>
            <motion.p 
              className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 }}}
              viewport={{ once: true, amount: 0.5 }}
            >
              I am interested in 
              <Typewriter onInit={(typewriter) => {
                typewriter
                  .typeString(' Software Engineering.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Blockchain Technology.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Artificial Intelligence.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Photography.')
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
              }} options={{loop:true}}/>
            </motion.p>
          </div>

          <motion.div
            className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.7, duration: 0.5 }}}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AiFillLinkedin onClick={() => window.open('https://www.linkedin.com/in/bertrandoch/', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <AiFillGithub onClick={() => window.open('https://github.com/bertrandong', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <AiFillInstagram onClick={() => window.open('https://instagram.com/bertshitt', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <SiDevpost onClick={() => window.open('https://devpost.com/bertrandong', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
          </motion.div>

          <motion.div 
            className="w-80 h-80 mt-12 mb-6 mx-auto justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 2.5, duration: 0.5 }}}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={require('./images/profilephoto.jpg')} className="rounded-full" alt="" />
          </motion.div>

          <motion.a 
            href="#about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 2.6, duration: 0.5 }}}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Lottie animationData={scrollAnimation} className="w-24 mx-auto" />
          </motion.a>
        </section>

        <section className="md:px-24 pt-11" id="about">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-gray-600 pt-10 dark:text-gray-300">Get to Know</h3>
              <h3 className="text-3xl dark:text-white">About Me</h3>
            </div>
          </FadeInWhenVisible>
          <AboutSection />
        </section>

        <section className="md:px-24 pt-11" id="skills">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-gray-600 pt-10 dark:text-gray-300">What I've Acquired</h3>
              <h3 className="text-3xl dark:text-white">Skills</h3>
            </div>
          </FadeInWhenVisible>
          <SkillsSection />
        </section>

        <section className="md:px-24 pt-11" id="portfolio">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-gray-600 pt-10 dark:text-gray-300">What I've Done</h3>
              <h3 className="text-3xl dark:text-white">My Porfolio</h3>
            </div>
          </FadeInWhenVisible>
          <PortfolioSection />
        </section>

        <section className="md:px-24 pt-11" id="experience">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-gray-600 pt-10 dark:text-gray-300">Past Internships</h3>
              <h3 className="text-3xl dark:text-white">Experience</h3>
            </div>
          </FadeInWhenVisible>
          <WorkSection />
        </section>

        <section className="md:px-24 pt-20" id="contact">
          <FadeInWhenVisible>
            <div>
              <h3 className="text-gray-600 dark:text-gray-300">Get In Touch</h3>
              <h3 className="text-3xl dark:text-white">Contact</h3>
            </div>
          </FadeInWhenVisible>
          <ContactSection />
        </section>
        
        <FadeInWhenVisible>
          <a href="#"><Lottie animationData={upAnimation} className="w-12 mx-auto pb-4" /></a>
        </FadeInWhenVisible>
        {/* <Lottie animationData={mascotAnimation} className="w-48 mx-auto dark:text-white" /> */}
      </main>

      <footer className="text-center py-10 bg-indigo-100 text-black dark:bg-gray-700 dark:text-white">
        <h1 className="font-bold text-2xl">BERTRAND</h1>
        <p>&copy; Bertrand Ong. All rights reserved, 2023.</p>
      </footer>
    </div>
  );
}

export default App;