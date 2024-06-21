import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

import { FaFigma } from "react-icons/fa";
import { SiApachetomcat, SiPython, SiCplusplus, SiJavascript, SiHtml5, SiReact, SiGit, SiVim, SiFlask, SiDocker, SiKubernetes, SiAmazonaws, SiMysql, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaLinux } from "react-icons/fa"; // Alternative icons

const skillIcons = {
  Python: <SiPython size={35} />,
  'C/C++': <SiCplusplus size={35} />,
  Java: <DiJava size={35} />,
  JavaScript: <SiJavascript size={35} />,
  'HTML/CSS': <SiHtml5 size={35} />,
  SQL: <SiMysql size={35} />, // Using MySQL icon for SQL
  Git: <SiGit size={35} />,
  Vim: <SiVim size={35} />,
  Linux: <FaLinux size={35} />, // Using FaLinux for Linux
  Docker: <SiDocker size={35} />,
  Kubernetes: <SiKubernetes size={35} />,
  AWS: <SiAmazonaws size={35} />,
  Tomcat: <SiApachetomcat size={35} />, // Using FaServer as an alternative for Tomcat
  Figma: <FaFigma size={35} />, // Using FaDraftingCompass as an alternative for Figma
  React: <SiReact size={35} />,
  Flask: <SiFlask size={35} />,
  // 'Node.js': <SiNodeDotJs size={35} />,
  'Express.js': <SiExpress size={35} />,
  MongoDB: <SiMongodb size={35} />,
  PostgreSQL: <SiPostgresql size={35} />,
  MySQL: <SiMysql size={35} />
};

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <div className="skill-item">
              {skillIcons[skill]}
              <p>{skill}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;
