export const skillImages = [
   { src: '../assets/html.png', name: 'HTML' },
   { src: '../assets/css.png', name: 'CSS' },
   { src: '../assets/js.png', name: 'JavaScript' },
   { src: '../assets/ts.png', name: 'TypeScript' },
   { src: '../assets/react.png', name: 'React.js' },
   { src: '../assets/redux.png', name: 'Redux' },
   { src: '../assets/next.png', name: 'Next.js' },
   { src: '../assets/graphql.png', name: 'GraphQL' },
   { src: '../assets/tailwind.png', name: 'TailwindCSS' },
   { src: '../assets/expressjs.svg', name: 'Express.js' },
   { src: '../assets/sql.png', name: 'SQL' },
   { src: '../assets/node-js.png', name: 'Node.js' },
   { src: '../assets/mui.png', name: 'Material UI' },
   { src: '../assets/framer.png', name: 'Framer Motion' },
   { src: '../assets/stripe.png', name: 'Stripe' },
   { src: '../assets/vite.svg', name: 'Vite' },
   { src: '../assets/chakra.png', name: 'Chakra UI' },
   { src: '../assets/prisma.jpg', name: 'Prisma' },
   { src: '../assets/mongo.png', name: 'MongoDB' },
   { src: '../assets/golang.png', name: 'Golang' },
   { src: '../assets/jest.png', name: 'Jest' },
   { src: '../assets/gcp.jpg', name: 'Google Cloud Platform' },
   { src: '../assets/docker.jpg', name: 'Docker' },
   { src: '../assets/storybook.png', name: 'Storybook' }
]


export const experienceHutchison = [
    "Designed and implemented the project's core functionalities",
    "Developed and maintained APIs and cloud functions, facilitating seamless integration and scalability",
    "Improved front-end performance by 20% through effective memoization techniques, advanced React strategies, and legacy code rework",
    "Created responsive web pages using reusable UI components and custom elements, enhancing user experience across devices",
    "Investigated and implemented external API integrations, which enabled new features and services",
    "Enhanced UI/UX through user workflow optimization and improved overall usability",
    "Developed and executed comprehensive test suites for both front-end and back-end components, increasing overall test coverage by 15%",
]


export const responsiveCarousel = {
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


export const projects = {
   ecommerce: {
      title: "Ecommerce",
      description: "Developed an e-commerce platform tailored for a Nike store, featuring a fully responsive and interactive design. The platform integrates Stripe for secure payment processing and supports both user and Google authentications. It includes advanced product filtering capabilities, as well as functionalities for managing favorites, cart and order history.",
      picture: "../assets/ecom.png",
      website: "https://ecom-store-deploy.vercel.app",
      github: "https://github.com/Vladocpro/ecommerce_deploy",
      demoAccount: true
   },
   spotify: {
      title: "Spotify",
      description: "Developed a Spotify clone utilizing the Spotify API to replicate core functionalities. Users can search for songs, artists, and albums, and play music with real-time playback controls. Integrated playlist creation, modification, and sharing features. Enabled browsing of trending music and recommendations based on listening history. Included seamless streaming and the ability to like songs, follow artists, and save albums.",
      picture: "../assets/Spotify.png",
      website: undefined,
      github: "https://github.com/Vladocpro/Spotify",
      demoAccount: false,
   },
   chess: {
      title: "Chess",
      description: "Developed an online chess game adhering to all official chess rules. The game includes a graphical user interface that highlights available moves, displays move history, and shows captured pieces and remaining time. Users can customize the appearance of pieces and the board with various skins. Additionally, the project incorporates a rating system, clubs, and a friends list.",
      picture: "../assets/Chess.png",
      website: "https://onlinechess-deploy.vercel.app",
      github: "https://github.com/Vladocpro/Chess",
      demoAccount: true,
   },
   discord: {
      title: "Discord",
      description: "Developed Discord clone with all main functionality. Friendship invitations, real-time friend list online status update. Users can create a room of four people and see the rooms of others. Chatting with the message history. Meets with screen sharing capabilities, along with the flexibility to control the activation and deactivation of web cameras and microphones. Includes user-friendly interface and features safe communication.",
      picture: "../assets/Discord.png",
      website: undefined,
      github: "https://github.com/Vladocpro/Discord",
      demoAccount: false,
   },
}

export const getProjectData = (slideIndex: number) => {
   switch (slideIndex) {
      case 0: return projects.ecommerce;
      case 1: return projects.chess;
      case 2: return projects.spotify;
      case 3: return projects.discord;
      default: return projects.ecommerce;

   }
}

export const navigateToSection = (sectionName: string) => {
   if(document !== undefined && document !== null) {
      document.getElementById(sectionName)?.scrollIntoView({ behavior: 'smooth' });
   }
}
