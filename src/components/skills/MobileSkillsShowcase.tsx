import React from 'react';
import {skillImages} from "../../constants";
import SkillDataProvider from "./SkillDataProvider";

interface Props {
   inView: boolean;
}

const MobileSkillsShowcase = ({ inView}: Props) => {
   return (
       <>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(0, 4).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(4, 8).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(8, 12).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(12, 16).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(16, 20).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
          <div className="grid sm:hidden grid-cols-4 grid-rows-1 justify-around mt-4 gap-5 items-center">
             {skillImages.slice(20, 24).map((technology, index) => (
                 <SkillDataProvider
                     key={index}
                     src={technology.src}
                     name={technology.name}
                     index={index}
                     inView={inView}
                     isMobile={true}
                 />
             ))}
          </div>
       </>
   );
};

export default MobileSkillsShowcase;
