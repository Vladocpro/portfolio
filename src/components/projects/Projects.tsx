import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import useActiveSection from "../../zustand/PageNavigation";
import Carousel from "react-multi-carousel";
import SliderItem from "../carousel/SliderItem";
import {getProjectData, projects, responsiveCarousel} from "../../constants";
import CustomDots from "../carousel/CustomDots";
import useProjectData from "../../zustand/ProjectInfo";
import {useAnimate} from "framer-motion";



const Projects = () => {

   const {ref, inView} = useInView()
   const {setActiveSection} = useActiveSection();
   const projectData = useProjectData()
   const [scope, animate] = useAnimate()

   const changeSlide = async (currentSlide: number) => {
      await animate("#projectInfo",{x: 7, opacity: 0})
      projectData.setProjectData(getProjectData(currentSlide))
      await animate("#projectInfo",{x: 0, opacity: 100})
   }

   useEffect(() => {
      if(inView) {
         setActiveSection("projects")
      }
   }, [inView]);

   return (
       <div className="h-[100dvh] snap-start pt-5 xl:pt-0" id="projects">
          <div
              className={`text-2xl font-medium mt-10 text-center w-full transition-all duration-500 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
              >Projects</div>
          <div className="flex flex-col h-full" ref={ref}>

             {/* Project Info */}
             <div ref={scope} className={`flex flex-col mt-6 mx-1 px-3 lg:h-[194px] py-2 rounded-md shadow-all-lg shadow-gray-400 transition-all duration-500 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"}`}>
                <div className="flex flex-col" id={"projectInfo"}>
                   <span className="font-medium sm:text-lg mb-1">{projectData.title}</span>
                   <span className="font-medium text-sm text-justify">{projectData.description}</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className={`flex gap-0.5 ${projectData.demoAccount ? "mt-0" : "mt-3"}`}>
                   <a href={projectData.github} rel="noreferrer noopener" target="_blank">
                         <svg xmlns="http://www.w3.org/2000/svg"
                              className={`w-[35px] sm:w-[40px] cursor-pointer stroke-white transition-all duration-200 hover:fill-gray-500 hover:scale-110`}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                         </svg>
                      </a>
                      {
                         projectData.website !== undefined ? (
                             <a href={projectData.website} rel="noreferrer noopener" target="_blank">
                                {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
                                {/*     className={`w-[40px] cursor-pointer stroke-white transition-all duration-200 hover:stroke-gray-500 hover:scale-110`}*/}
                                {/*     width="40" height="40" viewBox="0 0 24 24"*/}
                                {/*     strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
                                {/*   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>*/}
                                {/*   <path d="M9 15l6 -6"/>*/}
                                {/*   <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/>*/}
                                {/*   <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>*/}
                                {/*</svg>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-[35px] sm:w-[40px] cursor-pointer stroke-white transition-all duration-200 hover:stroke-gray-500 hover:scale-110`}
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                   <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/>
                                   <path d="M11 13l9 -9"/>
                                   <path d="M15 4h5v5"/>
                                </svg>
                             </a>
                         ) : null
                      }
                   </div>
                   {projectData.demoAccount ? (
                       <div className="flex flex-col mt-0.5 font-ptSerif text-sm sm:text-base">
                          <span className="text-center">Demo Account</span>
                          <span className="">Login: demo@gmail.com</span>
                          <span className="">Password: 123456</span>
                       </div>
                   ) : null}
                </div>
             </div>

             {/* Carousel */}
             <div className={`mt-5  transition-all duration-500 ${inView ? "delay-[125ms] translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <Carousel
                    responsive={responsiveCarousel}
                    afterChange={((previousSlide, { currentSlide}) => {
                       changeSlide(currentSlide)
                    })}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={500}
                    customDot={<CustomDots/>}
                    renderDotsOutside={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                   <SliderItem picture={projects.ecommerce.picture}/>
                   <SliderItem picture={projects.chess.picture}/>
                   <SliderItem picture={projects.spotify.picture}/>
                   <SliderItem picture={projects.discord.picture}/>
                </Carousel>
             </div>
          </div>
       </div>
   );
};

export default Projects;
