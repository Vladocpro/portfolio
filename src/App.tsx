import React from 'react';
import "react-multi-carousel/lib/styles.css";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Navbar from "./components/Navbar";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";



function App() {

  return (
    <div className="bg-[#181818] text-white w-full flex flex-col items-center">
       <Header/>
       <Navbar/>
       <div className="flex flex-col w-full max-w-[440px]  sm:max-w-[630px] md:max-w-[760px] lg:max-w-[1000px] px-2">
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
       </div>
    </div>
  );
}

export default App;
