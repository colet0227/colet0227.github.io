import aboutpic from "./contexts/Coder.JPG"
import res from "./contexts/Resume.pdf"

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
    name: 'Search Engine and Web Crawler',
    description:
      'Designed a custom web search engine with the ability to handle 50,000+ documents under harsh operational constraints and having a query response time under 300ms. Incorporated partial indexing to save memory usage and leveraged the Snowball Stemmer for better textual matches. Improved ranking accuracy for a subset of the UCI web domain through tf-idf scoring and cosine similarity in addition to assigning weights for HTML tags. Used sim-hashing to detect near duplicate pages.',
    stack: ['Visual Studio Code', 'Beautiful Soup', 'Python', 'Flask', 'HTML', 'CSS', 'NLTK', 'Hashlib', 'Git'],
    sourceCode: 'https://github.com/colet0227/Search_Engine',
    livePreview: '',
  },
  {
    name: 'GUI Chat Application',
    description:
      'Implemented a direct messaging module for a Digital Signal Processing (DSP) platform. The module features a user-friendly GUI via Tkinter, stores messages locally using filesystem insights, and allows real-time communication between users through socket programming.',
    stack: ['IDLE', 'Python', 'Tkinter', 'Git'],
    sourceCode: 'https://github.com/colet0227/Messenger-App-Tkinter',
    livePreview: '',
  },
  {
    name: 'PlateMate',
    description:
      'Constructed a user-friendly recipe app @ Hack at UCI 2023 through the utilization of Edamam\'s Recipe Search API and Swift. Implemented backend services using Python and FastAPI for effective data handling and processing. Used Xcode as the primary tool for app development, debugging, and deployment on iOS devices.',
    stack: ['Xcode', 'Swift', 'Python', 'Edamam API', 'FastAPI', 'Git'],
    sourceCode: 'https://github.com/colet0227/PlateMate',
    livePreview: 'https://devpost.com/software/platemate-3mdz2x',
  },
  {
    name: 'Z Marketplace',
    description:
      'Site in progress...',
    stack: ['HTML'],
    sourceCode: 'https://github.com/colet0227',
    livePreview: '',
  },
]

const experience = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'fcker',
    description:
      'ftheir yeation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://colet0227.github.io/',
    livePreview: 'https://colet0227.github.io/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://colet0227.github.io/',
    livePreview: 'https://colet0227.github.io/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'Swift',
  'React',
  'Git',
  'Visual Studio Code',
  'Jupyter Notebook',
  'Xcode',
  'Vim',
  'Flask'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'colet0227@gmail.com',
}

export { header, about, projects, skills, contact, experience }