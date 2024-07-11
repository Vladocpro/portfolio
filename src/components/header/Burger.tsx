import React, {useState} from 'react';
import {navigateToSection} from "../../constants";

const Burger = () => {
   const [burgerVisible, setBurgerVisible] = useState<boolean>(false)

   return (
       <div className="block mr-5 xl:hidden">
          <div
              className="block relative  cursor-pointer z-20 xl:hidden  h-[18px] w-[24px]  after:top-[-9px] after:left-[-8px] after:h-[200%] after:w-[165%] space-y-1.5 "
              onClick={() => setBurgerVisible(!burgerVisible)}>
             <hr className={`h-[2px] bg-white rounded-md transition-all duration-300 ${burgerVisible && "rotate-45  translate-y-[8px] "}`}/>
             <hr className={`h-[2px] bg-white rounded-md transition-all duration-300 mx-auto ${burgerVisible ? "w-[1%]" : "w-[100%]"}`}/>
             <hr className={`h-[2px] bg-white rounded-md transition-all duration-300 ${burgerVisible && "rotate-[-45deg] translate-y-[-8px] "}`}/>
          </div>


          <div
              className={`absolute z-10 inset-0 transition-all duration-300 h-screen w-screen opacity-[45%] ${burgerVisible ? "visible" : "invisible opacity-0"}`}
              onClick={() => setBurgerVisible(!burgerVisible)}/>
          <div
              className={`fixed z-10 right-0 top-0 h-screen   transition-all duration-300 opacity-100 bg-[#181818] ${burgerVisible ? "w-screen visible" : "invisible"} h-full w-[0] space-y-1.5 `}>
             <div className="flex flex-col ml-10 mr-10 h-full text-left overflow-hidden bg-[#181818] text-2xl mt-12">

                <span className={'font-semibold text-center'}>Main Menu</span>

                <div className="flex mt-4 cursor-pointer" onClick={() => {
                   setBurgerVisible(false)
                   navigateToSection("about")
                }}>
                   <span className={'font-medium text-xl border-l-2 border-red-500 pl-1.5'}>About</span>
                </div>
                <div className="flex mt-4 cursor-pointer" onClick={() => {
                   setBurgerVisible(false)
                   navigateToSection("skills")
                }}>
                   <span className={'font-medium text-xl border-l-2 border-red-500 pl-1.5'}>Skills</span>
                </div>
                <div className="flex mt-4 cursor-pointer" onClick={() => {
                   setBurgerVisible(false)
                   navigateToSection("experience")
                }}>
                   <span className={'font-medium text-xl border-l-2 border-red-500 pl-1.5'}>Experience</span>
                </div>

                <div className="flex mt-4 cursor-pointer" onClick={() => {
                   setBurgerVisible(false)
                   navigateToSection("projects")
                }}>
                   <span className={'font-medium text-xl border-l-2 border-red-500 pl-1.5'}>Projects</span>
                </div>

                <hr className="h-[2.5px] rounded-md bg-white mt-5"/>

                <a href={"https://www.linkedin.com/in/vladocpro/"} rel="noreferrer noopener" target="_blank"
                   className="flex justify-between items-center mt-4 cursor-pointer"
                   onClick={() => setBurgerVisible(false)}>
                   <span className={'font-medium text-xl'}>LinkedIn</span>
                   <svg xmlns="http://www.w3.org/2000/svg"
                        className={`w-[32px] cursor-pointer stroke-white `}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
                      <path d="M8 11l0 5"/>
                      <path d="M8 8l0 .01"/>
                      <path d="M12 16l0 -5"/>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
                   </svg>
                </a>
                <a href={"https://github.com/Vladocpro"} rel="noreferrer noopener" target="_blank"
                   className="flex justify-between items-center mt-4 cursor-pointer"
                   onClick={() => setBurgerVisible(false)}>
                   <span className={'font-medium text-xl'}>GitHub</span>
                   <svg xmlns="http://www.w3.org/2000/svg"
                        className={`w-[32px] cursor-pointer stroke-white`}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                   </svg>
                </a>
                <a href={"../assets/Vladyslav Ovcharenko Resume.docx"} download className="flex justify-between items-center mt-4 cursor-pointer">
                   <span className={'font-medium text-xl'}>CV</span>
                   <svg
                       xmlns="http://www.w3.org/2000/svg" viewBox="-4.25 -4.25 32 32"
                       className={`w-[32px] cursor-pointer stroke-white`}
                       fillRule="evenodd" clipRule="evenodd">
                      <path
                          d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
                   </svg>
                </a>

             </div>
          </div>
       </div>
   );
};

export default Burger;
