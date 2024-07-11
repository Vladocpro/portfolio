import React, {useEffect} from 'react';
import Svg from "./Svg";
import {useInView} from "react-intersection-observer";
import useActiveSection from "../zustand/PageNavigation";

const About = () => {

   const {ref, inView} = useInView()
   const {setActiveSection} = useActiveSection();


   useEffect(() => {
      if(inView) {
         setActiveSection("about")
      }
   }, [inView]);

   return (
       <div className="h-screen w-full flex flex-col justify-center items-center snap-start scroll-smooth" id="about">
          <div className="flex flex-col-reverse sm:flex-row  justify-center items-center gap-10 mt-5" ref={ref}>

             {/* About me */}
             <div className={`flex flex-col text-white text-center sm:text-left max-w-[260px] transition-all duration-500 ${inView ? "delay-[125ms] opacity-100" : "opacity-0"}`}>
                <span className="text-2xl whitespace-pre-wrap">{"Hello, I am Vlad \nFull Stack Developer"}</span>

                <span className="text-3xl font-ptSerif font-medium italic mt-6">
                Building digital products, delivering best experience
             </span>

             </div>

             {/* Picture */}
             <img src="../../../assets/Vlad.jpg" alt="Vladyslav Ovcharenko"
                  className={`h-52 sm:h-72 lg:h-96 object-contain rounded-full shadow-gray-400 shadow-all-lg transition-all duration-500 ${inView ? "delay-[125ms] opacity-100" : "opacity-0"}`}/>
          </div>
          {/* Socials */}
          <div className="flex items-center mt-5 w-full">
          <div className={`h-[3px] w-full bg-white rounded-md transition-all duration-700 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "-translate-x-40 opacity-0"}`}/>
             <div className={`flex gap-3 mx-1.5 transition-all duration-700 ${inView ? "delay-[125ms] translate-y-0 scale-100" : "-translate-x-40 scale-0"}`}>
                <Svg icon="linkedin" color="white" size="w-[38px] sm:w-[44px]"/>
                <Svg icon="github" color="white" size="w-[38px] sm:w-[44px]"/>
                <Svg icon="cv" color="white" size="w-[38px] sm:w-[44px]"/>
             </div>
             <div className={`h-[3px] w-full bg-white rounded-md transition-all duration-700 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-x-40 opacity-0"}`}/>
          </div>
       </div>

   );
};

export default About;
