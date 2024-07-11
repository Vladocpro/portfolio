import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import useActiveSection from "../../zustand/PageNavigation";
import DesktopSkillsShowcase from "./DesktopSkillsShowcase";
import MobileSkillsShowcase from "./MobileSkillsShowcase";
import {skillImages} from "../../constants";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {

   const {ref, inView} = useInView()
   const {setActiveSection} = useActiveSection();


   useEffect(() => {
      if(inView) {
         setActiveSection("skills")
      }
   }, [inView]);

   return (
       <div className="h-[100dvh] flex flex-col snap-start scroll-smooth pt-5 xl:pt-0" id="skills">

          <div className="flex justify-center mt-10">
             <span
                 className={`text-lg text-center sm:text-2xl font-medium transition-all duration-500 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>Making products with modern technologies</span>
          </div>

          {/* Desktop skills showcase */}
          <div
              className={`flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  rounded-xl transition-all duration-1000  ${inView ? "delay-[125ms] shadow-all-xl lg:shadow-gray-400" : "shadow-none"}`}
              style={{transform: "scale(0.9)"}}
              ref={ref}
          >
             <DesktopSkillsShowcase inView={inView}/>
             <MobileSkillsShowcase inView={inView}/>
          </div>
       </div>
   );
};

export default Skills;
