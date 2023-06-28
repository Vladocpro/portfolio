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
   ecommerce: {
      title: "Ecommerce Nike",
      description: "Developed Ecommerce store, with Nike's fully responsive and interactive design, Stripe payments, User and Google authentications, Product Filtering. Favorites and Cart functionality, listing ordered products. Technologies: React, Next 13, Typescript, Prisma, Stripe, Webhook, Redux, Tailwind, Cloudinary, NextAuth(google).",
      picture: "../assets/Ecommerce.jpg",
      sourceCodeLink: "https://github.com/Vladocpro/ecommerce_nike",
      morePictures:"https://www.linkedin.com/in/vladocpro/overlay/1635531340088/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
   },
   spotify: {
      title: "Spotify",
      description: "Spotify clone using Typescript, React, Redux, Next, Spotify API",
      picture: "../assets/Spotify.png",
      sourceCodeLink: "https://github.com/Vladocpro/Spotify",
      morePictures:"https://www.linkedin.com/in/vladocpro/overlay/1635522312776/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
   },
   hotels: {
      title: "Hotels",
      description: "Developed a data management project for Hotel owners. Users can either be a hotel resident or a hotel owner. Hotel owners have admin rights to create hotels, set hotel services, and prices, view statistics (charts and data tables) for hotel payments. Hotel residents can search for hotels, see their services, pay for them, and view payment history. The project also offers dark/light mode, localization for English and Ukrainian.Technologies: React, Node, Express, MongoDB, Redux, MaterialUI.",
      picture: "../assets/Hotels.png",
      sourceCodeLink: "https://github.com/Vladocpro/Hotels",
      morePictures:"https://www.linkedin.com/in/vladocpro/overlay/1635518822129/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
   },
   chess: {
      title: "Chess",
      description: "Using Typescript, React, Redux, and OOP, I developed a single-player chess game. It features a GUI similar to chess.com, showing available squares to move, check and checkmate patterns,a history of moves, pawn promotion, a list of captured enemy pieces, and a timer.",
      picture: "../assets/Chess.png",
      link: "https://chess-2j02.onrender.com",
      sourceCodeLink: "https://github.com/Vladocpro/Chess",
      morePictures:"https://www.linkedin.com/in/vladocpro/overlay/1635521155840/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
   },
   discord: {
      title: "Discord",
      description: "Developed Discord clone with all main functionality. Friendship invitations, real-time friend list online status update. Users can create a room of four people and see the rooms of others. Chatting with the message history. Meets with screen sharing capabilities, along with the flexibility to control the activation and deactivation of web cameras and microphones.Technologies: React, Node, Express, MongoDB, WebSockets, WebRTC, Redux.",
      picture: "../assets/Discord.png",
      sourceCodeLink: "https://github.com/Vladocpro/Discord",
      morePictures:"https://www.linkedin.com/in/vladocpro/overlay/1635518438296/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
   },
   blog: {
      title: "Blog",
      description: "Developed a simple Blog Project using React, Next, AWS Amplify, GraphQL. User can create, edit, post, write a comment. Upload a picture to the post using Amazon Web Services (AWS) Storage, enabling real-time posts updates through AWS Subscription. Utilizing AWS Authentication for Authentication.",
      picture: "../assets/BlogAWS.png",
      sourceCodeLink: "https://github.com/Vladocpro/BlogAWS",
      morePictures:"https://www.linkedin.com/in/vladocpro/details/featured/1635518434974/single-media-viewer/?profileId=ACoAAD_P-pEBtvGvfaskcMVOKYb8gLXSOENDZxU"
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
        <a className="navBtn" href={"https://www.linkedin.com/in/vladocpro/"} rel="noreferrer noopener" target="_blank">LinkedIn</a>
        <a className="navBtn" href={"https://github.com/Vladocpro"} rel="noreferrer noopener" target="_blank">Github</a>
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
            <p className="mt-2 md:mt-3 text-justify flex-wrap text-xs md:text-base lg:text-lg">
               3 years of continuous experience in Fullstack software development: building both backend and frontend with Typescript for a wide range of web projects of different scales and domains such as e-commerce, fintech, rental applications, games, media, etc. Focused on being a valuable part of any team I am on.
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
            <div className="mt-5 pb-3">

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
                  <SliderItem props={projects.ecommerce} />
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
