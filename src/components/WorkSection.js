import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export const WorkSection = () => {
    
  return (
    <>
      <FadeInWhenVisible>
        <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-10 mx-4">
          <FadeInWhenVisible>
            <li class="mb-10 ms-6">            
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-blue-900 dark:bg-gray-900">
                  <img src={require('../images/BetrBetaCompanyLogo.png')} className="rounded-xl h-5 mx-auto" alt="" />
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Software Developer Intern @ Betr Beta</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2024 - Mar 2024</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Betr Beta is a Digital Transformation Consultancy that provides Productivity Tools for software change management.</p>
            </li>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-blue-900 dark:bg-gray-900">
                  <img src={require('../images/boxgreen.png')} className="rounded-xl h-4 mx-auto" alt="" />
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer Intern @ Boxgreen</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2024 - Aug 2024</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Boxgreen creates and delivers tasty, natural snacks right to the doorstep of your home or office.</p>
            </li>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <li class="ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-blue-900 dark:bg-gray-900">
                  <img src={require('../images/deepverse.jpeg')} className="rounded-xl h-6 mx-auto" alt="" />
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Algorithms & Data Science Intern @ Deepverse<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Current</span></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2024 - Present</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Deepverse leverages cutting-edge technology to propel innovation in materials.</p>
            </li>
          </FadeInWhenVisible>
        </ol>
      </FadeInWhenVisible>
    </>
  )
}