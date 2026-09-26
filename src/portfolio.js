import aboutpic from "./contexts/profile.jpg"
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
// import connekt2 from "./contexts/connekt2.png"
// import connekt3 from "./contexts/connekt3.png"
import lapenamock from "./contexts/lapenamock.png"
import firecrestmock from "./contexts/firecrestmock.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://colethompson.online',
  title: 'Home',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Cole',
  role: 'Senior Associate Software Engineer @ Capital One',
  description:
    'At the moment, I\'m a full-stack developer building software at Capital One for problems that involve a lot of data, a lot of infrastructure, and a lot of moving pieces.',
  personalDescription:
    'Originally from Truckee, CA and now a DC transplant, I\'m a lifelong skier, mountain biker, and big fan of fantasy books with a map and a glossary. Oh, I cook sometimes too - I find my meals have become increasingly more edible.',
  browseText: 'Feel free to poke around',
  resume: res,
  social: {
    linkedin: 'https://www.linkedin.com/in/cole-thompson-991682251/',
    github: 'https://github.com/colet0227',
  },
}

const projects = [
  {
    name: 'La Peña',
    description: 'I got to spend a whole year (or just about, anyways) helping La Peña Cultural Center move its event scheduling and invoicing out of spreadsheets, which turned into a much more interesting project than that sentence probably suggests. About 20 student developers, designers, and tech leads came together to build a full-stack portal with React, Node.js, Express, and PostgreSQL. It gave staff one place to manage programs, recurring sessions, rooms, clients, and invoice statuses, sync schedules with Google Calendar, and generate/email monthly invoices so changes made in one place stayed consistent everywhere.',
    projectDescription: (
      <>
        I bounced between responsive frontend work and the APIs behind bookings and invoices. Some of our designers put together an amazing{' '}
        <a href='https://medium.com/@committhechange.uci/project-overview-la-pe%C3%B1a-cultural-center-53f2fa5ddb34' target='_blank' rel='noreferrer'>project overview</a>, and you should absolutely check out{' '}
        <a href='https://lapena.org/' target='_blank' rel='noreferrer'>La Peña</a> too - they've been doing some great stuff bringing Latin American communities together through art, activism, classes, workshops, and live events.
      </>
    ),
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS', 'Chakra UI', 'Figma', 'Git'],
    sourceCode: 'https://github.com/ctc-uci/lpa',
    livePreview: 'https://medium.com/@committhechange.uci/project-overview-la-pe%C3%B1a-cultural-center-53f2fa5ddb34',
    images: [lapenamock]
  },

  {
    name: 'Fabflix',
    description: (
      <>
        Yes, this was a school project, and no, I was not seriously trying to sell DVDs on the internet. It did give me an unusually complete look at how a web application fits together, from Java servlets and MySQL queries to authentication, database replication, load balancing, and containerized deployment. I linked some{' '}
        <a href='https://www.youtube.com/playlist?list=PLopnzHCsaUJvidSw8kih9TMbWGLCdnLZH' target='_blank' rel='noreferrer'>demo videos</a> so you can see it in action.
      </>
    ),
    projectDescription: '',
    stack: ['JavaScript', 'jQuery', 'AJAX', 'Tomcat', 'MySQL', 'HTML', 'CSS', 'Docker', 'Kubernetes', 'JMeter', 'Maven', 'AWS', 'Git'],
    sourceCode: '',
    livePreview: 'https://www.youtube.com/playlist?list=PLopnzHCsaUJvidSw8kih9TMbWGLCdnLZH',
    images: [fabflix2] // [fabflix1, fabflix2, fabflix3, fabflix4, fabflix5, fabflix6, fabflix7]
  },

  {
    name: 'Search Engine and Web Crawler',
    description: 'This was my attempt to build a very small, very UCI-specific search engine. I crawled the university\'s computer science websites, filtered out traps and near-duplicate pages, and built an inverted index over something like 50,000 documents. Searches were ranked with TF-IDF, weighted HTML tags, and cosine similarity, then served through a Flask interface. Was definitely a fun one.',
    projectDescription: '',
    stack: ['Python', 'Flask', 'Beautiful Soup', 'NLTK', 'Hashlib', 'HTML', 'CSS', 'Git'],
    sourceCode: 'https://github.com/colet0227/Search_Engine',
    livePreview: '',
    images: [] // [search1, search2]
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
  

  {
    name: 'Firecrest',
    description: 'Firecrest was sort of my first attempt at building a full-stack app from scratch, conveniently timed about six months after ChatGPT launched. It started as a simple LLM wrapper, then grew into a content workspace for organizing prompts and turning LangChain-generated responses into emails, blog posts, and other publishable formats through a preview and publishing flow. I built it with React, Flask, and PostgreSQL. It was a little overambitious considering I hadn’t even taken my data structures class and the idea/execution could’ve used more fleshing out, but eh, it was as fine a first project as any.',
    projectDescription: '',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'JavaScript', 'HTML', 'CSS', 'LangChain', 'Render', 'Git'],
    sourceCode: 'https://github.com/colet0227/firecrest',
    livePreview: '',
    images: [firecrestmock]
  },
]

const experience = [
  {
    name: 'Capital One',
    description: 'August 2026 - Present',
    position: 'Senior Associate Software Engineer',
    story: 'I recently joined Fractal, Capital One’s platform for helping analysts define customer audiences, test decision rules, and launch targeted credit-card promotions or changes to existing card accounts through one governed workflow. Stay tuned!!',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Capital One',
    description: 'August 2025 - July 2026',
    position: 'Associate Software Engineer',
    story: (
      <>
        <p>
          I spent my first year at Capital One working on Scan, the platform responsible for finding highly sensitive human information sitting unprotected in the company&apos;s cloud data (think unencrypted Social Security numbers, passport numbers, credit card numbers, etc. - this entire organization sprouted from an ugly{' '}
          <a href='https://www.capitalone.com/digital/facts2019/' target='_blank' rel='noreferrer'>2019 data breach</a>). Lots of fun stuff to work on though - my biggest project being an AI labeling workflow that used Spark to group similar findings before an LLM decided whether they were actually sensitive or not. Basically it went - pull from an upstream dataset that got billions of records a day, cluster &apos;em down into a reasonable amount, send &apos;em on a queue so we can decouple the labeling from the clustering, and have a Lambda label/publish to a new dataset! I worked on everything from the clustering logic and prompt refinement to all the observability (through OpenTelemetry and New Relic) that let us follow the system through production.
        </p>
        <p>
          Also, with Discover integrating into Capital One, its teams suddenly had a lot of cloud data that the credit card teams couldn&apos;t use until Scan cleared it. I built the whole React frontend that let them submit scans and track their progress without pulling in a developer every time, along with the API integrations, OAuth/AD-group access, and Jenkins setup needed to actually ship it. I did plenty of other stuff during my stint here too - automating false-positive suppression, recovering failed scan records, fixing production bugs, and building reusable AI skills for teams around the org.
        </p>
      </>
    ),
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Commit the Change',
    description: 'October 2024 - June 2025',
    position: 'Software Engineer',
    website: 'https://ctc-uci.com/',
    story: (
      <p>
        La Peña was my project with{' '}
        <a href='https://ctc-uci.com/' target='_blank' rel='noreferrer'>Commit the Change</a>, a student organization that builds software for nonprofits while giving UCI designers and developers some real product experience!
      </p>
    ),
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'UC Irvine',
    description: 'March 2023 - June 2023',
    position: 'Undergraduate Lab Tutor',
    story: 'For one quarter, I got credit to stare at other people’s Python code and ask suspiciously simple questions until the bug revealed itself. Officially, I was helping students through ICS 32; unofficially, I was learning how to debug without touching the keyboard and relearning how web sockets work.',
    stack: [],
    sourceCode: '',
    livePreview: '',
  }
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'colet0227@gmail.com',
}

export { header, about, projects, contact, experience }
