import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export const SkillsSection = () => {
    
  return (
    <>
      <div>
        <FadeInWhenVisible>
          <h3 className="py-3 font-silkscreen text-xl dark:text-gray-300">Coding Languages</h3>
          <div>
            <img src={require('../images/html-5.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/css-3.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/java.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/js.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block mr-2" alt="" />
            <img src={require('../images/python.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/sql-server.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h3 className="py-3 font-silkscreen text-xl dark:text-gray-300">Frameworks</h3>
          <div>
            <img src={require('../images/tailwind-css.png')} className="py-3 w-24 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/reactjs.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/mongodb.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block mr-2" alt="" />
            <img src={require('../images/nodejs.png')} className="py-3 w-64 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/expressjs.png')} className="py-3 w-32 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/postgresql.png')} className="py-3 w-20 h-28 hover:scale-105 inline-block" alt="" />
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h3 className="py-3 font-silkscreen text-xl dark:text-gray-300">Integrated Development Environments</h3>
          <div>
            <img src={require('../images/vscode.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
            <img src={require('../images/intellij.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block mr-1" alt="" />
            <img src={require('../images/vim.png')} className="py-3 w-20 h-24 hover:scale-105 inline-block" alt="" />
          </div>
        </FadeInWhenVisible>
      </div>
    </>
  )
}