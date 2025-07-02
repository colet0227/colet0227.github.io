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
    'yo momma',
  resume: res,
  social: {
    linkedin: 'https://www.linkedin.com/in/cole-thompson-991682251/',
    github: 'https://github.com/colet0227',
  },
}

const projects = [
  {
    name: 'La Peña',
    description: 'Transform La Peña\'s operations with this comprehensive web platform designed to streamline invoicing, event scheduling, and administrative workflows.',
    projectDescription: 'The platform integrates React frontend components with a robust Node.js and Express backend, creating an intuitive experience for managing over 50 monthly cultural events and workshops. I translated detailed Figma designs into pixel-perfect responsive interfaces and delivered exceptional user experience while reducing administrative workload by 60%. The system features sophisticated invoice calculation logic, automated booking management, and streamlined client data handling through PostgreSQL, saving hours of manual work and enabling staff to focus on their cultural mission.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS', 'Chakra UI', 'Figma', 'Git'],
    sourceCode: 'https://github.com/ctc-uci/lpa',
    livePreview: '',
    images: [lapenamock]
  },

  {
    name: 'Firecrest',
    description: 'Unlock the power of this generative AI dashboard to streamline repetitive tasks and drive your team toward unparalleled growth and efficiency.',
    projectDescription: 'Built with React and Flask, Firecrest offers a dashboard where users can harness multiple LLM models including OpenAI\'s GPT-3.5 and PaLM. The platform features customizable model parameters, allowing users to fine-tune token limits and temperature settings for optimal results - security is also paramount with OAuth 2.0 authentication, two-factor verification via Flask-Mail, and robust PostgreSQL data management supporting over 50 active accounts. Integrated with LangChain for enhanced AI workflows, the platform is deployed on Render for reliable, scalable performance.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'JavaScript', 'HTML', 'CSS', 'LangChain', 'Render', 'Git'],
    sourceCode: '',
    livePreview: 'https://firecrestai.com/',
    images: [firecrestmock]
  },

  {
    name: 'Fabflix',
    description: 'Effortlessly browse, search, and buy movies on this secure, high-performance web platform.',
    projectDescription: 'Built to handle massive scale with 20,000+ movies and 70,000+ actors, Fabflix delivers lightning-fast search experiences through optimized MySQL databases and smart caching strategies. The platform showcases advanced full-stack development with AJAX-powered interfaces, session-based shopping cart functionality, and sophisticated auto-complete search features. Security includes HTTPS encryption, reCAPTCHA integration, and SQL injection prevention. Deployed on AWS infrastructure using Docker and Kubernetes for scalability, with performance optimizations achieved through JMeter testing that improved database response times by 25%.',
    stack: ['JavaScript', 'jQuery', 'AJAX', 'Tomcat', 'MySQL', 'HTML', 'CSS', 'Docker', 'Kubernetes', 'JMeter', 'Maven', 'AWS', 'Git'],
    sourceCode: '',
    livePreview: 'https://www.youtube.com/playlist?list=PLopnzHCsaUJvidSw8kih9TMbWGLCdnLZH',
    images: [fabflix2] // [fabflix1, fabflix2, fabflix3, fabflix4, fabflix5, fabflix6, fabflix7]
  },

  {
    name: 'Search Engine and Web Crawler',
    description: 'Quickly access precise information across UC Irvine\'s computer science subdomain with this tailored, high-performance search engine.',
    projectDescription: 'The system processes over 50,000 documents while maintaining sub-100ms query response times. Built with Python and Flask, the platform implements ranking using tf-idf scoring and cosine similarity, enhanced with HTML tag weighting for improved relevance. The crawler features intelligent duplicate detection through sim-hashing with blake2b, comprehensive trap detection, and partial indexing that reduces resource usage by over 80%.',
    stack: ['Python', 'Flask', 'Beautiful Soup', 'NLTK', 'Hashlib', 'HTML', 'CSS', 'Git'],
    sourceCode: 'https://github.com/colet0227/Search_Engine',
    livePreview: '',
    images: [] // [search1, search2]
  },

  {
    name: 'Connekt',
    description: 'Connect, track, and achieve together—a fitness community app for group support and shared progress.',
    projectDescription: 'Built with React and Flask, Connekt creates an engaging ecosystem where fitness enthusiasts can form groups, track personal progress, and celebrate collective milestones. Deployed on Render with robust PostgreSQL data management, the application prioritizes user experience through responsive design and real-time updates, creating a supportive digital fitness community that bridges the gap between personal goals and social encouragement.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'JavaScript', 'HTML', 'CSS', 'Render', 'Git'],
    sourceCode: '',
    images: [connekt1] // [connekt1, connekt2, connekt3]
  },
  
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
    name: 'Capital One',
    description: 'May 2025 - Present',
    position: 'Associate Software Engineer',
    story: 'In progress... ',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Commit the Change',
    description: 'October 2024 - Present',
    position: 'Software Engineer',
    story: 'I engineered a React web app for La Peña Cultural Center that reduced administrative hours by 60% and manages 50+ monthly events.',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'AfterFlea',
    description: 'January 2024 - April 2024',
    position: 'Software Engineer Intern',
    story: 'I redesigned the landing page for this AI startup and enhanced messaging functionality, boosting user engagement by 30% and supporting 100+ user personas.',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'UC Irvine',
    description: 'January 2023 - June 2023',
    position: 'Undergraduate Lab Tutor',
    story: 'I supported and tutored 50+ students in Python - leveraging graphics, databases, web APIs, and networks.',
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
