import React, {FC} from 'react';
interface SliderItemsProps {
   props:{
      title: string,
      description: string,
      picture: string,
      link?: string,
      sourceCodeLink?: string
   }
}
const SliderItem: FC<SliderItemsProps> = ({props}) => {
   return (
       <div>
          <img src={props.picture} className="rounded-xl mx-auto object-fill md:h-[372px] md:w-[670px] lg:h-[500px] lg:w-[900px] hover:scale-125"  alt=""/>
          <div className="mx-6 mb-12">
             <p className="mt-2 text-black text-sm md:text-lg lg:text-2xl">{props.title}</p>
             {props.link ? (
                 <div>
                    <a href={props.link} className="text-black mr-10 text-sm md:text-lg lg:text-2xl">Watch Live</a>
                    <a href={props.sourceCodeLink} className="text-black text-sm md:text-lg lg:text-2xl">Source Code</a>
                 </div>
             ) :
                 <a href={props.sourceCodeLink} className="text-black text-sm md:text-lg lg:text-2xl">Source Code</a>}
             <p className="mt-2 text-black text-xs md:text-base lg:text-lg">{props.description}</p>
          </div>
       </div>
   );
};

export default SliderItem;

