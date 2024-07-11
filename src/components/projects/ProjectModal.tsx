import React from 'react';
import useProjectData from "../../zustand/ProjectInfo";


const ProjectModal = () => {

   const modalData = useProjectData()

   return null

   return (
       <div
           className={`flex items-center justify-center cartPage:items-end fixed inset-0 z-20 transition-all duration-300 ${"modalData.isOpen" ? "visible" : "invisible opacity-0"}`}>
          <div
              className={`absolute inset-0 z-30 bg-[rgba(111,111,111,0.5)] transition-all duration-300 h-full w-full ${"modalData.isOpen" ? "visible" : "invisible opacity-0"}`}
              onClick={() => "modalData.closeModal"}/>

          <div
              className={`relative z-30 w-[400px] mx-2  py-4 px-4 sm:p-6 bg-primary rounded-lg  transition-all  duration-300 ${"modalData.isOpen" ? "translate-y-0 scale-100" : "-translate-y-16 opacity-0 scale-50"}`}>

             <div className={'flex flex-col'}>
                {/* Body */}
                <div className={'flex flex-col'}>
                   <span className={'text-lg sm:text-xl text-center mt-1 mb-8'}>{modalData.title}</span>

                </div>


                {/* Footer */}
                <div className={'flex justify-between mt-0 sm:mt-5'}>

                </div>
             </div>
          </div>
       </div>
   );
};

export default ProjectModal;
