import React from "react";

export const WorkSection = () => {
    
  return (
    <div className="rounded-xl bg-indigo-100 p-10 mt-10 dark:bg-gray-700">
      <img src={require('./images/BetrBetaCompanyLogo.png')} className="rounded-xl h-20 mx-auto" />
      <h4 className="text-xl mt-5 font-semibold dark:text-white">Betr Beta</h4>
      <div className="flow-root">
        <p className="text-gray-600 dark:text-gray-300 italic float-left">Software Developer Intern</p>
        <p className="text-gray-600 dark:text-gray-300 italic float-right">Jan 2024 - Mar 2024</p>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Betr Beta is a Digital Transformation Consultancy that provides Productivity Tools for software change management.</p>
    </div>
  )
}