import aboutpic from "./contexts/updated.jpeg"
import res from "./contexts/Resume.pdf"
import firecrest1 from "./contexts/firecrest1.png"
import firecrest2 from "./contexts/firecrest2.png"
import firecrest3 from "./contexts/firecrest3.png"
import firecrest4 from "./contexts/firecrest4.png"
import search1 from "./contexts/search1.png"
import search2 from "./contexts/search2.png"
// import chat1 from "./contexts/chat1.png"
// import chat2 from "./contexts/chat2.png"
// import chat3 from "./contexts/chat3.png"
// import plate1 from "./contexts/plate1.png"
// import plate2 from "./contexts/plate2.png"
// import ball1 from "./contexts/ball1.png"
import fabflix1 from "./contexts/fabflix1.png"
import fabflix2 from "./contexts/fabflix2.png"
import fabflix3 from "./contexts/fabflix3.png"
import fabflix4 from "./contexts/fabflix4.png"
import fabflix5 from "./contexts/fabflix5.png"
import fabflix6 from "./contexts/fabflix6.png"
import fabflix7 from "./contexts/fabflix7.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://colet0227.github.io/',
  title: 'Home',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Cole',
  role: 'Computer Science @ UC Irvine',
  description:
    'A budding software engineer keen on using coding skills to make people\'s lives better. Eager to create simple tech solutions that address real-life issues and enrich the quality of daily life',
  resume: res,
  social: {
    linkedin: 'https://www.linkedin.com/in/cole-thompson-991682251/',
    github: 'https://github.com/colet0227',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Firecrest',
    description:
      'Developed a cutting-edge generative AI design dashboard which allows users to use different LLM models and select from various template outputs/browse popular topics for content generation. Leveraged PostgreSQL for efficient data management and utilizes OAuth 2.0 and 2FA for enhanced security and data protection. The project utilizes a diverse set of technologies such as Langchain, Open AI, PaLM, and Hugging Face for language model training and development.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'React', 'Flask', 'PostgreSQL', 'LangChain', 'Render', 'Git'],
    sourceCode: '',
    livePreview: 'https://firecrestai.com/',
    images: [
      firecrest1,
      firecrest2,
      firecrest3,
      firecrest4
    ]
  },

  {
    name: 'Search Engine and Web Crawler',
    description:
      'Designed a custom web search engine with the ability to handle 50,000+ documents under harsh operational constraints while maintaining a query response time under 100ms. Incorporated partial indexing to save memory usage and leveraged the Snowball Stemmer for better textual matches. Improved ranking accuracy for a subset of the UCI web domain through tf-idf scoring and cosine similarity in addition to assigning weights for HTML tags. Used sim-hashing to detect near duplicate pages.',
    stack: ['Beautiful Soup', 'Python', 'Flask', 'HTML', 'CSS', 'NLTK', 'Hashlib', 'Git'],
    sourceCode: 'https://github.com/colet0227/Search_Engine',
    livePreview: '',
    images: [
      search1,
      search2
    ]
  },

  {
    name: 'Fabflix',
    description:
      'Developed a comprehensive movie web application allowing users to browse, search, and purchase from a large catalog of popular movies. Built from the ground up, including setting up AWS EC2 for scalable compute resources, MySQL for efficient data management, Tomcat for web server deployment, and Maven for project management and build automation. Incorporated HTTPS for secure communication, reCAPTCHA for bot protection, and password encryption for enhanced security. Deployed using Docker containers on an AWS-based Kubernetes cluster and leveraged JMeter for performance testing, achieving a 25% improvement in database performance through MySQL connection pooling.',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'MySQL', 'Tomcat', 'Docker', 'Kubernetes', 'JMeter', 'AWS', 'Git', 'Maven'],
    sourceCode: '',
    livePreview: 'https://www.youtube.com/playlist?list=PLopnzHCsaUJvidSw8kih9TMbWGLCdnLZH',
    images: [
      fabflix1,
      fabflix2,
      fabflix3,
      fabflix4,
      fabflix5,
      fabflix6,
      fabflix7
    ]
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
    name: 'AfterFlea OS',
    description: 'January 2024 - April 2024',
    position: 'Software Engineer Intern',
    bullets: [
      'Revamped the landing page using React and JavaScript, improving visual appeal and user engagement.',
      'Enhanced messaging functionality with MongoDB, supporting over 200 user personas and improving message delivery and display.',
      'Streamlined the signup and login workflow for a smoother user experience, resulting in higher user registrations.',
      'Utilized Docker to improve development workflows, achieving a 20% increase in deployment efficiency.',
      'Created detailed mockups for the user feed feature in Figma, facilitating early user testing and guiding development towards a user-centric design.'
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
