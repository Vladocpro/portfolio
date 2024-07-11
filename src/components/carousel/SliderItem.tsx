import React from 'react';
interface Props {
      picture: string,
}
const SliderItem = ({picture} : Props) => {

   return (
       <div className="select-none pointer-events-none">
          <img
              src={picture}
              className={`rounded-xl mx-auto object-contain aspect-auto px-2`}
               alt=""/>
       </div>
   );
};

export default SliderItem;

