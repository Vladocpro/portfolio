import React from 'react';
import {experienceHutchison} from "../../constants";
import Bulletpoint from "./Bulletpoint";

interface Props {
   inView: boolean;
}

const Hutchison = ({inView}: Props) => {
   return (
       <div className={`lg:rounded-lg lg:p-5 transition-all duration-1000  ${inView ? "delay-[125ms] lg:shadow-all-xl lg:shadow-gray-400" : "shadow-none"}`}>
          <div className="flex justify-between">
             <div className={`flex flex-col text-sm sm:text-base font-ptSerif transition-all duration-500 ${inView ? "delay-[125ms] opacity-100" : "opacity-0"}`}>
                <span>Hutchison Technologies</span>
                <span>Software Engineer</span>
                <span>September 2023 - May 2024</span>
                <span>Dundee Scotland UK</span>
             </div>
             <div className="flex flex-col">
                <img src={"../assets/hutchison.png"} className={`object-contain w-36 sm:w-52 lg:w-64 transition-all duration-500 ${inView ? "delay-[125ms] opacity-100" : "opacity-0"}`}/>
             </div>
          </div>
          <div>
             <div className="flex flex-col  mt-4 gap-3">
                {experienceHutchison.map((text, index) => (
                    <Bulletpoint
                        key={index}
                        text={text}
                        index={index}
                        inView={inView}
                    />
                ))}
             </div>
          </div>
       </div>

   );
};

export default Hutchison;
