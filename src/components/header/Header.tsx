import React from 'react';
import Burger from "./Burger";

const Header = () => {



   return (
       <div className={`sticky xl:hidden top-0 flex items-center  w-full  z-10 bg-[#0e0e0e]`}>
          <nav className={'flex items-center justify-end w-full py-[16px] ml-2 mr-6'}>
             <Burger />
          </nav>
       </div>
   );
};

export default Header;
