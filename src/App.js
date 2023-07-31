import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillFire } from "react-icons/ai";
import { FaGraduationCap, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaJava, FaTelegram, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md"
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si"
import { IoIosMail } from "react-icons/io"
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Bertrand</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='#'>Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-white">Bertrand Ong</h2>
            <h3 className="text-2xl py-2 dark:text-white">Computer Science Undergraduate</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              I am interested in 
              <Typewriter onInit={(typewriter) => {
                typewriter
                  .typeString(' Software Engineering.')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Blockchain Techonology.')
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
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillLinkedin onClick={() => window.open('https://www.linkedin.com/in/bertrandoch/', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <AiFillGithub onClick={() => window.open('https://github.com/bertrandong', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <AiFillInstagram onClick={() => window.open('https://instagram.com/bertshitt', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
            <AiFillFacebook onClick={() => window.open('https://www.facebook.com/bertrand.ong.75/', '_blank')} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-400" />
          </div>

          <div className="w-80 h-80 mt-20 relative mx-auto">
            <img src={require('./images/profilephoto.jpg')} className="rounded-full" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-gray-600 pt-10 dark:text-gray-300">Get to Know</h3>
            <h3 className="text-3xl dark:text-white">About Me</h3>
          </div>

          <div className="flex">
            <div>
              <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Since young, I have been very passionate about solving problems.</p>
              <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Ever since I created my very first website, I have been obsessed with the idea of programming. I believe programming provides us with the ability to create solutions and solve real world problems.</p>
              <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Outside of work, I enjoy playing a fun session of Squash with my friends. I am always interested in picking up new hobbies, such as photography and baking.</p>
            </div>

          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <div className="flex justify-center pb-5 dark:text-white">
                <FaGraduationCap className="text-5xl"/>
              </div>
              <h3 className="py-1 font-medium dark:text-white">Education</h3>
              <p className="text-gray-800 py-1 dark:text-gray-300">National University of Singapore</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Bachelor of Computing (BsC) in Computer Science</p>
            </div>
          
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <div className="flex justify-center pb-5 dark:text-white">
                <AiFillFire className="text-5xl"/>
              </div>
              <h3 className="py-1 font-medium dark:text-gray-300">Interests</h3>
              <p className="text-gray-800 py-1 dark:text-gray-300">Blockchain Techonology, Artificial Intelligence, Startups & Entrepreneurship</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <div className="flex justify-center pb-5 dark:text-white">
                <MdVolunteerActivism className="text-5xl"/>
              </div>
              <h3 className="py-1 font-medium dark:text-gray-300">Co-Curricular Activities</h3>
              <p className="text-gray-800 py-1 dark:text-gray-300">Squash, Swimming, Photography & Volunteering</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-gray-600 pt-10 dark:text-gray-300">Skills Acquired</h3>
            <h3 className="text-3xl dark:text-white">Experience</h3>
          </div>

          <div className="lg:flex gap-10">
            <div className="p-10 rounded-xl my-10 flex-1 bg-orange-50 dark:bg-gray-700">
              <h3 className="text-2xl text-center dark:text-white">Frontend</h3>
              <div className="grid grid-cols-2 gap-5 p-10 dark:text-white">
                <div className="flex">
                  <FaHtml5 className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      HTML
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <FaCss3Alt className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      CSS
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <FaReact className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      React
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <BiLogoTailwindCss className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      TailwindCSS
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-xl my-10 flex-1 bg-orange-50 dark:bg-gray-700">
              <h3 className="text-2xl text-center dark:text-white">Backend</h3>
              <div className="grid grid-cols-2 gap-5 p-10 dark:text-white">
                <div className="flex">
                  <FaNodeJs className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      NodeJs
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <SiExpress className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      Express
                    </h4>
                    <small className="text-gray-60 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <SiMongodb className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      MongoDB
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <SiJavascript className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      Javascript
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <FaJava className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      Java
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Experienced</small>
                  </div>
                </div>
                <div className="flex">
                  <FaPython className="text-5xl"/>
                  <div className="ml-2">
                    <h4>
                      Python
                    </h4>
                    <small className="text-gray-600 dark:text-gray-300">Intermediate</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-gray-600 pt-10 dark:text-gray-300">What I've Done</h3>
            <h3 className="text-3xl dark:text-white">My Porfolio</h3>
          </div>

          <div className="lg:flex gap-10 w-1/3">
            <div className="flex-1 bg-orange-50 rounded-xl p-10 my-10 hover:bg-orange-100 duration-500 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-800" onClick={() => window.open('https://pocketplanner.vercel.app/', '_blank')}>
            <img src={require('./images/pocketplanner.png')} className="rounded-xl" />
            <h4 className="text-xl mt-5 font-semibold dark:text-white">PocketPlanner</h4>
            <p className="text-gray-600 dark:text-gray-300">A web app focused to help people organise their day better</p>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-1">
          <div>
            <h3 className="text-gray-600 dark:text-gray-300">Get In Touch</h3>
            <h3 className="text-3xl dark:text-white">Contact</h3>
          </div>

          <div className="lg:flex gap-5  dark:text-white">
            <div className="flex-1 bg-orange-50 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
              <div className="flex justify-center">
                <IoIosMail className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">bertrandoch@gmail.com</p>
            </div>

            <div className="flex-1 bg-orange-50 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
              <div className="flex justify-center">
                <FaTelegram className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Telegram</h4>
              <p className="text-gray-600 dark:text-gray-300">@bertshitt</p>
            </div>

            <div className="flex-1 bg-orange-50 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
              <div className="flex justify-center">
                <FaDiscord className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Discord</h4>
              <p className="text-gray-600 dark:text-gray-300">Frostic#3654</p>
            </div>

            <div className="flex-1 bg-orange-50 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
              <div className="flex justify-center">
                <FaWhatsapp className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">WhatsApp</h4>
              <p className="text-gray-600 dark:text-gray-300">+65 9320 2710</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-10 bg-teal-700 text-white dark:bg-gray-900">
        <h1 className="font-bold text-2xl">BERTRAND</h1>
        <p>&copy; Bertrand Ong. All rights reserved, 2023.</p>
      </footer>
    </div>
  );
}

export default App;