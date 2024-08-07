import React from 'react';
import {skillImages} from "../../constants";
import SkillDataProvider from "./SkillDataProvider";

interface Props {
   inView: boolean;
}

const DesktopSkillsShowcase = ({inView}: Props) => {
   return (
       <>
          <div className="hidden sm:grid grid-cols-8 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(0, 8).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={false}
                 />
             ))}
          </div>
          <div className="hidden sm:grid grid-cols-8 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(8, 16).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={false}
                 />
             ))}
          </div>
          <div className="hidden sm:grid grid-cols-8 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(16, 24).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={false}
                 />
             ))}
          </div>
       </>
   );
};

export default DesktopSkillsShowcase;
