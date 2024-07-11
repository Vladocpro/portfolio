import React from 'react';
import {motion} from "framer-motion";

interface Props {
   text: string;
   index: number;
   inView: boolean;
}

const Bulletpoint = ({text, index, inView}: Props) => {

   const imageVariants = {
      hidden: {
         opacity: 0,
         translateX: 30,
      },
      visible: {
         opacity: 1,
         translateX: 0,
      }
   }

   const animationDelay = inView  ? 0.18 : 0

   return (
       <motion.div
           initial="hidden"
           variants={imageVariants}
           animate={inView ? "visible" : "hidden"}
           custom={index}
           transition={{delay: index * animationDelay}}
           className="flex items-center"
       >
          <span className="border-l-2 border-l-red-500 pl-1 font-medium text-sm  sm:text-base">{text}</span>
       </motion.div>
   );
};

export default Bulletpoint;
