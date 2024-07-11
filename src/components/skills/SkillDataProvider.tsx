import React, {useMemo} from 'react';
import {motion} from "framer-motion";

interface Props {
   src: string;
   index: number;
   inView: boolean;
   isMobile: boolean;
}

const SkillDataProvider = ({ src, index, inView, isMobile} : Props) => {

   const imageVariants = {
      hidden: {opacity: 0},
      visible: {opacity: 1}
   }

   const animationDelay = useMemo(() => {
      if(inView) {
         if(isMobile) {
            return 0.35 * index
         } else {
            return 0.2 * index
         }
      } else {
         return 0
      }
   },[inView, index, isMobile])


   return (
       <motion.div
           initial="hidden"
           variants={imageVariants}
           animate={inView ? "visible" : "hidden"}
           custom={index}
           transition={{delay: animationDelay}}
       >
          <img
              src={src}
              className="w-[56px] h-[56px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] object-contain"
              alt='skill image'
          />
       </motion.div>
   )
}

export default SkillDataProvider;
