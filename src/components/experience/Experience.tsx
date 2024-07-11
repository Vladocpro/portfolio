import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import useActiveSection from "../../zustand/PageNavigation";
import Hutchison from "./Hutchison";

const Experience = () => {

   const {ref, inView} = useInView()
   const {setActiveSection} = useActiveSection();


   useEffect(() => {
      if(inView) {
         setActiveSection("experience")
      }
   }, [inView]);

   return (
       <div className="flex flex-col w-full h-[100dvh] snap-start pt-5 xl:pt-0" id="experience">
             <span className={`text-2xl font-medium mt-10 text-center  transition-all duration-500 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`} ref={ref}>Experience</span>
          <div className="flex flex-col h-full justify-center items-center">
             <Hutchison inView={inView}/>
          </div>
       </div>
   );
};

export default Experience;
