import React from 'react';

const CustomDots = ({ onClick, ...rest } : any) => {


   const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
   } = rest;



   return (
       <button
           className={`${active ? "active bg-red-500" : "inactive"} border-2 border-white shadow-all-lg shadow-black h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full mx-1 relative top-4`}
           onClick={() => {
              onClick()
           }}
       />
   );
};

export default CustomDots;
