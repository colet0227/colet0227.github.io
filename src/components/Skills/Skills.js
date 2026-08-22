import { skills } from '../../portfolio'
import newRelicLogo from '../../contexts/new-relic-logo.svg'
import './Skills.css'

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
import { DiJava } from 'react-icons/di'
import { SiAmazonaws, SiAmazoncloudwatch, SiAmazonrds, SiAmazons3, SiAmazonsqs, SiApachespark, SiAwslambda, SiCplusplus, SiDatabricks, SiExpress, SiFlask, SiKubernetes, SiApachemaven, SiApachetomcat, SiApachejmeter, SiMicrosoftsqlserver, SiOpentelemetry, SiSpringboot, SiTypescript, SiVim } from 'react-icons/si'

const skillIcons = {
  Python: <LgPython size={32} />,
  JavaScript: <LgJavascript size={32} />,
  TypeScript: <SiTypescript size={32} color='#3178C6' />,
  Java: <DiJava size={32} color='#ED8B00' />,
  'C/C++': <SiCplusplus size={32} color='#00599C' />,
  SQL: <SiMicrosoftsqlserver size={32} color='#CC2927' />,
  'HTML/CSS': <LgHtml5 size={32} />,
  React: <LgReact size={32} />,
  'Node.js': <LgNodejs size={32} />,
  'Express.js': <SiExpress size={32} color='#000000' />,
  Flask: <SiFlask size={32} color='#000000' />,
  'Spring Boot': <SiSpringboot size={32} color='#6DB33F' />,
  AWS: <LgAws size={32} />,
  Databricks: <SiDatabricks size={32} color='#FF3621' />,
  PySpark: <SiApachespark size={32} color='#E25A1C' />,
  S3: <SiAmazons3 size={32} color='#569A31' />,
  SQS: <SiAmazonsqs size={32} color='#FF4F8B' />,
  Lambda: <SiAwslambda size={32} color='#FF9900' />,
  IAM: <SiAmazonaws size={32} color='#FF9900' />,
  RDS: <SiAmazonrds size={32} color='#527FFF' />,
  'Secrets Manager': <SiAmazonaws size={32} color='#DD344C' />,
  CloudWatch: <SiAmazoncloudwatch size={32} color='#8A4FFF' />,
  PostgreSQL: <LgPostgresql size={32} />,
  MySQL: <LgMysql size={32} />,
  MongoDB: <LgMongodb size={32} />,
  OpenTelemetry: <SiOpentelemetry size={32} color='#425CC7' />,
  'New Relic': <img className='skill-logo' src={newRelicLogo} alt='' />,
  Docker: <LgDocker size={32} />,
  Kubernetes: <SiKubernetes size={32} color='#326CE5' />,
  Git: <LgGit size={32} />,
  Linux: <LgLinuxTux size={32} />,
  Maven: <SiApachemaven size={32} color='#C71A36' />,
  Tomcat: <SiApachetomcat size={32} color='#D2691E' />,
  JMeter: <SiApachejmeter size={32} color='#D22128' />,
  Figma: <LgFigma size={32} />,
  Vim: <SiVim size={32} color='#019733' />,
}

const Skills = () => {
  if (!skills.length) return null
  const orderedSkills = skills.flatMap(({ items }) => items)

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {orderedSkills.map((skill) => (
          <li key={skill} className='skills__list-item'>
            <div className='skill-item'>
              {skillIcons[skill]}
              <p>{skill}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
