import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiSwift, SiReact, SiGit, SiVisualstudiocode, SiJupyter, SiXcode, SiVim } from "react-icons/si";
import { DiJava } from "react-icons/di";

const skillIcons = {
  Python: <SiPython size = {30}/>,
  'C++': <SiCplusplus size = {30}/>,
  Java: <DiJava size = {30}/>,
  JavaScript: <SiJavascript size = {30}/>,
  HTML: <SiHtml5 size = {30}/>,
  CSS: <SiCss3 size = {30}/>,
  Swift: <SiSwift size = {30}/>,
  React: <SiReact size = {30}/>,
  Git: <SiGit size = {30}/>,
  'Visual Studio Code': <SiVisualstudiocode size = {30}/>,
  'Jupyter Notebook': <SiJupyter size = {30}/>,
  Xcode: <SiXcode size = {30}/>,
  Vim: <SiVim size = {30}/>
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
