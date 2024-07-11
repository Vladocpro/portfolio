import React from 'react';
import Svg from "./Svg";
import useActiveSection from "../zustand/PageNavigation";
import {navigateToSection} from "../constants";

const Navbar = () => {

   const {activeSection} = useActiveSection()


   return (
       <div className="hidden xl:flex flex-col fixed justify-between left-10 top-10 bottom-10 w-10 z-10">
         <div className="flex flex-col items-center gap-5">
            <Svg icon="linkedin" color="white" size="w-[30px]"/>
            <Svg icon="github" color="white" size="w-[30px]"/>
            <Svg icon="cv" color="white" size="w-[30px]"/>
         </div>
          <div className="flex flex-col items-center gap-10">
             <span onClick={() => navigateToSection("about")}  className={`${activeSection === "about" ? "text-red-500 translate-x-2" : ""} navbar__sections cursor-pointer transition-all duration-300 font-medium`}>About</span>
             <span onClick={() => navigateToSection("skills")} className={`${activeSection === "skills" ? "text-red-500 translate-x-2" : ""} navbar__sections cursor-pointer transition-all duration-300 font-medium`}>Skills</span>
             <span onClick={() => navigateToSection("experience")}  className={`${activeSection === "experience" ? "text-red-500 translate-x-2" : ""} navbar__sections cursor-pointer transition-all duration-300 font-medium`}>Experience</span>
             <span onClick={() => navigateToSection("projects")}  className={`${activeSection === "projects" ? "text-red-500 translate-x-2" : ""} navbar__sections cursor-pointer transition-all duration-300 font-medium`}>Projects</span>
          </div>
       </div>
   );
};

export default Navbar;
