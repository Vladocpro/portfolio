import React, {FC} from 'react';
interface SliderItemsProps {
   props:{
      title: string,
      description: string,
      picture: string,
      link?: string,
      sourceCodeLink: string,
      morePictures: string
   }
}
const SliderItem: FC<SliderItemsProps> = ({props}) => {
   return (
       <div className="cursor-grab">
          <img src={props.picture} className="rounded-xl mx-auto object-cover aspect-auto p-5 hover:scale-125"  alt=""/>
          <div className="mx-6 mb-12 cursor-default">
             <p className="mt-2 text-black font-medium text-sm md:text-lg lg:text-2xl">{props.title}</p>
                 <div className="flex justify-center mt-5 gap-10">
                    {props.link
                        && <a href={props.link} rel="noreferrer noopener" target="_blank" className="text-gray-500 underline underline-offset-4  text-sm md:text-lg lg:text-2xl">Watch Live</a>
                    }
                    <a href={props.sourceCodeLink} rel="noreferrer noopener" target="_blank" className="text-gray-500 underline underline-offset-4  text-sm md:text-lg lg:text-2xl">Source Code</a>
                    <a href={props.morePictures} rel="noreferrer noopener" target="_blank" className="text-gray-500 underline underline-offset-4  text-sm md:text-lg lg:text-2xl">More Pictures</a>
                 </div>
             <p className="mt-5 text-black text-xs md:text-base lg:text-lg text-justify">{props.description}</p>
          </div>
       </div>
   );
};

export default SliderItem;

