import React, {useEffect, useState} from 'react';
import Typewriter from "typewriter-effect"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./components/SliderItem";


const skills = [
   "HTML",
   "CSS",
   "JavaScript",
   "Typescript",
   "React",
   "Redux",
   "Next",
   "Node",
   "Express",
   "Socket.io",
   "SQL",
   "NoSQL",
   "MaterialUI",
   "Tailwind",
   "REST",
   "GraphQL",
];

const projects = {
   spotify: {
      title: "Spotify",
      description: "Spotify clone using Typescript, React, Next, Spotify API",
      picture: "../assets/Spotify.png"
   },
   hotels: {
      title: "Hotels",
      description: "Developed a Hotels project using MERN, RESTful API, Redux, and JWT auth. It is an MPA designed to manage data about hotels. Users can either be a hotel resident or a hotel owner. Hotel owners have admin rights to create hotels, set hotel services, and prices, view statistics (charts and data tables) for hotel payments. Hotel residents can search for hotels, see their services, pay for them, and view payment history. The project also offers dark/light mode, localization for English and Ukrainian.",
      picture: "../assets/Hotels.png",
      link: "https://hotels-os75.onrender.com"
   },
   chess: {
      title: "Chess",
      description: "Using Typescript, React, Redux, and OOP, I developed a single-player chess game. It features a GUI similar to chess.com, showing available squares to move, check and checkmate patterns,a history of moves, pawn promotion, a list of captured enemy pieces, and a timer.",
      picture: "../assets/Chess.png",
      link: "https://chess-2j02.onrender.com"
   },
   discord: {
      title: "Discord",
      description: "I created a Discord clone using MERN, RESTful API, WebSocket, WebRTC, Redux, and JWT auth. The Discord users are able to send invitations to each other with options to accept or decline the friendship request. It also updates the real-time friends' list and their online status, and enables them to create a room for a maximum of four people. Real-time communication is possible by messaging a friend and viewing the message history with dates, seeing friends' rooms, joining them, and communicating. Users who join somebody’s room can also share their screen, turn on/off their web camera, and microphone.",
      picture: "../assets/Discord.png"
   },
   blog: {
      title: "Blog",
      description: "Developed a simple Blog Project using React, Next, AWS Amplify, GraphQL. User can create, edit, post, write a comment. Upload a picture to the post using Amazon Web Services (AWS) Storage, enabling real-time posts updates through AWS Subscription. Utilizing AWS Authentication for Authentication.",
      picture: "../assets/BlogAWS.png"
   }
}




function App() {

   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 1
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1
      }
   };


  return (
    <div className="bg-[#F5F5F7]">

     <header className="h-12 lg:h-20 w-full text-black flex items-center justify-center space-x-5">
        <a className="navBtn" href={"https://www.linkedin.com/in/vladocpro/"}>LinkedIn</a>
        <a className="navBtn" href={"https://www.linkedin.com/in/vladocpro/"}>Github</a>
        <a className="navBtn" href={"../assets/Vladyslav Ovcharenko Resume.pdf"} download> CV</a>
     </header>


      <div className="text-black w-[80%] mx-auto justify-items-center">
         <div className="text-center text-black pt-5">
            <h1 className="mb-3 text-2xl md:text-4xl lg:text-6xl">Vladyslav Ovcharenko</h1>
            <Typewriter
                options={{loop: true, autoStart: true, deleteSpeed: 20, delay: 60}}
                onInit={(typewriter) => {
                   typewriter
                       .start()
                       .typeString("React Node Full Stack Engineer")
                       .pauseFor(2000)
                       .deleteChars(24)
                       .pauseFor(1000)
                       .typeString("Frontend Developer")
                       .pauseFor(1500)

                }}/>
            <p className="mt-2 md:mt-3 flex-wrap text-xs md:text-base lg:text-lg">
               I’m keen on web development, like learning and implementing new technologies. I would like to develop complex web applications as well as UI/UX-focused projects.
            </p>

         </div>

         <div className="flex justify-center m-3 md:mt-6 lg:mt-9">
            <div className="text-center bg-white w-[80%] shadow-lg pb-4 rounded-2xl">
               <h1 className="m-4 text-2xl lg:text-5xl">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-items-center">
                   {skills.map((skill : string, index : number) => (
                       <p key={index} className="w-24  rounded-lg text-xs md:text-base lg:text-xl font-semibold text-center">{skill}</p>
                   ))}
                </div>
            </div>
         </div>


         <div className="text-center mt-2 md:mt-6 lg:mt-9 text-lg md:text-3xl lg:text-4xl">
            <h1 className="mb-3">Projects</h1>
            <div className="mt-5">

               <Carousel
                   responsive={responsive}
                   swipeable={true}
                   draggable={true}
                   showDots={true}
                   ssr={true} // means to render carousel on server-side.
                   infinite={true}
                   keyBoardControl={true}
                   customTransition="all 2s"
                   transitionDuration={500}
                   containerClass="carousel-container"
                   removeArrowOnDeviceType={["tablet", "mobile"]}
                   dotListClass="custom-dot-list-style"
                   itemClass="carousel-item-padding-40-px"
               >
                  <SliderItem props={projects.chess} />
                  <SliderItem props={projects.spotify} />
                  <SliderItem props={projects.discord} />
                  <SliderItem props={projects.hotels} />
                  <SliderItem props={projects.blog} />
               </Carousel>

            </div>
         </div>
      </div>

    </div>
  );
}

export default App;
