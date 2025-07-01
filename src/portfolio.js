import aboutpic from "./contexts/updated.jpeg"
import res from "./contexts/Resume.pdf"
// import firecrest1 from "./contexts/firecrest1.png"
// import firecrest2 from "./contexts/firecrest2.png"
// import firecrest3 from "./contexts/firecrest3.png"
// import firecrest4 from "./contexts/firecrest4.png"
// import search1 from "./contexts/search1.png"
// import search2 from "./contexts/search2.png"
// import chat1 from "./contexts/chat1.png"
// import chat2 from "./contexts/chat2.png"
// import chat3 from "./contexts/chat3.png"
// import plate1 from "./contexts/plate1.png"
// import plate2 from "./contexts/plate2.png"
// import ball1 from "./contexts/ball1.png"
// import fabflix1 from "./contexts/fabflix1.png"
import fabflix2 from "./contexts/fabflix2.png"
// import fabflix3 from "./contexts/fabflix3.png"
// import fabflix4 from "./contexts/fabflix4.png"
// import fabflix5 from "./contexts/fabflix5.png"
// import fabflix6 from "./contexts/fabflix6.png"
// import fabflix7 from "./contexts/fabflix7.png"
import connekt1 from "./contexts/connekt1.png"
// import connekt2 from "./contexts/connekt2.png"
// import connekt3 from "./contexts/connekt3.png"
import lapenamock from "./contexts/lapenamock.png"
import firecrestmock from "./contexts/firecrestmock.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://colet0227.github.io/',
  title: 'Home',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Cole',
  role: 'Associate Software Engineer @ Capital One',
  description:
    'Passionate software engineer specializing in full-stack development and scalable solutions. Experienced in building impactful applications that streamline operations and enhance user experiences across diverse industries',
  resume: res,
  social: {
    linkedin: 'https://www.linkedin.com/in/cole-thompson-991682251/',
    github: 'https://github.com/colet0227',
  },
}

const projects = [
  {
    name: 'La Peña',
    description: 'Transform nonprofit operations with this comprehensive web platform designed to streamline invoicing, event scheduling, and administrative workflows for La Peña.',
    bullets: [
      'Engineered a React-based web app for La Peña Cultural Center - a nonprofit hosting cultural events and workshops - to streamline invoice processing and event planning, reducing administrative hours by 60% and managing 50+ monthly bookings.',
      'Built robust RESTful API endpoints using Node.js, Express, and PostgreSQL to manage invoicing, room bookings, and client data, streamlining data integration for smoother operations.',
      'Translated high-fidelity Figma designs into pixel-perfect, responsive interfaces for authentication, invoicing, and event scheduling, boosting user satisfaction.',
      'Optimized invoice calculation logic to accurately apply booking-specific adjustments, saving 10 hours per month of manual inventory management.'
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS', 'Chakra UI', 'Figma', 'Git'],
    sourceCode: 'https://github.com/ctc-uci/lpa',
    livePreview: '',
    images: [lapenamock]
  },

  {
    name: 'Firecrest',
    description: 'Unlock the power of this generative AI dashboard to streamline repetitive tasks and drive your team toward unparalleled growth and efficiency.',
    bullets: [
      'Developed a generative AI design dashboard for content generation with various LLM model selections.',
      'Ability to change model, token, and temperature settings through user-defined parameters',
      'Implemented PostgreSQL for data management, OAuth 2.0, and 2FA security for 50+ accounts.',
      'Integrated tools like LangChain paired with OpenAI and PaLM, and for LLM features.',
      'Used Flask-Mail for 2FA email verification and Render for deployment.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'React', 'Flask', 'PostgreSQL', 'LangChain', 'Render', 'Git'],
    sourceCode: '',
    livePreview: 'https://firecrestai.com/',
    images: [firecrestmock]
  },

  {
    name: 'Fabflix',
    description: 'Effortlessly browse, search, and buy movies on this secure, high-performance web platform.',
    bullets: [
      'Engineered a dynamic web application enabling users to browse, search, and purchase from a vast movie catalog hosting 20,000 movies and 70,000 actors',
      'Utilized AWS EC2 and S3, MySQL, Tomcat, Maven, Kubernetes, Docker for scalable and secure deployment.',
      'Implemented HTTPS, reCAPTCHA, and password encryption for enhanced security.',
      'Ensured support for CRUD operations under users/administrators, integrating features including session-based cart checkout, full-text search with auto-complete, and SQL injection prevention via PreparedStatements',
      'Leveraged JMeter to identify performance bottlenecks/threading issues, ultimately improving database performance by 25% through MySQL connection pooling',
      'Used AJAX to retrieve JSON data from the backend and dynamically update the frontend'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'Tomcat', 'Docker', 'Kubernetes', 'JMeter', 'AWS', 'Git', 'Maven'],
    sourceCode: '',
    livePreview: 'https://www.youtube.com/playlist?list=PLopnzHCsaUJvidSw8kih9TMbWGLCdnLZH',
    images: [fabflix2] // [fabflix1, fabflix2, fabflix3, fabflix4, fabflix5, fabflix6, fabflix7]
  },

  {
    name: 'Search Engine/Web Crawler',
    description: 'Quickly access precise information across UC Irvine’s computer science subdomain with this tailored, high-performance search engine.',
    bullets: [
      'Designed a custom web search engine with the ability to handle 50,000+ documents and reduced average query response time to under 100ms by indexing token positions',
      'Improved ranking accuracy for a subset of the UCI web domain through tf-idf scoring and cosine similarity in addition to assigning weights for HTML tags',
    ],
    stack: ['Beautiful Soup', 'Python', 'Flask', 'HTML', 'CSS', 'NLTK', 'Hashlib', 'Git'],
    sourceCode: 'https://github.com/colet0227/Search_Engine',
    livePreview: '',
    images: [] // [search1, search2]
  },

  {
    name: 'Connekt',
    description: 'Connect, track, and achieve together—a fitness community app for group support and shared progress.',
    bullets: [
      'Developed a fitness community app with React frontend and Flask/Python backend.',
      'Enables users to create/join groups, track progress, and share achievements.',
      'Deployed on Render with PostgreSQL for data management.',
      'Designed to foster a supportive gym and fitness community experience.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'React', 'Flask', 'PostgreSQL', 'Render', 'Git'],
    sourceCode: '',
    images: [connekt1] // [connekt1, connekt2, connekt3]
  }
  
  // {
  //   name: 'GUI Chat Application',
  //   description:
  //     'Implemented a direct messaging module for a Digital Signal Processing (DSP) platform. The module features a user-friendly GUI via Tkinter, stores messages locally using filesystem insights, and allows real-time communication between users through socket programming.',
  //   stack: ['Python', 'Tkinter', 'Git'],
  //   sourceCode: 'https://github.com/colet0227/Messenger-App-Tkinter',
  //   livePreview: '',
  //   images: [
  //     chat1,
  //     chat2,
  //     chat3
  //   ]
  // },
  // {
  //   name: 'PlateMate',
  //   description:
  //     'Constructed a user-friendly recipe app @ Hack at UCI 2023 through the utilization of Edamam\'s Recipe Search API and Swift. Implemented backend services using Python and FastAPI for effective data handling and processing. Used Xcode as the primary tool for app development, debugging, and deployment on iOS devices.',
  //   stack: ['Xcode', 'Swift', 'Python', 'FastAPI', 'Git'],
  //   sourceCode: 'https://github.com/colet0227/PlateMate',
  //   livePreview: 'https://devpost.com/software/platemate-3mdz2x',
  //   images: [
  //     plate1,
  //     plate2
  //   ]
  // },
  // {
  //   name: 'Ball Simulation',
  //   description:
  //     'Designed and developed an interactive simulation application that allows users to create and manipulate a variety of unique objects, or "simultons", each exhibiting distinct behaviours and interactions. Features a rich suite of classes modeling diverse simultons, ranging from mobile entities like "Ball" and "Floater" to dynamic entities like "Pulsator" and "Hunter". Controlled via an intuitive interface, offering buttons for starting, stopping, and stepping through the simulation, placing objects, and removing objects.',
  //   stack: ['Python', 'Tkinter', 'Git'],
  //   sourceCode: 'https://github.com/colet0227/Ball-Simulation',
  //   livePreview: '',
  //   images: [
  //     ball1
  //   ]
  // },
  
]

const experience = [
  {
    name: 'AfterFlea',
    description: 'January 2024 - April 2024',
    position: 'Software Engineer Intern',
    bullets: [
      'Leveraged React and JavaScript to redesign the landing page, boosting user engagement by 30% as reflected in new waitlist sign-ups.',
      'Developed RESTful API routes using Express and integrated MongoDB to enhance messaging functionality, supporting seamless communication for 100+ user personas.',
      'Created detailed mockups via Figma for the platform’s user feed feature and gathered feedback from early testers, incorporating suggestions to create a more user-centric design.',
      // 'Utilized Docker to improve development workflows, achieving a 20% increase in deployment efficiency.',
      // 'Created detailed mockups for the user feed feature in Figma, facilitating early user testing and guiding development towards a user-centric design.'
    ],
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'University of California, Irvine',
    description: 'January 2023 - June 2023',
    position: 'ICS Lab Assistant',
    bullets: [
      'Tutored and supported 50+ students in building programs for various problems and computing environments using Python.',
      'Guided students in leveraging library modules for applications including graphics, databases, web APIs, networks, and sockets.'
    ],
    stack: [],
    sourceCode: '',
    livePreview: '',
  }
];

const skills = [
  'Python',
  'JavaScript',
  'Java',
  'C/C++',
  'HTML/CSS',
  'SQL',
  'Git',
  'Vim',
  'Linux',
  'Docker',
  'Kubernetes',
  'AWS',
  // 'Maven',
  'Tomcat',
  'Figma',
  'React',
  'Flask',
  // 'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL'
];


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'colet0227@gmail.com',
}

export { header, about, projects, skills, contact, experience }
