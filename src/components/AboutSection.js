import React from "react";
import { AiFillFire } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md"
import FadeInWhenVisible from "./FadeInWhenVisible";

export const AboutSection = () => {
    
  return (
    <>
      <div className="lg:flex">
        <div className="lg:mr-28 max-md:pb-6">
          <FadeInWhenVisible>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Since young, I have been very active in the Math Olympiad scene, participating in various competitions. That was when I realised I enjoyed problem solving.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Ever since I created my very first website, I have been obsessed with the idea of programming. I believe programming provides us with the ability to create solutions and solve real world problems.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">I am deeply passionate about fields like Software Engineering, Artificial Intelligence and Web Development, and hope to be able to turn this interest into solutions for people in the future.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-300">Outside of work, I enjoy playing a fun session of Squash with my friends. I am always interested in picking up new hobbies, such as photography and baking.</p>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <img src={require('../images/aboutphoto.jpg')} className="w-special h-auto rounded-3xl" alt="" />
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
            <div className="flex justify-center pb-5 dark:text-white">
              <FaGraduationCap className="text-5xl"/>
            </div>
            <h3 className="py-1 font-medium dark:text-white">Education</h3>
            <p className="text-gray-800 py-1 dark:text-gray-300">National University of Singapore</p>
            <p className="text-gray-800 py-1 dark:text-gray-300">Bachelor of Computing (BComp) in Computer Science</p>
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
      </FadeInWhenVisible>
    </>
  )
}