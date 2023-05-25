// import aboutpic from "./contexts/mePhoto.jpg"
import res from "./contexts/Resume.pdf"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://colet0227.github.io/',
  title: 'Home',
}

const about = {
//   photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Cole',
  role: 'Computer Science @ UC Irvine',
  description:
    'A budding software engineer keen on using coding skills to make people\'s lives better. Eager to create simple tech solutions that solve real-world problems and enhance everyday experiences.',
  resume: res,
  social: {
    linkedin: 'google.com',
    github: 'google.com',
  },
}

const projects = [
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
  'Vim'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'colet0227@gmail.com',
}

export { header, about, projects, skills, contact, experience }