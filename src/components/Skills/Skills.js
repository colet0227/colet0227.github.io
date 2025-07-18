import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

// Import colored icons from @meronex/icons
import LgPython from '@meronex/icons/lg/LgPython'
import LgJavascript from '@meronex/icons/lg/LgJavascript'
import LgReact from '@meronex/icons/lg/LgReact'
import LgHtml5 from '@meronex/icons/lg/LgHtml5'
import LgNodejs from '@meronex/icons/lg/LgNodejs'
import LgGit from '@meronex/icons/lg/LgGit'
import LgDocker from '@meronex/icons/lg/LgDocker'
import LgAws from '@meronex/icons/lg/LgAws'
import LgMysql from '@meronex/icons/lg/LgMysql'
import LgPostgresql from '@meronex/icons/lg/LgPostgresql'
import LgMongodb from '@meronex/icons/lg/LgMongodb'
import LgLinuxTux from '@meronex/icons/lg/LgLinuxTux'
import LgFigma from '@meronex/icons/lg/LgFigma'

// Import additional icons from react-icons for ones not available in @meronex/icons
import { DiJava } from "react-icons/di"
import { SiCplusplus, SiFlask, SiExpress, SiVim, SiKubernetes, SiApachemaven, SiApachetomcat, SiApachejmeter } from "react-icons/si"

const skillIcons = {
  Python: <LgPython size={32} />,
  'C/C++': <SiCplusplus size={32} color="#00599C" />,
  Java: <DiJava size={32} color="#ED8B00" />,
  JavaScript: <LgJavascript size={32} />,
  'HTML/CSS': <LgHtml5 size={32} />,
  Git: <LgGit size={32} />,
  Vim: <SiVim size={32} color="#019733" />,
  Linux: <LgLinuxTux size={32} />,
  Docker: <LgDocker size={32} />,
  Kubernetes: <SiKubernetes size={32} color="#326CE5" />,
  AWS: <LgAws size={32} />,
  Maven: <SiApachemaven size={32} color="#C71A36" />,
  Tomcat: <SiApachetomcat size={32} color="#D2691E" />,
  Figma: <LgFigma size={32} />,
  React: <LgReact size={32} />,
  Flask: <SiFlask size={32} color="#000000" />,
  'Node.js': <LgNodejs size={32} />,
  'Express.js': <SiExpress size={32} color="#000000" />,
  MongoDB: <LgMongodb size={32} />,
  PostgreSQL: <LgPostgresql size={32} />,
  MySQL: <LgMysql size={32} />,
  JMeter: <SiApachejmeter size={32} color="#D22128" />
}

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            <div className="skill-item">
              {skillIcons[skill] || <div style={{width: '32px', height: '32px'}}></div>}
              <p>{skill}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
